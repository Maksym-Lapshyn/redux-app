import React, { Component } from 'react'
import ErrorIndicator from '../error-indicator/error-indicator';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return <ErrorIndicator />;
        }

        return children;
    }
}

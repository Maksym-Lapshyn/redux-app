import React, { Component } from 'react'
import { connect } from 'react-redux';

import './book-list.css';

import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import withBookstoreService from '../hoc/with-bookstore-service';
import { fetchBooks, bookAddedToCart } from '../../action-creators/index';
import { compose } from '../../utils';
import BookList from './book-list';

class BookListContainer extends Component {
    componentDidMount() {
        const { fetchBooks } = this.props;

        fetchBooks();
    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return (
            <BookList books={books} onAddedToCart={onAddedToCart} />
        )
    }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
    return {
        books,
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    };
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
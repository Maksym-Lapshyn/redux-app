import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/app/app';
import ErrorBoundary from './components/error-boundary/error-boundary';
import { BookstoreServiceProvider } from './components/context/bookstore-service-context';
import BookstoreService from './services/bookstore-service';
import { BrowserRouter as Router } from 'react-router-dom';

const bookstoreService = new BookstoreService();

ReactDOM.render((
    <Provider store={store}>
        <ErrorBoundary>
            <BookstoreServiceProvider value={bookstoreService}>
                <Router>
                    <App />
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundary>
    </Provider>
), document.getElementById('root'));
import React from 'react';
import { BookstoreServiceConsumer } from '../context/bookstore-service-context';

export default function withBookstoreService() {
    return function (Wrapped) {
        return function (props) {
            return (
                <BookstoreServiceConsumer>
                    {
                        (bookstoreService) => {
                            return <Wrapped bookstoreService={bookstoreService} {...props} />;
                        }
                    }
                </BookstoreServiceConsumer>
            );
        };
    }
}

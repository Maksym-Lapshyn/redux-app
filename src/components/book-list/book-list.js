import React from 'react';

import './book-list.css';

import BookListItem from '../book-list-item/book-list-item';

export default function BookList({ books, onAddedToCart }) {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem book={book} onAddedToCart={onAddedToCart} />
                        </li>
                    );
                })
            }
        </ul>
    );
}
import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

export default function Header({ numItems, total }) {
    return (
        <header className="shop-header row">
            <Link className="logo text-dark" to="/">ReStore</Link>
            <Link className="shopping-cart" to="/cart">
                <i className="cart-icon fa fa-shopping-cart" />
                {numItems} items (${total})
          </Link>
        </header>
    );
}

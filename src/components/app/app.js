import React from 'react';
import withBookstoreService from '../hoc/with-bookstore-service';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home-page';
import CartPage from '../pages/cart-page';
import Header from '../header/header';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';

const App = () => {
    return (
        <main className="container">
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/cart" exact component={CartPage} />
            </Switch>
            <ShoppingCartTable />
        </main>
    )
};

export default withBookstoreService()(App);
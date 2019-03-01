const updateShoppingCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        };
    }

    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);
        case 'BOOK_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1);
        case 'BOOK_TOTALLY_REMOVED_FROM_CART':
            return {
                cartItems: state.shoppingCart.cartItems.filter(({ id }) => id !== action.payload)
            };
        default:
            return state.shoppingCart;
    }
};

const updateCartItem = (book, item = {}, quantityToAdd) => {
    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0 } = item;

    return {
        id,
        title,
        count: count + quantityToAdd,
        total: total + quantityToAdd * book.price
    }
};

const updateCartItems = (cartItems, newItem, index) => {
    if (newItem.count === 0) {
        return cartItems.filter(({ id }) => id !== newItem.id);
    }

    if (index === -1) {
        return [
            ...cartItems,
            newItem
        ];
    }

    return [
        ...cartItems.slice(0, index),
        newItem,
        ...cartItems.slice(index + 1)
    ];
};

const updateOrder = (state, bookId, quantityToAdd) => {
    const { bookList: { books }, shoppingCart: { cartItems } } = state;
    const book = books.find(({ id }) => id === bookId);
    const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
    const item = cartItems[itemIndex];
    const newItem = updateCartItem(book, item, quantityToAdd);
    const newCartItems = updateCartItems(cartItems, newItem, itemIndex);

    return {
        orderTotal: 0,
        cartItems: newCartItems
    };
};

export default updateShoppingCart;
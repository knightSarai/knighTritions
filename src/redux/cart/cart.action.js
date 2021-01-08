import {
    TOGGLE_CART_HIDDEN, 
    ADD_ITEM, CLEAR_ITEM, 
    REMOVE_ITEM,
    CLEAR_CART
} from './cart.types';

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN
});

export const addItemToCart = item => ({
    type: ADD_ITEM,
    payload: item
});

export const removeItemFromCart = item => ({
    type: REMOVE_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: CLEAR_ITEM,
    payload: item
});

export const clearCart = () => ({
    type: CLEAR_CART
});
import {ADD_TO_CART, REMOVE_FROM_CART, ADD_ITEM_QTY,  SUBTRACT_ITEM_QTY, SELECTED_ITEMS } from "./actionTypes";

export const addToCart = item => (
    {
        type: ADD_TO_CART,
        payload: item
    }
)

export const removeFromCart = item =>(
    {
        type: REMOVE_FROM_CART,
        payload: item
    }
)

export const addItemQty = item =>(
    {
        type: ADD_ITEM_QTY,
        payload: item
    }
)

export const subtractItemQty = item =>(
    {
        type: SUBTRACT_ITEM_QTY,
        payload: item
    }
)

export const selectedItems = item =>(
    {
        type:SELECTED_ITEMS,
        payload: item
    }
)
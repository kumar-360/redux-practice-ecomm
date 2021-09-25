import { actionTypes } from "../constants/actionTypes";

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products
    };
};

export const selectedProduct = (products) => {
    return {
        type: actionTypes.SELECTED_PRODUCT,
        payload: products
    };
};

export const removeSelectedProduct = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCT
    };
};
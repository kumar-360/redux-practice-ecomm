import { productReducer, selectedProductReducer } from "./productReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    allProducts: productReducer,
    selectedProduct: selectedProductReducer
});

export default reducers;
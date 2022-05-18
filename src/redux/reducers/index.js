import { combineReducers } from "redux";
import createProductReducer from "./createProduct";
import getAllProductReducer from "./getAllProductReducer";
import getProductById from "./getProductByIdReducer";
import updateProductReducer from "./updateProduct";


const reducers = combineReducers({
    getProductById: getProductById,
    getAllProduct:getAllProductReducer,
    createProduct:createProductReducer,
    updateProduct:updateProductReducer
});

export default reducers;
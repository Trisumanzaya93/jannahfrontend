import { ACTION_STRING } from "../actions/actionString";
const initialState = {
    product: {},
    loading: false,
  };
  
  const productReducer = (state = initialState, action) => {
      
  const { getProductById,pending, fulfilled, rejected  } = ACTION_STRING;
    switch (action.type) {
      case getProductById:
        return {
          ...state,
          products: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  export default productReducer;
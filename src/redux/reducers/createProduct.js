import { ACTION_STRING } from "../actions/actionString";
const initialState = {
    typeImage: false,
    limit:false,
    loading: false,
  };
  
  const createProductReducer = (state = initialState, action) => {
      
  const { createProduct  } = ACTION_STRING;
    switch (action.type) {
      case createProduct:
          console.log(action.payload);
        return {
          ...state,
          typeImage: action.payload.typeImage,
          limit: action.payload.limit,
          loading: false,
        };
      default:
        return state;
    }
  };
  export default createProductReducer;
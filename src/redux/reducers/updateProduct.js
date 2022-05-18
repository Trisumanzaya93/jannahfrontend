import { ACTION_STRING } from "../actions/actionString";
const initialState = {
    typeImage: false,
    limit:false,
    loading: false,
  };
  
  const updateProductReducer = (state = initialState, action) => {
      
  const { updateProduct  } = ACTION_STRING;
    switch (action.type) {
      case updateProduct:
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
  export default updateProductReducer;
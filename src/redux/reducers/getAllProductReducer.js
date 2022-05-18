import { ACTION_STRING } from "../actions/actionString";
const initialState = {
    allProducts: [],
    totalPage:0,
    loading: false,
  };
  
  const getAllProductReducer = (state = initialState, action) => {
      
  const { getAllProduct  } = ACTION_STRING;
    switch (action.type) {
      case getAllProduct:
          console.log("Reducer",action.payload);
        return {
          ...state,
          allProducts: action.payload.data,
          totalPage:action.payload.totalPage,
          loading: false,
        };
      default:
        return state;
    }
  };
  export default getAllProductReducer;
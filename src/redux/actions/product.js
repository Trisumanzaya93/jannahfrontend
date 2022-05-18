import { ACTION_STRING } from "./actionString";
import { getProductById,getAllProduct, createProduct, updateProduct, deleteProduct } from "../../utils/products";

export const getProductByIdAction = (id) => {
    return async (dispatch)=>{
        try {
            const result = await getProductById(id)
            console.log(result);
            // const responseApi = result
            dispatch({type:ACTION_STRING.getProductById,payload:result.data.data})
        } catch (error) {
            console.log("action",error);
        }

    }
  };

  export const getAllProductAction = (param) => {
    return async (dispatch)=>{
        try {
            const result = await getAllProduct(param)
            console.log(result.data.data);
            const payload= {
                data:result.data.data??[],
                totalPage:result.data.total_page
            }
            console.log(payload);
            dispatch({type:ACTION_STRING.getAllProduct,payload:payload})
        } catch (error) {
            console.log("action",error);
        }

    }
  };

  export const createProductAction = (body) => {
    return async (dispatch)=>{
        try {
            dispatch({type:ACTION_STRING.createProduct,payload:{typeImage:false,limit:false}})
            const result = await createProduct(body)
            console.log(result);
            // const responseApi = result
        } catch (error) {
            console.log("action",error.response.data.error.code);
            const limit = error.response.data.error.code
            if(limit==="LIMIT_FILE_SIZE"){
                dispatch({type:ACTION_STRING.createProduct,payload:{typeImage:false,limit:true}})
            }
            else{
                dispatch({type:ACTION_STRING.createProduct,payload:{typeImage:true,limit:false}})
            }
        }

    }
  };

  export const updateProductAction = (body,productId) => {
    return async (dispatch)=>{
        try {
            dispatch({type:ACTION_STRING.updateProduct,payload:{typeImage:false,limit:false}})
            const result = await updateProduct(body,productId)
            console.log("axios",result);
            // const responseApi = result
        } catch (error) {
            console.log("action",error);
            const limit = error.response.data.error.code
            if(limit==="LIMIT_FILE_SIZE"){
                dispatch({type:ACTION_STRING.updateProduct,payload:{typeImage:false,limit:true}})
            }
            else{
                dispatch({type:ACTION_STRING.updateProduct,payload:{typeImage:true,limit:false}})
            }
        }

    }
  };

  export const deleteProductAction = (productId) => {
    return async ()=>{
        try {
            const result = await deleteProduct(productId)
            console.log("axios",result);
        } catch (error) {
            console.log("action",error);
            
        }

    }
  };


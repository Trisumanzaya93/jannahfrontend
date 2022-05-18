import axios from "axios";

export const getProductById = (id) => {
    const URL = `${process.env.NEXT_PUBLIC_HEROKU}/product/${id}`;
      console.log('hehe', URL);
    return axios.get(URL);
  };
  export const getAllProduct = (param) => {
      const queryParam ={
          search:param.search??"",
          per_page:param.per_page ?? 4,
          page: param.page ?? 1
      }
      console.log(queryParam);
    const URL = `${process.env.NEXT_PUBLIC_HEROKU}product?search=${queryParam.search}&per_page=${queryParam.per_page}&page=${queryParam.page}`;
      console.log('hehe', URL);
    return axios.get(URL);
  };
  export const createProduct = (body) => {
    const URL = `${process.env.NEXT_PUBLIC_HEROKU}product/createproduct`;
      console.log('hehe', URL);
    return axios.post(URL,body);
  };

  export const updateProduct = (body,productId) => {
    const URL = `${process.env.NEXT_PUBLIC_HEROKU}product/${productId}`;
      console.log('hehe', URL);
    return axios.patch(URL,body);
  };

  export const deleteProduct = (productId) => {
    const URL = `${process.env.NEXT_PUBLIC_HEROKU}product/${productId}`;
      console.log('hehe', URL);
    return axios.delete(URL);
  };
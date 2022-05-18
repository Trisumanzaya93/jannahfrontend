import { useDispatch, useSelector } from "react-redux";
import styles from "../commons/styles/Home.module.css";
import Button from "@mui/material/Button";
import Layout from "../modules/layout";
import {
  getAllProductAction,
  getProductByIdAction,
} from "../redux/actions/product";
import { useEffect, useState } from "react";
import Header from "../modules/header";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MediaCard from "../modules/card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Home() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.getAllProduct.allProducts);
  const totalPage = useSelector((state) => state.getAllProduct.totalPage)
  const [paginate, setPaginate] = useState(1)
  // const getProduct = async ()=>{
  //   try {
  //     const result = await dispatch(getProductByIdAction(2))
  //     console.log(result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  const handlePage = (e)=>{
    console.log(e.target.textContent);
    setPaginate(e.target.textContent)
    
  }
  useEffect(() => {
    // getProduct()
    const param = {
      page:paginate
    };
    dispatch(getAllProductAction(param));
  }, [paginate]);

  return (
    <>
      <Layout title="home" />
      <Box sx={{ backgroundColor: "#bdbdbd", pb: 8, height: "1050px" }}>
        <Header />
        {product.length > 0 ? (
          <Grid container spacing={1} sx={{ mt: 3, ml: 3 }}>
            {Array.isArray(product) &&
              product.length > 0 &&
              product.map((item, idx) => (
                <Grid key={idx} item>
                  <MediaCard product={item} />
                </Grid>
              ))}
          </Grid>
        ) : (
          <Grid
            container
            spacing={1}
            sx={{
              mt: 3,
              ml: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Product Not Found</Typography>
          </Grid>
        )}
        <Container sx={{display:"flex",justifyContent:"center"}}>
          <Stack spacing={3}>
            <Pagination onChange={(e)=>{handlePage(e)}} count={totalPage}  color="primary" size="large" />
          </Stack>
        </Container>
      </Box>
    </>
  );
}

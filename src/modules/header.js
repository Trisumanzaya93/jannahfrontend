import { useState } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { createProductAction, getAllProductAction } from "../redux/actions/product";

const Header = () => {
    const dispatch = useDispatch()
    const typeImage = useSelector((state)=>state.createProduct.typeImage)
    const limit = useSelector((state)=>state.createProduct.limit)
  const [open, setOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState('');
  const [image, setImage] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleName = (e) => {
    setName(e.target.value);
  };
  console.log(typeImage,limit);
  const handlePrice = (e) => {
      setIsError(false)
    setPrice(e.target.value)
  };
  const handleStock = (e) => {
    setIsError(false)
    setStock(e.target.value);
  };
  const handleImage=(e)=>{
      console.log(e.target.files[0]);
      setImage(e.target.files[0])

    //   }
  }
const handlesearch =(e)=>{
    const param = {
        search:e.target.value
    }
    console.log(param);
    dispatch(getAllProductAction(param))
}

  

  const handleUpdate =async () => {
      try{
          var validasiAngka = /^[0-9]+$/;
          const validasiprice = price.match(validasiAngka)
          const validasistock = stock.match(validasiAngka)
          if (validasiprice !== null&&validasistock!==null) {
              const sentPrice= parseInt(price)
              const sentStock= parseInt(stock)
              const body = new FormData();
              body.append("name", name);
              body.append("price", sentPrice);
              body.append("stock", sentStock);
              body.append("image", image);
              const result = await dispatch(createProductAction(body))
              console.log("result create",result);
              const param ={
                search:"",
                page:1
            }
              await dispatch(getAllProductAction(param))
              setOpen(false)
              
              // for (var pair of body.entries())
              // {
              //  console.log(pair[0]+ ', '+ pair[1]); 
              // }
          } else {
              setIsError(true)
          }
      }catch(error){
          console.log(error);
      }
  };
  

  return (
    <Box
      sx={{
        position: "relative",
        height: "174px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::after": {
          position: "absolute",
          content: '""',
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          background: "rgba(0, 0, 0, 0.4)",
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.3) 0,
            rgba(0, 0, 0, 0) 60%,
            rgba(0, 0, 0, 0.4) 100%
          )`,
        },
      }}
    >
      <Image
        src="/__images/img1.png"
        layout="fill"
        objectFit="cover"
        alt="backdrop"
      />
      <Container sx={{ position: "relative", zIndex: 1000 }}>
        <Grid container>
          <Grid item xs>
            <TextField
              variant="filled"
              onChange={(e)=>handlesearch(e)}
              label="Search"
              fullWidth
              sx={{ bgcolor: "rgba(220,220,220,0.7)", color: "common.white" }}
            />
          </Grid>
          <Grid item xs="auto">
            <Button
              onClick={handleOpen}
              variant="contained"
              size="large"
              color="primary"
              sx={{ height: "60px", borderRadius: "10px", ml: 8 }}
            >
              + add
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 900,
            bgcolor: "background.paper",
            border: "2px solid #bdbdbd",
            boxShadow: 24,
            p: 4,
            borderRadius: 3,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ADD PRODUCT
          </Typography>
          <TextField
            onChange={(e) => handleName(e)}
            variant="filled"
            label="Product name"
            fullWidth
            sx={{
              bgcolor: "rgba(220,220,220,0.7)",
              color: "common.white",
              mt: 2,
            }}
          />
          <TextField
            onChange={(e) => handlePrice(e)}
            variant="filled"
            label="Price"
            helperText={isError?"field harus angka":null}
            fullWidth
            sx={{
              bgcolor: "rgba(220,220,220,0.7)",
              color: "common.white",
              mt: 2,
            }}
          />
          <TextField
            onChange={(e) => handleStock(e)}
            variant="filled"
            label="stock"
            helperText={isError?"field harus angka":null}
            fullWidth
            sx={{
              bgcolor: "rgba(220,220,220,0.7)",
              color: "common.white",
              mt: 2,
            }}
          />
          <TextField
          onChange={(e)=>handleImage(e)}
            type="file"
            variant="filled"
            fullWidth
            sx={{
              bgcolor: "rgba(220,220,220,0.7)",
              color: "common.white",
              mt: 2,
            }}
          />
          {typeImage?<Typography fontFamily="Helvetica Neue" variant="h6" color="error.dark">File Extention must be png,jpg,jpeg</Typography>:null}
          {limit?<Typography fontFamily="Helvetica Neue" variant="h6" color="error.dark">File too large</Typography>:null}
          <Container sx={{ display: "flex", justifyContent: "end", m: 0 }}>
            <Button
                onClick={handleUpdate}
              variant="contained"
              size="large"
              color="primary"
              sx={{ height: "60px", borderRadius: "10px", mt: 5 }}
            >
              create product
            </Button>
          </Container>
        </Box>
      </Modal>
    </Box>
  );
};

export default Header;

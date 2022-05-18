import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors'
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductAction, getAllProductAction, updateProductAction } from '../redux/actions/product';

export default function MediaCard(item) {
    const dispatch = useDispatch()
    const typeImage = useSelector((state)=>state.updateProduct.typeImage)
    const limit = useSelector((state)=>state.updateProduct.limit)
    const vName= item.product.name
    const vPrice= item.product.price
    const vStock= item.product.Stock
    const [isError, setIsError] = useState(false);
    const [id, setId] = useState(item.product.id);
  const [name, setName] = useState(item.product.name);
  const [price, setPrice] = useState(`${item.product.price}`);
  const [stock, setStock] = useState(`${item.product.stock}`);
  const [imageSent, setImageSent] = useState({});
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openModal2, setOpenModal2] = useState(false);
    const handleOpenModal2 = () => setOpenModal2(true);
    const handleCloseModal2 = () => setOpenModal2(false);
    const {image}=item.product
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
          setImageSent(e.target.files[0])
    
        //   }
      }
      const handleDelete =async()=>{
          try{
              await dispatch(deleteProductAction(id))
              await dispatch(getAllProductAction())
              setOpenModal2(false)

          }catch(error){
              console.log(error);
          }
      }
    
      
    
      const handleUpdate =async () => {
          try{
              var validasiAngka = /^[0-9]+$/;
              const validasiprice = price.match(validasiAngka)
              const validasistock = stock.match(validasiAngka)
              console.log(validasiprice,validasistock);
              if (validasiprice !== null && validasistock!==null) {
                  const sentPrice= parseInt(price)
                  const sentStock= parseInt(stock)
                  const body = new FormData();
                  body.append("name", name);
                  body.append("price", sentPrice);
                  body.append("stock", sentStock);
                  body.append("image", imageSent);
                  const result = await dispatch(updateProductAction(body,id))
                //   console.log("result create",result);
                  dispatch(getAllProductAction())
                  
                //   for (var pair of body.entries())
                //   {
                //    console.log(pair[0]+ ', '+ pair[1]); 
                //   }
              } else {
                  setIsError(true)
              }
          }catch(error){
              console.log(error);
          }
      };

  return (
      <Card sx={{ width: 285 ,maxHeight:337, m:2,position:"relative" }}>
      <CardMedia
        component="img"
        height="190"
        image={image}
        alt="green iguana"
      />
      <CardContent sx={{ p:1,borderTop: `3px solid ${grey[400]}`}}>
        <Typography fontFamily="Helvetica Neue" gutterBottom variant="h5" component="div">
          {vName}
        </Typography>
        <Typography fontFamily="Helvetica Neue" variant="body2" color="text.secondary">
          Rp. {vPrice}
        </Typography>
        <Typography fontFamily="Helvetica Neue" variant="body2" color="text.secondary" sx={{mb:0}}>
          stock = {vStock}
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex",justifyContent:"space-between",ml:3,mr:3}}>
        <Button size="small" onClick={handleOpen}>Update</Button>
        <Button size="small" onClick={handleOpenModal2}>Delete</Button>
      </CardActions>
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
            UPDATE PRODUCT
          </Typography>
          <TextField
            variant="filled"
            onChange={(e) => handleName(e)}
            label={name}
            fullWidth
            sx={{ bgcolor: "rgba(220,220,220,0.7)", color: "common.white",mt:2 }}
          />
          <TextField
            variant="filled"
            onChange={(e) => handlePrice(e)}
            label={price}
            helperText={isError?"field harus angka":null}
            fullWidth
            sx={{ bgcolor: "rgba(220,220,220,0.7)", color: "common.white" ,mt:2 }}
          />
          <TextField
            variant="filled"
            onChange={(e) => handleStock(e)}
            label={stock}
            helperText={isError?"field harus angka":null}
            fullWidth
            sx={{ bgcolor: "rgba(220,220,220,0.7)", color: "common.white",mt:2 }}
          />
          <TextField
            type="file"
            onChange={(e)=>handleImage(e)}
            variant="filled"
            fullWidth
            sx={{ bgcolor: "rgba(220,220,220,0.7)", color: "common.white" ,mt:2}}
          />
          {typeImage?<Typography fontFamily="Helvetica Neue" variant="h6" color="error.dark">File Extention must be png,jpg,jpeg</Typography>:null}
          {limit?<Typography fontFamily="Helvetica Neue" variant="h6" color="error.dark">File too large</Typography>:null}
          <Container sx={{display:"flex",justifyContent:"end",m:0}}>
          <Button
            variant="contained"
            onClick={handleUpdate}
            size="large"
            color="primary"
            sx={{ height: "60px", borderRadius: "10px", mt: 5 }}
          >update product</Button>
          </Container>
        </Box>
      </Modal>
      <Modal
        open={openModal2}
        onClose={handleCloseModal2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "background.paper",
            border: "2px solid #bdbdbd",
            boxShadow: 24,
            p: 4,
            borderRadius: 3,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Apakah anda yakin ingin menghapus product ini
          </Typography>
          <Container sx={{display:"flex",justifyContent:"space-between",m:0}}>
          <Button
            variant="contained"
            onClick={handleDelete}
            size="medium"
            color="primary"
            sx={{ width:"100px", height: "60px", borderRadius: "10px", mt: 5 }}
          >Yes</Button>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            onClick={handleCloseModal2}
            sx={{ width:"100px", height: "60px", borderRadius: "10px", mt: 5 }}
          >cencel</Button>
          </Container>
        </Box>
      </Modal>
    </Card>
  );
}
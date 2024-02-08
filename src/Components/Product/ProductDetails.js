import React, { Fragment, useEffect } from 'react'
import starPic from "./../../Image/star.png"
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSpecifiProduct } from '../../RTK/Slice/ProductSlice'
import EditProduct from './EditeProduct'

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { getAllCategories } from '../../RTK/Slice/CategorySlice'
import { ToastContainer } from 'react-toastify'

const ProductDetails = () => {

  // For Handle Overlay
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    maxWidth : "100%"
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  // For Access Token
const {token } = useSelector(state => state.AuthSlice.auth) ;

  // For Accese Param
  const {id} = useParams() ;

  // For Dispatch Action
  const dispatch = useDispatch()

  // For Get A SPiecific Product 
  useEffect(()=>{
    dispatch(getSpecifiProduct({token , id}))
    dispatch(getAllCategories({token})) 
  } , [dispatch])

  // For Get data
  const {data , error , load} = useSelector(state => state.ProductSlice.specifiProduct)
  console.log(data) ; 

  return (
    <div className='product-details'>
    <ToastContainer />
      {
        error ? (
          <h2 >Product Not Found</h2>
        ) : ""
      }

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <EditProduct dataOfProduct={data} handleClose={handleClose} />
          </Box>
        </Fade>
      </Modal>

      {
        data ? (
          <Fragment>
          
          <div className='image'>
        <img src={`http://127.0.0.1:8000/uploads/${data.images[0]}`} alt='pic' loading='lazy' />
      </div>
      <div className='details'>
        <h3> {data.name} </h3>
        <p className='price'> {data.price} {data.coin}</p>
        <p className='detail'>
        {data.details}
        </p>
        <div className='rate-con'>
          <img src={starPic} alt='star' />
          ( {data.rate} )
        </div>
        <div className='available'>
          {
          
          data.available == "true" ?   <div className='in-stock'> <span className='ball'></span> in stock</div> :
          <div className='out-stock'> <span className='ball'></span> out of stock</div>
          }
        </div>
        <Button variant="contained" onClick={handleOpen} style={{width : "200px" , maxWidth : "100%" , marginTop : "20px"}} className='add-category-btn'>Edite </Button>
      </div></Fragment>
        ) : load ? "loadding" : ""
      }
    </div>
  )
}

export default ProductDetails

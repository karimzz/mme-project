import React, { Fragment, useEffect, useRef } from 'react'
import starPic from "./../../Image/star.png"
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useLocation, useParams } from 'react-router-dom'
import { getSpecifiProduct } from '../../RTK/Slice/ProductSlice'
import EditProduct from './EditeProduct'

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { getAllCategories } from '../../RTK/Slice/CategorySlice'
import { ToastContainer } from 'react-toastify'
import { getToken } from '../../RTK/Slice/AuthSlice'

const ProductDetails = () => {

  const location = useLocation() ; 
  console.log(location) ; 
  const filterProduct = location.state?.search || "" ; 

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
const token  = useSelector(getToken) ;

  // For Accese Param
  const {id} = useParams() ;

  // For Dispatch Action
  const dispatch = useDispatch()

  // For Handle Performance
  const handlePerformance = useRef(false) ;

  // For Get A SPiecific Product 
  useEffect(()=>{
      if(!handlePerformance.current){
        dispatch(getSpecifiProduct({token , id})) ; 
        dispatch(getAllCategories({token}))  ;
        handlePerformance.current = true ; 
      }
  } , [dispatch ])

  // For Get data
  const {data , status} = useSelector(state => state.ProductSlice.specifiProduct)



  return (
    <div>
      <Link style={{textDecoration :"none" ,  color : "black" , margin : "20px" , display: "block"}}  to={`..?${filterProduct}`}><span style={{background : "#e8edff" , borderRadius :"50%" , padding : "7px", paddingLeft : "15px", textAlign : "center"}} className="material-symbols-outlined">
      arrow_back_ios
      </span> </Link>
      <div className='product-details'>
      <ToastContainer />
        {/*
          error ? (
            <h2 >Product Not Found</h2>
          ) : ""*/
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
          status === 'loadding' ? 
          <h2>Loadding</h2> :
          
          status === 'success' ? 
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
            
            data.available === "true" ?   <div className='in-stock'> <span className='ball'></span> in stock</div> :
            <div className='out-stock'> <span className='ball'></span> out of stock</div>
            }
          </div>
          <Button variant="contained" onClick={handleOpen} style={{width : "200px" , maxWidth : "100%" , marginTop : "20px"}} className='add-category-btn'>Edite </Button>
        </div></Fragment> : 
        
        status === "rejected" ? <h3>You Are Not Authrothized</h3> : ""
        }

        
      </div>
    </div>
  )
}

export default ProductDetails

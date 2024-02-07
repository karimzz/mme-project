import React, { useEffect } from 'react'
import ProductItem from './ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../RTK/Slice/ProductSlice';
import { ToastContainer } from 'react-toastify';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { getAllCategories } from '../../RTK/Slice/CategorySlice';


const AllProduct = () => {


// For Dispatch Action
const dispath = useDispatch() ;

// For Acces Token
const {token} = useSelector(state => state.AuthSlice.auth); 


// For Get All Product
useEffect(()=>{
    dispath(getAllProduct({token}))
    dispath(getAllCategories({token}))
} , [dispath])



  // For Access Product 
  const allProducts = useSelector(state => state.ProductSlice.allProduct) ; 


  return (
    <div className='all-product'>
    <ToastContainer />
          
        {
          allProducts ? allProducts.map((item , idx)=>{
            return <ProductItem key={idx} id={item.id} name={item.name} image={item.images[0]} details={item.details} price={item.price} coin={item.coin} available={item.available} rate={item.rate} category_id={item.category_id} /> 
          }):   <Stack spacing={1}>

          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton />
          <Skeleton width="60%" />
        </Stack>
        }
    </div>
  )
}

export default AllProduct

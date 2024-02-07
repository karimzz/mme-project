import React, { Fragment, useEffect } from 'react'
import pic from "./../../Image/oil.jpg"
import starPic from "./../../Image/star.png"
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSpecifiProduct } from '../../RTK/Slice/ProductSlice'

const ProductDetails = () => {

  // For Access Token
const {token } = useSelector(state => state.AuthSlice.auth) ;

  // For Accese Param
  const {id} = useParams() ;

  // For Dispatch Action
  const dispatch = useDispatch()

  // For Get A SPiecific Product 
  useEffect(()=>{
    dispatch(getSpecifiProduct({token , id}))
  } , [dispatch])

  // For Get data
  const {data , error , load} = useSelector(state => state.ProductSlice.specifiProduct)
  console.log(data) ; 

  return (
    <div className='product-details'>
      {
        error ? (
          <h2 >Product Not Found</h2>
        ) : ""
      }
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
        <Button variant="contained" style={{width : "200px" , maxWidth : "100%" , marginTop : "20px"}} className='add-category-btn'>Edite </Button>
      </div></Fragment>
        ) : load ? "loadding" : ""
      }
    </div>
  )
}

export default ProductDetails

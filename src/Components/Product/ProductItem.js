import React from 'react'
import { Link } from 'react-router-dom'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../RTK/Slice/ProductSlice';
import star from "./../../Image/star.png" ;

const ProductItem = ({id , name , image ,details , price , coin ,available , rate ,category_id}) => {

// For Dispatch Action
const dispath = useDispatch() ;

// For Acces Token
const {token} = useSelector(state => state.AuthSlice.auth); 

// For Delete Item
const delelteItemHandler = ()=>{
    dispath(deleteProduct({token , id}))
}
    

  return (
    
    <div className='product-card'>
        <div className='image hidden-in-mobile'>
            <img src={`http://127.0.0.1:8000/uploads/${image}`} alt='pic' loading='lazy' />
        </div>
        <div className='info'>
            <div className='titles'>
                <div className='top-titles'>
                    <h3>{name} </h3>
                </div>
                <div className='price'> {price} <sup>{coin}</sup></div>
            </div>
            <div className='des'>
                {details.substring(0 , 50)}
            </div>
            <div className='rate-con'>
                <img className='star-img' src={star} alt='star' />
                ( {rate} )
            </div>
            <div className='avaiable'>
                {
                    available == "true" ? 
                    <div className='in-stock'> <span></span> in stock</div> :
                    <div className='out-stock'> <span></span> out stock</div>
                }
            </div>
            <ButtonGroup
            style={{display : "flex" , justifyContent : "center" , marginTop : "10px" , width : '100%'}}
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
          >
            <Link to={`${id}`} style={{textDecoration : "none" , }}><Button color='success'>View</Button></Link>
            <Button onClick={delelteItemHandler} color='error'>Delete</Button>
          </ButtonGroup>
        </div>
    </div>
  )
}

export default ProductItem

import React from 'react'
import { Button, Tooltip } from '@mui/material';
import { Fade } from 'react-reveal';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '../../RTK/Slice/AuthSlice';
import { delteOfferAPI } from '../../RTK/Slice/OfferSlice';

const OfferCard = ({id , item , prv , curr}) => {

    //{coin , available , images  , name , price , rate , details}

    console.log(id) ; 
    // For Access Token
    const token = useSelector(getToken) ; 

    // For Dispatch Action
    const dispatch = useDispatch() ;

    // For Delte Offer 
    const deleteOfferHandler = ()=>{
        dispatch(delteOfferAPI({token , id}))
    }   
  return (
    <Fade>
        <div>
            <div className='offer-card'>
                <div className='image'>
                    <img src={`http://127.0.0.1:8000/uploads/${item.images[0]}`} alt='img' />
                </div>
                <div className='info'>
                    <h4>{item.name}</h4>

                    <Tooltip title={item.details}>
                        <p className='details'>
                        {item.details.slice(0  ,40)}...
                        </p>
                    </Tooltip>
                    <div className='price'>
                        <p className='price-current'>{curr}{item.coin} </p>
                        <del><p className='price-before'>{prv}{item.coin}</p></del>
                    </div>

                    <Button onClick={deleteOfferHandler} fullWidth style={{display : "block"}} variant="contained" color='error'>Delete</Button>

                </div>
            </div>
        </div>
    </Fade>
  )
}

export default OfferCard

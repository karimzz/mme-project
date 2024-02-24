import React, { useEffect } from 'react'
import OfferCard from './OfferCard'
import { useDispatch, useSelector } from 'react-redux'
import { getToken } from '../../RTK/Slice/AuthSlice'
import {  getAllOffer, getAllOfferAPI } from '../../RTK/Slice/OfferSlice'
import { Stack } from 'react-bootstrap'
import { Skeleton } from '@mui/material'

const AllOffers = () => {

    // For Access token
    const token = useSelector(getToken) ; 

    // For Dispatch Action
    const dispatch = useDispatch() ;

    // For Get Offers
    useEffect(()=>{
        dispatch(getAllOfferAPI({token}))
    } , [dispatch , token])

            // For Access Offer
    const {data , status} = useSelector(getAllOffer) ; 
    console.log(data) ; 

  return (
    <div className='all-offer'>
          

    

        {
            status === 'success' ? data.map((item , idx)=>{
                return <OfferCard prv={item.previous_price  } curr={item.current_price} key={idx} id={item.id} item={item.item} />
            }) : 
            
            status === 'load' ?
            <Stack spacing={1}>
                <Skeleton style={{marginBottom : "10px" , borderRadius : '5px'}} variant="rectangular" width={230} height={200} />
                <Skeleton style={{marginBottom : "5px" , borderRadius : '3px'}} variant="rectangular" width={230} />
                <Skeleton style={{marginBottom : "5px" , borderRadius : '3px'}} variant="rectangular" width={230} />
                <Skeleton variant="rectangular" width={230} />
            </Stack> : ""

        }
    </div>
  )
}

export default AllOffers

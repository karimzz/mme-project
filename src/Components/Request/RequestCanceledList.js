import React, { useEffect, useRef } from 'react'
import RequestCardType from './RequestCardType'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCanceledBooking } from '../../RTK/Slice/BookingSlice';
import { Skeleton } from '@mui/material';
import { getToken } from '../../RTK/Slice/AuthSlice';

const RequestCanceledList = () => {


    // For Dispatch Action
    const dispatch = useDispatch() ;

    // For Access Token
    const token = useSelector(getToken) ;
  
    // For Handle Performance 
    const handlePeformance = useRef(false ) ; 

    // For Get All Booking
    useEffect(()=>{
      if(!handlePeformance.current){
      dispatch(getAllCanceledBooking({token})) ; 
        handlePeformance.current = true ; 
      }
    },[dispatch , token])
  
    const {data , load} = useSelector(state => state.BookingSlice.allBookingCancel) ;
  

  return (
    <div className='request-list'>
    {/* For Show All Booking */}
    {
      data ? data.map((item)=>{
        return <RequestCardType statu={item.status} itemInfo={item} />
      }) : load ? <div className='d-flex my-4'>
      <Skeleton className='mx-2 my-2' variant="circular" width={40} height={40} />
      <Skeleton className="rounded-2" variant="rectangular" width={310} height={60} />
    </div> : ""
    }

</div>
  )
}

export default RequestCanceledList

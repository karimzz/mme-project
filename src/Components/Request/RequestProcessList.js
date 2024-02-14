import React, { useEffect } from 'react'
import RequestCardType from './RequestCardType'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBooking } from '../../RTK/Slice/BookingSlice' ;
import { Skeleton } from '@mui/material';

const RequestProcessList = ( ) => {

  // For Dispatch Action
  const dispatch = useDispatch() ;

  // For Access Token
  const {token} = useSelector(state => state.AuthSlice.auth) ;

  // For Get All Booking
  useEffect(()=>{
    dispatch(getAllBooking({token}))
  },[dispatch])

  const {data , load} = useSelector(state => state.BookingSlice.allBooking) ;
  console.log(data) ; 

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

export default RequestProcessList

import React, { useEffect } from 'react' ;
import "./Notification.css" ; 
import NotificationComponent from '../../Components/Notification/NotificationComponent';
import user  from "./../../Image/user.png" ; 
import { useDispatch, useSelector } from 'react-redux';
import {  useSearchParams } from 'react-router-dom';
import { GetAllNotification, getAllNotification } from '../../RTK/Slice/NotificationSlice';
import { Skeleton } from '@mui/material';
import { getToken } from '../../RTK/Slice/AuthSlice';

const NotificationPage = () => {


  // For Handler Search Params
  const [searchParams , setSearchParams] = useSearchParams() ; 

  console.log(searchParams.toString()) ; 



  // For Access Token
  const token  = useSelector(getToken) ;

  // For Dispatch Action
  const dispatch = useDispatch() ;

  useEffect(()=>{
    dispatch(getAllNotification({token}))
  } , [ token,dispatch])

  const {data  , load} = useSelector(GetAllNotification)


  return (
    
    <div className='not-page'>
    <h2 className='not-title'>Notifications</h2>
    <div className='not-list'>

        {/* For Get All Notification */}
        {
          data ? data.map((item , idx)=>{
            return <NotificationComponent key={idx} username={item.data.user_send} image={user} date={item.created_at} des={item.data.title} /> 
            
          }) :load ? <Skeleton  width={500} height={150}/>  : ""
        }

    </div>
</div>
    
  )
}

export default NotificationPage

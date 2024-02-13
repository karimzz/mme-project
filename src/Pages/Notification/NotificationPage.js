import React, { useEffect } from 'react' ;
import "./Notification.css" ; 
import NotificationComponent from '../../Components/Notification/NotificationComponent';
import user  from "./../../Image/user.png" ; 
import { Fade } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllNotification } from '../../RTK/Slice/NotificationSlice';
import { Skeleton } from '@mui/material';

const NotificationPage = () => {


  // For Handlle Route
  const navigate = useNavigate() 

  // For Access Token
  const {token } = useSelector(state => state.AuthSlice.auth) ;

  // For Dispatch Action
  const dispatch = useDispatch() ;

  useEffect(()=>{
    dispatch(getAllNotification({token}))
  } , [dispatch])

  const {data  , load} = useSelector(state => state.NotificationSlice.allNotification)


  return (
    
    <div className='not-page'>
    <h2 className='not-title'>Notifications</h2>
    <div className='not-list'>

        {/* For Get All Notification */}
        {
          data ? data.map((item)=>{
            return <NotificationComponent username={item.data.user_send} image={user} date={item.created_at} des={item.data.title} /> 
            
          }) :load ? <Skeleton  width={500} height={150}/>  : ""
        }


    </div>
</div>
    
  )
}

export default NotificationPage

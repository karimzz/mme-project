import React from 'react' ;
import "./Notification.css" ; 
import NotificationComponent from '../../Components/Notification/NotificationComponent';
import user  from "./../../Image/user.png" ; 
import { Fade } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NotificationPage = () => {


  // For Handlle Route
  const navigate = useNavigate() 

  // For Access Slice 
  const {auth } = useSelector(state => state.AuthSlice) ; 
  console.log(auth) ; 
  if(auth == null){
    navigate("/login")
  }
  return (
    
    <div className='not-page'>
    <h2 className='not-title'>Notifications</h2>
    <div className='not-list'>
        <NotificationComponent  username={"karimzz"} date={"4 day"} image={user} des={"{\"request_id\":2,\"user_send\":\"eslam\",\"title\":\"booking \\\"}"} open={false} />
        <NotificationComponent  username={"Samaaa"} date={"3 day"} image={user} des={"mentioned you in a comment"} open={true} />
        <NotificationComponent  username={"karimzz"} date={"2 day"} image={user} des={"mentioned you in a comment"} open={true} />
        <NotificationComponent  username={"karimzz"} date={" Just Now"} image={user} des={"mentioned you in a comment"} open={false} />
        <NotificationComponent  username={"karimzz"} date={"4 day"} image={user} des={"mentioned you in a comment"} open={true}/>
        <NotificationComponent  username={"karimzz"} date={"4 day"} image={user} des={"mentioned you in a comment"} open={false}/>
        <NotificationComponent  username={"karimzz"} date={"4 day"} image={user} des={"mentioned you in a comment"} />
        <NotificationComponent  username={"karimzz"} date={"4 day"} image={user} des={"mentioned you in a comment"} />
        <NotificationComponent  username={"karimzz"} date={"4 day"} image={user} des={"mentioned you in a comment"} />

    </div>
</div>
    
  )
}

export default NotificationPage

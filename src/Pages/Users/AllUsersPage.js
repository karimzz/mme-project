import React, { useEffect } from 'react'
import "./users.css"
import UserComponent from '../../Components/Users/UserComponent'
import userProfile from "./../../Image/logo.png" ;
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '../../RTK/Slice/UserSlice';
import { ToastContainer } from 'react-toastify';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


const AllUsersPage = () => {

// For Acces Token 
const {token} = useSelector(state => state.AuthSlice.auth) ; 

// For Dispatch Action
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(getAllUser({token}) ) ; 
} ,[dispatch])

const {data , load} = useSelector(state => state.UserSlice.allUser)
console.log(data)

  return (
    <div className='users'>
      <ToastContainer />
        <div className='page-title'>
            <h4>Users</h4>
        </div>
        <div className='user-list' style={{display : "flex" , flexWrap : "wrap"}}>
            {
              data ? data.map((item ,idx)=>{
                return <UserComponent key={idx} name={item.name} email={item.email} id={item.id} blocked={item.blocked} image={item.image} location={item.location} />
              }) : load ? <Stack spacing={1}>
              {/* For other variants, adjust the size with `width` and `height` */}
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={210} height={60} />
              <Skeleton variant="rounded" width={210} height={60} />
            </Stack> : ""
            }
  
        </div>
    </div>
  )
}

export default AllUsersPage

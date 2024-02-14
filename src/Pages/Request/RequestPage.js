import React from 'react'
import { NavLink, Outlet } from 'react-router-dom' ;
import "./Request.css"
import { ToastContainer } from 'react-toastify';

const RequestPage = () => {
  return (
    <div className='main-request'>
        <div className='request-title'><h2>Request</h2></div>
        <ToastContainer />
        <div className='requset-content'>
            <div className='request-type'>
                <NavLink end  to={"/request"} >Request Process</NavLink>
                <NavLink to={"recieved"}>Request Recieved</NavLink>
                <NavLink to={"canceled"}>Request Canceled</NavLink>
            </div>
            <Outlet />
        </div>
    </div>
  )
}

export default RequestPage

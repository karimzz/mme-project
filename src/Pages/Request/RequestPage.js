import React from 'react'
import { NavLink, Outlet } from 'react-router-dom' ;
import "./Request.css"

const RequestPage = () => {
  return (
    <div className='main-request'>
        <div className='request-title'><h2>Request</h2></div>
        <div className='requset-content'>
            <div className='request-type'>
                <NavLink to={"process"}>Request Process</NavLink>
                <NavLink to={"recieved"}>Request Recieved</NavLink>
                <NavLink to={"canceled"}>Request Canceled</NavLink>
            </div>
            <Outlet />
        </div>
    </div>
  )
}

export default RequestPage

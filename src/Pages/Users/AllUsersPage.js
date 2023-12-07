import React from 'react'
import "./users.css"
import UserComponent from '../../Components/Users/UserComponent'
import userProfile from "./../../Image/logo.png" ;
import { Fade } from 'react-bootstrap';


const AllUsersPage = () => {
  return (
    <div className='users'>
        <div className='page-title'>
            <h4>Users</h4>
        </div>
        <div className='user-list' style={{display : "flex" , flexWrap : "wrap"}}>
            <Fade><UserComponent image = {userProfile} user={"karimzz"} location={"cairo"} email={"karimzz@gmail.com"} /></Fade>
            <UserComponent image = {userProfile} user={"karimzz"} location={"cairo"} email={"karimzz@gmail.com"} />
            <UserComponent image = {userProfile} user={"karimzz"} location={"cairo"} email={"karimzz@gmail.com"} />
            <UserComponent image = {userProfile} user={"karimzz"} location={"cairo"} email={"karimzz@gmail.com"} />
            <UserComponent imagee = {userProfile} user={"karimzz"} location={"cairo"} email={"karimzz@gmail.com"} />
        </div>
    </div>
  )
}

export default AllUsersPage

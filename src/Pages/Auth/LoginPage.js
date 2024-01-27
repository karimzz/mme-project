import React, { useRef } from 'react'

import {Form,Container} from 'react-bootstrap';
import "./login.css"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginHandler } from '../../RTK/Slice/AuthSlice';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';




const LoginPage = () => {

  // For Handle Route 
  const navigate = useNavigate()

  // For Access Slice 
  const {loadding , auth} = useSelector(state => state.AuthSlice) ; 

  if(auth){
    navigate("/error")
  }

  // For Dispatch Action
  const dispatch = useDispatch()

  // For Access Input
  const emailRef = useRef(null) ; 
  const passwordRef = useRef(null) ;
  
  // Login Function 
  const login = ()=>{
    dispatch(loginHandler({email : emailRef.current.value , password : passwordRef.current.value }))
  }

  return (
    <Container className='my-3'>
    <ToastContainer
    autoClose={1500}

  />
    
      <p>LOGIN</p>
      <div className='formInput'>
          <Form.Label htmlFor="inputEmail" className='label'>EMAIL</Form.Label>
          <br/>
          <input ref={emailRef} type="email"  id="inputEmail"/>
          <br/>
          <Form.Label htmlFor="inputPassword5" className='label'>PASSWORD</Form.Label>
          <br/>
          <input ref={passwordRef} type="password"  id="inputPassword5"/>
          <Link to={"/forgetpassword"}>Forget Password?</Link>
          <button className='s-btn' onClick={login}>LOGIN</button>
          <div>
            {
              loadding ? <div className="spinner-border text-danger" role="status">
              <span className="sr-only"></span>
            </div> : ""
            }
          </div>
      </div>
      
    </Container>
  )
}

export default LoginPage

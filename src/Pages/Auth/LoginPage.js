import React, { useEffect, useRef, useState } from 'react'

import {Form,Container} from 'react-bootstrap';
import "./login.css"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginHandler } from '../../RTK/Slice/AuthSlice';
import { ToastContainer } from 'react-toastify';
import Alert from '@mui/material/Alert';


import 'react-toastify/dist/ReactToastify.css';
import { Fade } from 'react-reveal';




const LoginPage = () => {


  // For Validatation
  const [validEmail , setValidEmail] = useState('idle') ;  // Idle(default)  || match  || not-match

  const [validPwd , setValidPwd] = useState('idle') ;  // Idle(default)  || match  || not-match


  const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ ; 
  const PWD_REGEX = /^[0-9]+$/ ; 

  // For Handle Route 
  const navigate = useNavigate()

  // For Access Slice 
  const {loadding , auth} = useSelector(state => state.AuthSlice) ; 


  


  // For Dispatch Action
  const dispatch = useDispatch()

  // For Access Input
  const emailRef = useRef(null) ; 
  const passwordRef = useRef(null) ;
  
  // Login Function 
  const login = ()=>{
    if(validEmail === 'match' && validPwd === 'match') {
      dispatch(loginHandler({email : emailRef.current.value , password : passwordRef.current.value }))
    }
  }

  if(auth){
    return <Navigate to={"/"} />
  } ;


  // For Validate EMail And Password
  const validatEmailHandler = (e)=>{
    if(e.target.value === ''){
      setValidEmail('idle')
    }
    else if(EMAIL_REGEX.test(e.target.value) === true){
      setValidEmail('match')
    }else{
      setValidEmail('not-match')
    }
  }
  const validatPwdHandler = (e)=>{


    if(e.target.value === ''){
      setValidPwd('idle')
    }
    else if(PWD_REGEX.test(e.target.value) === true){
      setValidPwd('match')
    }else{
      setValidPwd('not-match')
    }
  }

  return (
    <Container className='my-3d'>
    
    
    <ToastContainer
    autoClose={1500}

  />
  {
    
    validEmail == 'not-match' ? 
    <Alert severity="error">This Is un Valid Email</Alert>
     :""
  }

  {
    validPwd == 'match' ?
    <Alert severity="success">This Is valid Password</Alert> :
    validPwd == 'not-match' ? 
    <Alert severity="error">This Is Unvalid Password</Alert>
     :""
  }
    
      <p>LOGIN</p>
      
      <div className='formInput'>
          <Form.Label htmlFor="inputEmail" className='label'>EMAIL</Form.Label>
          <br/>
          <input ref={emailRef} onChange={(e)=>validatEmailHandler(e)} type="email"  id="inputEmail"/>
          <br/>
          <Form.Label htmlFor="inputPassword5" className='label'>PASSWORD</Form.Label>
          <br/>
          <input onChange={validatPwdHandler} ref={passwordRef} type="password"  id="inputPassword5"/>
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

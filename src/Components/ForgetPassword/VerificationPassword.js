import React, { useRef } from 'react'
import { ToastContainer } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { verificationHandler } from '../../RTK/Slice/ForgetPasswordSlice';

const VerificationPassword = () => {

//  For Access Code Input
    const cocdRef = useRef(null) ; 

//  For Get Email
const state = useSelector(state => state.ForgetPasswordSlice) ;

console.log("Here Verification and here value of email ")

console.log(state) ;

// For Dispatch Action
const dispatch = useDispatch() ;

const verifyHandeler = ()=>{
    dispatch(verificationHandler( {email : state.email  , otp : cocdRef.current.value}) )
}
    
  return (
    <div className='send-email'>
        <ToastContainer />
        <h3>Verification Code </h3>
        <div className='k-form'>
            <p>Enter the code contain 5 numbers</p>
            <input  ref={cocdRef} placeholder='x x x x x' type='email' required id='con-em'  />
            <button onClick={verifyHandeler} className='con-btn' >Send</button>
        </div>
    </div>
  )
}

export default VerificationPassword

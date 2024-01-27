import React, { useRef } from 'react'
import "./../../Pages/ForgetPassword/fortgetpassword.css"
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addEmail , sendEmailHandler } from '../../RTK/Slice/ForgetPasswordSlice'


const ForgetPasswordSendCode = () => {


    // For Dispatch Action
    const dispatch = useDispatch()

    // For Access Email Input
    const EmailRef = useRef(null)

    // For Controll Route
    const navigate = useNavigate() ; 

    // Save Email 
    const saveEmailHandler = ()=>{
        dispatch(sendEmailHandler(EmailRef.current.value))
        // navigate("verification" )
    }

  return (
    <div className='send-email'>
        <ToastContainer />
        <h3>Forget Password</h3>
        <div className='k-form'>
            <p>Enter the email address assoicated with your account and we'll send you a link to restart you password</p>
            <label htmlFor='con-em'>Email</label>
            <input ref={EmailRef} placeholder='' type='email' required id='con-em'  />
            <button className='con-btn' onClick={()=>  {  EmailRef.current.value  ?  saveEmailHandler() : toast.error("Enter valid email") }}>Continue</button>
        </div>
    </div>
  )
}

export default ForgetPasswordSendCode

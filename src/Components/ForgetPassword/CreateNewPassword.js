import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify'
import { restPassword } from '../../RTK/Slice/ForgetPasswordSlice';
import { useNavigate } from 'react-router-dom';

const CreateNewPassword = () => {


    // For change Route
    const navigate = useNavigate()

    // For Dispatch Action
    const dispatch = useDispatch() ;

    // For Access input 
    const passwordRef =useRef(null) ;
    const RePasswordRef = useRef(null) ;
    
    // For Access State
    const {token , email , changed} = useSelector(state => state.ForgetPasswordSlice )

    // Reset Pasword Function 
    const restPasswordHandler = ()=>{
        dispatch(restPassword({email  , token , password : passwordRef.current.value }))
    }

    if(changed){
        navigate("/login")
    }

    const checkPasswordIdentical = ()=>{
        if(passwordRef.current.value ===RePasswordRef.current.value ){
            if(passwordRef.current.value.length >= 8 )
            {
                restPasswordHandler()
            }else{
                toast.error("Are Less Than 8 Character" ) ;
            }
        }else{
            toast.error("You Password are not indentical Or less than 8 character")
        }
    }


  return (
    <div className='send-email'>
        <ToastContainer />
        <h3> New Password </h3>
        <div className="alert alert-success rounded-1 fs-6"  role="alert">
            Please create a new password that you don't use on any other site
        </div>
        <div className='k-form k-form-new-pass' >
            <input min={"8"} ref={passwordRef} className='new-pass'   placeholder='New password' type='password' required   />
            <input  min={"8"} ref={RePasswordRef} className='new-pass'   placeholder='Re-type New password' type='password' required   />
            <button onClick={checkPasswordIdentical}  className='con-btn'  >Send</button>
        </div>
    </div>
  )
}

export default CreateNewPassword

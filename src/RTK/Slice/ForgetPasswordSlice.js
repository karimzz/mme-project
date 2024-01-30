import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



// For Create A new Password 
export const restPassword = createAsyncThunk("forgetpassword/restPassword" , async (args , thunkAPI)=>{
    const response = axios.post("http://127.0.0.1:8000/api/password/reset-password" , {
        email : args.email , 
        password :args.password 
    } ,{
        headers : {
            Authorization : `Bearer ${args.token}`
        }
    })
    console.log(response.data)
})

// For Send Email To User
export const sendEmailHandler = createAsyncThunk("forgetpassword/sendEmailHandler" , async (args )=>{

    const response = await axios.post("http://127.0.0.1:8000/api/password/forget-password" , {
        email : args.email
    })
    return {status : response.data.success , email : args.email}
})

// For Send Code 
export const verificationHandler =  createAsyncThunk("forgetpassword/verificationHandler" , async (args , thunkAPI)=>{
        const response = await axios.post("http://127.0.0.1:8000/api/password/verification-code" , {
        email :args.email ,
        otp : args.otp
    })

    return response.data

})


const initialState = {
    email : null , 
    code : null ,
    status : false ,
    token : null ,
    changed : false
}

const ForgetPasswordSlice = createSlice({
    name : "forgetpassword" , 
    initialState , 
    reducers : {
        
    } ,extraReducers : {
        // For Send Email
        [sendEmailHandler.fulfilled] : (state ,action)=>{
            state.status = action.payload.success ; 
            state.email = action.payload.email
            console.log(state.email)
        } , 
        [sendEmailHandler.pending] : (state , action)=>{
            console.log("penddidng")
        } , 
        [sendEmailHandler.rejected] : (state , action)=>{
            state.email = action.payload
            console.log("Rejected")
        } , 
        // For Verifiy Email
        [verificationHandler.fulfilled] : (state , action)=>{
            state.token = action.payload.token
            state.status = true ; 
            console.log("Fulfiled")
        } ,
        [verificationHandler.pending] : (state , action)=>{
            console.log("pendding")
        } ,
        [verificationHandler.rejected] : (state , action)=>{
            console.log("Rejected")
        } ,
        [restPassword.fulfilled ] : (state , action)=>{
            state.changed = true ;
        },
        [restPassword.pending ] : (state , action)=>{

        },
        [restPassword.rejected ] : (state , action)=>{

        },

    }
})

export default ForgetPasswordSlice.reducer; 

export const {addEmail} = ForgetPasswordSlice.actions ;


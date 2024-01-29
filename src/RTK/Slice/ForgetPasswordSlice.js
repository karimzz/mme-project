import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const sendEmailHandler = createAsyncThunk("forgetpassword/sendEmailHandler" , async (args )=>{

    const response = await axios.post("http://127.0.0.1:8000/api/password/forget-password" , {
        email : args.email
    })
    return {status : response.data.success , email : args.email}
})

export const verificationHandler =  createAsyncThunk("forgetpassword/verificationHandler" , async (args , thunkAPI)=>{
    console.log("We Are In Verification Handeler")
    console.log(args)

        const response = await axios.post("http://127.0.0.1:8000/api/password/verification-code" , {
        email :args.email ,
        otp : args.otp
    })

    console.log(response) ;

})


const initialState = {
    email : null , 
    code : null ,
    status : false
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
            console.log("Fulfiled")
        } ,
        [verificationHandler.pending] : (state , action)=>{
            console.log("pendding")
        } ,
        [verificationHandler.rejected] : (state , action)=>{
            console.log("Rejected")
        } ,

    }
})

export default ForgetPasswordSlice.reducer; 

export const {addEmail} = ForgetPasswordSlice.actions ;


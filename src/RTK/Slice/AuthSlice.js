import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




// Login Function 
export const loginHandler = createAsyncThunk("auth/loginhandeler" , async (args , thunkAPI) =>{

        
        const response = await axios.post("http://localhost:8000/api/login" , {
            email : args.email , 
            password : args.password ,
    } )
    console.log(response.data)
    return response.data
})


 const initialState = {
    auth : null,
    error : false , 
    success : false , 
    loadding : false
 }

const AuthSlice = createSlice({
    name : "auth" , 
    initialState ,
    reducers : {

    } , extraReducers : {
        [loginHandler.fulfilled] : (state , action)=>{
            state.auth = action.payload ; 
            state.error = false
            state.success = true
            state.loadding = false
        } , 
        [loginHandler.pending ] : (state , action) =>{
            state.loadding = true
        } , 
        [loginHandler.rejected ] : (state , action)=>
        {
            toast.error("Email Or password Wrong" )
            console.log("Data Faillled")
            state.error = true ; 
            state.success = false ; 
            state.loadding = false
        }
    }
})

export default AuthSlice.reducer


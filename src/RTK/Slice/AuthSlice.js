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


// Logout Function 
export const logoutHandler = createAsyncThunk("auth/logout" , async (args , thunkAPI )=>{
    const response = await axios.get("http://127.0.0.1:8000/api/logout" , {
        email : args.email ,
        headers : {
            Token : args.Token
        }
    }  )
    console.log(response) ;
})


 const initialState = {
    auth : localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : null,
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
            localStorage.setItem("auth" , JSON.stringify(action.payload))
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
        } ,
        // Logout
        [logoutHandler.fulfilled] : (state , action)=>{
            console.log("Fuilfled")
        } , 
        [logoutHandler.pending] : (state , action) =>{

        } , 
        [logoutHandler.rejected] : (state , action) =>{
            console.log("Rejeceted")
        }
    }
})

export default AuthSlice.reducer


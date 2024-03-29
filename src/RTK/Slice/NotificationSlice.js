import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


export const getAllNotification = createAsyncThunk("notification/getallnotification" , async(args , thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    try{
        const response = await axios.get("http://localhost:8000/api/admin/showAllNotification" ,{
        headers : {
            Authorization : `Bearer ${args.token}`
        }
    } )
    return response.data.data
    }catch(error){
        console.log(`the error is ${error}`)
        throw error
    }
})

const initialState = {
    allNotification : {
        data : null ,
        load : false
    }
} ;

const NotificationSlice = createSlice({
    name : "notification" ,
    initialState , 
    reducers : {

    } , 
    extraReducers : {
        [getAllNotification.fulfilled ]: (state ,action)=>{
            state.allNotification.data = action.payload
            state.allNotification.load = false
        } ,
        [getAllNotification.pending ]: (state ,action)=>{
            state.allNotification.load = true

        } ,
        [getAllNotification.rejected ]: (state ,action)=>{
            state.allNotification.load = false
            toast.error("Something error")
        } ,
    }
})

export default NotificationSlice.reducer ; 


export const GetAllNotification = state => state.NotificationSlice.allNotification
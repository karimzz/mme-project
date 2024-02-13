import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


export const getAllNotification = createAsyncThunk("notification/getallnotification" , async(args)=>{
    const response = await axios.get("http://localhost:8000/api/admin/showAllNotification" ,{
        headers : {
            Authorization : `Bearer ${args.token}`
        }
    } )
    console.log(response.data.data)
    return response.data.data
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
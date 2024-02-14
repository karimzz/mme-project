import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";



// For Get All Canceled Booking 
export const getAllCanceledBooking = createAsyncThunk("booking/getallcancel" , async(args)=>{
    const response = await axios.get("http://127.0.0.1:8000/api/booking/cancel" , {
        headers : {
            Authorization : `Bearer ${args.token}`
        }
    })
    console.log(response.data)
    return response.data ;
})

// For Get All Recived Booking 
export const getAllRecivedBooking = createAsyncThunk("booking/getallrecive" , async(args)=>{
    const response = await axios.get("http://127.0.0.1:8000/api/booking/receive" , 
    {
        headers : {
            Authorization : `Bearer ${args.token}`
        }
    })
    console.log(response.data)
    return response.data
})

// For Get All Booking 
export const getAllBooking = createAsyncThunk("booking/getall" , async(args)=>{
    const response = await axios.get("http://127.0.0.1:8000/api/user/booking" , 
    {
        headers : {
            Authorization : `Bearer ${args.token}`
        }
    })
    console.log(response.data)
    return response.data
})

const initialState = {
    allBooking : {
        data : null , 
        load : false
    } ,
    allBookingRecieve : {
        data :null ,
        load : false
    } ,
    allBookingCancel : {
        data : null ,
        load : false
    }
}

 const BookingSlice = createSlice({
    name : "booking" , 
    initialState ,
    reducers : {

    } ,extraReducers :{
        // For Get All Booking
        [getAllBooking.fulfilled] : (state ,action)=>{
            state.allBooking.load = false
            state.allBooking.data = action.payload;
        } ,
        [getAllBooking.pending] : (state ,action)=>{
            state.allBooking.load = true
        } , 
        [getAllBooking.rejected] : (state ,action)=>{
            state.allBooking.load = false  ;
            toast.error("something error")
        } , 
        // For Get All Booking Recieve
        [getAllRecivedBooking.fulfilled] : (state ,action)=>{
            state.allBookingRecieve.load = false
            state.allBookingRecieve.data = action.payload;
        } ,
        [getAllRecivedBooking.pending] : (state ,action)=>{
            state.allBookingRecieve.load = true
        } , 
        [getAllRecivedBooking.rejected] : (state ,action)=>{
            state.allBookingRecieve.load = false  ;
            toast.error("something error")
        } ,
        // For Get All Cancel 
        [getAllCanceledBooking.fulfilled] : (state ,action)=>{
            state.allBookingCancel.load = false
            state.allBookingCancel.data = action.payload;
        } ,
        [getAllCanceledBooking.pending] : (state ,action)=>{
            state.allBookingCancel.load = true
        } , 
        [getAllCanceledBooking.rejected] : (state ,action)=>{
            state.allBookingCancel.load = false  ;
            toast.error("something error")
        } ,
    }
})

export default BookingSlice.reducer
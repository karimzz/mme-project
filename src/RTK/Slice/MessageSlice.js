import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


// For Replay Message
export const replayMessage = createAsyncThunk("message/replay" ,async (args , thunkAPI)=>{
    const {dispatch} = thunkAPI
    const response = await axios.post(`http://localhost:8000/api/admin/messages/center/${args.id}` , {
        message_body : args.message
    } , {
        headers : {
            Authorization : `Bearer ${args.token}`
        }
    })
    dispatch(getSpecificMessage({token : args.token , id_user : args.id}))
    return response.data.data
})

// For Get Specific Message 
export const getSpecificMessage = createAsyncThunk("message/getspecific" , async (args)=>{
    const response = await axios.get(`http://localhost:8000/api/admin/messages/center/${args.id_user}` ,
    {
        headers : {
            Authorization : `Bearer ${args.token}`
        }
    })
    return response.data.data
})

// Get All message
export const getAllMessage = createAsyncThunk("message/getallmessage" ,async (args)=>{
    const response = await axios.get("http://localhost:8000/api/admin/messages/center" , {
        headers : {
            Authorization : `Bearer ${args.token}`
        }
    })
    console.log(response.data.data)
    return response.data.data
} )


const initialState = {
    allMessage : {
        data : null ,
        load : false
    } ,
    specifiChat : {
        data : null , 
        load : null
    }
}

const MessageSlice = createSlice({
    name :"message" , 
    initialState , 
    reducers : {
        deleteSpecific : (state ,action)=>{
            state.specifiChat.data = null
        }
    } , 
    extraReducers : {
        // For Get All Message
        [getAllMessage.fulfilled] : (state , action)=>{
            state.allMessage.data = action.payload ; 
            state.allMessage.load = false
        } , 
        [getAllMessage.pending] : (state , action)=>{
            state.allMessage.load = true

        } , 
        [getAllMessage.rejected] : (state , action)=>{
            state.allMessage.load = false ;
            toast.error("Something error with load message")
        } , 
        // For Get Specific Message
        [getSpecificMessage.fulfilled] : (state ,action)=>{
            state.specifiChat.data = action.payload
            state.specifiChat.load = false
            document.querySelector(".all-message").scrollTo(0 , document.querySelector(".all-message").scrollHeight)
        },
        [getSpecificMessage.pending] : (state ,action)=>{
            state.specifiChat.load = true
        },
        [getSpecificMessage.rejected] : (state ,action)=>{
            state.specifiChat.load = false
            toast.error("Something error")
        } ,
        // For Replay Message
        [replayMessage.fulfilled ] : (state ,action)=>{
            state.specifiChat.load = true
            if(state.specifiChat.data)
            {
                state.specifiChat.data.push(action.payload)
            }else{
                state.specifiChat.data = action.payload
            }
            document.querySelector(".all-message").scrollTo(0 ,  document.querySelector(".all-message").scrollHeight)

        } ,
        [replayMessage.pending] : (state , action)=>{

        } ,
        [replayMessage.rejected] : (state ,action)=>{
            toast.error("Something error")
        }
    }
})

export default MessageSlice.reducer ;

export const {deleteSpecific} = MessageSlice.actions ;
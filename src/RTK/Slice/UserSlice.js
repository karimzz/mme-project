import axios from "axios";
import { toast } from "react-toastify";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");



// For Un Block User 
export const unlockUser = createAsyncThunk("user/unblock" ,async (args)=>{
    const response = await axios.post(`http://localhost:8000/api/admin/unblockuser/${args.id}` , {
        
    } , {
        headers : {
            Authorization : `Bearer ${args.token}`
        }
    })
    return args.id

})

// For Block User 
export const blockUser = createAsyncThunk("user/block" ,async (args)=>{
    const response = await axios.post(`http://localhost:8000/api/admin/blockuser/${args.id}` , {
        
    } , {
        headers : {
            Authorization : `Bearer ${args.token}`
        }
    })
    return args.id
})

// For Get ALl User
export const getAllUser = createAsyncThunk("user/getalluser" , async (args)=>{
    const response = await axios.get("http://localhost:8000/api/admin/users" , {
        headers : {
            Authorization : `Bearer ${args.token}`
        }
    })
    return response.data.data
})

const initialState = {
    allUser : {
        data : null , 
        load : false
    }
}

const UserSlice = createSlice({
    name : "user" , 
    initialState , 
    reducers : {

    } ,
    extraReducers : {
        // For Get All User
        [getAllUser.fulfilled] : (state , action)=>{
            state.allUser.data = action.payload; 
            state.allUser.load = false
        },
        [getAllUser.pending] : (state , action)=>{
            state.allUser.load = true
        },
        [getAllUser.rejected] : (state , action)=>{
            toast.error("Something error with get data")
            state.allUser.load = false
        },
        // For Un Block User
        [unlockUser.fulfilled] : (state , action)=>{
            console.log("Un Block Done Successfullu")
            toast.success("User UnBlock Succesfully")
            const currentIndex = state.allUser.data.findIndex((item)=>{
                return item.id === action.payload
            })
            state.allUser.data[currentIndex].blocked = 0
        } ,
        [unlockUser.pending] : (state , action)=>{

        } ,
        [unlockUser.rejected] : (state , action)=>{
            toast.error("Something error ")
        } ,
        // For Block User
        [blockUser.fulfilled ] : (state , action)=>{
            console.log("Block Done Successfullu")
            toast.warning("User Block Succesfully")
            const currentIndex = state.allUser.data.findIndex((item)=>{
                return item.id === action.payload
            })
            state.allUser.data[currentIndex].blocked = 1
        } ,
        [blockUser.pending] : (state , action)=>{

        } ,
        [blockUser.rejected] : (state , action)=>{
            toast.error("Something error ")
        } ,
    }
})

export default UserSlice.reducer
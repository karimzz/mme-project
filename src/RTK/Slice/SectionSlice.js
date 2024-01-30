import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    allSection : [] , 
    load : false
} ;



// Hi Sama 
/// Samamaaa   SSS

 export const getAllSection = createAsyncThunk("section/getAllSection" , async (args , thunkAPI)=>{
    const response = await axios.get("http://127.0.0.1:8000/api/section" , {
        headers : {
            Authorization : `Bearer ${args.token}` 
        }
    })

    return response.data
})

const SectionSlice = createSlice({
    name : "section" ,
    initialState ,
    reducers : {
     
    } 
    ,extraReducers : {
        // For Get All Sections 
        [getAllSection.fulfilled] : (state , action)=>{
            state.load = false
            state.allSection.push(action.payload)
            console.log("Fuilfiled")
        } , 
        [getAllSection.pending ] : (state , action)=>{
            state.load = true
            console.log("Pendding")
        } ,
        [getAllSection.rejected]  :(state , action)=>{
            state.load = false
            console.log("Rejeceted")
        }
    }
})

export default SectionSlice.reducer ; 
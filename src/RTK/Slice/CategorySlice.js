import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";




// For Add A Specific Category
export const addCategory = createAsyncThunk("category/updatecategory" , async (args)=>{
    const response = await axios.post("http://127.0.0.1:8000/api/categories" , args.data , {
        headers : {
            Authorization : `Bearer ${args.token}`
        }
    })
    console.log(response.data)
    return response.data.category
}) 

// For Get All Category
export const getAllCategories = createAsyncThunk("category/getallcategory" , async (args )=>{
    const response = await axios.get("http://127.0.0.1:8000/api/categories" , {
        headers : {
            Authorization : `Bearer ${args.token}`
        }
    })
    console.log(response.data)
    return  await response.data
})



const initialState = {
    allCategory : {
        data :null , 
        load : false
    }
}

const CategorySlice = createSlice({
    name : "category" ,
    initialState , 
    reducers : {

    } ,
    extraReducers :{
        // For Get All Category
        [getAllCategories.fulfilled] : (state , action)=>{
            state.allCategory.data = action.payload ; 
            state.allCategory.load = false
        } ,
        [getAllCategories.pending] : (state , action)=>{
            state.allCategory.load = true
        } ,
        [getAllCategories.rejected] : (state , action)=>{
            state.allCategory.load = false
            toast.error("Something has error")
            console.log("Rejected")
        },
        // For Add Category
        [addCategory.fulfilled] : (state , action)=>{
            if(state.allCategory.data)
            {
                state.allCategory.data.push(action.payload)
            }else{
                state.allCategory.data = action.payload ;
            }
            toast.success("Category Add Successfullu") ; 
            console.log("Fulfiled")
        } ,
        [addCategory.pending] : (state ,action)=>{

        },
        [addCategory.rejected] : (state , action)=>{

        }
    }
})


export default CategorySlice.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";




// For Update 
export const updateCategory = createAsyncThunk("category/updatecategory" , async (args)=>{
    const response = await axios.post(`http://127.0.0.1:8000/api/categories/${args.id}` ,args.data , {
        headers : {
            Authorization : `Bearer ${args.token}`
        }
    })
    return response.data.category
})

// For Delete Category 
export const deleteCategory = createAsyncThunk("category/deletecategory" , async (args)=>{
    const response = await axios.delete(`http://127.0.0.1:8000/api/categories/${args.id}` , {
        headers : {
            Authorization : `Bearer ${args.token}`
        }
    })

    return args.id
})


// For Add A Specific Category
export const addCategory = createAsyncThunk("category/addcategory" , async (args)=>{
    const response = await axios.post("http://127.0.0.1:8000/api/categories" , args.data , {
        headers : {
            Authorization : `Bearer ${args.token}`
        }
    })
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
    } ,
    currentCategoryTitle : null
}

const CategorySlice = createSlice({
    name : "category" ,
    initialState , 
    reducers : {
        addCurrentCategory : (state , action)=>{
            state.currentCategoryTitle = action.payload
        }
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
            toast.error("Something error happend p")
        } ,
        // For Delete Category
        [deleteCategory.fulfilled ] : (state , action)=>{
            const newState = state.allCategory.data.filter((item)=>{
                return item.id !== action.payload
            })
            state.allCategory.data = newState ; 
            toast.success("Category deleted successfully")
        } ,
        [deleteCategory.pending] : (state , action)=>{

        } ,
        [deleteCategory.rejected] : (state ,action)=>{
            toast.error('Something error happend')
        },
        // For Update Category
        [updateCategory.fulfilled ] : (state , action)=>{
            const currentIndex = state.allCategory.data.findIndex((item)=>{
                return item.id === action.payload.id
            })
            console.log(`the current index ${currentIndex}`)
            state.allCategory.data[currentIndex] = action.payload;
            toast.success("Section updated successfullu")
        } ,
        [updateCategory.pending ] : (state ,action)=>{

        } ,
        [updateCategory.rejected] : (state ,action)=>{
            toast.error('something error with update category')
        }

    }
})


export default CategorySlice.reducer

export const {addCurrentCategory} = CategorySlice.actions ;
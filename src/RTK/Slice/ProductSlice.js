import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



// For Update Product 
export const updateProduct = createAsyncThunk("product/updateproduct" , async(args)=>{
    const response = await axios.post(`http://127.0.0.1:8000/api/items/${args.id}` , args.data , {
        headers : {
            Authorization : `Bearer ${args.token}`
        }
    })
    console.log(response.data)
    return response.data
})

// For Delete Product
export const deleteProduct = createAsyncThunk("product/deleteproduct" , async(args)=>{
    const response = await axios.delete(`http://127.0.0.1:8000/api/items/${args.id}` ,{
        headers : {
            Authorization : `Bearer ${args.token}`
        }
    })
    return response.data
})

// For Add Prodcut
export const addProduct = createAsyncThunk("product/addproduct" , async (args)=>{
    const response = await axios.post("http://127.0.0.1:8000/api/items" , args.data , {
        headers : {
            Authorization : `Bearer ${args.token}`
        }
    })
    console.log(response.data)
    return (await (response.data)) 
})

// For Get All Product
export const getAllProduct = createAsyncThunk("product/getallproduct" , async (args)=>{
    const response = await axios.get("http://127.0.0.1:8000/api/items" ,{
        headers :{
            Authorization : `Bearer ${args.token}`
        }
    })
    console.log(response.data) 
    return (await (response.data))
})

const initialState = {
    allProduct : []
}

const ProductSlice = createSlice({
    name : "product" , 
    initialState ,
    reducers : {

    } ,extraReducers : {
        // For Get all product
        [getAllProduct.fulfilled] : (state , action)=>{

        } ,
        [getAllProduct.pending] : (state , action)=>{

        } ,
        [getAllProduct.rejected] : (state , action)=>{

        } ,
        // For Add Product
        [addProduct.fulfilled ] : (state , action)=>{

        } ,
        [addProduct.pending] : (state , action)=>{

        } ,
        [addProduct.rejected] : (state ,action)=>{

        } ,
        // For Delete Product 
        [deleteProduct.fulfilled] : (state , action)=>{

        } ,
        [deleteProduct.pending] : (state ,action)=>{

        } ,
        [deleteProduct.rejected] : (state ,action) =>{

        } ,
        // For Update Product
        [updateProduct.fulfilled] : (state , action)=>{

        } ,
        [updateProduct.pending] : (state ,action)=>{

        } ,
        [updateProduct.rejected] : (state ,action)=>{
            
        }
    }
})

export default ProductSlice.reducer
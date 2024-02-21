import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


// For Get A Spiceific Product
export const getSpecifiProduct = createAsyncThunk("product/specificproduct" , async (args )=>{
    const response = await  axios.get(`http://127.0.0.1:8000/api/items/${args.id}` , {
        headers :{
            Authorization : `Bearer ${args.token}`
        }
    })
    return response.data
})

// For Update Product 
export const updateProduct = createAsyncThunk("product/updateproduct" , async(args)=>{
    const response = await axios.post(`http://127.0.0.1:8000/api/items/${args.id}` , args.data , {
        headers : {
            Authorization : `Bearer ${args.token}`
        }
    })
    return response.data
})

// For Delete Product
export const deleteProduct = createAsyncThunk("product/deleteproduct" , async(args)=>{
    const response = await axios.delete(`http://127.0.0.1:8000/api/items/${args.id}` ,{
        headers : {
            Authorization : `Bearer ${args.token}`
        }
    })
    
    return args.id
})

// For Add Prodcut
export const addProduct = createAsyncThunk("product/addproduct" , async (args)=>{
    const response = await axios.post("http://127.0.0.1:8000/api/items" , args.data , {
        headers : {
            Authorization : `Bearer ${args.token}`
        }
    })
    return response.data.item 
})

// For Get All Product
export const getAllProduct = createAsyncThunk("product/getallproduct" , async (args)=>{
    const response = await axios.get("http://127.0.0.1:8000/api/items" ,{
        headers :{
            Authorization : `Bearer ${args.token}`
        }
    })
    return response.data
})

const initialState = {
    allProduct : null , 
    specifiProduct : {
        data : null , 
        load : false ,
        error : false
    }
}

const ProductSlice = createSlice({
    name : "product" , 
    initialState ,
    reducers : {
        deleteCurrentProduct :(state ,action)=>{
            state.specifiProduct.data = null
        }
    } ,extraReducers : {
        // For Get all product
        [getAllProduct.fulfilled] : (state , action)=>{
            console.log("Get All Product Function Called") ;
            state.allProduct = action.payload
        } ,
        [getAllProduct.pending] : (state , action)=>{

        } ,
        [getAllProduct.rejected] : (state , action)=>{
            toast.error("Something wrong when load product")
        } ,
        // For Add Product
        [addProduct.fulfilled ] : (state , action)=>{
            console.log("Add Product Called") ; 
            if(state.allProduct){
                state.allProduct.push(action.payload) ;
            }else{
                state.allProduct = action.payload ; 
            }
            toast.success("Product Add Successfully")
        } ,
        [addProduct.pending] : (state , action)=>{

        } ,
        [addProduct.rejected] : (state ,action)=>{
            toast.error("Something error")
        } ,
        // For Delete Product 
        [deleteProduct.fulfilled] : (state , action)=>{
            console.log("Delete Function Called")
            toast.success("Product Deleted Successfully")
            const newState = state.allProduct.filter((item)=>{
                return item.id !== action.payload ;
            })
            state.allProduct = newState
        } ,
        [deleteProduct.pending] : (state ,action)=>{

        } ,
        [deleteProduct.rejected] : (state ,action) =>{
            toast.error("Something error when delete Product")
        } ,
        // For Get A Spiceifi Product
        [getSpecifiProduct.fulfilled] : (state , action)=>{
            console.log("Get Specific Function Called")
            state.specifiProduct.data = action.payload ;
            state.specifiProduct.load = true
            state.specifiProduct.error = false

        } ,
        [getSpecifiProduct.pending] : (state ,action)=>{
            state.specifiProduct.error = false
            state.specifiProduct.load = true;
        } ,
        [getSpecifiProduct.rejected] : (state ,action)=>{
            state.specifiProduct.error = true
            state.specifiProduct.load = false
            
        } ,
        // For Update Producy
        [updateProduct.fulfilled] : (state , action)=>{
            console.log("Updated Function Called")
            toast.success("Product Updated Successfully")
            state.specifiProduct.data = action.payload.items ;
            if(state.allProduct )
            {
                const currentIndex = state.allProduct.findIndex((item)=>{
                    return item.id === action.payload.items.id
                })
                console.log(currentIndex);
                state.allProduct[currentIndex] = action.payload.items
            }else{
                state.allProduct = action.payload.items
            }

        } , 
        [updateProduct.pending] : (state , action)=>{
        } ,
        [updateProduct.rejected] : (state , action)=>{
            toast.error("Somehting error with update product")
        } ,
        
    }
})

export default ProductSlice.reducer

export const {deleteCurrentProduct} = ProductSlice.actions ; 
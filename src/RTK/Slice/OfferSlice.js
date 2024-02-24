import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


// For Delete Offer 
export const delteOfferAPI = createAsyncThunk('offer/delete' , async (args , thunkAPI)=>{
    const {rejectWithValue} = thunkAPI ; 
    try{
        const response = axios.delete(`http://localhost:8000/api/delete-offer/${args.id}` , {
            headers : {
                Authorization : `Bearer ${args.token}`
            }
        })
        return args.id
    }catch(error){
        rejectWithValue(error)
    }
})

// For Get All Offer
export const getAllOfferAPI = createAsyncThunk('offer/getoffers' , async (args)=>{
    const response = await axios.get('http://localhost:8000/api/get-offers' , {
        headers : {
            Authorization : `Bearer ${args.token}`
        }
    })
    return response.data.offers
})

const initialState = {
    allOffer : {
        data: null , 
        status : 'idle'  // Idle  || Success  || Rejected  || Loadding
    }
}

const OfferSlice = createSlice({
    name : "offer" , 
    initialState ,
    reducers : {

    } , 
    extraReducers : {
        // For Get All Ofer
        [getAllOfferAPI.fulfilled] : (state , action)=>{
            state.allOffer.data = action.payload ; 
            state.allOffer.status = 'success'
        } , 
        [getAllOfferAPI.pending] : (state )=>{
            state.allOffer.status = 'load'
        } , 
        [getAllOfferAPI.rejected] : (state )=>{
            state.allOffer.status = 'reject'
        } , 
        // For Delete Offer
        [delteOfferAPI.fulfilled ] : (state ,action)=>{
            console.log(`The action Payload ${action.payload}`) ; 
            state.allOffer.data =  state.allOffer.data.filter((item)=>{
                console.log(`the item ID ${item.id}`)
                return item.id !== action.payload
            })
            toast.success('Product Delete Successfully') ; 
        },
        [delteOfferAPI.rejected ] : (state ,action)=>{
            toast.error('something happen error try again!!')
        },
    }
})

export default OfferSlice.reducer ; 


export const getAllOffer = state => state.OfferSlice.allOffer

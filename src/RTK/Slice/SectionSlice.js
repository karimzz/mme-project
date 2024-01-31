import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";




// For Update Section
export const updateSection = createAsyncThunk('section/updatesection' , async (args)=>{
    const response = await axios.post(`http://127.0.0.1:8000/api/section/${args.id}` , {
        title : args.title 
    } , {
        headers : {
            Authorization : `Bearer ${args.token}` 
        }
    })
    console.log(response.data)
    return {id:args.id , title:args.title}
})



// Delete Section
export const deleteSection = createAsyncThunk("section/deletesection" , async(args)=>{
    const response = await axios.delete(`http://127.0.0.1:8000/api/section/${args.id}` , {
        headers : {
            Authorization : `Bearer ${args.token}`  
        }
    })
    return args.id
})

// Add Section
export const addSection = createAsyncThunk("section/addsection" , async(args )=>{
    console.log(args)
    const response = await axios.post("http://127.0.0.1:8000/api/section" , {
        title : args.title 
    } , {
        headers : {
            Authorization : `Bearer ${args.token}` 
        }
    })
    return response.data

})


//  For Get All Section 
 export const getAllSection = createAsyncThunk("section/getAllSection" , async (args , thunkAPI)=>{
    const response = await axios.get("http://127.0.0.1:8000/api/section" , {
        headers : {
            Authorization : `Bearer ${args.token}` 
        }
    })

    return response.data
})


const initialState = {
    allSection : null , 
    load : false , 
    addSectionInfo : null ,
    currentSecion : null
} ;

const SectionSlice = createSlice({
    name : "section" ,
    initialState ,
    reducers : {
        addCurrent : (state , action)=>{
            state.currentSecion = action.payload ; 
            console.log(state.currentSecion) ; 
        }
    } 
    ,extraReducers : {
        // For Get All Sections 
        [getAllSection.fulfilled] : (state , action)=>{
            state.load = false
            state.allSection = action.payload
            
        } , 
        [getAllSection.pending ] : (state , action)=>{
            state.load = true
            
        } ,
        [getAllSection.rejected]  :(state , action)=>{
            state.load = false
        } , 
        // For Add Section 
        [addSection.fulfilled] : (state , action)=>{
            if(state.allSection ){
                state.allSection.push(action.payload.section);
                
            }else{
                state.allSection = action.payload.section
            }
            toast.success("Section Added Succesfully")
            console.log("Fuifiled")
        } , 
        [addSection.pending] : (state , action)=>{
            console.log("pending")
        } ,
        [addSection.rejected] : (state ,action)=>{
            console.log("Rejected")
        },
        // For Delete 
        [deleteSection.fulfilled ] : (state , action)=>{
            const ID = action.payload ;
            const newArr = state.allSection.filter((item)=>{
                return item.id !== ID ; 
            })
            state.allSection = newArr ;

            // For Notification
            toast.warning("Section Deleted Successfully")
            console.log("Fuilfiled")
        } ,
        [deleteSection.pending ] : (state , action)=>{
            
        } ,
        [deleteSection.rejected] : (state , action)=>{
            toast.error("Can't Delete Section")
        },
        // For Update Section
        [updateSection.fulfilled] : (state , action)=>{
            toast.success("Section Update Successfully")
            const currentIndex = state.allSection.findIndex((item)=>{
                return item.id === action.payload.id
            })
            state.allSection[currentIndex].title = action.payload.title
        } ,
        [updateSection.pending] : (state , action)=>{

        } ,
        [updateSection.rejected] : (state , action)=>{
            toast.error("Can't Update Section")
        }
    }
})

export default SectionSlice.reducer ; 

export const {addCurrent} = SectionSlice.actions ; 
import { configureStore } from "@reduxjs/toolkit";
import AuthSlice  from "./../Slice/AuthSlice"
import ForgetPasswordSlice from "../Slice/ForgetPasswordSlice";
import SectionSlice from "../Slice/SectionSlice";

const store = configureStore({
    reducer : {
        AuthSlice , 
        ForgetPasswordSlice ,
        SectionSlice
    }
})

export default store ; 

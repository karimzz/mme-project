import { configureStore } from "@reduxjs/toolkit";
import AuthSlice  from "./../Slice/AuthSlice"
import ForgetPasswordSlice from "../Slice/ForgetPasswordSlice";
import SectionSlice from "../Slice/SectionSlice";
import CategorySlice from "../Slice/CategorySlice";

const store = configureStore({
    reducer : {
        AuthSlice , 
        ForgetPasswordSlice ,
        SectionSlice ,
        CategorySlice
    }
})

export default store ; 

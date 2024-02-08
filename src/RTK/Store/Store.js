import { configureStore } from "@reduxjs/toolkit";
import AuthSlice  from "./../Slice/AuthSlice"
import ForgetPasswordSlice from "../Slice/ForgetPasswordSlice";
import SectionSlice from "../Slice/SectionSlice";
import CategorySlice from "../Slice/CategorySlice";
import ProductSlice  from "../Slice/ProductSlice";
import UserSlice from "../Slice/UserSlice";

const store = configureStore({
    reducer : {
        AuthSlice , 
        ForgetPasswordSlice ,
        SectionSlice ,
        CategorySlice  ,
        ProductSlice ,
        UserSlice
    }
})

export default store ; 

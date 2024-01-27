import { configureStore } from "@reduxjs/toolkit";
import AuthSlice  from "./../Slice/AuthSlice"
import ForgetPasswordSlice from "../Slice/ForgetPasswordSlice";

const store = configureStore({
    reducer : {
        AuthSlice , 
        ForgetPasswordSlice
    }
})

export default store ; 

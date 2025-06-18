import { configureStore } from "@reduxjs/toolkit";
import submissionReducer from '../Redux/submission'
import userReducer from '../Redux/user'
const store = configureStore({
    reducer:{
        user :userReducer,
        submmission :submissionReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;
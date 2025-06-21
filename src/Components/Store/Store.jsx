import { configureStore } from "@reduxjs/toolkit";
import submissionReducer from '../Redux/submission'
import userReducer from '../Redux/user'
import contactReducer from '../Redux/contact'
const store = configureStore({
    reducer:{
        user :userReducer,
        submmission :submissionReducer,
        contact: contactReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;
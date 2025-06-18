import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosinstacne from "../Connection/Api";
export const postsubmissiondata = createAsyncThunk(
    "postalldata",
    async()=>{
        const responce = await axiosinstacne.post('/sub')
        console.log(responce.data);
        return responce.data
    }
)
const submissionslice = createSlice({
    name:"submisiions",
    initialState:{
       submission :[],
       loading:false,
       singlesubmission: null,
        error: null

    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(postsubmissiondata.pending , (state , action)=>{
             state.submission = [];
        state.loading = true;
        state.error = null
        }),
            builder.addCase(postsubmissiondata.fulfilled,(state,action)=>{
                state.submission = [];
                state.error = null;
        state.loading = false;

              }),
               builder.addCase(postsubmissiondata.rejected,(state,action)=>{
                      state.submission = [];
                      state.error = action.error.message;
                    })

    }
});

export default submissionslice.reducer;
export const {logout} = submissionslice.actions;

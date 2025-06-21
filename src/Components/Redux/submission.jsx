import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosinstacne from "../Connection/Api";
import toast from "react-hot-toast";
export const postsubmissiondata = createAsyncThunk(
  "postalldata",
  async (submissionData, { rejectWithValue }) => {
    try {
      const response = await axiosinstacne.post("/sub", submissionData);
 
      toast.success(response.data.message)
      return response.data;
    } catch (error) {
      const errMessage =
        error.response?.data?.message || error.message || "Something went wrong";
      toast.error(errMessage); 
      return rejectWithValue(errMessage); 
    }
  }
);

export const getsubmissionsdata = createAsyncThunk(
  "getsubmissionsdata",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosinstacne.get("/getsub"); 
      return response.data; 
    } catch (error) {
      const errMessage =
        error.response?.data?.message || error.message || "Something went wrong";
      toast.error(errMessage); 
      return rejectWithValue(errMessage); 
    }
  }
);

export const getSingleSubmissionById = createAsyncThunk(
  "submission/getSingleById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosinstacne.get(`/singlesub/${id}`);
      console.log(response.data)
      return response.data.findata; 
    } catch (error) {
      const errMessage = error.response?.data?.message || "Something went wrong";
      return rejectWithValue(errMessage);
    }
  }
);

export const updateSubmissionById = createAsyncThunk(
  "submission/updateById",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axiosinstacne.put(`/updatesub/${id}`, updatedData);
      toast.success(response.data.message);
      return response.data.updatedSubmission;
    } catch (error) {
      const errMessage = error.response?.data?.message || "Update failed";
      toast.error(errMessage);
      return rejectWithValue(errMessage);
    }
  }
);

export const getLetters = createAsyncThunk(
  "submission/getLetters",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosinstacne.get("/submissions/letters");
      console.log(response.data)
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error fetching letters");
    }
  }
);

export const getPhotographs = createAsyncThunk(
  "submission/getPhotographs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosinstacne.get("/submissions/photographs");
      console.log(response.data)
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error fetching photographs");
    }
  }
);

const submissionslice = createSlice({
    name:"submisiions",
  initialState: {
       submission: [],
       photographs: [],
       letters: [],
       loading: false,
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
                    });
 builder.addCase(getsubmissionsdata.pending, (state) => {
  state.loading = true;
  state.error = null;
});
builder.addCase(getsubmissionsdata.fulfilled, (state, action) => {
  state.loading = false;
  state.submission = action.payload.data || action.payload; // adapt to your response
  state.error = null;
});
builder.addCase(getsubmissionsdata.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload;
});
builder.addCase(getSingleSubmissionById.pending, (state) => {
  state.loading = true;
  state.error = null;
});

builder.addCase(getSingleSubmissionById.fulfilled, (state, action) => {
  state.loading = false;
  state.singlesubmission = action.payload;
  state.error = null;
});

builder.addCase(getSingleSubmissionById.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload;
});
builder.addCase(updateSubmissionById.pending, (state) => {
  state.loading = true;
  state.error = null;
});

builder.addCase(updateSubmissionById.fulfilled, (state, action) => {
  state.loading = false;
  state.singlesubmission = action.payload;
  toast.success("Submission updated in store");
});

builder.addCase(updateSubmissionById.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload;
});
builder.addCase(getLetters.pending , (state , action)=>{
  state.loading = true;
});
  builder.addCase(getLetters.fulfilled, (state, action) => {
      state.loading = false;
      state.letters = action.payload.data || action.payload;
      state.error = null;
    });
builder.addCase(getLetters.rejected , (state , action)=>{
 state.loading = false;
        state.error = action.payload;
});
builder.addCase(getPhotographs.pending , (state , action)=>{
  state.loading = true;
});
 builder.addCase(getPhotographs.fulfilled, (state, action) => {
      state.loading = false;
      state.photographs = action.payload.data || action.payload;
      state.error = null;
    });
builder.addCase(getPhotographs.rejected , (state , action)=>{
 state.loading = false;
        state.error = action.payload;
});

    }
});

export default submissionslice.reducer;
export const {logout} = submissionslice.actions;

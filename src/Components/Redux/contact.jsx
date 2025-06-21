import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosinstacne from "../Connection/Api";

export const contactsubmitdata = createAsyncThunk(
  "contact/submit",
  async (contactData, { rejectWithValue }) => {
    try {
      const response = await axiosinstacne.post("/contact", contactData); 
      toast.success(response.data.message); // "your message had been submitted"
      return response.data;
    } catch (error) {
      const errMessage = error.response?.data?.message || "Something went wrong";
      toast.error(errMessage); 
      return rejectWithValue(errMessage);
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    resetContactState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(contactsubmitdata.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(contactsubmitdata.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(contactsubmitdata.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { resetContactState } = contactSlice.actions;
export default contactSlice.reducer;

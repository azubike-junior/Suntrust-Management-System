import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import Swal from "sweetalert2";
import { performanceManagementAppraisalUrl } from "../../../utils/helper";

const initialState = {
  error: "",
  loading: false,
  error2: "",
  data: {},
  isSuccessful: false,
};

export const updateCommentSection = createAsyncThunk(
  "updateCommentSection",
  async (data, { rejectWithValue }) => {
    const {payload, history, name } = data;
  
    try {
      const response = await axios.post(
        `${performanceManagementAppraisalUrl}/updateCommentSection`,
        payload
      );
      console.log(">>>>individu", response);
      if (response.status === 200) {
        Swal.fire(
          `${name} has been submitted`,
          "Successful!",
          "success"
        ).then(() => {
          history.push("/app/performanceManagement/staffAppraisal");
          clearKPIs();
        });
        return response.data;
      }
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const updateCommentSectionSlice = createSlice({
  name: "updateCommentSection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateCommentSection.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(updateCommentSection.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(updateCommentSection.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default updateCommentSectionSlice.reducer;

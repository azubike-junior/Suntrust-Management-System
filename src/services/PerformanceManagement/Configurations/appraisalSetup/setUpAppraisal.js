import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import Swal from "sweetalert2";
import { baseUrl } from "../../../../utils/helper";
// import { toggleAddDocumentModal } from "../../modals/modals";
// import { getDocuments } from "./getDocuments";

const initialState = {
  error: "",
  loading: false,
  error2: "",
  data: {},
  isSuccessful: false,
};

export const setupAppraisal = createAsyncThunk(
  "setupAppraisal",
  async ({ data, reset }, { rejectWithValue }) => {
    try {
      let status;
      if (data.status === "true") {
        status = "Opened";
      }
      status = "Closed";
      const response = await axios.post(`${baseUrl}/appraisals`, { data });
      if (response.status === 201) {
        Swal.fire(
          `Appraisal has been ${status}`,
          "Successful!",
          "success"
        ).then(() => {
          reset();
        });
        return response.data;
      }
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const setupAppraisalSlice = createSlice({
  name: "addDocument",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setupAppraisal.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(setupAppraisal.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(setupAppraisal.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default setupAppraisalSlice.reducer;

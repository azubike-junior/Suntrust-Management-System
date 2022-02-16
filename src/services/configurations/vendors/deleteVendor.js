import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import Swal from "sweetalert2";
import { configUrl } from "../../../utils/helper";
import { toggleDeleteVendorModal } from "../../modals/modals";
import { getVendors } from "./getVendors";

const initialState = {
  error: "",
  loading: false,
  error2: "",
  data: {},
  isSuccessful: false,
};

export const deleteVendor = createAsyncThunk(
  "deleteVendor",
  async (data, { rejectWithValue }) => {
    const { vendorId, dispatch } = data;
    try {
      const response = await axios.delete(
        `${configUrl}/DeleteVendor/id?Id=${vendorId}`
      );
      if (response.data.responseCode === "00") {
        dispatch(getVendors());
        dispatch(toggleDeleteVendorModal());
        return response.data;
      }
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const deleteVendorsSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteVendor.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(deleteVendor.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(deleteVendor.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default deleteVendorsSlice.reducer;

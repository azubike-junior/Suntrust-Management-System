import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import Swal from "sweetalert2";
import { toggleUpdateVendorModal } from "../../modals/modals";
import { getVendors } from "./getVendors.js";
import { configUrl } from "../../../utils/helper";

const initialState = {
  error: "",
  loading: false,
  error2: "",
  data: {},
  isSuccessful: false,
};

export const updateVendor = createAsyncThunk(
  "updateVendor",
  async (data, { rejectWithValue }) => {
    const { id, newData, dispatch } = data;
    try {
      const response = await axios.put(
        `${configUrl}/UpdateVendor/id?Id=${id}`,
        newData
      );
      if (response.data.responseCode === "00") {
        Swal.fire("Vendor has been updated", "Successful!", "success").then(
          (result) => {
            if (result.isConfirmed) {
              dispatch(getVendors());
              dispatch(toggleUpdateVendorModal());
            }
          }
        );
        return response.data;
      }
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const updateVendorsSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateVendor.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(updateVendor.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(updateVendor.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

export default updateVendorsSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import Swal from "sweetalert2";
import { configUrl } from "../../../utils/helper";
import { closeVendorModal } from "../../modals/modals";
import { getVendors } from "./getVendors";

const initialState = {
  error: "",
  loading: false,
  error2: "",
  data: {},
  isSuccessful: false,
};

export const addVendor = createAsyncThunk(
  "addVendor",
  async ({ data, dispatch }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${configUrl}/AddVendor`,
        data
      );

      if (response.data.responseCode === "00") {
        Swal.fire("Vendor has been added", "Successful!", "success").then(
          (result) => {
            if (result.isConfirmed) {
              dispatch(closeVendorModal());
              dispatch(getVendors());
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

const addVendorsSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addVendor.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(addVendor.fulfilled, (state, action) => {
      // dispatch(getVendors());
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(addVendor.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default addVendorsSlice.reducer;

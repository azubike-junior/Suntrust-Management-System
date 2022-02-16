import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import Swal from "sweetalert2";
import { configUrl } from "../../../utils/helper";
import { closeVendorModal } from "../../modals/modals";

const initialState = {
  error: "",
  loading: false,
  error2: "",
  data: [],
  isSuccessful: false,
};

export const getRequests = createAsyncThunk("getRequests", async () => {
  try {
    const response = await axios.get(`${configUrl}/GetAllExpenseRequest`);
    if (response.status === 200) {
      return response.data;
    }
    return response.data;
  } catch (e) {
    return rejectWithValue(e.response.data);
  }
});

const getRequestsSlice = createSlice({
  name: "getRequests",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRequests.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(getRequests.fulfilled, (state, action) => {
      // dispatch(getVendors());
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(getRequests.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default getRequestsSlice.reducer;

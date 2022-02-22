import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import Swal from "sweetalert2";
import { configUrl } from "../../../utils/helper";
import { toggleRequestModal } from "../../modals/modals";
import { getRequests } from "./getRequests";

const initialState = {
  error: "",
  loading: false,
  error2: "",
  data: {},
  isSuccessful: false,
};

export const addRequest = createAsyncThunk(
  "addRequest",
  async (data, { rejectWithValue }) => {
    const { requestData, dispatch, reset } = data;
    try {
      const response = await axios.post(
        `${configUrl}/AddExpenseRequest`,
        requestData
      );
      if (response.data.responseCode === "00") {
        Swal.fire("Request has been added", "Successful!", "success").then(
          (result) => {
            if (result.isConfirmed) {
              dispatch(toggleRequestModal());
              dispatch(getRequests());
              reset();
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

const addRequestSlice = createSlice({
  name: "addRequest",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addRequest.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(addRequest.fulfilled, (state, action) => {
      // dispatch(getVendors());
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(addRequest.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default addRequestSlice.reducer;

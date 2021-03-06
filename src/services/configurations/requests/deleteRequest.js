import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import Swal from "sweetalert2";
import { configUrl } from "../../../utils/helper";
import { toggleDeleteRequestModal } from "../../modals/modals";
import { getRequests } from "./getRequests";

const initialState = {
  error: "",
  loading: false,
  error2: "",
  data: {},
  isSuccessful: false,
};

export const deleteRequest = createAsyncThunk(
  "deleteRequest",
  async (data, { rejectWithValue }) => {
    console.log(">>>>>>>>Data", data);
    const { requestId, dispatch } = data;
    try {
      const response = await axios.delete(
        `${configUrl}/DeleteExpenseRequest/id?Id=${requestId}`
      );
      if (response.data.responseCode === "00") {
        dispatch(getRequests());
        dispatch(toggleDeleteRequestModal());
        return response.data;
      }
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const deleteRequestSlice = createSlice({
  name: "deleteRequest",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteRequest.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(deleteRequest.fulfilled, (state, action) => {
      // dispatch(getVendors());
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(deleteRequest.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default deleteRequestSlice.reducer;

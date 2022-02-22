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

export const getDocuments = createAsyncThunk("getRequests", async () => {
  try {
    const response = await axios.get(`${configUrl}/GetDocumentTypes`);
    if (response.status === 200) {
      return response.data;
    }
    return response.data;
  } catch (e) {
    return rejectWithValue(e.response.data);
  }
});

const getDocumentsSlice = createSlice({
  name: "getRequests",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDocuments.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(getDocuments.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(getDocuments.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default getDocumentsSlice.reducer;
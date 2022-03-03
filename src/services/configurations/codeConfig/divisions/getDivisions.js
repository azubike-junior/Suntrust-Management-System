import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import Swal from "sweetalert2";
import { codeConfigUrl, configUrl } from "../../../../utils/helper";
import { toggleAddDivisionModal } from "../../../modals/modals";

const initialState = {
  error: "",
  loading: false,
  error2: "",
  data: [],
  isSuccessful: false,
};

export const getDivision = createAsyncThunk("getDivision", async () => {
  try {
    const response = await axios.get(`${codeConfigUrl}/getAllDivision`);
    if (response.status === 200) {
      return response.data;
    }
    return response.data;
  } catch (e) {
    return e.response.data;
  }
});

const getDivisionSlice = createSlice({
  name: "divisions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDivision.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(getDivision.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(getDivision.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default getDivisionSlice.reducer;

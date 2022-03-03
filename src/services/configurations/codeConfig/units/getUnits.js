import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import Swal from "sweetalert2";
import { codeConfigUrl, configUrl } from "../../../../utils/helper";

const initialState = {
  error: "",
  loading: false,
  error2: "",
  data: [],
  isSuccessful: false,
};

export const getUnits = createAsyncThunk("getUnits", async () => {
  try {
    const response = await axios.get(`${codeConfigUrl}/getAllUnit`);
    if (response.status === 200) {
      return response.data;
    }
    return response.data;
  } catch (e) {
    return e.response.data;
  }
});

const getUnitsSlice = createSlice({
  name: "Units",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUnits.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(getUnits.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(getUnits.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default getUnitsSlice.reducer;
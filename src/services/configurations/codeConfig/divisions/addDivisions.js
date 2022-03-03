import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import Swal from "sweetalert2";
import { codeConfigUrl, configUrl } from "../../../../utils/helper";
import { toggleAddDivisionModal } from "../../../modals/modals";
import { getDivision } from "./getDivisions";

const initialState = {
  error: "",
  loading: false,
  error2: "",
  data: {},
  isSuccessful: false,
};

export const addDivision = createAsyncThunk(
  "addDivision",
  async ({ data, dispatch, reset }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${codeConfigUrl}/createNewDivision`,
        data
      );
      if (response.data.responseCode === "96") {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: "Division already Exists",
        });
      }
      if (response.data.responseCode === "00") {
        Swal.fire("Division has been added", "Successful!", "success").then(
          (result) => {
            if (result.isConfirmed) {
              dispatch(toggleAddDivisionModal());
              dispatch(getDivision());
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

const addDivisionSlice = createSlice({
  name: "divisions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addDivision.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(addDivision.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(addDivision.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default addDivisionSlice.reducer;

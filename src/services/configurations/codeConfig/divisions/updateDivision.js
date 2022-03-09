import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import Swal from "sweetalert2";
import { codeConfigUrl, configUrl } from "../../../../utils/helper";
import { toggleUpdateDivisionModal } from "../../../modals/modals";
import { getDivision } from "./getDivisions";

const initialState = {
  error: "",
  loading: false,
  error2: "",
  data: {},
  isSuccessful: false,
};

export const updateDivision = createAsyncThunk(
  "updateDivision",
  async ({ id, editData, dispatch, reset }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${codeConfigUrl}/updateDivision/${id}`,
        editData
      );
      if (response.data.responseCode === "96") {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: "Division already Exists",
          allowOutsideClick: false,
        });
      }
      if (response.data.responseCode === "00") {
        Swal.fire({
          title: "Division has been updated",
          text: "Successful!",
          icon: "success",
          allowOutsideClick: false,
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(toggleUpdateDivisionModal());
            dispatch(getDivision());
            reset();
          }
        });
        return response.data;
      }
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const updateDivisionSlice = createSlice({
  name: "Division",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateDivision.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(updateDivision.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(updateDivision.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default updateDivisionSlice.reducer;

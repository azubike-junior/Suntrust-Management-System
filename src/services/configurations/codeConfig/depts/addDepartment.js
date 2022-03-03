import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import Swal from "sweetalert2";
import { codeConfigUrl, configUrl } from "../../../../utils/helper";
import { toggleAddDepartmentModal } from "../../../modals/modals";
import { getDepartments } from "./getDepartments";

const initialState = {
  error: "",
  loading: false,
  error2: "",
  data: {},
  isSuccessful: false,
};

export const addDepartment = createAsyncThunk(
  "addDepartment",
  async ({ data, dispatch, reset }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${codeConfigUrl}/CreateNewDepartment`,
        data
      );
      if (response.data.responseCode === "96") {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: "Department already Exists",
        });
      }
      if (response.data.responseCode === "00") {
        Swal.fire("Department has been added", "Successful!", "success").then(
          (result) => {
            if (result.isConfirmed) {
              dispatch(toggleAddDepartmentModal());
              dispatch(getDepartments());
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

const addDepartmentSlice = createSlice({
  name: "Department",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addDepartment.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(addDepartment.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(addDepartment.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default addDepartmentSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import Swal from "sweetalert2";
import { codeConfigUrl, configUrl } from "../../../../utils/helper";
import { toggleUpdateDepartmentModal } from "../../../modals/modals";
import { getDepartments } from './getDepartments';

const initialState = {
  error: "",
  loading: false,
  error2: "",
  data: {},
  isSuccessful: false,
};

export const updateDepartment = createAsyncThunk(
  "editDepartment",
  async ({ id, editData, dispatch, reset }, { rejectWithValue }) => {
    console.log(id, editData);

    try {
      const response = await axios.patch(
        `${codeConfigUrl}/UpdateDepartment/${id}`,
        editData
      );
      if (response.data.responseCode === "96") {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: "Department already Exists",
          allowOutsideClick: false,
        });
      }
      if (response.data.responseCode === "00") {
        Swal.fire({
          title: "Department has been Updated",
          text: "Successful!",
          icon: "success",
          allowOutsideClick: false,
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(getDepartments());
            dispatch(toggleUpdateDepartmentModal());
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

const updateDepartmentSlice = createSlice({
  name: "Departments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateDepartment.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(updateDepartment.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(updateDepartment.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default updateDepartmentSlice.reducer;

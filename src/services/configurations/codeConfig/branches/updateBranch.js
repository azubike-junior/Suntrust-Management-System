import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import Swal from "sweetalert2";
import { codeConfigUrl, configUrl } from "../../../../utils/helper";
import { toggleUpdateBranchModal } from "../../../modals/modals";
import { getBranches } from "./getBranches";

const initialState = {
  error: "",
  loading: false,
  error2: "",
  data: {},
  isSuccessful: false,
};

export const updateBranch = createAsyncThunk(
  "editBranch",
  async ({ id, editData, dispatch, reset }, { rejectWithValue }) => {
    console.log(id, editData);

    try {
      const response = await axios.patch(
        `${codeConfigUrl}/UpdateBranch/${id}`,
        editData
      );
      if (response.data.responseCode === "96") {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: "Branch already Exists",
          allowOutsideClick: false,
        });
      }
      if (response.data.responseCode === "00") {
        Swal.fire({
          title: "Branch has been Updated",
          text: "Successful!",
          icon: "success",
          allowOutsideClick: false,
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(getBranches());
            dispatch(toggleUpdateBranchModal());
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

const updateBranchSlice = createSlice({
  name: "Branches",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateBranch.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(updateBranch.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(updateBranch.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default updateBranchSlice.reducer;

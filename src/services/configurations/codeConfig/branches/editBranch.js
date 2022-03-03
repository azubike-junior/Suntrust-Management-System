import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import Swal from "sweetalert2";
import { codeConfigUrl, configUrl } from "../../../../utils/helper";
import { toggleAddBranchModal } from "../../../modals/modals";
import { getBranches } from "./getBranches";

const initialState = {
  error: "",
  loading: false,
  error2: "",
  data: {},
  isSuccessful: false,
};

export const editBranch = createAsyncThunk(
  "editBranch",
  async ({id, editData, dispatch, reset }, { rejectWithValue }) => {
    console.log(id, editData);
    try {
      const response = await axios.post(
        `${codeConfigUrl}/UpdateBranch/${id}`,
        editData
      );
      if (response.data.responseCode === "96") {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: "Branch already Exists",
        });
      }
      if (response.data.responseCode === "00") {
        Swal.fire("Branch has been Updated", "Successful!", "success").then(
          (result) => {
            if (result.isConfirmed) {
              dispatch(toggleAddBranchModal());
              dispatch(getBranches());
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

const editBranchSlice = createSlice({
  name: "Branches",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(editBranch.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(editBranch.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(editBranch.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default editBranchSlice.reducer;

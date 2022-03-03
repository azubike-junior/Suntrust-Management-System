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

export const addBranch = createAsyncThunk(
  "addBranch",
  async ({ payload, dispatch, reset }, { rejectWithValue }) => {
      console.log(payload)
    try {
      const response = await axios.post(
        `${codeConfigUrl}/createNewBranch`,
        payload
      );
      if (response.data.responseCode === "96") {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: "Branch already Exists",
        });
      }
      if (response.data.responseCode === "00") {
        Swal.fire("Branch has been added", "Successful!", "success").then(
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

const addBranchSlice = createSlice({
  name: "Branches",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addBranch.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(addBranch.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(addBranch.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default addBranchSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import Swal from "sweetalert2";
import { baseUrl } from "./../../../../utils/helper";
import { getOrganizationalGoal } from './getOrganizationalGoal';

const initialState = {
  error: "",
  loading: false,
  error2: "",
  data: [],
  isSuccessful: false,
};

export const deleteOrganizationalGoal = createAsyncThunk(
  "deleteOrganizationalGoal",
  async ({ organizationalGoalId, dispatch }) => {
    try {
      const response = await axios.delete(
        `${baseUrl}/organizationalGoals/${organizationalGoalId}`
      );
      if (response.status === 200) {
        dispatch(getOrganizationalGoal());
        return response.data;
      }
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const deleteOrganizationalGoalSlice = createSlice({
  name: "deleteOrganizationalGoal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteOrganizationalGoal.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(deleteOrganizationalGoal.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(deleteOrganizationalGoal.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default deleteOrganizationalGoalSlice.reducer;

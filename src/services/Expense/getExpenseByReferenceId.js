import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { expenseUrl } from "../../utils/helper";
import { toggleDeleteExpenseModal } from "../modals/modals";
import { getAllExpenseByStaff } from "./getAllExpenseByStaffId";

const initialState = {
  error: "",
  loading: false,
  error2: "",
  data: {},
  isSuccessful: false,
};

export const getExpenseByReference = createAsyncThunk(
  "expense/getExpenseByReferenceId",
  async (referenceId, { rejectWithValue }) => {
    console.log(">>>>>>>>>>dleteeede", referenceId);

    try {
      const response = await axios.get(
        `${expenseUrl}/GetExpenseByReferenceId/id?id=${referenceId}`
      );
      console.log(">>>>>>response", response);
      if (response.data.responseCode === "00") {
        // dispatch(getAllExpenseByStaff({ id: 330 }));
        // dispatch(toggleDeleteExpenseModal());
        return response.data;
      }
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const getExpenseByReferenceSlice = createSlice({
  name: "expense/getExpenseByReferenceId",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getExpenseByReference.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(getExpenseByReference.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(getExpenseByReference.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default getExpenseByReferenceSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { expenseUrl } from "../../utils/helper";

const initialState = {
  error: "",
  loading: false,
  error2: "",
  data: [],
  isSuccessful: false,
};

export const getAllExpenseByStaff = createAsyncThunk(
  "expense/getExpenseByStaffs",
  async (data) => {
    const { id, status } = data;
    try {
      const response = await axios.get(
        !status
          ? `${expenseUrl}/GetExpensesByStaffId/id?staffId=${id}`
          : `${expenseUrl}/GetExpensesByStaffId/id?staffId=${id}&type=${status}`
      );
      if (response.status === 200) {
        return response.data;
      }
    } catch (e) {
      return e.response.data;
    }
  }
);

const getAllExpenseByStaffSlice = createSlice({
  name: "expense/getExpenseByStaffs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllExpenseByStaff.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(getAllExpenseByStaff.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(getAllExpenseByStaff.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default getAllExpenseByStaffSlice.reducer;

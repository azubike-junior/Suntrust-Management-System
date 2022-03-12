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

export const getAllExpenseByApprover = createAsyncThunk(
  "expense/getExpenseByApprover",
  async (data) => {
    const { id, status } = data;
    const staffId = id.padStart(3, '0')

    console.log(">>>>>>>it got here", staffId);

    try {
      const response = await axios.get(
        !status
          ? `${expenseUrl}/GetExpensesByApproverId/id?staffId=${staffId}`
          : `${expenseUrl}/GetExpensesByApproverId/id?staffId=${staffId}&type=${status}`
      );
      if (response.status === 200) {
        return response.data;
      }
    } catch (e) {
      return e.response.data;
    }
  }
);

const getAllExpenseByApproverSlice = createSlice({
  name: "expense/getExpenseByApprover",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllExpenseByApprover.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(getAllExpenseByApprover.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(getAllExpenseByApprover.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default getAllExpenseByApproverSlice.reducer;

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

export const deleteExpenseByReference = createAsyncThunk(
  "expense/deleteExpense",
  async (data, { rejectWithValue }) => {
    const { referenceId, dispatch } = data;
    console.log(">>>>>>>>>>dleteeede", referenceId, dispatch);

    try {
      const response = await axios.delete(
        `${expenseUrl}/DeleteExpenseByReference/id?reference=7eGZVPIEQtJIwrCs`
      );
      console.log(">>>>>>response", response);
      if (response.data.responseCode === "00") {
        dispatch(getAllExpenseByStaff({ id: 330 }));
        dispatch(toggleDeleteExpenseModal());
        return response.data;
      }
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const deleteExpenseSlice = createSlice({
  name: "expense/deleteExpense",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteExpenseByReference.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(deleteExpenseByReference.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(deleteExpenseByReference.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default deleteExpenseSlice.reducer;

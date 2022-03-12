import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import Swal from "sweetalert2";
import { expenseUrl } from "../../utils/helper";
import { toggleAddExpenseModal } from "../modals/modals";
import { getAllExpenseByStaffId } from "./getAllExpenseByStaffId";

const initialState = {
  error: "",
  loading: false,
  error2: "",
  data: {},
  isSuccessful: false,
};

export const submitExpense = createAsyncThunk(
  "submitExpense",
  async ({ formData, dispatch, reset }, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const response = await axios.post(
        `${expenseUrl}/submitExpense`,
        formData,
        config
      );
      console.log(">>>>>response", response);
      if (response.data.responseCode === "96") {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: "Expense can not be raised twice",
        });
      }
      if (response.data.responseCode === "00") {
        Swal.fire("Expense raised successfully", "Successful!", "success").then(
          (result) => {
            if (result.isConfirmed) {
              dispatch(toggleAddExpenseModal());
              dispatch(getAllExpenseByStaffId(330));
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

const submitExpenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(submitExpense.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(submitExpense.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(submitExpense.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default submitExpenseSlice.reducer;

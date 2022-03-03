import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import Swal from "sweetalert2";
import { codeConfigUrl, configUrl } from "../../../../utils/helper";
import { toggleAddUnitModal } from "../../../modals/modals";
import { getUnits } from "./getUnits";

const initialState = {
  error: "",
  loading: false,
  error2: "",
  data: {},
  isSuccessful: false,
};

export const addUnit = createAsyncThunk(
  "addUnit",
  async ({ data, dispatch, reset }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${codeConfigUrl}/CreateNewUnit`, data);
      if (response.data.responseCode === "96") {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: "Unit already Exists",
          allowOutsideClick: false,
        });
      }
      if (response.data.responseCode === "00") {
        Swal.fire({
          title: "Unit has been added",
          text: "Successful!",
          icon: "success",
          allowOutsideClick: false,
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(toggleAddUnitModal());
            dispatch(getUnits());
            reset();
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

const addUnitSlice = createSlice({
  name: "Unit",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addUnit.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(addUnit.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(addUnit.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default addUnitSlice.reducer;

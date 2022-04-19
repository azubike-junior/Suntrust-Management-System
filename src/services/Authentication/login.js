import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";

const initialState = {
  error: "",
  error2: "",
  isSuccessful: false,
  loading: false,
  response: {},
};

export const login = createAsyncThunk(
  "loginUser",
  async (data, { rejectWithValue }) => {
    const { email, password, history } = data;
    try {
      const response = await axios.post(
        `http://10.11.200.97/PerformanceManagement/Login?userName=${email}&password=${password}`,
        data
      );
      console.log(">>>>>loginResponse", response);
      if (response.status === 200) {
        // history.push("/app/performanceManagement/Appraisals");
        localStorage.setItem("cachedData", JSON.stringify(response.data));
        return response;
      } else {
        return response.data;
      }
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const loginSlice = createSlice({
  name: "loginReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = true;
      state.response = action.payload;
      state.loading = false;
      // localStorage.setItem("staff", JSON.stringify(action.payload));
      // localStorage.setItem("success", "true");
      //   action.payload.roleResponses.map((item) => {
      //     if (item.roleId === 5) {
      //       localStorage.setItem("role", "5");
      //     } else if (item.roleId === 4) {
      //       localStorage.setItem("role", "4");
      //     }
      //   });
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { handleNext, handlePrevious, setPage, openShow, closeShow } =
//   NextAndPreviousHandler.actions;
export default loginSlice.reducer;

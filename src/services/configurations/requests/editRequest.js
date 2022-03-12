import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";
import { configUrl } from "../../../utils/helper";
import { toggleEditRequestModal } from "../../modals/modals";
import { getRequests } from "./getRequests";

const initialState = {
  error: "",
  loading: false,
  error2: "",
  data: {},
  isSuccessful: false,
};

export const editRequest = createAsyncThunk(
  "editRequest",
  async (data, { rejectWithValue }) => {
    const { id, requestData, dispatch } = data;
    console.log(">>>>>data", data, dispatch);
    try {
      const response = await axios.put(
        `${configUrl}/UpdateExpenseRequest/id?Id=${id}`,
        requestData
      );
      if (response.data.responseCode === "00") {
        Swal.fire("Request has been updated", "Successful!", "success").then(
          (result) => {
            if (result.isConfirmed) {
              dispatch(toggleEditRequestModal());
              dispatch(getRequests());
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

const editRequestSlice = createSlice({
  name: "editRequest",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(editRequest.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(editRequest.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(editRequest.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default editRequestSlice.reducer;

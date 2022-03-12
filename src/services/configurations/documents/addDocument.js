import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import Swal from "sweetalert2";
import { configUrl } from "../../../utils/helper";
import { toggleAddDocumentModal } from "../../modals/modals";
import { getDocuments } from "./getDocuments";

const initialState = {
  error: "",
  loading: false,
  error2: "",
  data: {},
  isSuccessful: false,
};

export const addDocument = createAsyncThunk(
  "addDocument",
  async (data, { rejectWithValue }) => {
    const { documentName, dispatch } = data;
    console.log(">>>>>data", data, dispatch);
    try {
      const response = await axios.post(`${configUrl}/AddDocument`, {
        documentName,
      });
      console.log(">>>>>>response", response);
      if (response.status === 200) {
        Swal.fire("New Document has been added", "Successful!", "success").then(
          (result) => {
            if (result.isConfirmed) {
              dispatch(getDocuments());
              dispatch(toggleAddDocumentModal());
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

const addDocumentSlice = createSlice({
  name: "addDocument",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addDocument.rejected, (state, action) => {
      state.error = action.payload;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(addDocument.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(addDocument.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// export const { useRegisterMutation } = AuthHandler;
export default addDocumentSlice.reducer;

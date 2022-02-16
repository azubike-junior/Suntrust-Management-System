import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const initialState = {
  openVendor: false,
  openDeleteVendor: false,
  openUpdateVendor: false,
  openRequest: false,
  openEditRequest: false,
  openDeleteRequest: false,
  openDeleteDocument: false,
  openAddDocument: false,
  openEditDocument: false
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openVendorModal: (state) => {
      state.openVendor = true;
    },
    closeVendorModal: (state) => {
      state.openVendor = false;
    },
    toggleDeleteVendorModal: (state) => {
      state.openDeleteVendor = !state.openDeleteVendor;
    },
    toggleUpdateVendorModal: (state) => {
      state.openUpdateVendor = !state.openUpdateVendor;
    },
    toggleRequestModal: (state) => {
      state.openRequest = !state.openRequest;
    },
    toggleEditRequestModal: (state) => {
      state.openEditRequest = !state.openEditRequest;
    },
    toggleDeleteRequestModal: (state) => {
      state.openDeleteRequest = !state.openDeleteRequest;
    },
    toggleDeleteDocumentModal: (state) => {
      state.openDeleteDocument = !state.openDeleteDocument;
    },
    toggleAddDocumentModal: (state) => {
      state.openAddDocument = !state.openAddDocument;
    },
    toggleEditDocumentModal: (state) => {
      state.openEditDocument = !state.openEditDocument;
    },
  },
});

export const {
  openVendorModal,
  closeVendorModal,
  toggleDeleteVendorModal,
  toggleUpdateVendorModal,
  toggleRequestModal,
  toggleDeleteRequestModal,
  toggleEditRequestModal,
  toggleAddDocumentModal,
  toggleEditDocumentModal,
  toggleDeleteDocumentModal
} = modalSlice.actions;
export default modalSlice.reducer;

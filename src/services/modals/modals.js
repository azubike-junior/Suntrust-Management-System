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
  openEditDocument: false,
  openAddDivision: false,
  openAddBranch: false,
  openAddDepartment: false,
  openAddUnit: false,
  openAddStaff: false,
  openEditBranch: false,
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
    toggleAddDivisionModal: (state) => {
      state.openAddDivision = !state.openAddDivision;
    },
    toggleAddBranchModal: (state) => {
      state.openAddBranch = !state.openAddBranch;
    },
    toggleAddDepartmentModal: (state) => {
      state.openAddDepartment = !state.openAddDepartment;
    },
    toggleAddUnitModal: (state) => {
      state.openAddUnit = !state.openAddUnit;
    },
    toggleAddStaffModal: (state) => {
      state.openAddStaff = !state.openAddStaff;
    },
    toggleEditBranchModal: (state) => {
      state.openEditBranch = !state.openEditBranch;
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
  toggleDeleteDocumentModal,
  toggleAddBranchModal,
  toggleAddDivisionModal,
  toggleAddUnitModal,
  toggleAddDepartmentModal,
  toggleAddStaffModal,
  toggleEditBranchModal
} = modalSlice.actions;
export default modalSlice.reducer;

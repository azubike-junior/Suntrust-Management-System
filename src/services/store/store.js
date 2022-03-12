import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import getVendorsReducer from "../configurations/vendors/getVendors";
import addVendorReducer from "../configurations/vendors/addVendor";
import deleteVendorReducer from "../configurations/vendors/deleteVendor";
import updateVendorReducer from "../configurations/vendors/updateVendor";
import addRequestReducer from "../configurations/requests/addRequest";
import getRequestsReducer from "../configurations/requests/getRequests";
import getDocumentsReducer from "../configurations/documents/getDocuments";
import addDocumentReducer from "../configurations/documents/addDocument";
import modalReducer from "../modals/modals";
import { getRequestTypes } from "../configurations/requests/getRequestTypes";
import addDivisionsReducer from "../configurations/codeConfig/divisions/addDivisions";
import getDivisionsReducer from "../configurations/codeConfig/divisions/getDivisions";
import getBranchesReducer from "./../configurations/codeConfig/branches/getBranches";
import addBranchReducer from "./../configurations/codeConfig/branches/addBranch";
import getDepartmentsReducer from "./../configurations/codeConfig/depts/getDepartments";
import addDepartmentReducer from "./../configurations/codeConfig/depts/addDepartment";
import getUnitsReducer from "./../configurations/codeConfig/units/getUnits";
import addUnitReducer from "./../configurations/codeConfig/units/addUnit";
import updateBranchReducer from "../configurations/codeConfig/branches/updateBranch";
import updateUnitReducer from "./../configurations/codeConfig/units/updateUnit";
import updateDivisionReducer from "./../configurations/codeConfig/divisions/updateDivision";
import deleteRequestReducer from "./../configurations/requests/deleteRequest";
import editRequestReducer from "./../configurations/requests/editRequest";
import getAllExpenseByStaffReducer from "./../Expense/getAllExpenseByStaffId";
import submitExpenseReducer from "./../Expense/submitExpense";
import getAllExpenseByApproverReducer from "./../Expense/getAllExpenseByApprover";
import deleteExpenseReducer from "./../Expense/deleteExpenseByReference";
import getExpenseByReferenceReducer from "./../Expense/getExpenseByReferenceId";

import {
  getCodeConfigQuery,
  getCodesQueries,
} from "../configurations/codeConfig/getCodesQueries";

export const store = configureStore({
  reducer: {
    getAllExpenseByStaffReducer,
    [getRequestTypes.reducerPath]: getRequestTypes.reducer,
    [getCodesQueries.reducerPath]: getCodesQueries.reducer,
    [getCodeConfigQuery.reducerPath]: getCodeConfigQuery.reducer,
    getVendorsReducer,
    addVendorReducer,
    modalReducer,
    deleteVendorReducer,
    updateVendorReducer,
    addRequestReducer,
    getRequestsReducer,
    editRequestReducer,
    getDocumentsReducer,
    addDocumentReducer,
    addDivisionsReducer,
    getDivisionsReducer,
    getBranchesReducer,
    addBranchReducer,
    getDepartmentsReducer,
    addDepartmentReducer,
    getUnitsReducer,
    addUnitReducer,
    updateBranchReducer,
    updateUnitReducer,
    updateDivisionReducer,
    deleteRequestReducer,
    submitExpenseReducer,
    getAllExpenseByApproverReducer,
    deleteExpenseReducer,
    getExpenseByReferenceReducer
  },
  middleware: (gdm) =>
    gdm({
      serializableCheck: false,
    }),
  devTools: true,
});

setupListeners(store.dispatch);

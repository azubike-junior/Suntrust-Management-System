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

export const store = configureStore({
  reducer: {
    [getRequestTypes.reducerPath]: getRequestTypes.reducer,
    getVendorsReducer,
    addVendorReducer,
    modalReducer,
    deleteVendorReducer,
    updateVendorReducer,
    addRequestReducer,
    getRequestsReducer,
    getDocumentsReducer,
    addDocumentReducer,
  },
  // middleware: (gdm) => gdm().concat(openAccountApi.middleware),
  devTools: true,
});

setupListeners(store.dispatch);

import { Action, configureStore, combineReducers, ThunkAction } from "@reduxjs/toolkit";
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
import setupAppraisalReducer from "./../PerformanceManagement/Configurations/appraisalSetup/setUpAppraisal";
import { getPerformanceConfigQuery } from "./../PerformanceManagement/Configurations/getPerformanceConfigs";
import addOrganizationalGoalReducer  from './../PerformanceManagement/Configurations/organizationalGoal/addOrganizationalGoal';
import getOrganizationalGoalReducer from './../PerformanceManagement/Configurations/organizationalGoal/getOrganizationalGoal';
import teamGoalReducer from "./../PerformanceManagement/Configurations/teamGoal/addTeamGoal";
import getTeamGoalsReducer from "../PerformanceManagement/Configurations/teamGoal/getTeamGoals";
import getCategoryTypesReducer  from './../PerformanceManagement/Configurations/categoryType/getCategoryTypes';
import addCategoryTypeReducer from "./../PerformanceManagement/Configurations/categoryType/addCategoryType";
import getIndividualKpisReducer from "./../PerformanceManagement/Configurations/individualKpi/getIndividualKpi";
import addIndividualKpiReducer from "./../PerformanceManagement/Configurations/individualKpi/addIndividualKpi";
import getOrganizationalGoalsByCategoryReducer from "./../PerformanceManagement/Configurations/organizationalGoal/getOrganizationGoalByCategory";
import getTeamGoalsByOrganizationIdReducer from "./../PerformanceManagement/Configurations/teamGoal/getTeamGoalsByOrganizationalId";
import getKpiByCategoryIdReducer from "./../PerformanceManagement/StaffAppraisal/getKpiByCategoryId";
import getAppraisalsByStaffIdReducer from "./../PerformanceManagement/StaffAppraisal/getAppraisalsByStaffId";
import getAppraisalsBySupervisorIdReducer from "./../PerformanceManagement/StaffAppraisal/getAppraisalsBySupervisorId";
import getAppraisalByReferenceReducer from "../PerformanceManagement/StaffAppraisal/getAppraisalByReference";
import getTechnicalTrainingReducer from "./../PerformanceManagement/StaffAppraisal/getTechnicalTraining";
import getBehaviouralTrainingReducer from "./../PerformanceManagement/StaffAppraisal/getBehaviouralTraining";
import getStrengthsReducer from "./../PerformanceManagement/StaffAppraisal/getStrengths";
import updateAppraisalByReferenceReducer from "./../PerformanceManagement/StaffAppraisal/updateAppraisalByReference";
import getBehavioralMetricsReducer from './../PerformanceManagement/Configurations/behavioralMetric/getBehavioralMetric';
import addBehavioralMetricReducer from "./../PerformanceManagement/Configurations/behavioralMetric/addBehavioralMetric";
import getRecommendationsReducer from "./../PerformanceManagement/Configurations/recommendation/getRecommendation";
import addRecommendationReducer from "./../PerformanceManagement/Configurations/recommendation/addRecommendation";
import loginReducer from "./../Authentication/login";
import getAllDepartmentsReducer from "./../PerformanceManagement/hrReports/getAllDepartments";

import {
  getCodeConfigQuery,
  getCodesQueries,
} from "../configurations/codeConfig/getCodesQueries";

const performanceManagement = combineReducers({
  setupAppraisalReducer,
  addOrganizationalGoalReducer,
  getOrganizationalGoalReducer,
  teamGoalReducer,
  getTeamGoalsReducer,
  getCategoryTypesReducer,
  addCategoryTypeReducer,
  getIndividualKpisReducer,
  addIndividualKpiReducer,
  getOrganizationalGoalsByCategoryReducer,
  getTeamGoalsByOrganizationIdReducer,
  getKpiByCategoryIdReducer,
  getAppraisalsByStaffIdReducer,
  getAppraisalsBySupervisorIdReducer,
  getAppraisalByReferenceReducer,
  getBehaviouralTrainingReducer,
  getTechnicalTrainingReducer,
  getStrengthsReducer,
  updateAppraisalByReferenceReducer,
  getBehavioralMetricsReducer,
  addBehavioralMetricReducer,
  getRecommendationsReducer,
  addRecommendationReducer,
  getAllDepartmentsReducer
});

const authenticationManager = combineReducers({
  loginReducer
})

export const store = configureStore({
  reducer: {
    getAllExpenseByStaffReducer,
    [getRequestTypes.reducerPath]: getRequestTypes.reducer,
    [getCodesQueries.reducerPath]: getCodesQueries.reducer,
    [getCodeConfigQuery.reducerPath]: getCodeConfigQuery.reducer,
    [getPerformanceConfigQuery.reducerPath]: getPerformanceConfigQuery.reducer,
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
    getExpenseByReferenceReducer,
    performanceManagement,
    authenticationManager
  },
  middleware: (gdm) =>
    gdm({
      serializableCheck: false,
    }),
  devTools: true,
});

setupListeners(store.dispatch);

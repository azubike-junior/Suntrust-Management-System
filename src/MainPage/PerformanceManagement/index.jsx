/**
 * Crm Routes
 */
/* eslint-disable */
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import SetupAppraisal from "./Configurations/setupAppraisal";
import CategoryType from "./Configurations/categoryType/index";
import DepartmentGoal from "./Configurations/departmentGoal/index";
import IndividualKPI from "./Configurations/IndividualKpi";
import OrganizationalGoal from "./Configurations/organizationalGoal/index";
import TeamGoal from "./Configurations/teamGoal";
import UnitKPI from "./Configurations/unitKpi";
import StaffAppraisalReview from "./NewAppraisalReview";
import StaffsAppraisals from "./MyStaffsAppraisals";
import StaffAppraisal from "./NewAppraisal";
import SupervisorAppraisalReview2 from './SupervisorReview2/index';
import Appraisals from './Appraisals/index';
import AppraiseeUpdatedReview from './AppraiseeUpdatedReview/index';
import PreProcessAppraisal from './PreProcessAppraisal/index';
import Trainings from "./Configurations/Trainings";
import StaffAppraisalDetail from './StaffAppraisalDetails/index';
import PastRecords from './HrReports/PastRecords/index';
import CurrentReports from "./HrReports/CurrentReports";

const PerformanceManagementRoute = ({ match }) => (
  <Switch>
    <Redirect
      exact
      from={`${match.url}/`}
      to={`${match.url}/performanceManagement`}
    />
    <Route path={`${match.url}/config/setupAppraisal`} component={SetupAppraisal} />
     <Route path={`${match.url}/config/Trainings`} component={Trainings} />
    <Route path={`${match.url}/config/categoryType`} component={CategoryType} />
    <Route
      path={`${match.url}/config/departmentGoal`}
      component={DepartmentGoal}
    />
    <Route path={`${match.url}/config/teamGoal`} component={TeamGoal} />
    <Route
      path={`${match.url}/config/individualKpi`}
      component={IndividualKPI}
    />
    <Route
      path={`${match.url}/config/departmentGoal`}
      component={DepartmentGoal}
    />
    <Route
      path={`${match.url}/config/organizationalGoal`}
      component={OrganizationalGoal}
    />
    <Route path={`${match.url}/config/unitKpi`} component={UnitKPI} />
    <Route path={`${match.url}/Appraisals`} component={Appraisals} />
    <Route path={`${match.url}/HrReports/pastRecords`} component={PastRecords} />
    <Route path={`${match.url}/HrReports/currentReports`} component={CurrentReports} />
    <Route path={`${match.url}/staffAppraisalReview`} component={StaffAppraisalReview}/>
    <Route path={`${match.url}/supervisorAppraisalReview2/:appraisalReference`} component={SupervisorAppraisalReview2} />
    <Route path={`${match.url}/preprocessAppraisal/:appraisalReference`} component={PreProcessAppraisal} />
   <Route path={`${match.url}/staffAppraisalDetail/:appraisalReference`} component={StaffAppraisalDetail} />
    <Route path={`${match.url}/appraiseeUpdatedReview/:appraisalReference`} component={AppraiseeUpdatedReview} />
    <Route path={`${match.url}/staffAppraisal`} component={StaffAppraisal} />
    <Route path={`${match.url}/allStaffAppraisals`} component={StaffsAppraisals} />
    {/* <Route path={`${match.url}/staffAppraisalDetail/:appraisalReference`} component={StaffAppraisalDetail} /> */}
  </Switch>
);

export default PerformanceManagementRoute;

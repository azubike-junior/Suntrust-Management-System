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
import StaffAppraisal from "./StaffAppraisal/index";
import StaffAppraisalDetail from "./StaffAppraisalDetail";
import StaffAppraisalReview from "./StaffAppraisalReview";
import StaffsAppraisals from "./StaffsAppraisals";
import SupervisorAppraisal from "./SupervisorAppraisal";
import SupervisorAppraisalReview from "./SupervisorAppraisalReview";

const PerformanceManagementRoute = ({ match }) => (
  <Switch>
    <Redirect
      exact
      from={`${match.url}/`}
      to={`${match.url}/performanceManagement`}
    />
    <Route path={`${match.url}/config/setupAppraisal`} component={SetupAppraisal} />
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
    <Route path={`${match.url}/staffAppraisal`} component={StaffAppraisal} />
    <Route path={`${match.url}/staffAppraisalReview`} component={StaffAppraisalReview}/>
    <Route path={`${match.url}/supervisorAppraisal`} component={SupervisorAppraisal} />
    <Route path={`${match.url}/supervisorAppraisalReview`} component={SupervisorAppraisalReview} />
    <Route path={`${match.url}/allStaffAppraisals`} component={StaffsAppraisals} />
    <Route path={`${match.url}/staffAppraisalDetail`} component={StaffAppraisalDetail} />

  </Switch>
);

export default PerformanceManagementRoute;

/**
 * Crm Routes
 */
/* eslint-disable */
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Appraisal from "./Configurations/appraisal";
import CategoryType from "./Configurations/categoryType/index";
import DepartmentGoal from "./Configurations/departmentGoal/index";
import OrganizationalGoal from "./Configurations/organizationalGoal/index";
import UnitKPI from "./Configurations/unitKpi";
import StaffAppraisal from "./StaffAppraisal/index";

const PerformanceManagementRoute = ({ match }) => (
  <Switch>
    <Redirect
      exact
      from={`${match.url}/`}
      to={`${match.url}/performanceManagement`}
    />
    <Route path={`${match.url}/config/appraisal`} component={Appraisal} />
    <Route path={`${match.url}/config/categoryType`} component={CategoryType} />
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
  </Switch>
);

export default PerformanceManagementRoute;

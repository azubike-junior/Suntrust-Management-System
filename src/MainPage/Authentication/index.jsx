/**
 * Crm Routes
 */
/* eslint-disable */
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import SetupAppraisal from "./Configurations/setupAppraisal";
import CategoryType from "./Configurations/categoryType/index";
import DepartmentGoal from "./Configurations/departmentGoal/index";
import Loginpage from './LoginPage/index';

const AuthenticationRoute = ({ match }) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/Authentication`} />
    <Route
      path={`${match.url}/login`}
      component={Loginpage}
    />
  </Switch>
);

export default AuthenticationRoute;

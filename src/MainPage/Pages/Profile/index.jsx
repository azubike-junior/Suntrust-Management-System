/**
 * Tables Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import EmployeeProfile from "./employeeprofile"
import ClientProfile from "./clientprofile"
import ExpenseProfile from './expenseProfile';
import RequestProfile from './requestProfile';


const subscriptionroute = ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/employee-profile`} />
        <Route path={`${match.url}/employee-profile`} component={EmployeeProfile} />
        <Route path={`${match.url}/client-profile`} component={ClientProfile} />
        <Route path={`${match.url}/expense-profile`} component={ExpenseProfile} />
        <Route path={`${match.url}/request-profile`} component={RequestProfile} />

    </Switch>
);

export default subscriptionroute;

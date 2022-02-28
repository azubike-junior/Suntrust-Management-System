/**
 * Crm Routes
 */
/* eslint-disable */
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Expense from "./expenses";
import Leades from "./leades";
import Tickets from "./tickets";
import TicketView from "./ticketview";
import MyRequests from "./myrequests";
import ExpenseRequest from "./expenseRequests";
import PersonnelConfiguration from "./personnelconfig";
import PersonnelSetup from "./personnelSetup";
import ApproversPage from "./approversPage_Snr";
import ApprovedExpenseRequest from "./approved_expense_requests";
import ApproversPageInit from "./approversPage_Init";
import ApprovedInitExpenseRequest from "./approved_init_expense_requests";

const EmployeeRoute = ({ match }) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/clients`} />
    <Route path={`${match.url}/expenses`} component={Expense} />
    <Route path={`${match.url}/leads`} component={Leades} />
    <Route path={`${match.url}/tickets`} component={Tickets} />
    <Route path={`${match.url}/ticket-view`} component={TicketView} />
    <Route path={`${match.url}/myrequests`} component={MyRequests} />
    <Route path={`${match.url}/expenseRequests`} component={ExpenseRequest} />
    <Route
      path={`${match.url}/personnelconfig`}
      component={PersonnelConfiguration}
    />
    <Route path={`${match.url}/personnelSetup`} component={PersonnelSetup} />
    <Route path={`${match.url}/approversPage_Snr`} component={ApproversPage} />
    <Route
      path={`${match.url}/approved_expense_requests/:id`}
      component={ApprovedExpenseRequest} 
    />
    <Route
      path={`${match.url}/approversPage_Init`}
      component={ApproversPageInit}
    />
    <Route 
      path={`${match.url}/approved_init_expense_requests`}
      component={ApprovedInitExpenseRequest}
    />
  </Switch>
);

export default EmployeeRoute;

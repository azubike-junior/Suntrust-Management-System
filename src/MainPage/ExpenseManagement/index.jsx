/**
 * Crm Routes
 */
/* eslint-disable */
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Expenses from "./Expenses";
// import Leades from "./leades";
// import Tickets from "./tickets";
// import TicketView from "./ticketview";
// import MyRequests from "./myrequests";
import ApproveExpense from "./ApproveExpense";
import PersonnelConfiguration from "./PersonnelConfig";
import PersonnelSetup from "./personnelSetup";
// import ApproversPage from "./approversPage_Snr";
import ExpenseDetails from "./ExpenseDetail";
// import InitiatorPage from "./InitiatorPage";
// import ApprovedInitExpenseRequest from "./approved_init_expense_requests";
// import ExpenseDetails from "./ExpenseDetail/index";
// import ExpenseConfigRoute from "./Configurations";
import Vendors from "./Configurations/vendors";
import Requests from "./Configurations/requests";
import Documents from "./Configurations/documentType";
import Branches from "./Configurations/CodeConfig/branches";
import Departments from "./Configurations/CodeConfig/departments";
import Divisions from "./Configurations/CodeConfig/divisions";
import Staffs from "./Configurations/CodeConfig/staffs";
import Units from "./Configurations/CodeConfig/units";
import CompleteJobOrder from "./CompleteJobOrder/index";

const ExpenseManagementRoute = ({ match }) => (
  <Switch>
    <Redirect
      exact
      from={`${match.url}/`}
      to={`${match.url}/expenseManagement`}
    />
    {/* <Route path={`${match.url}/`} component={ExpenseConfigRoute} /> */}
    <Route path={`${match.url}/config/vendors`} component={Vendors} />
    <Route path={`${match.url}/config/requests`} component={Requests} />
    <Route path={`${match.url}/config/document_type`} component={Documents} />
    <Route path={`${match.url}/config/branches`} component={Branches} />
    <Route path={`${match.url}/config/departments`} component={Departments} />
    <Route path={`${match.url}/config/divisions`} component={Divisions} />
    <Route path={`${match.url}/config/staffs`} component={Staffs} />
    <Route path={`${match.url}/config/units`} component={Units} />

    <Route path={`${match.url}/expenses`} component={Expenses} />
    {/* <Route path={`${match.url}/leads`} component={Leades} />
    <Route path={`${match.url}/tickets`} component={Tickets} />
    <Route path={`${match.url}/ticket-view`} component={TicketView} />
    <Route path={`${match.url}/myrequests`} component={MyRequests} /> */}
    <Route path={`${match.url}/approveExpense`} component={ApproveExpense} />
    <Route
      path={`${match.url}/personnelconfig`}
      component={PersonnelConfiguration}
    />
    <Route path={`${match.url}/personnelSetup`} component={PersonnelSetup} />
    {/* <Route path={`${match.url}/approversPage_Snr`} component={ApproversPage} /> */}
    <Route
      path={`${match.url}/expenseDetails/:referenceId`}
      component={ExpenseDetails}
    />
    <Route
      path={`${match.url}/completeJobOrder`}
      component={CompleteJobOrder}
    />
    {/* <Route
      path={`${match.url}/expenseDetails/initiator`}
      component={InitiatorPage}
    /> */}
    {/* <Route
      path={`${match.url}/approved_init_expense_requests`}
      component={ApprovedInitExpenseRequest}
    /> */}
  </Switch>
);

export default ExpenseManagementRoute;

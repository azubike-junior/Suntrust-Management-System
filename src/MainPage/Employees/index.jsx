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
import Appraisal from './appraisal';
import Category_Type from './category_type';
import Organizational_Goal from './organizational_goal';
import Department_Goal from './department_goal';
import Unit_KPI from './unit_kpi';
import Staff_Appraisal from './staff_Appraisal';

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
     <Route path={`${match.url}/appraisal`} component={Appraisal} />
      <Route path={`${match.url}/category_type`} component={Category_Type} />
      <Route path={`${match.url}/organizational_goal`} component={Organizational_Goal} />
      <Route path={`${match.url}/department_goal`} component={Department_Goal} />
      <Route path={`${match.url}/unit_kpi`} component={Unit_KPI} />
      <Route path={`${match.url}/staff_Appraisal`} component={Staff_Appraisal} />
  </Switch>

// import Vendors from './vendors';
// import Expense from "./expenses"
// import Request from "./requests"
// import Vendors_List from './vendors_list';
// import Leades from './leades';
// import Tickets from './tickets';
// import TicketView from './ticketview';
// import Documents from './document_type';
// import Regions from './regions';
// import Branches from './branches';
// import Departments from './departments';
// import Units from './units';
// import Staff from './staff';
// import MyRequests from './myrequests';
// import ExpenseRequest from './expenseRequests';
// import PersonnelConfiguration from './personnelconfig';
// import PersonnelSetup from './personnelSetup';
// import ApproversPage from './approversPage_Snr';
// import ApprovedExpenseRequest from './approved_expense_requests';
// import ApproversPageInit from './approversPage_Init';
// import ApprovedInitExpenseRequest from './approved_init_expense_requests';


// const EmployeeRoute = ({ match }) => (
//    <Switch>
//       <Redirect exact from={`${match.url}/`} to={`${match.url}/clients`} />
//       <Route path={`${match.url}/vendors`} component={Vendors} />
//       <Route path={`${match.url}/expenses`} component={Expense} />
//       <Route path={`${match.url}/requests`} component={Request} />
//       <Route path={`${match.url}/vendors-list`} component={Vendors_List} />
//       <Route path={`${match.url}/leads`} component={Leades} />
//       <Route path={`${match.url}/tickets`} component={Tickets} />
//       <Route path={`${match.url}/ticket-view`} component={TicketView} />
//       <Route path={`${match.url}/document_type`} component={Documents} />
//       <Route path={`${match.url}/regions`} component={Regions} />
//       <Route path={`${match.url}/branches`} component={Branches} />
//       <Route path={`${match.url}/departments`} component={Departments} />
//       <Route path={`${match.url}/units`} component={Units} />
//       <Route path={`${match.url}/staff`} component={Staff} />
//       <Route path={`${match.url}/myrequests`} component={MyRequests} />
//       <Route path={`${match.url}/expenseRequests`} component={ExpenseRequest} />
//       <Route path={`${match.url}/personnelconfig`} component={PersonnelConfiguration} />
//       <Route path={`${match.url}/personnelSetup`} component={PersonnelSetup} />
//       <Route path={`${match.url}/approversPage_Snr`} component={ApproversPage} />
//       <Route path={`${match.url}/approved_expense_requests`} component={ApprovedExpenseRequest} />
//       <Route path={`${match.url}/approversPage_Init`} component={ApproversPageInit} />
//       <Route path={`${match.url}/approved_init_expense_requests`} component={ApprovedInitExpenseRequest} />
//    </Switch>
);


export default EmployeeRoute;

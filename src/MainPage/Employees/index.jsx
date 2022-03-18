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
import Team_Goal from './team_goal';
import Unit_KPI from './unit_kpi';
import Individual_KPI from './individual_kpi';
import Staff_Appraisal from './staff_Appraisal';
import Supervisor_Self_Appraisal from './super_self_Appraisal';
import MyStaffAppraisals from './my_staff_Appraisal';
import Staff_Appraisal_Review from './staff_Appraisal_review';
import Staff_Appraisal_Detail from './staff_Appraisal_detail';
import Super_Self_Review from './super_self_review';

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
      <Route path={`${match.url}/team_goal`} component={Team_Goal} />
      <Route path={`${match.url}/unit_kpi`} component={Unit_KPI} />
      <Route path={`${match.url}/individual_kpi`} component={Individual_KPI} />
      <Route path={`${match.url}/staff_Appraisal`} component={Staff_Appraisal} />
<<<<<<< HEAD
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
=======
      <Route path={`${match.url}/super_self_Appraisal`} component={Supervisor_Self_Appraisal} />
      <Route path={`${match.url}/my_staff_Appraisal`} component={MyStaffAppraisals} />
      <Route path={`${match.url}/staff_Appraisal_review`} component={Staff_Appraisal_Review} />
      <Route path={`${match.url}/staff_Appraisal_detail`} component={Staff_Appraisal_Detail} />
      <Route path={`${match.url}/super_self_review`} component={Super_Self_Review} />

   </Switch>
>>>>>>> 21902ad066caf1e6eba57255afe24c82b1384ff5
);


export default EmployeeRoute;

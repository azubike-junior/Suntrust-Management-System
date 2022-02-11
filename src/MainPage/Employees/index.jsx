/**
 * Crm Routes
 */
/* eslint-disable */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Vendors from './vendors';
import Expense from "./expenses"
import Request from "./requests"
import Vendors_List from './vendors_list';
import Leades from './leades';
import Tickets from './tickets';
import TicketView from './ticketview';
import Documents from './document_type';

const EmployeeRoute = ({ match }) => (
   <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/clients`} />
      <Route path={`${match.url}/vendors`} component={Vendors} />
      <Route path={`${match.url}/expenses`} component={Expense} />
      <Route path={`${match.url}/requests`} component={Request} />
      <Route path={`${match.url}/vendors-list`} component={Vendors_List} />
      <Route path={`${match.url}/document_type`} component={Documents} />
      <Route path={`${match.url}/leads`} component={Leades} />
      <Route path={`${match.url}/tickets`} component={Tickets} />
      <Route path={`${match.url}/ticket-view`} component={TicketView} />
   </Switch>
);

export default EmployeeRoute;

/**
 * Signin Firebase
 */

import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Staff_Appraisal = (props) => {
  const { location } = props;
  let pathname = location.pathname;

  return (
    <div>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <Helmet>
          <title>User Dashboard - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Appraisals</h4>
                <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#process_tab"
                      data-toggle="tab"
                    >
                      Process
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#customer_tab"
                      data-toggle="tab"
                    >
                      Customer
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#financial_tab"
                      data-toggle="tab"
                    >
                      Financial
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#capacity_dev_tab"
                      data-toggle="tab"
                    >
                      Capacity Development
                    </a>
                  </li>
                </ul>

                <div className="tab-content">
                  {/* Category 1 tab contents show here */}
                  <div className="tab-pane show active" id="process_tab">
                    <div className="row">
                      <div className="col-lg-12">
                        <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#organized_goal_tab"
                              data-toggle="tab"
                            >
                              Organizational Goals
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#department_goal_tab"
                              data-toggle="tab"
                            >
                              Department Goals
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              href="#unit_kpi_tab"
                              data-toggle="tab"
                            >
                              Individual KPI
                            </a>
                          </li>
                        </ul>

                        <div className="tab-content">
                          <div className="tab-pane" id="organized_goal_tab">
                            <div className="m-t-10 m-b-20">
                              <h4 style={{ textDecorationLine: "underline" }}>
                                Organizational Goals
                              </h4>
                            </div>
                            <div className="">
                              <ol>
                                <li className="m-b-10">
                                  Codified and Automated Processes and Manuals
                                </li>
                                <li className="m-b-10">
                                  Zero Governace Breaches, Regulatory Penalties
                                  and Fines
                                </li>
                              </ol>
                            </div>
                          </div>

                          <div className="tab-pane" id="department_goal_tab">
                            <div className="m-t-10 m-b-20">
                              <h4 style={{ textDecorationLine: "underline" }}>
                                Department Goals
                              </h4>
                            </div>
                            <div className="">
                              <ol>
                                <li className="m-b-10">
                                  Ensure optimal performance on all core
                                  deliverables
                                </li>
                                <li className="m-b-10">
                                  Ensure total compliance with regulations and
                                  internal policies
                                </li>
                              </ol>
                            </div>
                          </div>

                          <div className="tab-pane show active" id="unit_kpi_tab" >
                            <div className="row">
                              <div className="col-lg-12 d-flex border-bottom pt-2 pb-2 font-weight-bolder">
                                <div className="col-lg-4">KPI</div>
                                <div className="col-lg-2 text-center">
                                  MEASURABLE TARGET
                                </div>
                                <div className="col-lg-2 text-center">
                                  WEIGHT
                                </div>
                                <div className="col-lg-2 text-center">
                                  APPRAISEE RATE
                                </div>
                                <div className="col-lg-2 text-center">
                                  APPRAISEE RESULT
                                </div>
                              </div>
                            </div>

                            <div className="row">


                              <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                <div className="col-lg-4">
                                  # Self-help reports built for internal
                                  customers within a period.
                                </div>
                                <div className="col-lg-2 text-center">40</div>
                                <div className="col-lg-2 text-center">10</div>
                                <div className="col-lg-2 text-center">
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="col-lg-2 text-center">10</div>
                              </div>

                              <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                <div className="col-lg-4">
                                  % Completion of all projects committed to for delivery
                                </div>
                                <div className="col-lg-2 text-center">40</div>
                                <div className="col-lg-2 text-center">10</div>
                                <div className="col-lg-2 text-center">
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="col-lg-2 text-center">10</div>
                              </div>

                              <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                <div className="col-lg-4">
                                  % Provision of quarterly DB/CBA capacity report
                                </div>
                                <div className="col-lg-2 text-center">40</div>
                                <div className="col-lg-2 text-center">10</div>
                                <div className="col-lg-2 text-center">
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="col-lg-2 text-center">10</div>
                              </div>

                              <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                <div className="col-lg-4">
                                  Maintain 95% success rate for changes in line with IT Governance  and quarterly capacity report of DB/CBA
                                </div>
                                <div className="col-lg-2 text-center">40</div>
                                <div className="col-lg-2 text-center">10</div>
                                <div className="col-lg-2 text-center">
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="col-lg-2 text-center">10</div>
                              </div>

                              <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                <div className="col-lg-4">
                                  Ensure database performance tuning / CBA ugrade is done quarterly for improved performance across the Bank's CBA and all databases
                                </div>
                                <div className="col-lg-2 text-center">40</div>
                                <div className="col-lg-2 text-center">10</div>
                                <div className="col-lg-2 text-center">
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="col-lg-2 text-center">10</div>
                              </div>

                              <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                <div className="col-lg-4">
                                  Generation of RCA within 24 hours of incident occurrence  for which root cause was determined.
                                </div>
                                <div className="col-lg-2 text-center">40</div>
                                <div className="col-lg-2 text-center">10</div>
                                <div className="col-lg-2 text-center">
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="col-lg-2 text-center">10</div>
                              </div>

                              <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                <div className="col-lg-4">
                                  "System Uptime. % DB/CBA availability".
                                </div>
                                <div className="col-lg-2 text-center">40</div>
                                <div className="col-lg-2 text-center">10</div>
                                <div className="col-lg-2 text-center">
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="col-lg-2 text-center">10</div>
                              </div>


                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Category 2 tab contents show here */}
                  <div className="tab-pane" id="customer_tab">
                    <div className="row">
                      <div className="col-lg-12">
                        <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#cust_organized_goal_tab"
                              data-toggle="tab"
                            >
                              Organizational Goals
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#cust_department_goal_tab"
                              data-toggle="tab"
                            >
                              Department Goals
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              href="#cust_unit_kpi_tab"
                              data-toggle="tab"
                            >
                              Individual KPI
                            </a>
                          </li>
                        </ul>

                        <div className="tab-content">
                          <div className="tab-pane" id="cust_organized_goal_tab" >
                            <div className="m-t-10 m-b-20">
                              <h4 style={{ textDecorationLine: "underline" }}>
                                Organizational Goals
                              </h4>
                            </div>
                            <div className="">
                              <ol>
                                <li className="m-b-10"> External Net Promoter Score (Customer Experience) &gt; 70%
                                </li>
                              </ol>
                            </div>
                          </div>

                          <div className="tab-pane" id="cust_department_goal_tab" >
                            <div className="m-t-10 m-b-20">
                              <h4 style={{ textDecorationLine: "underline" }}>
                                Department Goals
                              </h4>
                            </div>
                            <div className="">
                              <ol>
                                <li className="m-b-10">
                                  Maintain excellent service delivery to
                                  internal customers (regulatory enquiries,
                                  error free offer letters, credit checks, etc)
                                </li>
                              </ol>
                            </div>
                          </div>

                          <div className="tab-pane show active" id="cust_unit_kpi_tab">
                            <div className="row">
                              <div className="col-lg-12 d-flex border-bottom pt-2 pb-2 font-weight-bolder">
                                <div className="col-lg-4">KPI</div>
                                <div className="col-lg-2 text-center">
                                  MEASURABLE TARGET
                                </div>
                                <div className="col-lg-2 text-center">
                                  WEIGHT
                                </div>
                                <div className="col-lg-2 text-center">
                                  APPRAISEE RATE
                                </div>
                                <div className="col-lg-2 text-center">
                                  APPRAISEE RESULT
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                <div className="col-lg-4">
                                  % Customer satisfaction
                                </div>
                                <div className="col-lg-2 text-center">40</div>
                                <div className="col-lg-2 text-center">10</div>
                                <div className="col-lg-2 text-center">
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="col-lg-2 text-center">10</div>
                              </div>

                              <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                <div className="col-lg-4">
                                  Service Desk Time to Resolve
                                </div>
                                <div className="col-lg-2 text-center">40</div>
                                <div className="col-lg-2 text-center">10</div>
                                <div className="col-lg-2 text-center">
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="col-lg-2 text-center">10</div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Category 3 tab contents show here */}
                  <div className="tab-pane" id="financial_tab">
                    <div className="row">
                      <div className="col-lg-12">
                        <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                          <li className="nav-item">
                            <a className="nav-link" href="#fin_organized_goal_tab" data-toggle="tab" >
                              Organizational Goals
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#fin_department_goal_tab" data-toggle="tab">
                              Department Goals
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link active" href="#fin_unit_kpi_tab" data-toggle="tab">
                              Individual KPI
                            </a>
                          </li>
                        </ul>

                        <div className="tab-content">
                          <div className="tab-pane" id="fin_organized_goal_tab">
                            <div className="m-t-10 m-b-20">
                              <h4 style={{ textDecorationLine: "underline" }}>
                                Organizational Goals
                              </h4>
                            </div>
                            <div className="">
                              <ol>
                                <li className="m-b-10">
                                  Total Customer Liabilities of N100 Billion
                                </li>
                                <li className="m-b-10">
                                  Profitability of N1 Billion
                                </li>
                                <li className="m-b-10">
                                  Profitability of N1 Billion
                                </li>
                                <li className="m-b-10">
                                  Profitability of N1 Billion
                                </li>
                                <li className="m-b-10">
                                  Profitability of N1 Billion
                                </li>
                              </ol>
                            </div>
                          </div>

                          <div
                            className="tab-pane"
                            id="fin_department_goal_tab"
                          >
                            <div className="m-t-10 m-b-20">
                              <h4 style={{ textDecorationLine: "underline" }}>
                                Department Goals
                              </h4>
                            </div>
                            <div className="">
                              <ol>
                                <li className="m-b-10">
                                  Drive balance sheet growth
                                </li>
                                <li className="m-b-10">
                                  Minimize operational losses due to data
                                  privacy and database security breaches
                                </li>
                                <li className="m-b-10">
                                  Achieve optimal Implementation of Opex
                                </li>
                                <li className="m-b-10">
                                  Achieve optimal Implementation of Capex
                                </li>
                                <li className="m-b-10">Drive cost savings</li>
                              </ol>
                            </div>
                          </div>

                          <div className="tab-pane show active" id="fin_unit_kpi_tab">
                            <div className="row">
                              <div className="col-lg-12 d-flex border-bottom pt-2 pb-2 font-weight-bolder">
                                <div className="col-lg-4">KPI</div>
                                <div className="col-lg-2 text-center">
                                  MEASURABLE TARGET
                                </div>
                                <div className="col-lg-2 text-center">
                                  WEIGHT
                                </div>
                                <div className="col-lg-2 text-center">
                                  APPRAISEE RATE
                                </div>
                                <div className="col-lg-2 text-center">
                                  APPRAISEE RESULT
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                <div className="col-lg-4">
                                  # Self-help reports built for internal
                                  customers within a period.
                                </div>
                                <div className="col-lg-2 text-center">40</div>
                                <div className="col-lg-2 text-center">10</div>
                                <div className="col-lg-2 text-center">
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="col-lg-2 text-center">10</div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Category 4 tab contents show here */}
                  <div className="tab-pane" id="capacity_dev_tab">
                    <div className="row">
                      <div className="col-lg-12">
                        <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#cap_organized_goal_tab"
                              data-toggle="tab"
                            >
                              Organizational Goals
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#cap_department_goal_tab"
                              data-toggle="tab"
                            >
                              Department Goals
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              href="#cap_unit_kpi_tab"
                              data-toggle="tab"
                            >
                              Individual KPI
                            </a>
                          </li>
                        </ul>

                        <div className="tab-content">
                          <div className="tab-pane" id="cap_organized_goal_tab">
                            <div className="m-t-10 m-b-20">
                              <h4 style={{ textDecorationLine: "underline" }}>
                                Organizational Goals
                              </h4>
                            </div>
                            <div className="">
                              <ol>
                                <li className="m-b-10">
                                  Human Capacity Development Index &gt; 70%
                                </li>
                              </ol>
                            </div>
                          </div>

                          <div className="tab-pane" id="cap_department_goal_tab">
                            <div className="m-t-10 m-b-20">
                              <h4 style={{ textDecorationLine: "underline" }}>
                                Department Goals
                              </h4>
                            </div>
                            <div className="">
                              <ol>
                                <li className="m-b-10">
                                  Pursue self-development as well as training
                                  hours on SunTrust Academy
                                </li>
                              </ol>
                            </div>
                          </div>

                          <div className="tab-pane show active" id="cap_unit_kpi_tab">
                            <div className="row">
                              <div className="col-lg-12 d-flex border-bottom pt-2 pb-2 font-weight-bolder">
                                <div className="col-lg-4">KPI</div>
                                <div className="col-lg-2 text-center">
                                  MEASURABLE TARGET
                                </div>
                                <div className="col-lg-2 text-center">
                                  WEIGHT
                                </div>
                                <div className="col-lg-2 text-center">
                                  APPRAISEE RATE
                                </div>
                                <div className="col-lg-2 text-center">
                                  APPRAISEE RESULT
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                <div className="col-lg-4">
                                  # Self-help reports built for internal
                                  customers within a period.
                                </div>
                                <div className="col-lg-2 text-center">40</div>
                                <div className="col-lg-2 text-center">10</div>
                                <div className="col-lg-2 text-center">
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="col-lg-2 text-center">10</div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="form-group col-lg-12 col-md-12 col-sm-12 m-t-50 m-b-20">
              <div className="d-flex align-items-center justify-content-center">
                <div className="col-lg-3 col-md-6 col-sm-12 m-b-10">
                  <Link to="/app/employees/staff_Appraisal_review" className='btn btn-block btn-primary font-weight-700'>PREVIEW</Link>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Header */}
        </div>
      </div>
      {/* /Page Content */}
      {/* /Page Wrapper */}
    </div>
  );
};
export default Staff_Appraisal;

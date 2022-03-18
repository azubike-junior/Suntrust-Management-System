/**
 * TermsCondition Page
 */
import React, { Component, useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Avatar_01, Avatar_02, Avatar_05, Avatar_09, Avatar_10, Avatar_11, Avatar_12, Avatar_13, Avatar_16, Avatar_19 } from '../../Entryfile/imagepath'

import { Table } from 'antd';
import 'antd/dist/antd.css';
import { itemRender, onShowSizeChange } from "../paginationfunction"
import "../antdstyle.css"
import Staff_Appraisal from './staff_Appraisal';

const Staff_Appraisal_Detail = () => {

    useEffect(() => {
        if ($('.select').length > 0) {
            $('.select').select2({
                minimumResultsForSearch: -1,
                width: '100%'
            });
        }
    });

    return (
        <div className="page-wrapper">
            <Helmet>
                <title>Client Profile - HRMS admin Template</title>
                <meta name="description" content="Reactify Blank Page" />
            </Helmet>
            {/* Page Content */}
            <div className="content container-fluid">

                {/* Page Header */}
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Appraisal Review</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/app/employees/my_staff_Appraisal">Back to Appraisal Page</Link>
                                </li>
                                <li className="breadcrumb-item active">Review</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* /Page Header */}

                <div className="card m-b-50">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="profile-view">

                                    {/* Table Header  Starts Here */}
                                    <div className="row">
                                        <div className="d-flex col-md-12">
                                            <h4 className="col-md-2">Staff Name:</h4>
                                            <h4 className="col-md-10">James McAvoy</h4>
                                        </div>

                                        <div className="d-flex col-md-12 m-b-10">
                                            <h4 className="col-md-2">Staff ID:</h4>
                                            <h4 className="col-md-10">ST-0019</h4>
                                        </div>
                                        <div className="col-lg-12 d-flex border-bottom pt-2 pb-2 font-weight-bolder" style={{ backgroundColor: '#DADADA' }}>
                                            <div className="col-lg-3">KPI</div>
                                            <div className="col-lg-2 text-center">
                                                MEASURABLE TARGET
                                            </div>
                                            <div className="col-lg-1 text-center">
                                                WEIGHT
                                            </div>
                                            <div className="col-lg-2 text-center">
                                                APPRAISEE RATE
                                            </div>
                                            <div className="col-lg-2 text-center">
                                                APPRAISEE RESULT
                                            </div>
                                            <div className="col-lg-1 text-center">
                                                SUPERVISOR RATING
                                            </div>
                                            <div className="col-lg-1 text-center">
                                                SUPERVISOR RESULT
                                            </div>
                                        </div>
                                    </div>
                                    {/* Table Header Ends Here */}

                                    {/* Process Review Starts Here */}
                                    <div className="row m-t-20">
                                        <div className="col-md-12 m-b-20">
                                            <h4 className="user-name" style={{ fontWeight: 'bolder', textDecoration: 'underline' }}>PROCESS</h4>
                                        </div>

                                        <div className='col-lg-12'>
                                            <div className="row">
                                                <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                                    <div className="col-lg-3">
                                                        # Self-help reports built for internal customers within a period.
                                                    </div>
                                                    <div className="col-lg-2 text-center">40</div>
                                                    <div className="col-lg-1 text-center">10</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>35</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                </div>

                                                <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                                    <div className="col-lg-3">
                                                        % Completion of all projects committed to for delivery.
                                                    </div>
                                                    <div className="col-lg-2 text-center">90%</div>
                                                    <div className="col-lg-1 text-center">15</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>35</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                </div>

                                                <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                                    <div className="col-lg-3">
                                                        % Provision of quarterly DB/CBA capacity report.
                                                    </div>
                                                    <div className="col-lg-2 text-center">100%</div>
                                                    <div className="col-lg-1 text-center">5</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>35</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                </div>

                                                <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                                    <div className="col-lg-3">
                                                        Maintain 95% success rate for changes in line with IT Governance  and quarterly capacity report of DB/CBA.
                                                    </div>
                                                    <div className="col-lg-2 text-center">95%</div>
                                                    <div className="col-lg-1 text-center">5</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>35</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                </div>

                                                <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                                    <div className="col-lg-3">
                                                        Ensure database performance tuning / CBA ugrade is done quarterly for improved performance across the Bank's CBA and all databases.
                                                    </div>
                                                    <div className="col-lg-2 text-center">100%</div>
                                                    <div className="col-lg-1 text-center">10</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>35</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                </div>

                                                <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                                    <div className="col-lg-3">
                                                        Generation of RCA within 24 hours of incident occurrence  for which root cause was determined.
                                                    </div>
                                                    <div className="col-lg-2 text-center">24hrs</div>
                                                    <div className="col-lg-1 text-center">5</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>35</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                </div>

                                                <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                                    <div className="col-lg-3">
                                                        "System Uptime. % DB/CBA availability"
                                                    </div>
                                                    <div className="col-lg-2 text-center">98%</div>
                                                    <div className="col-lg-1 text-center">8</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>35</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                </div>

                                                <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                                    <div className="col-lg-3">
                                                        % Audit Rating
                                                    </div>
                                                    <div className="col-lg-2 text-center">100%</div>
                                                    <div className="col-lg-1 text-center">5</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>35</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    {/* Process Review Ends Here */}


                                    {/* Customer Review Starts Here */}
                                    <div className="row m-t-50">
                                        <div className="col-md-12 m-b-20">
                                            <h4 className="user-name" style={{ fontWeight: 'bolder', textDecoration: 'underline' }}>CUSTOMER</h4>
                                        </div>

                                        <div className='col-lg-12'>
                                            <div className="row">
                                                <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                                    <div className="col-lg-3">
                                                        % Customer satisfaction
                                                    </div>
                                                    <div className="col-lg-2 text-center">80%</div>
                                                    <div className="col-lg-1 text-center">5</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>35</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                </div>

                                                <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                                    <div className="col-lg-3">
                                                        Service Desk Time to Resolve
                                                    </div>
                                                    <div className="col-lg-2 text-center">8 hours</div>
                                                    <div className="col-lg-1 text-center">5</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>35</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* Customer Review Ends Here */}


                                    {/* Financial Review Starts Here */}
                                    <div className="row m-t-50">
                                        <div className="col-md-12 m-b-20">
                                            <h4 className="user-name" style={{ fontWeight: 'bolder', textDecoration: 'underline' }}>FINANCIAL</h4>
                                        </div>

                                        <div className='col-lg-12'>
                                            <div className="row">
                                                <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                                    <div className="col-lg-3">
                                                        Value of deposit target.
                                                    </div>
                                                    <div className="col-lg-2 text-center">N150 million</div>
                                                    <div className="col-lg-1 text-center">10</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>35</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                </div>

                                                <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                                    <div className="col-lg-3">
                                                        Value of operational losses.
                                                    </div>
                                                    <div className="col-lg-2 text-center">N0</div>
                                                    <div className="col-lg-1 text-center">3</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>35</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                </div>

                                                <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                                    <div className="col-lg-3">
                                                        % Implementation of OpEx budget.
                                                    </div>
                                                    <div className="col-lg-2 text-center">100%</div>
                                                    <div className="col-lg-1 text-center">3</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>35</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                </div>

                                                <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                                    <div className="col-lg-3">
                                                        % Implementation of CapEx budget.
                                                    </div>
                                                    <div className="col-lg-2 text-center">&gt; 80%</div>
                                                    <div className="col-lg-1 text-center">3</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>35</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                </div>

                                                <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                                    <div className="col-lg-3">
                                                        % Cost savings on Budget.
                                                    </div>
                                                    <div className="col-lg-2 text-center">&gt; 5%</div>
                                                    <div className="col-lg-1 text-center">10</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>35</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    {/* Financial Review Ends Here */}


                                    {/* Capacity Development Review Starts Here */}
                                    <div className="row m-t-50 m-b-50">
                                        <div className="col-md-12 m-b-20">
                                            <h4 className="user-name" style={{ fontWeight: 'bolder', textDecoration: 'underline' }}>CAPACITY DEVELOPMENT</h4>
                                        </div>

                                        <div className='col-lg-12'>
                                            <div className="row">
                                                <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                                    <div className="col-lg-3">
                                                        # Relevant Professional Certifications/Trainings
                                                    </div>
                                                    <div className="col-lg-2 text-center">&gt; 1</div>
                                                    <div className="col-lg-1 text-center">5</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>35</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                </div>

                                                <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                                    <div className="col-lg-3">
                                                        # Completed Courses on SunTrust Academy.
                                                    </div>
                                                    <div className="col-lg-2 text-center">&gt; 36</div>
                                                    <div className="col-lg-1 text-center">5</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>35</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>10</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* Capacity Development Review Ends Here */}


                                    {/* Total Scores Review Starts Here */}
                                    <div className="row m-t-50" style={{ fontSize: '1.3em' }}>
                                        <div className='col-lg-12'>
                                            <div className="row">
                                                <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                                    <div className="col-lg-3" style={{ fontWeight: 'bolder' }}>
                                                        TOTAL
                                                    </div>
                                                    <div className="col-lg-2 text-center">&nbsp;</div>
                                                    <div className="col-lg-1 text-center">&nbsp;</div>
                                                    <div className="col-lg-2 text-center">&nbsp;</div>
                                                    <div className="col-lg-2 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>80%</div>
                                                    <div className="col-lg-1 text-center">&nbsp;</div>
                                                    <div className="col-lg-1 text-center" style={{ color: "#139b23", fontWeight: 'bolder' }}>87%</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* Total Scores Review Ends Here */}


                                    {/* Supervisor's Comments Starts Here */}
                                    <div className="row m-t-50">
                                        <div className='col-lg-12 m-b-10' style={{ fontSize: '1.2em' }}>
                                            <div className="row">

                                                <div className="col-lg-12 d-flex pt-2 pb-2">
                                                    <div className="col-lg-3" style={{ fontWeight: 'bolder', textDecoration: 'underline' }}>
                                                        SUPERVISOR COMMENTS
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-lg-12 pt-2 pb-2 m-b-30">
                                            <div className="col-lg-3 m-b-10">
                                                SUPERVISOR COMMENTS
                                            </div>
                                            <div className="col-lg-6">
                                                <textarea className="form-control" rows="3" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 pt-2 pb-2">
                                            <div className="col-lg-3 m-b-10">
                                                RECOMMENDATION
                                            </div>
                                            <div className="col-lg-4">
                                                <select className="select">
                                                    <option>Training</option>
                                                    <option>Maintain Status</option>
                                                    <option>Transfer to Unit Department</option>
                                                    <option>Terminate Employment</option>
                                                    <option>Advice to Resign</option>
                                                    <option>Send staff to Pool</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group col-lg-12 col-md-12 col-sm-12 m-t-20 m-b-20">
                                            <div className="col-lg-3 col-md-6 col-sm-12 m-b-10">
                                                <Link to="/app/employees/my_staff_Appraisal" className='btn btn-block btn-primary font-weight-700'>SUBMIT</Link>
                                            </div>
                                        </div>

                                    </div>
                                    {/* Supervisor's Comments Ends Here */}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* /Page Content */}

        </div>

    );
}
export default Staff_Appraisal_Detail;

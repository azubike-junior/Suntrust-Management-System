
import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Avatar_07 } from "../../Entryfile/imagepath"

import { Table } from 'antd';
import 'antd/dist/antd.css';
import { itemRender, onShowSizeChange } from "../paginationfunction"
import "../antdstyle.css"

const HR_Report = () => {

    const [data, setData] = useState([
        {
            id: 1, staff_id: "019", staff_name: "James McAvoy", app_date_submitted: "27-04-2022", supervisor_score: "87%",
        },
        {
            id: 2, staff_id: "022", staff_name: "Michael Jemigbon", app_date_submitted: "27-04-2022", supervisor_score: "83%",
        },
        {
            id: 3, staff_id: "034", staff_name: "Emmanuel Dennis", app_date_submitted: "27-04-2022", supervisor_score: "72%",
        }
    ]);

    useEffect(() => {
        if ($('.select').length > 0) {
            $('.select').select2({
                minimumResultsForSearch: -1,
                width: '100%'
            });
        }
    });



    // Table displayed on Expense Page
    const columns = [

        {
            title: 'Staff ID',
            dataIndex: 'staff_id',
            sorter: (a, b) => a.mobile.length - b.mobile.length,
        },
        {
            title: 'Staff Name',
            dataIndex: 'staff_name',
            render: (text, record) => (
                <h2 className="table-avatar">{text}</h2>
            ),
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: 'Date Submitted',
            dataIndex: 'app_date_submitted',
            render: (text, record) => (
                <h2 className="table-avatar">{text}</h2>
            ),
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: 'Appraisal Status',
            dataIndex: 'appraisal_status',
            sorter: (a, b) => a.employee_id.length - b.employee_id.length,
            render: (text, record) => (
                <div className="btn btn-white btn-sm btn-rounded action-label" aria-expanded="false">
                    <i className="fa fa-dot-circle-o text-danger mr-2" />
                    Submitted
                </div>
            ),
        },
        {
            title: 'Supervisor Score',
            dataIndex: 'supervisor_score',
            sorter: (a, b) => a.employee_id.length - b.employee_id.length,
        },
    ]


    return (
        <div className="page-wrapper">
            <Helmet>
                <title>HR Reports</title>
                <meta name="description" content="Login page" />
            </Helmet>


            {/* Page Content */}

            <div className="content container-fluid">

                {/* Page Header */}
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">HR Reports</h3>
                        </div>
                    </div>
                </div>
                {/* /Page Header */}



                {/* Filter Options */}

                <div className="m-b-10">
                    <div className='row d-flex'>
                        <div className='float-left d-flex col-lg-9'>
                            <div className="dropdown m-r-20 m-b-10">
                                <button className="btn btn-grey dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Filter By
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Department</a>
                                    <a className="dropdown-item" href="#">Appraisal Status</a>
                                </div>
                            </div>

                            <div className="dropdown m-b-10">
                                <button className="btn btn-grey dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Select Item
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="action-label dropdown-item" aria-expanded="false">
                                        <i className="fa fa-dot-circle-o text-danger mr-2" />
                                        Submitted - Awaiting Supervisor Score
                                    </a>
                                    <a className="action-label dropdown-item" aria-expanded="false">
                                        <i className="fa fa-dot-circle-o text-warning mr-2" />
                                        Pre-Processing - Awaiting Appraisee Comment
                                    </a>
                                    <a className="action-label dropdown-item" aria-expanded="false">
                                        <i className="fa fa-dot-circle-o text-primary mr-2" />
                                        Processing - Awaiting Supervisor Recommendation
                                    </a>
                                    <a className="action-label dropdown-item" aria-expanded="false">
                                        <i className="fa fa-dot-circle-o text-purple mr-2" />
                                        In-Progress - Awaiting 2nd level Supervisor Comment
                                    </a>
                                    <a className="action-label dropdown-item" aria-expanded="false">
                                        <i className="fa fa-dot-circle-o text-success mr-2" />
                                        Completed - End
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='float-right d-flex col-lg-2'>
                            <div className="dropdown m-r-20 m-b-10">
                                <button className="btn btn-grey dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Appraisal Month
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">January 2022</a>
                                    <a className="dropdown-item" href="#">February 2022</a>
                                    <a className="dropdown-item" href="#">March 2022</a>
                                </div>
                            </div>

                            <div className="dropdown m-b-10">
                                <button className="btn btn-primary" type="button" aria-haspopup="true" aria-expanded="false">
                                    Download
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Filter Options */}



                {/* Search Filter */}
                <div className="row filter-row">
                    <div className="col-lg-10 col-sm-10 col-md-10">
                        <div className="form-group form-focus">
                            <input type="text" className="form-control floating" />
                            <label className="focus-label">Search for a Staff (e.g. ST-0019)</label>
                        </div>
                    </div>

                    <div className="col-sm-2 col-md-2">
                        <a href="#" className="btn btn-suntrust btn-block"> Search </a>
                    </div>
                </div>
                {/* Search Filter */}

                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <Table className="table-striped"
                                pagination={{
                                    total: data.length,
                                    showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                                    showSizeChanger: true, onShowSizeChange: onShowSizeChange, itemRender: itemRender
                                }}
                                style={{ overflowX: 'auto' }}
                                columns={columns}
                                // bordered
                                dataSource={data}
                                rowKey={record => record.id}
                                onChange={console.log("change")}
                            />
                        </div>
                    </div>
                </div>

            </div>

            {/* /Page Content */}

        </div >
    );
}

export default HR_Report;

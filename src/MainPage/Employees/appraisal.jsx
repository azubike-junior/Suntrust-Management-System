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

const Appraisal = () => {

    const [data, setData] = useState([
        {
            id: 1, req_id: "0019", req_date: "23/02/2022", staff_id: "ST0021", amount_req: "25,000", desc_txt: "Travelling"
        }
    ]);

    const [expense_data, setExpenseRequestData] = useState([
        {
            id: 1, vendor_id: "0019", doc_type: "Travel Invoice", amount_req: "25,000", vendor_recomm: "Recommended"
        }
    ]);

    const [approve_data, setApproversData] = useState([
        {
            id: 1, approver_name: "Christopher Columbus", approver_comment: "I approve of this request and i advice the board to follow suite",
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
            title: 'Request ID',
            dataIndex: 'req_id',
            sorter: (a, b) => a.mobile.length - b.mobile.length,
        },
        {
            title: 'Request Date',
            dataIndex: 'req_date',
            render: (text, record) => (
                <h2 className="table-avatar">{text}</h2>
            ),
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: 'Staff ID',
            dataIndex: 'staff_id',
            sorter: (a, b) => a.employee_id.length - b.employee_id.length,
        },
        {
            title: 'Amount Requested',
            dataIndex: 'amount_req',
            sorter: (a, b) => a.employee_id.length - b.employee_id.length,
        },
        {
            title: 'Description',
            dataIndex: 'desc_txt',
            sorter: (a, b) => a.employee_id.length - b.employee_id.length,
        },
        {
            title: '',
            render: (text, record) => (
                <Link to="/app/employees/expenseRequests" className='btn btn-sm btn-outline-primary m-r-10'><i className="fa fa-eye m-r-5" />View Details</Link>
            ),
        },

    ]

    // Table displayed on Expense Requests Page
    const expense_columns = [

        {
            title: 'Vendor ID',
            dataIndex: 'vendor_id',
            sorter: (a, b) => a.mobile.length - b.mobile.length,
        },
        {
            title: 'Document Type',
            dataIndex: 'doc_type',
            sorter: (a, b) => a.employee_id.length - b.employee_id.length,
        },
        {
            title: 'Amount Requested',
            dataIndex: 'amount_req',
            sorter: (a, b) => a.employee_id.length - b.employee_id.length,
        },
        {
            title: 'Recommendation',
            dataIndex: 'vendor_recomm',
            sorter: (a, b) => a.employee_id.length - b.employee_id.length,
        },
        {
            title: 'Reason',
            dataIndex: 'vendor_reason',
            render: (text, record) => (
                <Link to="#" data-toggle="modal" data-target="#view_reason_modal" className='btn btn-sm btn-outline-primary m-r-10'>
                    <i className="fa fa-comments m-r-5" />Reason</Link>
            ),
            // sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: '',
            render: (text, record) => (
                <Link to="#" data-toggle="modal" data-target="#view_document" className='btn btn-sm btn-outline-primary m-r-10'>
                    <i className="fa fa-eye m-r-5" />View Document</Link>
            ),
        },

    ]

    // Table displayed on Expense Requests Page
    const approve_columns = [

        {
            title: 'Approver Name',
            dataIndex: 'approver_name',
            sorter: (a, b) => a.mobile.length - b.mobile.length,
        },
        {
            title: 'Approver Comment',
            dataIndex: 'approver_comment',
            sorter: (a, b) => a.employee_id.length - b.employee_id.length,
        },

    ]

    return (
        <div className="page-wrapper">
            <Helmet>
                <title>Client Profile - HRMS admin Template</title>
                <meta name="description" content="Reactify Blank Page" />
            </Helmet>

            {/* Page Content */}
            <div className="content container-fluid">

                {/* Page Header */}

                <div className=''>
                    <h3 className="user-name m-b-10">Appraisal</h3>
                </div>
                {/* /Page Header */}

                <div className="card m-b-50 col-lg-12">
                    <div className="card-body">
                        <div className="row flex-column">
                            <div className="col-lg-12 m-t-10 m-b-20">
                                <h4 className="user-name m-t-0">Setup Appraisal</h4>
                            </div>

                            <div className="col-lg-4 m-b-10">
                                <div className="m-b-10">Status</div>
                                <div className="form-group">
                                    <select className="select">
                                        <option>Open</option>
                                        <option>Closed</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-lg-4 m-b-10">
                                <div className="m-b-10">Appraisal Period</div>
                                <div className="form-group">
                                    <select className="select">
                                        <option>Hourly</option>
                                        <option>Daily</option>
                                        <option>Weekly</option>
                                        <option>Monthly</option>
                                        <option>Quarterly</option>
                                        <option>Bi-Annually</option>
                                        <option>Annually</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-lg-4 m-b-10">
                                <div className="m-b-10">Start Date</div>
                                <div className="form-group">
                                    <input type="date" className="form-control m-b-10" />
                                </div>
                            </div>

                            <div className="col-lg-4 m-b-30">
                                <div className="m-b-10">End Date</div>
                                <div className="form-group">
                                    <input type="date" className="form-control m-b-10" />
                                </div>
                            </div>

                            <div className="col-lg-3 m-b-10">
                                <div className="form-group">
                                    <a href="" className="btn btn-block btn-suntrust font-weight-700">SUBMIT</a>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
            {/* /Page Content */}

        </div >

    );
}
export default Appraisal;

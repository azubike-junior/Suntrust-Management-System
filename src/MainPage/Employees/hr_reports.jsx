
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
                <Link to="#"
                    className="btn btn-white btn-sm btn-rounded action-label" data-toggle="dropdown" aria-expanded="false">
                    <i className="fa fa-dot-circle-o text-danger mr-2" />
                    Submitted
                </Link>
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

                <div className="m-b-10 d-flex">
                    <div className="d-flex">
                        <div className='drop1 m-b-30 m-r-50'>
                            <h4 className='mb-3'>Filter by Department</h4>
                            <button type="button" className="btn btn-grey dropdown-toggle mr-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">INFORMATION TECHNOLOGY (I.T)</a>
                                <a className="dropdown-item" href="#">FINANCE</a>
                                <a className="dropdown-item" href="#">MARKETING</a>
                                <a className="dropdown-item" href="#">E-COMMERCE</a>
                                <a className="dropdown-item" href="#">BRANDS AND COMMUNICATIONS</a>
                            </div>
                        </div>
                        <div className='drop1 flex-column m-l-30'>
                            <div className='drop1 m-r-30 m-b-10'>
                                <h4 className='mb-3'>Filter by Status</h4>
                                <button type="button" className="btn btn-grey dropdown-toggle mr-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success m-r-5" /> Pending on Staff</a>
                                    <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-primary m-r-5" /> Pending on Supervisor</a>
                                    <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-purple m-r-5" /> Pending on Second Supervisor</a>
                                </div>
                            </div>
                            
                        </div>
                    </div>


                    {/* <div className="d-flex">
                        <div className="">
                            <h4 className='mb-3'>Filter Appraisal Status</h4>
                            <button type="button" className="btn btn-grey dropdown-toggle mr-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">Separated link</a>
                            </div>

                            <div className="">
                                <div href="#"><i className="fa fa-dot-circle-o text-danger" /> Inactive</div>
                            </div>
                        </div>
                    </div> */}


                    {/* <div className="btn-group flex-column">
                        <h4 className='mb-2'>Filter Status</h4>
                        <button type="button" className="btn btn-primary dropdown-toggle mr-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div> */}
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

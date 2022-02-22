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

const PersonnelSetup = () => {

    const [data, setData] = useState([
        {
            id: 1, personnel_id: "0019", req_date: "23/02/2022",
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
            title: 'Personnel',
            dataIndex: 'personnel_id',
            sorter: (a, b) => a.mobile.length - b.mobile.length,
        },
        {
            title: '',
            dataIndex: 'req_date',
            render: (text, record) => (
                <h2 className="table-avatar">{text}</h2>
            ),
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: 'Staff Name',
            dataIndex: 'staff_name',
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
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Personnel Setup</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/app/employees/personnelconfig">Back to Personnel Configuration</Link></li>
                                <li className="breadcrumb-item active">Setup</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* /Page Header */}
                <div className="card mb-0 col-md-9">
                    <div className="card-body">
                        {/* <div className="row"> */}
                        <div className="">
                            <div className="profile-view">
                                <div className="row">
                                    <div className="col-md-12 m-b-20">
                                        <h3 className="user-name">ADD APPROVERS</h3>
                                    </div>

                                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                        <div className="table-responsive border">
                                            <table className="table table-hover mb-0 c_list">
                                                <thead style={{ background: 'lightgrey' }}>
                                                    <tr>
                                                        <th>PERSONNEL</th>
                                                        <th> </th>
                                                        <th>STAFF NAME</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ textAlign: 'left', verticalAlign: 'middle' }}>
                                                            Approver 1
                                                        </td>
                                                        <td>
                                                            <select type="text" class="form-control " id="bank">
                                                                <option selected>Yes</option>
                                                                <option>No</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <select type="text" class="form-control " id="bank">
                                                                <option selected>Choose</option>
                                                                <option>James McAvoy</option>
                                                                <option>Michel Buble</option>
                                                                <option>Jimmy Hoffa</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="submit-section ">
                                            <button className="col-lg-3 btn btn-sm btn-primary">Submit</button>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>

            </div >
            {/* /Page Content */}

        </div >

    );
}
export default PersonnelSetup;

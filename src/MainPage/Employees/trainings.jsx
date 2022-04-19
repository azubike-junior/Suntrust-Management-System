/**
 * TermsCondition Page
 */
import React, { Component, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
    Avatar_01,
    Avatar_02,
    Avatar_05,
    Avatar_09,
    Avatar_10,
    Avatar_11,
    Avatar_12,
    Avatar_13,
    Avatar_16,
    Avatar_19,
} from "../../Entryfile/imagepath";

import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import "../antdstyle.css";

const Trainings = () => {
    const [behaviour_traning_type, setBehaviouralTrainingData] = useState([
        // Process Category begins here
        {
            id: 1,
            behavioural_training_type: "Time Management",
        },
        {
            id: 2,
            behavioural_training_type: "Communication",
        },
        {
            id: 3,
            behavioural_training_type: "Leadership",
        },
    ]);

    const [functional_traning_type, setFunctionalTrainingData] = useState([
        // Process Category begins here
        {
            id: 1,
            functional_training_type: "Risk Management",
        },
        {
            id: 2,
            functional_training_type: "Data Analytics",
        },
        {
            id: 3,
            functional_training_type: "Critical Thinking Fundamentals",
        },
    ]);

    const [recommendation_type, setRecommendationTrainingData] = useState([
        // Process Category begins here
        {
            id: 1,
            recommendation_type: "Maintain Status",
        },
        {
            id: 2,
            recommendation_type: "Promote",
        },
        {
            id: 3,
            recommendation_type: "Watch Performance",
        },
        {
            id: 4,
            recommendation_type: "Reassign",
        },
        {
            id: 5,
            recommendation_type: "Exit",
        },
    ]);

    useEffect(() => {
        if ($(".select").length > 0) {
            $(".select").select2({
                minimumResultsForSearch: -1,
                width: "100%",
            });
        }
    });

    // Table displayed on
    const behaviour_traning_column = [
        {
            title: "BEHAVIOURAL TRAINING TYPE",
            dataIndex: "behavioural_training_type",
            sorter: (a, b) => a.mobile.length - b.mobile.length,
        },
        {
            title: "",
            render: (text, record) => (
                <Link
                    to="#"
                    data-toggle="modal"
                    data-target="#delete_category"
                    className="btn btn-sm btn-outline-danger m-r-10" >
                    <i className="fa fa-trash" />
                </Link>
            ),
        },
    ];


    const functional_traning_column = [
        {
            title: "FUNCTIONAL TRAINING TYPE",
            dataIndex: "functional_training_type",
            sorter: (a, b) => a.mobile.length - b.mobile.length,
        },
        {
            title: "",
            render: (text, record) => (
                <Link
                    to="#"
                    data-toggle="modal"
                    data-target="#delete_category"
                    className="btn btn-sm btn-outline-danger m-r-10" >
                    <i className="fa fa-trash" />
                </Link>
            ),
        },
    ];

    const recommendation_type_column = [
        {
            title: "RECOMMENDATION TYPE",
            dataIndex: "recommendation_type",
            sorter: (a, b) => a.mobile.length - b.mobile.length,
        },
        {
            title: "",
            render: (text, record) => (
                <Link
                    to="#"
                    data-toggle="modal"
                    data-target="#delete_category"
                    className="btn btn-sm btn-outline-danger m-r-10" >
                    <i className="fa fa-trash" />
                </Link>
            ),
        },
    ];



    return (
        <div className="page-wrapper">
            <Helmet>
                <title>Configurations - Training</title>
                <meta name="description" content="Reactify Blank Page" />
            </Helmet>

            {/* Page Content */}
            <div className="content container-fluid">

                {/* Page Header */}
                <h4 className="user-name m-t-10 m-b-10">TRAINING</h4>
                {/* </div> */}
                {/* /Page Header */}


                <div className="card m-b-50">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                                    <li className="nav-item"><a className="nav-link active" href="#behaviour_training" data-toggle="tab">BEHAVIOURAL TRAINING</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#functional_training" data-toggle="tab">FUNCTIONAL TRAINING</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#recommendation_type" data-toggle="tab">RECOMMENDATION</a></li>
                                </ul>

                                <div className="tab-content">
                                    <div className="tab-pane show active" id="behaviour_training">

                                        <div className="row" style={{ marginTop: '20px' }}>
                                            <div className="col-lg-4">
                                                <div className="m-b-10">Enter Behavioural Training</div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-2 col-md-6 col-sm-12 m-b-10">
                                                <a href="" className="btn btn-block btn-suntrust font-weight-700">ADD</a>
                                            </div>
                                        </div>

                                        <div className="row m-t-50 m-b-20">
                                            <div className="col-md-12">
                                                <div className="table-responsive">
                                                    <Table
                                                        className="table-striped"
                                                        pagination={{
                                                            total: behaviour_traning_type.length,
                                                            showTotal: (total, range) =>
                                                                `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                                                            showSizeChanger: true,
                                                            onShowSizeChange: onShowSizeChange,
                                                            itemRender: itemRender,
                                                        }}
                                                        style={{ overflowX: "auto" }}
                                                        columns={behaviour_traning_column}
                                                        // bordered
                                                        dataSource={behaviour_traning_type}
                                                        rowKey={(record) => record.id}
                                                        onChange={console.log("change")}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="tab-pane" id="functional_training">
                                        <div className="row" style={{ marginTop: '20px' }}>
                                            <div className="col-lg-4">
                                                <div className="m-b-10">Enter Functional Training</div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-2 col-md-6 col-sm-12 m-b-10">
                                                <a href="" className="btn btn-block btn-suntrust font-weight-700">ADD</a>
                                            </div>
                                        </div>

                                        <div className="row m-t-50 m-b-20">
                                            <div className="col-md-12">
                                                <div className="table-responsive">
                                                    <Table
                                                        className="table-striped"
                                                        pagination={{
                                                            total: functional_traning_type.length,
                                                            showTotal: (total, range) =>
                                                                `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                                                            showSizeChanger: true,
                                                            onShowSizeChange: onShowSizeChange,
                                                            itemRender: itemRender,
                                                        }}
                                                        style={{ overflowX: "auto" }}
                                                        columns={functional_traning_column}
                                                        // bordered
                                                        dataSource={functional_traning_type}
                                                        rowKey={(record) => record.id}
                                                        onChange={console.log("change")}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="tab-pane" id="recommendation_type">
                                        <div className="row" style={{ marginTop: '20px' }}>
                                            <div className="col-lg-4">
                                                <div className="m-b-10">Enter Recommendation</div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-2 col-md-6 col-sm-12 m-b-10">
                                                <a href="" className="btn btn-block btn-suntrust font-weight-700">ADD</a>
                                            </div>
                                        </div>

                                        <div className="row m-t-50 m-b-20">
                                            <div className="col-md-12">
                                                <div className="table-responsive">
                                                    <Table
                                                        className="table-striped"
                                                        pagination={{
                                                            total: recommendation_type.length,
                                                            showTotal: (total, range) =>
                                                                `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                                                            showSizeChanger: true,
                                                            onShowSizeChange: onShowSizeChange,
                                                            itemRender: itemRender,
                                                        }}
                                                        style={{ overflowX: "auto" }}
                                                        columns={recommendation_type_column}
                                                        // bordered
                                                        dataSource={recommendation_type}
                                                        rowKey={(record) => record.id}
                                                        onChange={console.log("change")}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="form-group col-lg-12 col-md-12 col-sm-12 m-b-20">
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="col-lg-4 col-md-6 col-sm-12 m-b-10">
                                    <a href="" className="btn btn-block btn-suntrust font-weight-700">
                                        SUBMIT
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Page Content */}

            {/* Delete Request Modal */}
            <div
                className="modal custom-modal fade"
                id="delete_category"
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="form-header">
                                <h3>Delete Training</h3>
                                <p>Are you sure want to delete?</p>
                            </div>
                            <div className="modal-btn delete-action">
                                <div className="row">
                                    <div className="col-6">
                                        <a href="" className="btn btn-danger continue-btn">
                                            Delete
                                        </a>
                                    </div>
                                    <div className="col-6">
                                        <a
                                            href=""
                                            data-dismiss="modal"
                                            className="btn btn-outline-danger cancel-btn"
                                        >
                                            Cancel
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Delete Request Modal */}
        </div>
    );
};
export default Trainings;

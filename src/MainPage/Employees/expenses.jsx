
import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Avatar_07 } from "../../Entryfile/imagepath"

import { Table } from 'antd';
import 'antd/dist/antd.css';
import { itemRender, onShowSizeChange } from "../paginationfunction"
import "../antdstyle.css"

const Expense = () => {

    const [data, setData] = useState([
        {
            id: 1, doc_type: "BRD", staff_id: "N/A", vendor_id: "Samsung Group",
            desc_id: "Software Development"
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


    const columns = [

        {
            title: 'Document Type',
            dataIndex: 'doc_type',
            sorter: (a, b) => a.mobile.length - b.mobile.length,
        },
        {
            title: 'Staff ID',
            dataIndex: 'staff_id',
            render: (text, record) => (
                <h2 className="table-avatar">{text}</h2>
            ),
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: 'Vendor',
            dataIndex: 'vendor_id',
            sorter: (a, b) => a.employee_id.length - b.employee_id.length,
        },
        {
            title: 'Description',
            dataIndex: 'desc_id',
            sorter: (a, b) => a.employee_id.length - b.employee_id.length,
        },
        {
            title: 'Action',
            render: (text, record) => (
                <div className="">
                    <a className="btn btn-sm btn-outline-secondary m-r-10" href="#" data-toggle="modal" data-target="#edit_expense"><i className="fa fa-pencil m-r-5" /> Edit</a>
                    <a className="btn btn-sm btn-outline-danger m-r-10" href="#" data-toggle="modal" data-target="#delete_expense"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                </div>
            ),
        },

    ]

    return (
        <div className="page-wrapper">
            <Helmet>
                <title>Expense Management | Expenses</title>
                <meta name="description" content="Login page" />
            </Helmet>
            {/* Page Content */}

            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Expenses</h3>
                        </div>
                        <div className="col-auto float-right ml-auto">
                            <a href="#" className="btn add-btn" data-toggle="modal" data-target="#add_client"><i className="fa fa-plus" /> Add Expense</a>
                        </div>
                    </div>
                </div>
                {/* /Page Header */}


                {/* Search Filter */}
                <div className="row filter-row">
                    <div className="col-sm-10 col-md-10">
                        <div className="form-group form-focus">
                            <input type="text" className="form-control floating" />
                            <label className="focus-label">Search for an Expense (e.g. Expense Description)</label>
                        </div>
                    </div>

                    <div className="col-sm-2 col-md-2">
                        <a href="#" className="btn btn-success btn-block"> Search </a>
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


            {/* Add Expense Modal */}
            <div id="add_client" className="modal custom-modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add New Expense</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="col-form-label">Request Type<span className="text-danger">*</span></label>
                                            <select className="select">
                                                <option>Choose a Request Type</option>
                                                <option value={1}>Expense</option>
                                                <option value={2}>Purchase of Asset</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="col-form-label">Request By<span className="text-danger">*</span></label>
                                            <select className="select">
                                                <option>Select an Option</option>
                                                <option value={1}>Expense</option>
                                                <option value={2}>Purchase of Asset</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label className="col-form-label">Staff ID / Name</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="col-form-label">Narration<span className="text-danger">*</span></label>
                                            <textarea className="form-control m-b-10" rows="2" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="col-form-label">Document Type<span className="text-danger">*</span></label>
                                            <select className="select">
                                                <option>Choose a Document Type</option>
                                                <option value={1}>Document 1</option>
                                                <option value={2}>Document 2</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-6 m-b-10">
                                        <div className="form-group">
                                            <label className="col-form-label">Vendor</label>
                                            <select className="select">
                                                <option>Select a Vendor</option>
                                                <option value={1}>Vendor 1</option>
                                                <option value={2}>Vendor 2</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group col-lg-6 font-weight-700">
                                        <label className="text-center">Upload Document</label>
                                        <input type="file" name="file-1[]" id="file-1" className="custom-input-file" data-multiple-caption="{count} files selected" multiple />
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="col-form-label">Description<span className="text-danger">*</span></label>
                                            <textarea className="form-control" rows="2" />
                                        </div>
                                    </div>

                                </div>

                                <div className="submit-section">
                                    <button className="btn btn-primary submit-btn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Add Expense Modal */}


            {/* Edit Expense Modal */}
            <div id="edit_expense" className="modal custom-modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Expense</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <form>
                                <div className="row">

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="col-form-label">Request Type<span className="text-danger">*</span></label>
                                            <select className="select">
                                                <option>Choose a Request Type</option>
                                                <option value={1}>Expense</option>
                                                <option value={2}>Purchase of Asset</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="col-form-label">Request By<span className="text-danger">*</span></label>
                                            <select className="select">
                                                <option>Select an Option</option>
                                                <option value={1}>Expense</option>
                                                <option value={2}>Purchase of Asset</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label className="col-form-label">Staff ID / Name</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="col-form-label">Narration<span className="text-danger">*</span></label>
                                            <textarea className="form-control m-b-10" rows="2" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="col-form-label">Document Type<span className="text-danger">*</span></label>
                                            <select className="select">
                                                <option>Choose a Document Type</option>
                                                <option value={1}>Document 1</option>
                                                <option value={2}>Document 2</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-6 m-b-10">
                                        <div className="form-group">
                                            <label className="col-form-label">Vendor</label>
                                            <select className="select">
                                                <option>Select a Vendor</option>
                                                <option value={1}>Vendor 1</option>
                                                <option value={2}>Vendor 2</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group col-lg-6 font-weight-700">
                                        <label className="text-center">Upload Document</label>
                                        <input type="file" name="file-1[]" id="file-1" className="custom-input-file" data-multiple-caption="{count} files selected" multiple />
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="col-form-label">Description<span className="text-danger">*</span></label>
                                            <textarea className="form-control" rows="2" />
                                        </div>
                                    </div>

                                </div>

                                <div className="submit-section">
                                    <button className="btn btn-primary submit-btn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Edit Expense Modal */}


            {/* Delete Expense Modal */}
            <div className="modal custom-modal fade" id="delete_expense" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="form-header">
                                <h3>Delete Expense</h3>
                                <p>Are you sure want to delete?</p>
                            </div>
                            <div className="modal-btn delete-action">
                                <div className="row">
                                    <div className="col-6">
                                        <a href="" className="btn btn-primary continue-btn">Delete</a>
                                    </div>
                                    <div className="col-6">
                                        <a href="" data-dismiss="modal" className="btn btn-primary cancel-btn">Cancel</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Delete Expense Modal */}

        </div>
    );
}

export default Expense;

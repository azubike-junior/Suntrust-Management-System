/**
 * TermsCondition Page
 */
import React, { Component, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import "../../antdstyle.css";
import { useDispatch } from "react-redux";
import { getExpenseByReference } from "./../../../services/Expense/getExpenseByReferenceId";
import { useSelector } from "react-redux";

const ExpenseDetails = () => {
  const { referenceId } = useParams();
  const dispatch = useDispatch();
  const [reason, setReason] = useState({});

  const { data: specificExpense } = useSelector(
    (state) => state.getExpenseByReferenceReducer
  );

  console.log(">>>>>>kid", reason);

  const [data, setData] = useState([
    {
      id: 1,
      req_id: "0019",
      req_date: "23/02/2022",
      staff_id: "ST0021",
      amount_req: "25,000",
      desc_txt: "Travelling",
    },
  ]);

  const [expense_data, setExpenseRequestData] = useState([
    {
      id: 1,
      vendor_id: "0019",
      doc_type: "Travel Invoice",
      amount_req: "25,000",
      vendor_recomm: "Recommended",
    },
  ]);

  const setReasonState = (text) => {
    const reason = specificExpense?.details.find(
      (vendor) => vendor.vendorId === text
    );
    console.log(">>>reaosn", reason);
    setReason(reason);
  };

  const [approve_data, setApproversData] = useState([
    {
      id: 1,
      approver_name: "Christopher Columbus",
      approver_comment:
        "I approve of this request and i advice the board to follow suite",
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

  useEffect(() => {
    dispatch(getExpenseByReference(referenceId));
  }, []);

  // Table displayed on Expense Page
  const columns = [
    {
      title: "Request ID",
      dataIndex: "req_id",
      sorter: (a, b) => a.mobile.length - b.mobile.length,
    },
    {
      title: "Request Date",
      dataIndex: "req_date",
      render: (text, record) => <h2 className="table-avatar">{text}</h2>,
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Staff ID",
      dataIndex: "staff_id",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "Amount Requested",
      dataIndex: "amount_req",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "Description",
      dataIndex: "desc_txt",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "",
      render: (text, record) => (
        <Link
          to="/app/employees/expenseRequests"
          className="btn btn-sm btn-outline-primary m-r-10"
        >
          <i className="fa fa-eye m-r-5" />
          View Details
        </Link>
      ),
    },
  ];

  // Table displayed on Expense Requests Page
  const expense_columns = [
    {
      title: "Vendor Name",
      dataIndex: "vendorName",
      sorter: (a, b) => a.mobile.length - b.mobile.length,
    },
    {
      title: "Document Type",
      dataIndex: "documentTypeId",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "Amount Requested",
      dataIndex: "amount",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "Recommendation",
      dataIndex: "recommend",
      render: (text, record) =>
        text === true ? <p>Recommended</p> : <p>Not Recommended</p>,
    },
    {
      title: "Reason",
      dataIndex: "vendorId",
      render: (text, record) => (
        <Link
          to="#"
          data-toggle="modal"
          data-target="#view_reason_modal"
          className="btn btn-sm btn-outline-primary m-r-10"
          onClick={() => setReasonState(text)}
        >
          <i className="fa fa-comments m-r-5" />
          Reason
        </Link>
      ),
      // sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "",
      render: (text, record) => (
        <Link
          to="#"
          data-toggle="modal"
          data-target="#view_document"
          className="btn btn-sm btn-outline-primary m-r-10"
          onClick={() => console.log(">>>>>text", text)}
        >
          <i className="fa fa-eye m-r-5" />
          View Document
        </Link>
      ),
    },
  ];

  // Table displayed on Expense Requests Page
  const approve_columns = [
    {
      title: "Approver Name",
      dataIndex: "approver_name",
      sorter: (a, b) => a.mobile.length - b.mobile.length,
    },
    {
      title: "Approver Comment",
      dataIndex: "approver_comment",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
  ];

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
              <h3 className="page-title">Requests</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/app/expenseManagement/approveExpense">
                    Back to Expense Requests
                  </Link>
                </li>
                <li className="breadcrumb-item active">Details</li>
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
                  <div className="row">
                    <div className="col-md-12 m-b-30">
                      <h3 className="user-name m-t-0 m-b-30">
                        EXPENSE DETAILS
                      </h3>
                      <div className="d-flex m-b-10">
                        <div className="m-r-30 col-md-3">Request ID:</div>
                        <div className="m-r-30 col-md-9">{referenceId}</div>
                      </div>

                      <div className="d-flex m-b-10">
                        <div className="m-r-30 col-md-3">Request Date:</div>
                        <div className="m-r-30 col-md-9">
                          {specificExpense?.dateCreated}
                        </div>
                      </div>

                      <div className="d-flex m-b-10">
                        <div className="m-r-30 col-md-3">Staff ID:</div>
                        <div className="m-r-30 col-md-9">
                          {specificExpense?.initiatingStaffId}
                        </div>
                      </div>

                      <div className="d-flex m-b-10">
                        <div className="m-r-30 col-md-3">Staff Name:</div>
                        <div className="m-r-30 col-md-9">
                          {specificExpense?.initiatingStaffName}
                        </div>
                      </div>

                      <div className="d-flex m-b-10">
                        <div className="m-r-30 col-md-3">Request Type:</div>
                        <div className="m-r-30 col-md-9">
                          {specificExpense?.expenseRequestTypeName}
                        </div>
                      </div>

                      <div className="d-flex m-b-10">
                        <div className="m-r-30 col-md-3">Description:</div>
                        <div className="m-r-30 col-md-9">
                          {specificExpense?.narration}
                        </div>
                      </div>

                      <div className="d-flex m-b-10">
                        <div
                          className="m-r-30 col-md-3"
                          style={{ textAlign: "left", verticalAlign: "middle" }}
                        >
                          Payment Terms:
                        </div>
                        <div className="m-r-30 col-md-3">
                          <select className="select">
                            <option>0%</option>
                            <option>30%</option>
                            <option>35%</option>
                            <option>40%</option>
                            <option>45%</option>
                            <option>50%</option>
                            <option>55%</option>
                            <option>60%</option>
                            <option>65%</option>
                            <option>70%</option>
                            <option>75%</option>
                            <option>80%</option>
                            <option>85%</option>
                            <option>90%</option>
                            <option>95%</option>
                            <option>100%</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <h4 className="user-name m-b-10 col-md-12">VENDORS LIST</h4>

                    <div className="col-md-12">
                      <div className="table-responsive">
                        <Table
                          className="table-striped"
                          pagination={{
                            total: specificExpense?.details?.length,
                            showTotal: (total, range) =>
                              `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                            showSizeChanger: true,
                            onShowSizeChange: onShowSizeChange,
                            itemRender: itemRender,
                          }}
                          style={{ overflowX: "auto" }}
                          columns={expense_columns}
                          // bordered
                          dataSource={specificExpense?.details}
                          rowKey={(record) => record.id}
                          // onChange={console.log("change")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <h3 className="user-name m-t-50 m-b-10">APPROVERS LOG</h3>
        </div>

        <div className="card mb-0">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className="profile-view">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="table-responsive">
                        <Table
                          className="table-striped"
                          pagination={{
                            total: approve_data.length,
                            showTotal: (total, range) =>
                              `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                            showSizeChanger: true,
                            onShowSizeChange: onShowSizeChange,
                            itemRender: itemRender,
                          }}
                          style={{ overflowX: "auto" }}
                          columns={approve_columns}
                          // bordered
                          dataSource={approve_data}
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
        </div>

        {/* Approve and Reject Buttons */}
        <div className="form-group col-lg-12 col-md-12 col-sm-12 m-t-50 m-b-20">
          <div className="d-flex align-items-center justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-12 m-b-10">
              <a
                href=""
                className="btn btn-block btn-success font-weight-700"
                data-toggle="modal"
                data-target="#approval_modal"
              >
                APPROVE
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 m-b-10">
              <a
                href=""
                className="btn btn-block btn-danger font-weight-700"
                data-toggle="modal"
                data-target="#rejection_modal"
              >
                REJECT
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}

      {/* View Document Modal */}
      <div id="view_document" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Document Title</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="d-flex align-items-center justify-content-center">
                <iframe>
                  <embed
                    src="C:\Users\enoobong.george\Documents\SunTrust\Smart HR\blue\src\assets\img\video-call.jpg"
                    width="100%"
                    height="900px"
                  />
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /View Document Modal */}

      {/* / Approval Modal goes here! */}
      <div
        className="modal custom-modal fade"
        id="approval_modal"
        role="dialog"
        aria-labelledby="approval_modal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header bg-success align-items-center justify-content-center">
              <h5 className="modal-title text-white m-b-20" id="modal_title_6">
                APPROVE EXPENSE REQUEST?
              </h5>
            </div>
            <div className="modal-body">
              <div className="text-center">
                <h5 className="heading">Add a Comment</h5>
                <div className="form-group col-lg-12 col-md-12 col-sm-12 m-b-10 font-weight-700">
                  <textarea
                    className="form-control m-b-10"
                    rows="3"
                    style={{ resize: "none" }}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-center align-items-center">
              <a
                href="#"
                className="btn btn-block btn-success font-weight-700 col-sm-4"
              >
                CONFIRM
              </a>
              <a
                href="#"
                className="btn btn-block text-danger font-weight-700 col-sm-4"
                data-dismiss="modal"
              >
                CANCEL
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* / Rejection Modal goes here! */}
      <div
        className="modal custom-modal fade"
        id="rejection_modal"
        role="dialog"
        aria-labelledby="rejection_modal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header bg-danger align-items-center justify-content-center">
              <h5 className="modal-title text-white m-b-20" id="modal_title_6">
                REJECT EXPENSE REQUEST?
              </h5>
            </div>
            <div className="modal-body">
              <div className="py-3 text-center">
                <h5 className="heading">Add a Comment</h5>
                <div className="form-group col-lg-12 col-md-12 col-sm-12 m-b-10 font-weight-700">
                  <textarea
                    className="form-control m-b-10"
                    rows="3"
                    style={{ resize: "none" }}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-center align-items-center">
              <a
                href="form_review.html"
                className="btn btn-block btn-success font-weight-700 col-sm-4"
              >
                CONFIRM
              </a>
              <a
                href="form_review.html"
                className="btn btn-block text-danger font-weight-700 col-sm-4"
                data-dismiss="modal"
              >
                CANCEL
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* View Reason Modal goes here! */}
      <div
        className="modal fade"
        id="view_reason_modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="view_feedback_modal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header bg-dark align-items-center justify-content-center">
              <h5
                className="modal-title text-white font-weight-700 m-b-20"
                id="modal_title_6"
              >
                REQUEST ID - {reason.vendorId}
              </h5>
            </div>
            <div className="modal-body">
              <div className="align-items-center justify-content-center">
                <div className="d-flex m-b-10 margin_bottom font_size">
                  <label className="col-lg-4 col-md-6 col-sm-12 font-weight-700">
                    VENDOR NAME:
                  </label>
                  <div className="col-lg-8 col-md-6 col-sm-12">
                    {reason.vendorName}
                  </div>
                </div>

                <div className="d-flex m-b-10 margin_bottom font_size">
                  <label className="col-lg-4 col-md-6 col-sm-12 font-weight-700">
                    DOCUMENT TYPE:
                  </label>
                  <div className="col-lg-8 col-md-6 col-sm-12">
                    {reason.documentTypeId}
                  </div>
                </div>
                <div className="d-flex m-t-20 m-b-10 margin_bottom font_size">
                  <label className="col-lg-4 col-md-6 col-sm-12 font-weight-700">
                    AMOUNT REQUESTED:
                  </label>
                  <div className="col-lg-8 col-md-6 col-sm-12">
                    {reason.amount}
                  </div>
                </div>

                <div className="d-flex m-b-10 margin_bottom font_size">
                  <label className="col-lg-4 col-md-6 col-sm-12 font-weight-700">
                    RECOMMENDATION:
                  </label>
                  <div className="col-lg-8 col-md-6 col-sm-12">
                    {reason.recommend === true
                      ? "Recommended"
                      : " Not recommended"}
                  </div>
                </div>

                <div className="d-flex m-b-10 margin_bottom font_size">
                  <label className="col-lg-4 col-md-6 col-sm-12 font-weight-700">
                    REASON:
                  </label>
                  <div className="col-lg-8 col-md-6 col-sm-12">
                    {reason.reason}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-center align-items-center">
              <a
                href="#"
                className="btn btn-block btn-primary font-weight-700 col-sm-4"
                data-dismiss="modal"
              >
                CLOSE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExpenseDetails;

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Avatar_07 } from "../../../Entryfile/imagepath";
import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import "../../antdstyle.css";
import { getAllExpenseByStaff } from "../../../services/Expense/getAllExpenseByStaffId";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../UIinterface/Loader";

const CompleteJobOrder = () => {
  const [status, setStatus] = useState("pending");
  const [expenseData, setExpenseData] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    return setStatus(value);
  };

  console.log(">>>status", status)

  const { data: staffExpenses, loading: staffExpensesLoading } = useSelector(
    (state) => state.getAllExpenseByStaffReducer
  );

  const [data, setData] = useState([
    {
      id: 1,
      req_id: "0019",
      req_date: "23/02/2022",
      desc_txt: "Travelling",
      amount_req: "25,000",
    },
  ]);

  const [modal_data, setModalData] = useState([
    {
      id: 1,
      desc_id: "Travelling",
      staff_id: "N/A",
      vendor_id: "Samsung Group",
      doc_type: "Invoice",
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
    dispatch(getAllExpenseByStaff({ status, id: 330 }));
  }, [status]);

  // Table displayed on Expense Page
  const columns = [
    {
      title: "Request Type",
      dataIndex: "requestTypeName",
      sorter: (a, b) => a.mobile.length - b.mobile.length,
    },
    {
      title: "Requestor Name",
      dataIndex: "requestorName",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "Vendor Name",
      dataIndex: "vendorName",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "",
      render: (text, record) => (
        <Link
          to="#"
          data-toggle="modal"
          data-target="#view_details_modal"
          className="btn btn-sm btn-outline-primary m-r-10"
        >
          <i className="fa fa-eye m-r-5" />
          View Info
        </Link>
      ),
    },
  ];

  // Table displayed on Add/Edit Modal
  const modal_columns = [
    {
      title: "Description",
      dataIndex: "desc_id",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "Staff ID",
      dataIndex: "staff_id",
      sorter: (a, b) => a.mobile.length - b.mobile.length,
    },
    {
      title: "Vendor ID",
      dataIndex: "vendor_id",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "Document Type",
      dataIndex: "doc_type",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "",
      render: (text, record) => (
        <div className="">
          <a
            className="btn btn-sm btn-outline-secondary m-r-10"
            href="#"
            data-toggle="modal"
            data-target="#edit_expense"
          >
            <i className="fa fa-pencil" />
          </a>
          <a
            className="btn btn-sm btn-outline-danger m-r-10"
            href="#"
            data-toggle="modal"
            data-target="#delete_expense"
          >
            <i className="fa fa-trash-o" />
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Expense Management | My Requests</title>
        <meta name="description" content="Login page" />
      </Helmet>

      {/* Page Content */}

      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">All Payments</h3>
            </div>
          </div>
        </div>

        {/* /Page Header */}

        <div className="m-b-30 col-lg-4">
          <div className="">
            <label className="">Request Status</label>
            <select
              onChange={(e) => handleChange(e)}
              value={status}
              className="custom-select"
            >
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>

        <h3 className="page-title">
          {status === "approved" && "Approved"}{" "}
          {status === "rejected" && "Rejected"}{" "}
          {status === "pending" && "Pending"} Requests
        </h3>

        {/* Search Filter */}
        <div className="row filter-row">
          <div className="col-lg-10 col-sm-10 col-md-10">
            <div className="form-group form-focus">
              <input type="text" className="form-control floating" />
              <label className="focus-label">
                Search for a Request ID (e.g. REQ-0019)
              </label>
            </div>
          </div>

          <div className="col-sm-2 col-md-2">
            <a href="#" className="btn btn-success btn-block">
              {" "}
              Search{" "}
            </a>
          </div>
        </div>
        {/* Search Filter */}

        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <Table
                className="table-striped"
                pagination={{
                  total: staffExpenses.length,
                  showTotal: (total, range) =>
                    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  showSizeChanger: true,
                  onShowSizeChange: onShowSizeChange,
                  itemRender: itemRender,
                }}
                loading={{ indicator: <Loader />, spinning: staffExpensesLoading }}
                style={{ overflowX: "auto" }}
                columns={columns}
                // bordered
                dataSource={staffExpenses}
                rowKey={(record) => record.id}
                // onChange={console.log("change")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* /Page Header */}

      {/* /Page Content */}

      {/* Add Expense Modal */}
      <div id="add_client" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add New Expense</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">??</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="col-form-label">
                        Request Type<span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option>Choose a Request Type</option>
                        <option value={1}>Expense</option>
                        <option value={2}>Purchase of Asset</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="col-form-label">
                        Request By<span className="text-danger">*</span>
                      </label>
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
                      <label className="col-form-label">
                        Narration<span className="text-danger">*</span>
                      </label>
                      <textarea className="form-control m-b-10" rows="2" />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group font-weight-700">
                      <label className="text-center">Upload Document</label>
                      <br />
                      <input
                        type="file"
                        name="file-1[]"
                        id="file-1"
                        className="custom-input-file"
                        data-multiple-caption="{count} files selected"
                        multiple
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="col-form-label">
                        Document Type<span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option>Choose a Document Type</option>
                        <option value={1}>Document 1</option>
                        <option value={2}>Document 2</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4 m-b-10">
                    <div className="form-group">
                      <label className="col-form-label">Vendor</label>
                      <select className="select">
                        <option>Select a Vendor</option>
                        <option value={1}>Vendor 1</option>
                        <option value={2}>Vendor 2</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4 m-b-10">
                    <div className="form-group">
                      <label className="col-form-label">Recommendation</label>
                      <select className="select">
                        <option>Select an Option</option>
                        <option value={1}>Yes</option>
                        <option value={2}>No</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="col-form-label">Reason</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="col-form-label">Amount Requested</label>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text font-14">
                            &#8358;
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          value="50,000"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label className="col-form-label">
                        Description<span className="text-danger">*</span>
                      </label>
                      <textarea className="form-control" rows="2" />
                    </div>
                  </div>
                </div>

                <div className="submit-section m-b-30">
                  <button className="btn btn-sm btn-primary submit-btn m-r-10">
                    Add
                  </button>
                  <button className="btn btn-sm btn-primary submit-btn">
                    Clear
                  </button>
                </div>

                <div className="text-lg font-weight-bold">EXPENSES ADDED</div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="table-responsive">
                      <Table
                        className="table-striped"
                        pagination={{
                          total: modal_data.length,
                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          showSizeChanger: true,
                          onShowSizeChange: onShowSizeChange,
                          itemRender: itemRender,
                        }}
                        style={{ overflowX: "auto" }}
                        columns={modal_columns}
                        // bordered
                        dataSource={modal_data}
                        rowKey={(record) => record.id}
                        onChange={console.log("change")}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Expense Modal */}

      {/* View Reason Modal goes here! */}
      <div
        className="modal fade"
        id="view_details_modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="view_feedback_modal"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header bg-success align-items-center justify-content-center">
              <h5
                className="modal-title text-white font-weight-700 m-b-20"
                id="modal_title_6"
              >
                REQUEST ID - ER4367
              </h5>
            </div>
            <div className="modal-body">
              <div className="align-items-center justify-content-center">
                <div className="col-md-12 font-weight-700">
                  <div className="form-group m-b-30">
                    <label className="col-form-label">
                      PROJECT STATUS<span className="text-danger">*</span>
                    </label>
                    <select className="select">
                      <option>Select a Status</option>
                      <option value={1}>Complete</option>
                      <option value={2}>Incomplete</option>
                      <option value={3}>Cancelled</option>
                    </select>
                  </div>

                  <div className="form-group m-b-30">
                    <label className="text-center">
                      UPLOAD JOB ORDER DOCUMENT{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <br />
                    <input
                      type="file"
                      name="file-1[]"
                      id="file-1"
                      className="custom-input-file"
                      data-multiple-caption="{count} files selected"
                      multiple
                    />
                  </div>

                  <div className="form-group">
                    <label className="col-form-label">
                      NARRATION <span className="text-danger">*</span>
                    </label>
                    <textarea className="form-control" rows="3" />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-center align-items-center">
              <div className="m-b-10">
                <button
                  className="btn btn-sm btn-primary submit-btn m-r-10"
                  data-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteJobOrder;

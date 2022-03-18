import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import "../../antdstyle.css";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleAddExpenseModal,
  toggleDeleteExpenseModal,
} from "../../../services/modals/modals";
import AddExpenseModal from "../../../components/Modals/ExpenseModals/AddExpenseModal";
import { getAllExpenseByStaff } from "./../../../services/Expense/getAllExpenseByStaffId";
import Loader from "../../UIinterface/Loader";
import DeleteExpenseModal from "../../../components/Modals/ExpenseModals/DeleteExpenseModal";

const Expenses = () => {
  const { openAddExpense } = useSelector((state) => state.modalReducer);
  const [expenseData, setExpenseData] = useState({});
  const { data: staffExpenses, loading: staffExpensesLoading } = useSelector(
    (state) => state.getAllExpenseByStaffReducer
  );

  const approvalStageText = (text) => {
    if (text === 1) {
      return <p>Level One</p>;
    }
    if (text === 2) {
      return <p>Level Two</p>;
    }
    if (text === 3) {
      return <p>Level Three</p>;
    } else <p>Level Four</p>;
  };

  const dispatch = useDispatch();
  const [data, setData] = useState([
    {
      id: 1,
      doc_type: "BRD",
      vendor_name: "Samsung Group",
      desc_id: "Software Development",
    },
  ]);

  const [modal_data, setModalData] = useState([
    {
      id: 1,
      vendor_name: "Samsung Group",
      doc_type: "Invoice",
      exp_amount: "50,000",
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
    dispatch(getAllExpenseByStaff({ id: 330 }));
  }, []);

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
      title: "Approval Stage",
      dataIndex: "approvalStage",
      render: (text, record) => approvalStageText(text),
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
        <div className="">
          <a
            className="btn btn-sm btn-outline-secondary m-r-10"
            href="#"
            data-toggle="modal"
            data-target="#edit_expense"
          >
            <i className="fa fa-pencil m-r-5" /> Edit
          </a>
          <button
            disabled={text.approvalStage > 1 ? true : false}
            className="btn btn-sm btn-outline-danger m-r-10"
            href="#"
            onClick={() => {
              setExpenseData(text);
              dispatch(toggleDeleteExpenseModal());
            }}
          >
            <i className="fa fa-trash-o m-r-5" /> Delete
          </button>
        </div>
      ),
    },
  ];

  // Table displayed on Add/Edit Modal
  const modal_columns = [
    {
      title: "Vendor",
      dataIndex: "vendor_name",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "Document Type",
      dataIndex: "doc_type",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "Amount",
      dataIndex: "exp_amount",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "",
      render: (text, record) => (
        <div className="">
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
              <a
                href="#"
                className="btn add-btn"
                onClick={() => dispatch(toggleAddExpenseModal())}
              >
                <i className="fa fa-plus" /> Add Expense
              </a>
            </div>
          </div>
        </div>
        {/* /Page Header */}

        {/* Search Filter */}
        <div className="row filter-row">
          <div className="col-sm-10 col-md-10">
            <div className="form-group form-focus">
              <input type="text" className="form-control floating" />
              <label className="focus-label">
                Search for an Expense (e.g. Expense Description)
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
                style={{ overflowX: "auto" }}
                loading={{
                  indicator: <Loader />,
                  spinning: staffExpensesLoading,
                }}
                columns={columns}
                // bordered
                dataSource={staffExpenses}
                rowKey={(record) => record.id}
              />
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}

      <AddExpenseModal />

      <DeleteExpenseModal expenseData={expenseData} />

      {/* Edit Expense Modal */}
      <div id="edit_expense" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Expense</h5>
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
              <form>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="col-form-label">
                        Request Type<span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option>Choose a Request Type</option>
                        <option value={1}>Travelling</option>
                        <option value={2}>Staff Training</option>
                        <option value={2}>Staff Retreat</option>
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
                        <option value={1}>ST031</option>
                        <option value={2}>ST032</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="form-group">
                      <label className="col-form-label">Staff ID / Name</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>

                  <div className="col-lg-12 m-b-10">
                    <div className="form-group">
                      <label className="col-form-label">
                        Narration<span className="text-danger">*</span>
                      </label>
                      <textarea className="form-control" rows="2" />
                    </div>
                  </div>

                  <div className="col-lg-12 m-b-10">
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
                        <option value={1}>Invoice</option>
                        <option value={2}>Flight Ticket</option>
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
                </div>

                <div className="submit-section m-b-30">
                  <button className="btn btn-sm btn-primary submit-btn m-r-10">
                    Add
                  </button>
                  <button className="btn btn-sm btn-primary submit-btn">
                    Clear
                  </button>
                </div>

                <div className="text-lg font-weight-light">EXPENSES ADDED</div>

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
      {/* /Edit Expense Modal */}

      {/* Delete Expense Modal */}
      {/* <div
        className="modal custom-modal fade"
        id="delete_expense"
        role="dialog"
      >
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
                    <a href="" className="btn btn-primary continue-btn">
                      Delete
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      href=""
                      data-dismiss="modal"
                      className="btn btn-primary cancel-btn"
                    >
                      Cancel
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* /Delete Expense Modal */}
    </div>
  );
};

export default Expenses;

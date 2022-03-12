import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import "../../antdstyle.css";
import { getAllExpenseByApprover } from "./../../../services/Expense/getAllExpenseByApprover";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../UIinterface/Loader";

const ApproveExpense = () => {
  const [status, setStatus] = useState("pending");
  const dispatch = useDispatch();

  const { data: approverExpenses, loading: approverExpensesLoading } =
    useSelector((state) => state.getAllExpenseByApproverReducer);

  const handleChange = (e) => {
    const value = e.target.value;
    return setStatus(value);
  };

  useEffect(() => {
    dispatch(getAllExpenseByApprover({ status, id: "012" }));
  }, [status]);

  const [data, setData] = useState([
    {
      id: 1,
      req_id: "0019",
      req_date: "23/02/2022",
      staff_id: "ST0021",
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
      title: "Request Date",
      dataIndex: "dateCreated",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "",
      render: (text, record) => (
        <Link
          to={`/app/expenseManagement/expenseDetails/${text.referenceId}`}
          className="btn btn-sm btn-outline-primary m-r-10"
        >
          <i className="fa fa-eye m-r-5" />
          View Details
        </Link>
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
              <h3 className="page-title">My Requests</h3>
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
          {status === "pending" && "Pending"} Requestsss
        </h3>

        {/* Search Filter */}
        <div className="row filter-row">
          <div className="col-lg-10 col-sm-10 col-md-10">
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
                  total: approverExpenses.length,
                  showTotal: (total, range) =>
                    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  showSizeChanger: true,
                  onShowSizeChange: onShowSizeChange,
                  itemRender: itemRender,
                }}
                loading={{
                  indicator: <Loader />,
                  spinning: approverExpensesLoading,
                }}
                style={{ overflowX: "auto" }}
                columns={columns}
                // bordered
                dataSource={approverExpenses}
                rowKey={(record) => record.id}
                // onChange={console.log("change")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* /Page Header */}

      {/* /Page Content */}
    </div>
  );
};

export default ApproveExpense;

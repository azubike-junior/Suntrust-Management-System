import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import "../../antdstyle.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./../../UIinterface/Loader/index";
import { getAppraisalsByStaffId } from "./../../../services/PerformanceManagement/StaffAppraisal/getAppraisalsByStaffId";

const Appraisals = () => {
  const dispatch = useDispatch();

  const { data: appraisals, loading: appraisalsLoading } = useSelector(
    (state) => state.performanceManagement.getAppraisalsByStaffIdReducer
  );

  const staffData = JSON.parse(localStorage.getItem("cachedData"));

  const { staffId } = staffData;

  console.log(">>>>>>staffId", staffId)

  useEffect(() => {
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }
  });

  useEffect(() => {
    dispatch(getAppraisalsByStaffId(staffId));
  }, []);

  // Table displayed on Expense Page
  const columns = [
    {
      title: "Staff ID",
      dataIndex: "staffId",
      sorter: (a, b) => a.mobile.length - b.mobile.length,
    },
    {
      title: "Staff Name",
      dataIndex: "appraiseeName",
      render: (text, record) => <h2 className="table-avatar">{text}</h2>,
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text, record) => <h2 className="table-avatar">{text}</h2>,
    },
    {
      title: "Submitted Date",
      dataIndex: "dateSubmitted",
    },
    {
      title: "",
      render: (text, record) => (
        <Link
          onClick={() => console.log("text", text)}
          to={`/app/performanceManagement/appraiseeUpdatedReview/${text.appraisalReference}`}
          className="btn btn-sm btn-outline-primary m-r-10"
        >
          <i className="fa fa-eye m-r-5" />
          VIEW
        </Link>
      ),
    },
  ];

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Performance Management | Appraisals</title>
        <meta name="description" content="Login page" />
      </Helmet>

      {/* Page Content */}

      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Appraisals</h3>
            </div>
          </div>
        </div>
        {/* /Page Header */}

        {/* Search Filter */}
        <div className="row filter-row">
          <div className="col-lg-10 col-sm-10 col-md-10">
            <div className="form-group form-focus">
              <input type="text" className="form-control floating" />
              <label className="focus-label">
                Search for a Staff (e.g. ST-0019)
              </label>
            </div>
          </div>

          <div className="col-sm-2 col-md-2">
            <a href="#" className="btn btn-block btn-suntrust font-weight-700">
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
                  total: appraisals.length,
                  showTotal: (total, range) =>
                    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  showSizeChanger: true,
                  onShowSizeChange: onShowSizeChange,
                  itemRender: itemRender,
                }}
                loading={{ indicator: <Loader />, spinning: appraisalsLoading }}
                style={{ overflowX: "auto" }}
                columns={columns}
                // bordered
                dataSource={appraisals}
                rowKey={(record) => record.id}
                // onChange={console.log("change")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* /Page Content */}
    </div>
  );
};

export default Appraisals;

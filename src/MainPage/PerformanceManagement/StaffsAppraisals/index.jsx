import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import "../../antdstyle.css";

const StaffsAppraisals = () => {
  const [data, setData] = useState([
    {
      id: 1,
      staff_id: "ST-0019",
      staff_name: "James McAvoy",
      tot_app_result: "87%",
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
      title: "Staff ID",
      dataIndex: "staff_id",
      sorter: (a, b) => a.mobile.length - b.mobile.length,
    },
    {
      title: "Staff Name",
      dataIndex: "staff_name",
      render: (text, record) => <h2 className="table-avatar">{text}</h2>,
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Appraisee Result",
      dataIndex: "tot_app_result",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "",
      render: (text, record) => (
        <Link
          to="/app/performanceManagement/staffAppraisalDetail"
          className="btn btn-sm btn-outline-primary m-r-10"
        >
          <i className="fa fa-eye m-r-5" />
          View Staff
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
              <h3 className="page-title">Staff Appraisals</h3>
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
                  total: data.length,
                  showTotal: (total, range) =>
                    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  showSizeChanger: true,
                  onShowSizeChange: onShowSizeChange,
                  itemRender: itemRender,
                }}
                style={{ overflowX: "auto" }}
                columns={columns}
                // bordered
                dataSource={data}
                rowKey={(record) => record.id}
                onChange={console.log("change")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* /Page Content */}
    </div>
  );
};

export default StaffsAppraisals;

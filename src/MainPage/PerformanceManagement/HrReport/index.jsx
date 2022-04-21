import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import "../../antdstyle.css";
import Select from "react-select";
import { customStyles } from "../../../utils/helper";
import { customStyles2 } from './../../../utils/helper';

const HrReport = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

  console.log(">>>>>selected", selectedFilter);

  const selectStatus = [
    {
      value: 1,
      text: " Submitted - Awaiting Supervisor Score",
      icon: <i className="fa fa-dot-circle-o text-warning mr-2" />,
    },
    {
      value: 2,
      text: "Down Arrow",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-down-circle"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
          />
        </svg>
      ),
    },
  ];
  const [data, setData] = useState([
    {
      id: 1,
      staff_id: "019",
      staff_name: "James McAvoy",
      app_date_submitted: "27-04-2022",
      supervisor_score: "87%",
    },
    {
      id: 2,
      staff_id: "022",
      staff_name: "Michael Jemigbon",
      app_date_submitted: "27-04-2022",
      supervisor_score: "83%",
    },
    {
      id: 3,
      staff_id: "034",
      staff_name: "Emmanuel Dennis",
      app_date_submitted: "27-04-2022",
      supervisor_score: "72%",
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
      title: "Date Submitted",
      dataIndex: "app_date_submitted",
      render: (text, record) => <h2 className="table-avatar">{text}</h2>,
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Appraisal Status",
      dataIndex: "appraisal_status",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
      render: (text, record) => (
        <div
          className="btn btn-white btn-sm btn-rounded action-label"
          aria-expanded="false"
        >
          <i className="fa fa-dot-circle-o text-danger mr-2" />
          Submitted
        </div>
      ),
    },
    {
      title: "Supervisor Score",
      dataIndex: "supervisor_score",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
  ];

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

        <div className="m-b-10">
          <div className="row d-flex">
            <div className="float-left d-flex col-lg-9">
              <div className="dropdown m-r-20 m-b-10">
                <button
                  className="btn btn-grey dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Filter By
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => setSelectedFilter("Department")}
                  >
                    Department
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => setSelectedFilter("Status")}
                  >
                    Appraisal Status
                  </a>
                </div>
              </div>

              {/* <Select
                styles={customStyles2}
                className=""
                placeholder="Select Option"
                value={selectedFilter}
                options={selectStatus}
                // onChange={handleChange}
                getOptionLabel={(e) => (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {e.icon}
                    <span style={{ marginLeft: 5 }}>{e.text}</span>
                  </div>
                )}
              /> */}

              <div className="dropdown m-b-10">
                <button
                  className="btn btn-grey dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Select {selectedFilter}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a
                    className="action-label dropdown-item"
                    aria-expanded="false"
                  >
                    <i className="fa fa-dot-circle-o text-danger mr-2" />
                    Submitted - Awaiting Supervisor Score
                  </a>
                  <a
                    className="action-label dropdown-item"
                    aria-expanded="false"
                  >
                    <i className="fa fa-dot-circle-o text-warning mr-2" />
                    Pre-Processing - Awaiting Appraisee Comment
                  </a>
                  <a
                    className="action-label dropdown-item"
                    aria-expanded="false"
                  >
                    <i className="fa fa-dot-circle-o text-primary mr-2" />
                    Processing - Awaiting Supervisor Recommendation
                  </a>
                  <a
                    className="action-label dropdown-item"
                    aria-expanded="false"
                  >
                    <i className="fa fa-dot-circle-o text-purple mr-2" />
                    In-Progress - Awaiting 2nd level Supervisor Comment
                  </a>
                  <a
                    className="action-label dropdown-item"
                    aria-expanded="false"
                  >
                    <i className="fa fa-dot-circle-o text-success mr-2" />
                    Completed - End
                  </a>
                </div>
              </div>
            </div>

            <div className="float-right d-flex col-lg-2">
              <div className="dropdown m-r-20 m-b-10">
                <button
                  className="btn btn-grey dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Appraisal Month
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    January 2022
                  </a>
                  <a className="dropdown-item" href="#">
                    February 2022
                  </a>
                  <a className="dropdown-item" href="#">
                    March 2022
                  </a>
                </div>
              </div>

              <div className="dropdown m-b-10">
                <button
                  className="btn btn-primary"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Options */}

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
            <a href="#" className="btn btn-suntrust btn-block">
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

export default HrReport;

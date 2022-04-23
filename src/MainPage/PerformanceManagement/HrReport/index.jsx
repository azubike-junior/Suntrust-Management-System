import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import "../../antdstyle.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllDepartments } from "../../../services/PerformanceManagement/hrReports/getAllDepartments";
import { allStatus } from "../../../utils/helper";
import { getAllAppraisalPeriods } from "./../../../services/PerformanceManagement/hrReports/getAppraisalPeriods";
import { getAllAppraisals } from "./../../../services/PerformanceManagement/hrReports/getAllAppraisals";
import Loader from "../../UIinterface/Loader";
import { switchNumberToMonth } from "./../../../utils/helper";
import { classNames } from "./../../../utils/classNames";

const HrReport = () => {
  const [selectedFiltered, setSelectedFiltered] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const { data: appraisals } = useSelector(
    (state) => state.performanceManagement.getAllAppraisalsReducer
  );
  const [allAppraisals, setAllAppraisals] = useState([]);
  const dispatch = useDispatch();

  const handleSelectChange = (e) => {
    if (e.target.value === "Department") {
      dispatch(getAllDepartments());
      return setSelectedFiltered(e.target.value);
    }
    setSelectedFiltered(e.target.value);
  };

  const handleSelectedOption = (e, option) => {
    // console.log("status", e.target.value);
    let tempAppraisals = [...appraisals];

    if (option === "period") {
      setSelectedOption(e.target.value);
      const beginningDate = e.target.value.split(" - ")[0];
      const endDate = e.target.value.split(" - ")[1];
      tempAppraisals = tempAppraisals?.filter((appraisal) => {
        const day = appraisal.dateSubmitted.split(" ")[0].split("/")[1];
        const year = appraisal.dateSubmitted.split(" ")[0].split("/")[2];

        const appraisalDate = `${switchNumberToMonth(day)},${year}`;

        return appraisalDate === beginningDate || appraisalDate === endDate;
      });
      if (e.target.value === "all") {
        tempAppraisals = appraisals;
      }
    }

    if (option === "department") {
      setSelectedOption(e.target.value);
      tempAppraisals = tempAppraisals?.filter(
        (appraisal) =>
          Number(appraisal.departmentCode) === Number(e.target.value)
      );
    }
    if (option === "status") {
      setSelectedOption(e.target.value);
      tempAppraisals = tempAppraisals?.filter(
        (appraisal) => appraisal.status === e.target.value
      );
    }
    return setAllAppraisals(tempAppraisals);
  };

  const { data: departments } = useSelector(
    (state) => state.performanceManagement.getAllDepartmentsReducer
  );

  const { data: appraisalPeriods, loading: appraisalsLoading } = useSelector(
    (state) => state.performanceManagement.getAllAppraisalPeriodsReducer
  );

  // console.log(">>>>>>appraisals", allAppraisals, appraisals);

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
      dataIndex: "staffId",
    },
    {
      title: "Staff Name",
      dataIndex: "appraiseeName",
      render: (text, record) => <h2 className="table-avatar">{text}</h2>,
    },
    {
      title: "Date Submitted",
      dataIndex: "dateSubmitted",
      render: (text, record) => <h2 className="table-avatar">{text}</h2>,
    },
    {
      title: "Appraisal Status",
      dataIndex: "status",
      render: (text, record) => (
        <div
          className="btn btn-white btn-sm btn-rounded action-label"
          aria-expanded="false"
        >
          <i
            className={classNames(
              "",
              text === "COMPLETE" && "text-success",
              text === "SUBMITTED" && "text-danger",
              text === "PRE-PROCESSING" && "text-warning",
              text === "PROCESSING" && "text-purple",
              text === "INPROGRESS" && "text-primary"
            )}
          >
            <i className="fa fa-dot-circle-o mr-2" />
          </i>
          {text}
        </div>
      ),
    },
    {
      title: "Supervisor Score",
      dataIndex: "totalSupervisorResult",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
  ];

  useEffect(() => {
    dispatch(getAllAppraisalPeriods());
  }, []);

  useEffect(() => {
    dispatch(getAllAppraisals(setAllAppraisals));
  }, []);

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

        <div className="row d-flex">
          <div className="float-left d-flex col-lg-9">
            <div className="dropdown m-r-20">
              <div className="form-group">
                <select
                  onChange={(e) => handleSelectedOption(e, "period")}
                  className="form-control"
                >
                  <option value="all">All</option>
                  {appraisalPeriods.map((period) => {
                    return (
                      <option value={period.perioId}>{period.date}</option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="dropdown m-r-20 col-lg-3">
              <div className="form-group">
                <select
                  className="form-control"
                  value={selectedFiltered}
                  onChange={(e) => handleSelectChange(e)}
                >
                  <option value="" selected>
                    Filter By
                  </option>
                  <option
                    value="Department"
                    onClick={() => dispatch(getAllDepartments())}
                  >
                    Departments
                  </option>
                  <option value="Status">Status</option>
                </select>
              </div>
            </div>

            {selectedFiltered === "Department" ? (
              <div className="dropdown col-lg-3">
                <div className="form-group">
                  <select
                    value={selectedOption}
                    onChange={(e) => handleSelectedOption(e, "department")}
                    className="form-control"
                  >
                    <option value="">Select {selectedFiltered}</option>
                    {departments?.map((department) => {
                      return (
                        <option key={department.id} value={department.id}>
                          {department.departmentName}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            ) : (
              <div className="dropdown col-lg-4">
                <div className="form-group">
                  <select
                    value={selectedOption}
                    onChange={(e) => handleSelectedOption(e, "status")}
                    className="form-control"
                  >
                    <option value="">Select {selectedFiltered}</option>
                    {allStatus?.map((status) => {
                      return (
                        <option key={status.value} value={status.value}>
                          {status.text}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            )}
          </div>

          <div className="float-right d-flex col-lg-3">
            <div className="dropdown m-r-50">
              <div className="form-group"></div>
            </div>

            <div className="dropdown m-l-125">
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
                  total: allAppraisals?.length,
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
                dataSource={allAppraisals}
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

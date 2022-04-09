/**
 * TermsCondition Page
 */
import React, { Component, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import "../../antdstyle.css";
import { useDispatch } from 'react-redux';
import { getAppraisalsBySupervisorId } from './../../../services/PerformanceManagement/StaffAppraisal/getAppraisalsBySupervisorId';
import { useSelector } from 'react-redux';

const SupervisorAppraisal = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }
  });


  console.log(">>>>>>supervisor", supervisorAppraisals)

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
              <h3 className="page-title">Appraisal Review</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/app/employees/staff_Appraisal">
                    Back to Appraisal Page
                  </Link>
                </li>
                <li className="breadcrumb-item active">Review</li>
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
                  {/* Table Header  Starts Here */}
                  <div className="row">
                    <div
                      className="col-lg-12 d-flex border-bottom pt-2 pb-2 font-weight-bolder"
                      style={{ backgroundColor: "#DADADA" }}
                    >
                      <div className="col-lg-4">KPI</div>
                      <div className="col-lg-2 text-center">
                        MEASURABLE TARGET
                      </div>
                      <div className="col-lg-1 text-center">WEIGHT</div>
                      <div className="col-lg-1 text-center">APPRAISEE RATE</div>
                      <div className="col-lg-1 text-center">
                        APPRAISEE RESULT
                      </div>
                      <div className="col-lg-1 text-center">
                        Supervisor <br/>
                        Rate
                      </div>
                      <div className="col-lg-1 text-center">
                        Supervisor RESULT
                      </div>
                    </div>
                  </div>
                  {/* Table Header Ends Here */}

                  {/* Process Review Starts Here */}
                  <div className="row m-t-20">
                    <div className="col-md-12 m-b-20">
                      <h4
                        className="user-name"
                        style={{
                          fontWeight: "bolder",
                          textDecoration: "underline",
                        }}
                      >
                        PROCESS
                      </h4>
                    </div>

                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                          <div className="col-lg-4">
                            # Self-help reports built for internal customers
                            within a period.
                          </div>
                          <div className="col-lg-2 text-center">40</div>
                          <div className="col-lg-2 text-center">10</div>
                          <div
                            className="col-lg-1 text-center"
                            style={{ color: "#139b23", fontWeight: "bolder" }}
                          >
                            35
                          </div>
                          <div
                            className="col-lg-1 text-center"
                            style={{ color: "red", fontWeight: "bolder" }}
                          >
                            10
                          </div>
                          <div
                            className="col-lg-1 text-center"
                            style={{ color: "#139b23", fontWeight: "bolder" }}
                          >
                            35
                          </div>
                          <div
                            className="col-lg-1 text-center"
                            style={{ color: "red", fontWeight: "bolder" }}
                          >
                            10
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Process Review Ends Here */}

                  {/* Submit Appraisal Button */}
                  <div className="form-group col-lg-12 col-md-12 col-sm-12 m-t-50 m-b-20">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="col-lg-4 col-md-6 col-sm-12 m-b-10">
                        {/* <a href="" className="btn btn-block btn-primary font-weight-700">SUBMIT</a> */}
                        <Link
                          to="/app/employees/super_self_Appraisal"
                          className="btn btn-block btn-primary font-weight-700"
                        >
                          SUBMIT
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
};
export default SupervisorAppraisal;

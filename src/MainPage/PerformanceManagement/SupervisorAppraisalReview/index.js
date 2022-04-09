/**
 * TermsCondition Page
 */
import React, { Component, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { updateName } from "../../../utils/helper";
import {
  createStore,
  useStateMachine,
  StateMachineProvider,
  GlobalState,
} from "little-state-machine";
import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import "../../antdstyle.css";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAppraisalByReferenceId } from "../../../services/PerformanceManagement/StaffAppraisal/getAppraisalByReference";
import { useSelector } from "react-redux";
import { SupervisorKpiComponent } from "./../KpiComponent/index";
import { useHistory } from "react-router-dom";

const SupervisorAppraisalReview = () => {
  const { state: allData, actions } = useStateMachine({ updateName });
  const dispatch = useDispatch();
  const [KPIs, setKPIs] = useState([]);
  const [kpiResult, setKpiResult] = useState("");
  const history = useHistory();

  const { data: details } = useSelector(
    (state) => state.performanceManagement.getAppraisalByReferenceReducer
  );

  const allProcess = allData?.data.KPIs.filter(
    (kpi) => kpi.category === "Process"
  );
  const allCustomer = allData?.data.KPIs.filter(
    (kpi) => kpi.category === "Customer"
  );
  const allFinancial = allData?.data.KPIs.filter(
    (kpi) => kpi.category === "Financial"
  );
  const allCapacityDevelopment = allData?.data.KPIs.filter(
    (kpi) => kpi.category === "Capacity Development"
  );

  const submitAppraisal = () => {
    const appraisals = KPIs?.map((kpi) => {
      return {
        staffId: kpi.staffId,
        supervisorRate: kpi.supervisorRate,
        appraiseeComment: kpi.appraiseeComment,
        supervisorComment: kpi.supervisorComment,
        supervisorResult: kpi.supervisorResult,
        kpiId: Number(kpi.kpiId),
        categoryId: Number(kpi.categoryId),
        measurableTarget: kpi.measurableTarget,
        weightedScore: kpi.weightedScore,
        appraiseeResult: kpi.appraiseeResult,
        appraiseeRate: kpi.appraiseeRate,
        recommendation: kpi.recommendation,
      };
    });

    const data = {
      appraisals,
      history,
      clearKPIs,
    };

    dispatch(submitStaffAppraisal(data));
  };

  useEffect(() => {
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }
  });

  const result = KPIs.reduce((acc, kpi) => {
    const allResults = kpi.supervisorResult.split("%");
    console.log(">>>>acc", allResults[0]);

    return Number(acc) + Number(allResults[0]);
  }, 0);

  useEffect(() => {
    console.log(">>>>allData", allData);
    setKPIs(allData?.data.KPIs);
    setKpiResult(result);
  });

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
              <h3 className="page-title">Supervisor Review</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/app/performanceManagement/allStaffAppraisals">
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
                    <div className="d-flex col-md-12">
                      <h4 className="col-md-2">Staff Name:</h4>
                      <h4 className="col-md-10">{details?.staffName}</h4>
                    </div>

                    <div className="d-flex col-md-12 m-b-10">
                      <h4 className="col-md-2">Staff ID:</h4>
                      <h4 className="col-md-10">{details?.staffId}</h4>
                    </div>
                    <div
                      className="col-lg-12 d-flex border-bottom pt-2 pb-2 font-weight-bolder"
                      style={{ backgroundColor: "#DADADA" }}
                    >
                      <div className="col-lg-3">KPI</div>
                      <div className="col-lg-2 text-center">
                        MEASURABLE TARGET
                      </div>
                      <div className="col-lg-1 text-center">WEIGHT</div>
                      <div className="col-lg-2 text-center">APPRAISEE RATE</div>
                      <div className="col-lg-2 text-center">
                        APPRAISEE RESULT
                      </div>
                      <div className="col-lg-1 text-center">
                        SUPERVISOR RATING
                      </div>
                      <div className="col-lg-1 text-center">
                        SUPERVISOR RESULT
                      </div>
                    </div>
                  </div>
                  {/* Table Header Ends Here */}

                  {/* Process Review Starts Here */}
                  <div className="col-md-12 m-b-20 m-t-20">
                    <h4
                      className="user-name"
                      style={{
                        fontWeight: "bolder",
                        textDecoration: "underline",
                      }}
                    >
                      Process
                    </h4>
                  </div>
                  {allProcess?.map((kpi) => {
                    return <SupervisorKpiComponent kpi={kpi} />;
                  })}

                  <div className="col-md-12 m-b-20 m-t-20">
                    <h4
                      className="user-name"
                      style={{
                        fontWeight: "bolder",
                        textDecoration: "underline",
                      }}
                    >
                      Customer
                    </h4>
                  </div>
                  {allCustomer?.map((kpi) => {
                    return <SupervisorKpiComponent kpi={kpi} />;
                  })}

                  <div className="col-md-12 m-b-20 m-t-20">
                    <h4
                      className="user-name"
                      style={{
                        fontWeight: "bolder",
                        textDecoration: "underline",
                      }}
                    >
                      Financial
                    </h4>
                  </div>
                  {allFinancial?.map((kpi) => {
                    return <SupervisorKpiComponent kpi={kpi} />;
                  })}

                  <div className="col-md-12 m-b-20 m-t-20">
                    <h4
                      className="user-name"
                      style={{
                        fontWeight: "bolder",
                        textDecoration: "underline",
                      }}
                    >
                      Capacity Development
                    </h4>
                  </div>
                  {allCapacityDevelopment?.map((kpi) => {
                    return <SupervisorKpiComponent kpi={kpi} />;
                  })}

                  {/* Supervisor's Comments Starts Here */}
                  <div className="row m-t-50">
                    <div
                      className="col-lg-12 m-b-10"
                      style={{ fontSize: "1.2em" }}
                    >
                      <div className="row">
                        <div className="col-lg-12 d-flex pt-2 pb-2">
                          <div
                            className="col-lg-3"
                            style={{
                              fontWeight: "bolder",
                              textDecoration: "underline",
                            }}
                          >
                            SUPERVISOR COMMENTS
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12 pt-2 pb-2 m-b-30">
                      <div className="col-lg-6">
                        {allData?.data.supervisorComment}
                      </div>
                    </div>

                    <div className="col-lg-12 pt-2 pb-2">
                      <div className="col-lg-3 m-b-10">RECOMMENDATION</div>
                      <div className="col-lg-4">
                        {allData?.data.supervisorRecommendation}
                      </div>
                    </div>

                    <div className="form-group col-lg-12 col-md-12 col-sm-12 m-t-20 m-b-20">
                      <div className="col-lg-3 col-md-6 col-sm-12 m-b-10">
                        <Link
                          onClick={() => submitAppraisal()}
                          className="btn btn-block btn-primary font-weight-700"
                        >
                          Confirm
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Supervisor's Comments Ends Here */}
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
export default SupervisorAppraisalReview;

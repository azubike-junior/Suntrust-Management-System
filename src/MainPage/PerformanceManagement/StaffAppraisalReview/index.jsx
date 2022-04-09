/**
 * TermsCondition Page
 */
import React, { Component, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useHistory } from "react-router-dom";
import { Table } from "antd";
import "antd/dist/antd.css";
import { updateName } from "../../../utils/helper";
import {
  createStore,
  useStateMachine,
  StateMachineProvider,
  GlobalState,
} from "little-state-machine";
import "../../antdstyle.css";
import { useDispatch } from "react-redux";
import { submitStaffAppraisal } from "./../../../services/PerformanceManagement/StaffAppraisal/submitStaffAppraisal";
import KpiComponent from "../KpiComponent";

const StaffAppraisalReview = () => {
  const { state: allData, actions } = useStateMachine({ updateName });
  const dispatch = useDispatch();
  const [KPIs, setKPIs] = useState([]);
  const [kpiResult, setKpiResult] = useState("");
  const history = useHistory();

  console.log(">>>>.state", allData);

  useEffect(() => {
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }
  });

  const clearKPIs = () => {
    allData.data = {
      KPIs: [],
    };
    actions.update(allData.data);
  };

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

  console.log(">>>>>>allKPIs", allProcess);

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
      };
    });

    const data = {
      appraisals,
      history,
      clearKPIs,
    };

    dispatch(submitStaffAppraisal(data));
  };

  const result = KPIs.reduce((acc, kpi) => {
    const allResults = kpi.appraiseeResult.split("%");
    console.log(">>>>acc", allResults[0]);

    return Number(acc) + Number(allResults[0]);
  }, 0);

  useEffect(() => {
    console.log(">>>>allData", allData?.data.KPIs);
    setKPIs(allData?.data.KPIs);
    setKpiResult(result);
  });

  console.log(">>>>>>result", result);

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
                <li className="breadcrumb-item" onClick={() => clearKPIs()}>
                  <Link to="/app/performanceManagement/staffAppraisal">
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
                      <div className="col-lg-2 text-center">WEIGHT</div>
                      <div className="col-lg-2 text-center">APPRAISEE RATE</div>
                      <div className="col-lg-2 text-center">
                        APPRAISEE RESULT
                      </div>
                    </div>
                  </div>
                  {/* Table Header Ends Here */}

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
                    return <KpiComponent kpi={kpi} />;
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
                    return <KpiComponent kpi={kpi} />;
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
                    return <KpiComponent kpi={kpi} />;
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
                    return <KpiComponent kpi={kpi} />;
                  })}

                  {/* Total Scores Review Starts Here */}
                  <div className="row m-t-50" style={{ fontSize: "1.3em" }}>
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                          <div
                            className="col-lg-4"
                            style={{ fontWeight: "bolder" }}
                          >
                            TOTAL
                          </div>
                          <div className="col-lg-2 text-center">&nbsp;</div>
                          <div className="col-lg-2 text-center">&nbsp;</div>
                          <div className="col-lg-2 text-center">&nbsp;</div>
                          <div
                            className="col-lg-2 text-center text-success"
                            style={{ color: "red", fontWeight: "bolder" }}
                          >
                            {Number(kpiResult)?.toFixed()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Total Scores Review Ends Here */}

                  {/* Submit Appraisal Button */}
                  <div className="form-group col-lg-12 col-md-12 col-sm-12 m-t-50 m-b-20">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="col-lg-4 col-md-6 col-sm-12 m-b-10">
                        <a
                          href="#"
                          className="btn btn-block btn-primary font-weight-700"
                          onClick={() => submitAppraisal()}
                        >
                          SUBMIT
                        </a>
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
export default StaffAppraisalReview;

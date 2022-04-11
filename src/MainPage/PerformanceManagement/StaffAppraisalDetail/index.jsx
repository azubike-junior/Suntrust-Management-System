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
import { SupervisorKpiInput } from "../KpiComponent";

const StaffAppraisalDetail = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({});
  const [appraiseeResults, setAppraiseeResults] = useState({});
  const [allKPIs, setAllKPIs] = useState([]);
  const [supervisorComment, setSupervisorComment] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const { appraisalReference } = useParams();

  const { state, actions } = useStateMachine({ updateName });

  const { data: details } = useSelector(
    (state) => state.performanceManagement.getAppraisalByReferenceReducer
  );

  console.log(">>>>>details", details)

  const updateValues = (e, id, kpi) => {
    let { value, min, max } = e.target;
    if ((value > Number(max)) | (value < Number(min))) {
      value = 0;
    }

    console.log(value, min, max);

    setValues({ ...values, [id]: value });

    const result = ((value / kpi.measurableTarget) * kpi.weightedScore) / 1;

    setAppraiseeResults({ ...appraiseeResults, [id]: result });

    const eachKPI = {
      staffId: "265",
      supervisorRate: e.target.value,
      supervisorResult: result.toFixed(),
      description: kpi.kpiDescription,
      kpiId: kpi.kpiId,
      categoryId: kpi.categoryId,
      measurableTarget: kpi.measurableTarget,
      weightedScore: kpi.weightedScore,
      category: kpi.categoryDescription,
      appraiseeResult: kpi.appraiseeResult,
      appraiseeRate: kpi.appraiseeRate,
    };

    if (value.length >= 2) {
      setAllKPIs((prev) => [...prev, eachKPI]);
    }
  };

  const addKPIsToState = () => {
    state.data = {
      supervisorRecommendation: recommendation,
      supervisorComment,
      appraiseeComment: "",
      KPIs: allKPIs,
    };
    actions.updateName(state.data);
  };

  const allProcess = details?.kpis?.filter(
    (kpi) => kpi.categoryDescription === "Process"
  );
  const allCustomer = details?.kpis?.filter(
    (kpi) => kpi.categoryDescription === "Customer"
  );
  const allFinancial = details?.kpis?.filter(
    (kpi) => kpi.categoryDescription === "Financial"
  );
  const allCapacityDevelopment = details?.kpis?.filter(
    (kpi) => kpi.categoryDescription === "Capacity Development"
  );

  console.log(">>>>>>allKPIs", allKPIs);

  useEffect(() => {
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }
  });

  useEffect(() => {
    dispatch(getAppraisalByReferenceId(appraisalReference));
  }, []);

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
                    // console.log(">>>>>>kpi", kpi)
                    return (
                      <SupervisorKpiInput
                        kpi={kpi}
                        values={values}
                        appraiseeResults={appraiseeResults}
                        updateValues={updateValues}
                      />
                    );
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
                    return (
                      <SupervisorKpiInput
                        kpi={kpi}
                        values={values}
                        appraiseeResults={appraiseeResults}
                        updateValues={updateValues}
                      />
                    );
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
                    return (
                      <SupervisorKpiInput
                        kpi={kpi}
                        values={values}
                        appraiseeResults={appraiseeResults}
                        updateValues={updateValues}
                      />
                    );
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
                    return (
                      <SupervisorKpiInput
                        kpi={kpi}
                        values={values}
                        appraiseeResults={appraiseeResults}
                        updateValues={updateValues}
                      />
                    );
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
                      <div className="col-lg-3 m-b-10">SUPERVISOR COMMENTS</div>
                      <div className="col-lg-6">
                        <textarea
                          className="form-control"
                          rows="3"
                          onChange={(e) => setSupervisorComment(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 pt-2 pb-2">
                      <div className="col-lg-3 m-b-10">RECOMMENDATION</div>
                      <div className="col-lg-4">
                        <select
                          className="select"
                          onChange={(e) => setRecommendation(e.target.value)}
                        >
                          <option value={"training"}>Training</option>
                          <option value={"maintainStatus"}>Maintain Status</option>
                          <option value={"transfer"}>Transfer to Unit Department</option>
                          <option value={"terminate"}>Terminate Employment</option>
                          <option value={"advice"}>Advice to Resign</option>
                          <option value={"sendStaff"}>Send staff to Pool</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group col-lg-12 col-md-12 col-sm-12 m-t-20 m-b-20">
                      <div className="col-lg-3 col-md-6 col-sm-12 m-b-10">
                        <Link
                          onClick={() => addKPIsToState()}
                          to="/app/performanceManagement/supervisorAppraisalReview"
                          className="btn btn-block btn-primary font-weight-700"
                        >
                          PREVIEW
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
export default StaffAppraisalDetail;

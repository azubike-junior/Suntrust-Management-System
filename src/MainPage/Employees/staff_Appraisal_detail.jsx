/**
 * TermsCondition Page
 */
import React, { Component, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import "../antdstyle.css";
import Staff_Appraisal from "./staff_Appraisal";
import {
  createStore,
  useStateMachine,
  StateMachineProvider,
  GlobalState,
} from "little-state-machine";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getBehaviouralTraining } from "./../../services/PerformanceManagement/StaffAppraisal/getBehaviouralTraining";
import { getTechnicalTraining } from "./../../services/PerformanceManagement/StaffAppraisal/getTechnicalTraining";
import { addSelect } from "../../utils/helper";
import { getStrengths } from "./../../services/PerformanceManagement/StaffAppraisal/getStrengths";
import { RadioInput } from "../../components/RadioInput";
import { getAppraisalByReferenceId } from "./../../services/PerformanceManagement/StaffAppraisal/getAppraisalByReference";
import { useParams } from "react-router-dom";
import { NewSupervisorKpiInputComponent } from "../PerformanceManagement/KpiComponent";
import { updateName } from "./../../utils/helper";

const Staff_Appraisal_Detail = () => {
  const dispatch = useDispatch();
  const [timeManagementScore, setTimeManagementScore] = useState(0);
  const [punctualityScore, setPunctualityScore] = useState(0);
  const [analyticScore, setAnalyticScore] = useState(0);
  const [professionalScore, setProfessionalScore] = useState(0);
  const [communicationScore, setCommunicationScore] = useState(0);
  const [strengthResult, setStrengthResult] = useState(0);
  const [technic, setTechnic] = useState("");
  const [behavior, setBehavior] = useState("");
  const [values, setValues] = useState({});
  const [appraiseeResults, setAppraiseeResults] = useState({});
  const [allKPIs, setAllKPIs] = useState([]);
  const [supervisorComment, setSupervisorComment] = useState("");
  const [allSupervisorResults, setAllSupervisorResults] = useState({});
  const { state, actions } = useStateMachine({ updateName });
  const [selectedBehavioralTrainings, setSelectedBehavioralTraining] = useState(
    []
  );
  const [selectedTechnicalTrainings, setSelectedTechnicalTraining] = useState(
    []
  );

  const handleBehaviorChange = (e) => {
    setSelectedBehavioralTraining((prev) => [...prev, e.target.value]);
  };

  const handleTechnicalChange = (e) => {
    setSelectedTechnicalTraining((prev) => [...prev, e.target.value]);
  };

  console.log(">>>>>>>selected", selectedBehavioralTrainings);

  const { appraisalReference } = useParams();

  const { data: behaviouralTrainings } = useSelector(
    (state) => state.performanceManagement.getBehaviouralTrainingReducer
  );
  const { data: technicalTrainings } = useSelector(
    (state) => state.performanceManagement.getTechnicalTrainingReducer
  );

  const { data: strengthIndicators } = useSelector(
    (state) => state.performanceManagement.getStrengthsReducer
  );

  const { data: details } = useSelector(
    (state) => state.performanceManagement.getAppraisalByReferenceReducer
  );

  // console.log(">>>>>details", details);

  const {
    appraisalPeriodStatus,
    appraiseeName,
    supervisorId,
    supervisorName,
    secondSupervisorName,
    exceptionalAchievement,
    dateSubmitted,
    staffId,
    lastPromotionDate,
    totalAppraiseeResult,
    kpis,
  } = details;

  const updateValues = (e, id, kpi) => {
    let { value, min, max } = e.target;
    if ((value > Number(max)) | (value < Number(min))) {
      value = 0;
    }

    //computation of target and weightScore
    const result = ((value / kpi.measurableTarget) * kpi.weightedScore) / 1;

    //values for supervisorRate is set
    setValues({ ...values, [id]: value });

    //values for supervisorResults is set
    setAllSupervisorResults({ ...allSupervisorResults, [id]: result });

    setAppraiseeResults({ ...appraiseeResults, [id]: result });
  };

  //add kpi data to the stateMachine
  const addKPIsToState = () => {
    state.data = {
      behaviouralTrainings:
        selectedBehavioralTrainings[0] +
        selectedBehavioralTrainings[1] +
        selectedBehavioralTrainings[2],
      functionalTrainings:
        selectedTechnicalTrainings[0] +
        selectedTechnicalTrainings[1] +
        selectedTechnicalTrainings[2],
      behaviouralTrainingsArray: selectedBehavioralTrainings,
      functionalTrainingsArray: selectedTechnicalTrainings,
      supervisorComment,
      secondLevelSupervisorComment: "",
      strengthScore: Number(strengthResult),
      supervisorRates: values,
      supervisorResults: allSupervisorResults,
    };

    actions.updateName(state.data);
  };

  //
  const allProcess = details?.kpis
    ?.filter((kpi) => kpi.categoryDescription === "Process")
    .map((kpi, index) => {
      if (index === 0) {
        return { ...kpi, categoryDescription: kpi.categoryDescription };
      }
      return { ...kpi, categoryDescription: "" };
    });

  const allCustomer = details?.kpis
    ?.filter((kpi) => kpi.categoryDescription === "Customer")
    .map((kpi, index) => {
      if (index === 0) {
        return { ...kpi, categoryDescription: kpi.categoryDescription };
      }
      return { ...kpi, categoryDescription: "" };
    });

  const allFinancial = details?.kpis
    ?.filter((kpi) => kpi.categoryDescription === "Financial")
    .map((kpi, index) => {
      if (index === 0) {
        return { ...kpi, categoryDescription: kpi.categoryDescription };
      }
      return { ...kpi, categoryDescription: "" };
    });

  const allCapacityDevelopment = details?.kpis
    ?.filter((kpi) => kpi.categoryDescription === "Capacity Development")
    .map((kpi, index) => {
      if (index === 0) {
        return { ...kpi, categoryDescription: kpi.categoryDescription };
      }
      return { ...kpi, categoryDescription: "" };
    });

  useEffect(() => {
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }
  });

  // console.log("rec", recommendation);

  useEffect(() => {
    dispatch(getBehaviouralTraining());
  }, []);

  useEffect(() => {
    dispatch(getTechnicalTraining());
  }, []);

  useEffect(() => {
    dispatch(getStrengths());
  }, []);

  useEffect(() => {
    const strengthRes =
      Number(punctualityScore) +
      Number(analyticScore) +
      Number(professionalScore) +
      Number(communicationScore) +
      Number(timeManagementScore);
    setStrengthResult(strengthRes);
  }, [
    punctualityScore,
    analyticScore,
    professionalScore,
    communicationScore,
    timeManagementScore,
  ]);

  const allBehaviourals = addSelect(behaviouralTrainings, {
    id: "",
    description: "-Select-",
  });
  const allTechnicals = addSelect(technicalTrainings, {
    id: "",
    description: "-Select-",
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
              <h3 className="page-title">Appraisal Review</h3>
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

                  <div className="card m-b-50">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="profile-view">
                            <label
                              className="font-18 font-weight-bold m-b-20"
                              style={{ textDecoration: "underline" }}
                            >
                              STAFF DETAILS
                            </label>

                            {/* Staff Details Starts Here */}
                            <div className="d-flex mb-5">
                              <div className="col-lg-6">
                                <div className="d-flex m-b-10 font_size">
                                  <div className="col-lg-5 col-md-6 col-sm-12 font-weight-bold">
                                    SUPERVISOR ID:
                                  </div>
                                  <div className="col-lg-7 col-md-6 col-sm-12">
                                    {supervisorId}
                                  </div>
                                </div>

                                <div className="d-flex m-b-10 font_size">
                                  <div className="col-lg-5 col-md-6 col-sm-12 font-weight-bold">
                                    SUPERVISOR NAME:
                                  </div>
                                  <div className="col-lg-7 col-md-6 col-sm-12">
                                    {supervisorName}
                                  </div>
                                </div>

                                <div className="d-flex m-b-10 font_size">
                                  <div className="col-lg-5 col-md-6 col-sm-12 font-weight-bold">
                                    APPRAISEE NAME:
                                  </div>
                                  <div className="col-lg-7 col-md-6 col-sm-12">
                                    {appraiseeName}
                                  </div>
                                </div>

                                <div className="d-flex m-b-10 font_size">
                                  <div className="col-lg-5 col-md-6 col-sm-12 font-weight-bold">
                                    DATE SUBMITTED:
                                  </div>
                                  <div className="col-lg-7 col-md-6 col-sm-12">
                                    {dateSubmitted}
                                  </div>
                                </div>

                                <div className="d-flex m-b-10 font_size">
                                  <div className="col-lg-5 col-md-6 col-sm-12 font-weight-bold">
                                    STAF ID
                                  </div>
                                  <div className="col-lg-7 col-md-6 col-sm-12">
                                    {staffId}
                                  </div>
                                </div>

                                {/* <div className="d-flex m-b-10 font_size">
                                  <div className="col-lg-5 col-md-6 col-sm-12 font-weight-bold">
                                    DEPARTMENT:
                                  </div>
                                  <div className="col-lg-7 col-md-6 col-sm-12">
                                    Human Capital Management
                                  </div>
                                </div> */}
                              </div>

                              <div className="col-lg-6">
                                {/* <div className="d-flex m-b-10 font_size">
                                  <div className="col-lg-5 col-md-6 col-sm-12 font-weight-bold">
                                    GROUP:
                                  </div>
                                  <div className="col-lg-7 col-md-6 col-sm-12">
                                    HR & Strategy Group
                                  </div>
                                </div> */}

                                <div className="d-flex m-b-10 font_size">
                                  <div className="col-lg-5 col-md-6 col-sm-12 font-weight-bold">
                                    APPRAISAL PERIOD STATUS:
                                  </div>
                                  <div className="col-lg-7 col-md-6 col-sm-12">
                                    {appraisalPeriodStatus}
                                  </div>
                                </div>

                                {/* <div className="d-flex m-b-10 font_size">
                                  <div className="col-lg-5 col-md-6 col-sm-12 font-weight-bold">
                                    APPRAISER:
                                  </div>
                                  <div className="col-lg-7 col-md-6 col-sm-12">
                                    Demarai Gray
                                  </div>
                                </div> */}

                                <div className="d-flex m-b-10 font_size">
                                  <div className="col-lg-5 col-md-6 col-sm-12 font-weight-bold">
                                    GROUP HEAD:
                                  </div>
                                  <div className="col-lg-7 col-md-6 col-sm-12">
                                    {secondSupervisorName}
                                  </div>
                                </div>

                                <div className="d-flex m-b-10 font_size">
                                  <div className="col-lg-5 col-md-6 col-sm-12 font-weight-bold">
                                    LAST PROMOTION DATE:
                                  </div>
                                  <div className="col-lg-7 col-md-6 col-sm-12">
                                    {lastPromotionDate}
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Staff Details Ends Here */}

                            <div
                              className="row d-flex border-bottom pt-2 pb-2 font-weight-bolder"
                              style={{
                                backgroundColor: "#cccccc",
                                marginBottom: "10px",
                              }}
                            >
                              <div className="col-lg-12">
                                <div
                                  className="user-name"
                                  style={{ fontWeight: "bolder" }}
                                >
                                  SCORECARD
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              {/* Table Header  Starts Here */}
                              <div
                                className="col-lg-12 d-flex border-bottom pt-2 pb-2 font-weight-bolder"
                                style={{ backgroundColor: "#efefef" }}
                              >
                                <div className="col-lg-2">PERSPECTIVE</div>
                                <div className="col-lg-3">KPI</div>
                                <div className="col-lg-1 text-center">
                                  TARGET
                                </div>
                                <div className="col-lg-1 text-center">
                                  WEIGHT
                                </div>
                                <div className="col-lg-1 text-center">
                                  APP. RATE
                                </div>
                                <div className="col-lg-2 text-center">
                                  APP. RESULT
                                </div>
                                <div className="col-lg-1 text-center">
                                  ACTUAL
                                </div>
                                <div className="col-lg-1 text-center">
                                  POINTS
                                </div>
                              </div>
                              {/* Table Header Ends Here */}

                              {/* Process Review Starts Here */}
                              {allProcess?.map((kpi) => {
                                return (
                                  <NewSupervisorKpiInputComponent
                                    kpi={kpi}
                                    values={values}
                                    appraiseeResults={appraiseeResults}
                                    updateValues={updateValues}
                                  />
                                );
                              })}

                              {/* Process Review Ends Here */}

                              {/* Customer Review Starts Here */}
                              {allCustomer?.map((kpi) => {
                                return (
                                  <NewSupervisorKpiInputComponent
                                    kpi={kpi}
                                    values={values}
                                    appraiseeResults={appraiseeResults}
                                    updateValues={updateValues}
                                  />
                                );
                              })}

                              {/* Customer Review Ends Here */}

                              {/* Financial Review Starts Here */}
                              {allFinancial?.map((kpi) => {
                                return (
                                  <NewSupervisorKpiInputComponent
                                    kpi={kpi}
                                    values={values}
                                    appraiseeResults={appraiseeResults}
                                    updateValues={updateValues}
                                  />
                                );
                              })}

                              {allCapacityDevelopment?.map((kpi) => {
                                return (
                                  <NewSupervisorKpiInputComponent
                                    kpi={kpi}
                                    values={values}
                                    appraiseeResults={appraiseeResults}
                                    updateValues={updateValues}
                                  />
                                );
                              })}

                              {/* Financial Review Ends Here */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-12 border-bottom pt-2 pb-2 font-weight-bolder"
                    style={{
                      fontWeight: "bolder",
                      marginBottom: "10px",
                      backgroundColor: "#cccccc",
                    }}
                  >
                    <div className="col-lg-12  user-name">STRENGTHS</div>
                  </div>

                  <div className="d-flex m-b-50 ">
                    <div className="card col-lg-8">
                      <div className="card-body">
                        {/* <div className="row"> */}
                        <div className="profile-view">
                          {/* Staff Details Starts Here */}
                          <div className="d-flex mb-2 border-bottom">
                            <div className="col-lg-12 d-flex">
                              <h4 className="col-lg-4">Skills</h4>
                              <h4 className="col-lg-8">Ratings</h4>
                            </div>
                          </div>

                          <div className="d-flex mt-3 mb-3 border-bottom">
                            <div className="col-lg-12 d-flex">
                              <div className="col-lg-4">Time Management</div>

                              <div className="col-lg-8">
                                <div id="ratings_group">
                                  <RadioInput
                                    label="1"
                                    value="1"
                                    checked={timeManagementScore}
                                    setter={setTimeManagementScore}
                                  />
                                  <RadioInput
                                    label="2"
                                    value="2"
                                    checked={timeManagementScore}
                                    setter={setTimeManagementScore}
                                  />
                                  <RadioInput
                                    label="3"
                                    value="3"
                                    checked={timeManagementScore}
                                    setter={setTimeManagementScore}
                                  />
                                  <RadioInput
                                    label="4"
                                    value="4"
                                    checked={timeManagementScore}
                                    setter={setTimeManagementScore}
                                  />
                                  <RadioInput
                                    label="5"
                                    value="5"
                                    checked={timeManagementScore}
                                    setter={setTimeManagementScore}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex mb-3 border-bottom">
                            <div className="col-lg-12 d-flex">
                              <div className="col-lg-4">Punctuality</div>

                              <div className="col-lg-8">
                                <div id="ratings_group">
                                  <RadioInput
                                    label="1"
                                    value={1}
                                    checked={punctualityScore}
                                    setter={setPunctualityScore}
                                  />
                                  <RadioInput
                                    label="2"
                                    value={2}
                                    checked={punctualityScore}
                                    setter={setPunctualityScore}
                                  />
                                  <RadioInput
                                    label="3"
                                    value={3}
                                    checked={punctualityScore}
                                    setter={setPunctualityScore}
                                  />
                                  <RadioInput
                                    label="4"
                                    value={4}
                                    checked={punctualityScore}
                                    setter={setPunctualityScore}
                                  />
                                  <RadioInput
                                    label="5"
                                    value={5}
                                    checked={punctualityScore}
                                    setter={setPunctualityScore}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex border-bottom">
                            <div className="col-lg-12 d-flex">
                              <div className="col-lg-4">
                                Professional Conduct
                              </div>

                              <div className="col-lg-8">
                                <div id="ratings_group">
                                  <RadioInput
                                    label="1"
                                    value={1}
                                    checked={professionalScore}
                                    setter={setProfessionalScore}
                                  />
                                  <RadioInput
                                    label="2"
                                    value={2}
                                    checked={professionalScore}
                                    setter={setProfessionalScore}
                                  />
                                  <RadioInput
                                    label="3"
                                    value={3}
                                    checked={professionalScore}
                                    setter={setProfessionalScore}
                                  />
                                  <RadioInput
                                    label="4"
                                    value={4}
                                    checked={professionalScore}
                                    setter={setProfessionalScore}
                                  />
                                  <RadioInput
                                    label="5"
                                    value={5}
                                    checked={professionalScore}
                                    setter={setProfessionalScore}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex border-bottom">
                            <div className="col-lg-12 d-flex">
                              <div className="col-lg-4">Communication</div>

                              <div className="col-lg-8">
                                <div id="ratings_group">
                                  <RadioInput
                                    label="1"
                                    value={1}
                                    checked={communicationScore}
                                    setter={setCommunicationScore}
                                  />
                                  <RadioInput
                                    label="2"
                                    value={2}
                                    checked={communicationScore}
                                    setter={setCommunicationScore}
                                  />
                                  <RadioInput
                                    label="3"
                                    value={3}
                                    checked={communicationScore}
                                    setter={setCommunicationScore}
                                  />
                                  <RadioInput
                                    label="4"
                                    value={4}
                                    checked={communicationScore}
                                    setter={setCommunicationScore}
                                  />
                                  <RadioInput
                                    label="5"
                                    value={5}
                                    checked={communicationScore}
                                    setter={setCommunicationScore}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex border-bottom">
                            <div className="col-lg-12 d-flex">
                              <div className="col-lg-4">
                                Analytical Thinking
                              </div>

                              <div className="col-lg-8">
                                <div id="ratings_group">
                                  <RadioInput
                                    label="1"
                                    value={1}
                                    checked={analyticScore}
                                    setter={setAnalyticScore}
                                  />
                                  <RadioInput
                                    label="2"
                                    value={2}
                                    checked={analyticScore}
                                    setter={setAnalyticScore}
                                  />
                                  <RadioInput
                                    label="3"
                                    value={3}
                                    checked={analyticScore}
                                    setter={setAnalyticScore}
                                  />
                                  <RadioInput
                                    label="4"
                                    value={4}
                                    checked={analyticScore}
                                    setter={setAnalyticScore}
                                  />
                                  <RadioInput
                                    label="5"
                                    value={5}
                                    checked={analyticScore}
                                    setter={setAnalyticScore}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* </div> */}
                        <div className="d-flex border-bottom">
                          <div
                            className="col-lg-12 pt-3 pb-3 d-flex"
                            style={{
                              fontWeight: "bolder",
                              backgroundColor: "#efefef",
                            }}
                          >
                            <div className="col-lg-4">TOTAL</div>

                            <div className="col-lg-8">{strengthResult}/25</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card col-lg-4">
                      <div className="card-body">
                        <div className="profile-view">
                          <div className="d-flex mb-5">
                            <div className="col-lg-12">
                              <h4 className="card-title">Ratings Key</h4>
                              <div>
                                <p>
                                  <i className="fa fa-dot-circle-o text-purple mr-2" />
                                  Excellent
                                  <span className="float-right">5</span>
                                </p>
                                <p>
                                  <i className="fa fa-dot-circle-o text-success mr-2" />
                                  Very Good{" "}
                                  <span className="float-right">4</span>
                                </p>
                                <p>
                                  <i className="fa fa-dot-circle-o text-info mr-2" />
                                  Average<span className="float-right">3</span>
                                </p>
                                <p>
                                  <i className="fa fa-dot-circle-o text-warning mr-2" />
                                  Fair<span className="float-right">2</span>
                                </p>
                                <p>
                                  <i className="fa fa-dot-circle-o text-danger mr-2" />
                                  Poor<span className="float-right">1</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-12 border-bottom pt-2 pb-2 font-weight-bolder"
                    style={{
                      fontWeight: "bolder",
                      marginBottom: "10px",
                      backgroundColor: "#cccccc",
                    }}
                  >
                    <div className="col-lg-12  user-name">TRAINING</div>
                  </div>

                  <div className="card">
                    <div className="card-body">
                      <div className="profile-view d-flex">
                        <div className="col-lg-6">
                          <div className="panel panel-default">
                            <div className="panel-heading text-center font-weight-bold">
                              BEHAVIOURAL TRAINING
                            </div>
                            <div className="panel-body">
                              <div className="m-3">
                                <div className="form-group">
                                  <label>Suggest a Behavioural Training:</label>
                                  <select
                                    className="form-control"
                                    value={behavior}
                                    onChange={(e) => handleBehaviorChange(e)}
                                  >
                                    {allBehaviourals?.map((behaviour) => {
                                      return (
                                        <option
                                          key={behaviour?.id}
                                          value={behaviour?.description}
                                        >
                                          {behaviour?.description}
                                        </option>
                                      );
                                    })}
                                  </select>
                                  <div className="selected_items mt-2">
                                    {selectedBehavioralTrainings?.map(
                                      (training) => {
                                        return (
                                          <ul>
                                            <li className="">{training}</li>
                                          </ul>
                                        );
                                      }
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="panel panel-default">
                            <div className="panel-heading text-center font-weight-bold">
                              FUNCTIONAL TRAINING
                            </div>
                            <div className="panel-body">
                              <div className="m-3">
                                <div className="form-group">
                                  <label>Suggest a Functional Training:</label>
                                  <select
                                    className="form-control"
                                    value={technic}
                                    onChange={(e) => handleTechnicalChange(e)}
                                  >
                                    {allTechnicals?.map((technical) => {
                                      return (
                                        <option
                                          key={technical?.id}
                                          value={technical?.description}
                                        >
                                          {technical?.description}
                                        </option>
                                      );
                                    })}
                                  </select>
                                  <div className="selected_items mt-2">
                                    {selectedTechnicalTrainings?.map(
                                      (training) => {
                                        return (
                                          <ul>
                                            <li className="">{training}</li>
                                          </ul>
                                        );
                                      }
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="col-lg-12"
                        style={{ marginTop: "30px", marginBottom: "20px" }}
                      >
                        <div
                          className="font-weight-bolder"
                          style={{
                            marginBottom: "30px",
                            textDecoration: "underline",
                          }}
                        >
                          COMMENTS
                        </div>

                        <div className="form-group mb-5">
                          <div
                            className="mb-3 font-weight-bold"
                            style={{
                              marginBottom: "30px",
                              textDecoration: "underline",
                            }}
                          >
                            SUPERVISOR'S COMMENT
                          </div>
                          <textarea
                            className="form-control mb-3 "
                            defaultValue={""}
                            onChange={(e) =>
                              setSupervisorComment(e.target.value)
                            }
                          />
                        </div>

                        {/* <div className="form-group">
                          <div
                            className="mb-3 font-weight-bold"
                            style={{
                              marginBottom: "20px",
                              textDecoration: "underline",
                            }}
                          >
                            STAFF'S COMMENT
                          </div>
                          <div className="mb-3">
                            Own yo' ipsizzle pimpin' sizzle amizzle,
                            consectetizzle bizzle elit. Nullam dawg velit,
                            mammasay mammasa mamma oo sa volutpat, ma nizzle mah
                            nizzle, gravida vel, arcu. Pellentesque shizznit
                            tortizzle. Shiz erizzle. Fusce izzle shit dapibizzle
                            turpis tempizzle dope. Maurizzle pellentesque nibh
                            et sizzle. Things fo shizzle my nizzle tortor.
                            Sheezy izzle rhoncizzle nisi. In hac habitasse
                            platea dictumst. Uhuh ... yih! dapibizzle.
                          </div>
                        </div> */}
                      </div>

                      <div className="col-lg-4" style={{ marginTop: "50px" }}>
                        {/* <div
                          className="font-weight-bolder"
                          style={{
                            marginBottom: "20px",
                            textDecoration: "underline",
                          }}
                        >
                          RECOMMENDATION
                        </div> */}

                        {/* <div className="form-group ">
                        
                          <select
                            className="form-control"
                            value={recommendation}
                            onChange={(e) => setRecommendation(e.target.value)}
                          >
                            <option value="maintainStatus">
                              Maintain Status
                            </option>
                            <option value="promote">Promote</option>
                            <option value="watchPerformance">
                              Watch Performance
                            </option>
                            <option value="reassign">Reassign </option>
                            <option value="exit">Exit </option>
                          </select>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  {/* Supervisor's Comments Ends Here */}
                </div>

                {/* Submit Appraisal Button */}
                <div
                  className="form-group col-lg-12 col-md-12 col-sm-12"
                  style={{ marginTop: "50px" }}
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-12 m-b-10">
                      <Link
                        to={`/app/performanceManagement/SupervisorAppraisalReview2/${appraisalReference}`}
                        className="btn btn-block btn-primary font-weight-700"
                        onClick={() => addKPIsToState()}
                      >
                        PREVIEW
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Page Content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff_Appraisal_Detail;

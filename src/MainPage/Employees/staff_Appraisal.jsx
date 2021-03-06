import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useStateMachine } from "little-state-machine";
import { getUniqueValues, updateName } from "./../../utils/helper";
import { getIndividualKpis } from "./../../services/PerformanceManagement/Configurations/individualKpi/getIndividualKpi";
import { getCategoryTypes } from "./../../services/PerformanceManagement/Configurations/categoryType/getCategoryTypes";
import {
  NewKpiComponent,
  NewKpiInputComponent,
} from "../PerformanceManagement/KpiComponent";

const Staff_Appraisal = (props) => {
  const dispatch = useDispatch();
  const [cat, setCategory] = useState("");
  const [values, setValues] = useState({});
  const [appraiseeResults, setAppraiseeResults] = useState({});
  const [allKPIs, setAllKPIs] = useState([]);
  const [exceptionalAch, setExceptionalAch] = useState("");

  const { state, actions } = useStateMachine({ updateName });

  const { data: KPIs } = useSelector(
    (state) => state.performanceManagement.getIndividualKpisReducer
  );

  const { data: categories } = useSelector(
    (state) => state.performanceManagement.getCategoryTypesReducer
  );

  const uniqueCategories = getUniqueValues(KPIs, "category");

  let results = [];

  for (let category = 0; category < categories.length; category++) {
    results.push(
      KPIs.filter((kpi) => kpi.category == categories[category].description)
    );
  }

  const updateValues = (e, id, kpi, index) => {
    let { value, min, max } = e.target;
    if ((value > Number(max)) | (value < Number(min))) {
      value = 0;
    }

    console.log(value, min, max);

    setValues({ ...values, [id]: value });

    const result = ((value / kpi.measurableTarget) * kpi.weightedScore) / 1;

    setAppraiseeResults({ ...appraiseeResults, [id]: result });

    const eachKPI = {
      description: kpi.description,
      kpiId: kpi.id,
      categoryId: kpi.categoryId,
      measurableTarget: kpi.measurableTarget,
      weightedScore: kpi.weightedScore,
      category: kpi.category,
      appraiseeResult: result.toFixed(),
      appraiseeRate: e.target.value,
      supervisorRate: "",
      supervisorResult: "",
      key: 0,
    };

    if (value.length >= 2) {
      setAllKPIs((prev) => [...prev, eachKPI]);
    }
  };

  const myResult = results[0]?.map((result) => {
    return {
      weightedScore: result.weightedScore,
      measurableTarget: result.measurableTarget,
      categoryId: result.categoryId,
    };
  });

  // console.log(">>>>>myResult", myResult);

  const addKPIsToState = () => {
    state.data = {
      staffId: "256x`",
      supervisorId: "328",
      appraiseeName: "shola",
      exceptionalAchievement: exceptionalAch,
      appraiseeComment: "string",
      secondSupervisorName: "Mr Ola",
      supervisorName: "Mr kojo",
      KPIs: allKPIs,
    };
    actions.updateName(state.data);
  };

  useEffect(() => {
    dispatch(getIndividualKpis());
  }, []);

  useEffect(() => {
    dispatch(getCategoryTypes());
  }, []);

  console.log(">>>>>results", results[0]);

  const processPerspective = results[0]?.map((kpi, index) => {
    if (index === 0) {
      return { ...kpi, category: kpi.category };
    }
    return { ...kpi, category: "" };
  });

  const customerPerspective = results[1]?.map((kpi, index) => {
    if (index === 0) {
      return { ...kpi, category: kpi.category };
    }
    return { ...kpi, category: "" };
  });

  const financialPerspective = results[2]?.map((kpi, index) => {
    if (index === 0) {
      return { ...kpi, category: kpi.category };
    }
    return { ...kpi, category: "" };
  });

  const capacityPerspective = results[3]?.map((kpi, index) => {
    if (index === 0) {
      return { ...kpi, category: kpi.category };
    }
    return { ...kpi, category: "" };
  });

  return (
    <div>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <Helmet>
          <title>User Dashboard - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="card">
              <div className="card-body">
                <label className="font-18 font-weight-bold m-b-20">
                  APPRAISAL
                </label>

                <div className="profile-view">
                  <div
                    className="row d-flex border-bottom pt-2 pb-2 font-weight-bolder"
                    style={{ backgroundColor: "#cccccc", marginBottom: "10px" }}
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
                      <div className="col-lg-1 text-center">TARGET</div>
                      <div className="col-lg-2 text-center">WEIGHT</div>
                      <div className="col-lg-2 text-center">APP. RATE</div>
                      <div className="col-lg-2 text-center">APP. RESULT</div>
                    </div>
                    {/* Table Header Ends Here */}

                    {processPerspective?.map((kpi) => {
                      return (
                        <NewKpiInputComponent
                          kpi={kpi}
                          values={values}
                          appraiseeResults={appraiseeResults}
                          updateValues={updateValues}
                        />
                      );
                    })}

                    {customerPerspective?.map((kpi) => {
                      return (
                        <NewKpiInputComponent
                          kpi={kpi}
                          values={values}
                          appraiseeResults={appraiseeResults}
                          updateValues={updateValues}
                        />
                      );
                    })}

                    {financialPerspective?.map((kpi) => {
                      return (
                        <NewKpiInputComponent
                          kpi={kpi}
                          values={values}
                          appraiseeResults={appraiseeResults}
                          updateValues={updateValues}
                        />
                      );
                    })}

                    {capacityPerspective?.map((kpi) => {
                      return (
                        <NewKpiInputComponent
                          kpi={kpi}
                          values={values}
                          appraiseeResults={appraiseeResults}
                          updateValues={updateValues}
                        />
                      );
                    })}
                  </div>

                  <div
                    className="col-lg-12"
                    style={{ marginTop: "50px", marginBottom: "20px" }}
                  >
                    <div
                      className="font-weight-bolder"
                      style={{ textDecoration: "underline" }}
                    >
                      EXCEPTIONAL ACHIEVEMENTS
                    </div>

                    <div className="mt-3" style={{ marginBottom: "30px" }}>
                      <label>
                        If you have any exceptional achievements, provide it in
                        the field below:
                      </label>
                    </div>

                    <div className="form-group mb-5">
                      <div
                        className="mb-3 font-weight-bold"
                        style={{
                          marginBottom: "30px",
                          textDecoration: "underline",
                        }}
                      >
                        ACHIEVEMENT(S)
                      </div>
                      <textarea
                        onChange={(e) => setExceptionalAch(e.target.value)}
                        className="form-control mb-3 "
                        defaultValue={""}
                      />
                    </div>

                    <div
                      className="form-group"
                      style={{ marginBottom: "30px" }}
                    >
                      <div
                        className="mb-3 font-weight-bold"
                        style={{
                          marginBottom: "20px",
                          textDecoration: "underline",
                        }}
                      >
                        SUPERVISOR'S COMMENT
                      </div>
                      <div className="mb-3">
                        Own yo' ipsizzle pimpin' sizzle amizzle, consectetizzle
                        bizzle elit. Nullam dawg velit, mammasay mammasa mamma
                        oo sa volutpat, ma nizzle mah nizzle, gravida vel, arcu.
                        Pellentesque shizznit tortizzle. Shiz erizzle. Fusce
                        izzle shit dapibizzle turpis tempizzle dope. Maurizzle
                        pellentesque nibh et sizzle. Things fo shizzle my nizzle
                        tortor. Sheezy izzle rhoncizzle nisi. In hac habitasse
                        platea dictumst. Uhuh ... yih! dapibizzle.
                      </div>
                    </div>

                    <div className="form-group">
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
                        <textarea
                          className="form-control mb-3 "
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="form-group col-lg-12 col-md-12 col-sm-12"
              style={{ marginTop: "50px" }}
            >
              <div className="d-flex align-items-center justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-12 m-b-10">
                  <Link
                    es
                    to="/app/employees/staff_Appraisal_review"
                    className="btn btn-block btn-primary font-weight-700"
                    onClick={() => addKPIsToState()}
                  >
                    PREVIEW
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Header */}
        </div>
      </div>
      {/* /Page Content */}
      {/* /Page Wrapper */}
    </div>
  );
};
export default Staff_Appraisal;

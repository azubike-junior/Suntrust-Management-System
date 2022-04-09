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
import { useDispatch } from "react-redux";
import { getIndividualKpis } from "../../../services/PerformanceManagement/Configurations/individualKpi/getIndividualKpi";
import { useSelector } from "react-redux";
import { getUniqueValues } from "../../../utils/helper";
import { getCategoryTypes } from "../../../services/PerformanceManagement/Configurations/categoryType/getCategoryTypes";
import { KpiInputComponent } from "../KpiComponent";

createStore(
  {
    data: {
      KPIs: [],
    },
  },
  {}
);

const StaffAppraisal = () => {
  const dispatch = useDispatch();
  const [cat, setCategory] = useState("");
  const [values, setValues] = useState({});
  const [appraiseeResults, setAppraiseeResults] = useState({});
  const [allKPIs, setAllKPIs] = useState([]);

  const { state, actions } = useStateMachine({ updateName });

  useEffect(() => {
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }
  });

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
      staffId: "265",
      supervisorRate: "",
      appraiseeComment: "",
      supervisorComment: "",
      supervisorResult: "",
      description: kpi.description,
      kpiId: kpi.id,
      categoryId: kpi.categoryId,
      measurableTarget: kpi.measurableTarget,
      weightedScore: kpi.weightedScore,
      category: kpi.category,
      appraiseeResult: result.toFixed(),
      appraiseeRate: e.target.value,
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

  console.log(">>>>>myResult", myResult);

  const addKPIsToState = () => {
    state.data = {
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
              <h3 className="page-title">Staff Appraisal</h3>
              <ul className="breadcrumb"></ul>
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
                  {results[0]?.map((kpi) => {
                    return (
                      <KpiInputComponent
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
                  {results[1]?.map((kpi) => {
                    return (
                      <KpiInputComponent
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
                  {results[2]?.map((kpi) => {
                    return (
                      <KpiInputComponent
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
                  {results[3]?.map((kpi) => {
                    return (
                      <KpiInputComponent
                        kpi={kpi}
                        values={values}
                        appraiseeResults={appraiseeResults}
                        updateValues={updateValues}
                      />
                    );
                  })}

                  {results[4]?.map((kpi) => {
                    return (
                      <KpiInputComponent
                        kpi={kpi}
                        values={values}
                        appraiseeResults={appraiseeResults}
                        updateValues={updateValues}
                      />
                    );
                  })}

                  {/* Submit Appraisal Button */}
                  <div className="form-group col-lg-12 col-md-12 col-sm-12 m-t-50 m-b-20">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="col-lg-4 col-md-6 col-sm-12 m-b-10">
                        {/* <a href="" className="btn btn-block btn-primary font-weight-700">SUBMIT</a> */}
                        <Link
                          to="/app/performanceManagement/staffAppraisalReview"
                          className="btn btn-block btn-primary font-weight-700"
                          onClick={() => addKPIsToState()}
                        >
                          PREVIEW
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
export default StaffAppraisal;

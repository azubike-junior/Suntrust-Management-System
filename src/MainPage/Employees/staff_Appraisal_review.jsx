import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useStateMachine } from "little-state-machine";
import { getUniqueValues, updateName } from "./../../utils/helper";
import { getIndividualKpis } from "./../../services/PerformanceManagement/Configurations/individualKpi/getIndividualKpi";
import { getCategoryTypes } from "./../../services/PerformanceManagement/Configurations/categoryType/getCategoryTypes";
import {
  NewKpiComponent,
  NewKpiInputComponent,
  NewKpiReviewComponent,
} from "../PerformanceManagement/KpiComponent";
import { submitStaffAppraisal } from "../../services/PerformanceManagement/StaffAppraisal/submitStaffAppraisal";

const Staff_Appraisal_Review = () => {
  const { state: allData, actions } = useStateMachine({ updateName });
  const dispatch = useDispatch();
  const [KPIs, setKPIs] = useState([]);
  const [kpiResult, setKpiResult] = useState("");
  const history = useHistory();

  // console.log(">>>>.state", allData);

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

  // console.log(">>>>>>allKPIs", allProcess);

  const submitAppraisal = () => {
    const appraise = KPIs?.map((kpi) => {
      return {
        supervisorRate: "10",
        key: kpi.key,
        supervisorResult: "20",
        kpiId: Number(kpi.kpiId),
        categoryId: Number(kpi.categoryId),
        // measurableTarget: kpi.measurableTarget,
        // weightedScore: kpi.weightedScore,
        appraiseeResult: kpi.appraiseeResult,
        appraiseeRate: kpi.appraiseeRate,
      };
    });

    const {
      staffId,
      supervisorId,
      supervisorName,
      secondSupervisorName,
      appraiseeName,
      exceptionalAchievement,
      appraiseeComment,
    } = allData?.data;

    const appraisals = {
      staffId,
      supervisorId,
      supervisorName,
      appraiseeName,
      exceptionalAchievement,
      secondSupervisorName,
      appraiseeComment,
      kpis: appraise,
    };

    const data = {
      appraisals,
      history,
      clearKPIs,
    };

    console.log(">>>>>>>KPIsSub,mit", data);

    dispatch(submitStaffAppraisal(data));
  };

  const result = KPIs.reduce((acc, kpi) => {
    const allResults = kpi.appraiseeResult.split("%");
    // console.log(">>>>acc", allResults[0]);

    return Number(acc) + Number(allResults[0]);
  }, 0);

  useEffect(() => {
    console.log(">>>>allData", allData?.data);
    setKPIs(allData?.data.KPIs);
    setKpiResult(result);
  });

  const processPerspective = allProcess?.map((kpi, index) => {
    if (index === 0) {
      return { ...kpi, category: kpi.category };
    }
    return { ...kpi, category: "" };
  });

  const customerPerspective = allCustomer?.map((kpi, index) => {
    if (index === 0) {
      return { ...kpi, category: kpi.category };
    }
    return { ...kpi, category: "" };
  });

  const financialPerspective = allFinancial?.map((kpi, index) => {
    if (index === 0) {
      return { ...kpi, category: kpi.category };
    }
    return { ...kpi, category: "" };
  });

  const capacityPerspective = allCapacityDevelopment?.map((kpi, index) => {
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
                      return <NewKpiReviewComponent kpi={kpi} />;
                    })}

                    {customerPerspective?.map((kpi) => {
                      return <NewKpiReviewComponent kpi={kpi} />;
                    })}

                    {financialPerspective?.map((kpi) => {
                      return <NewKpiReviewComponent kpi={kpi} />;
                    })}

                    {capacityPerspective?.map((kpi) => {
                      return <NewKpiReviewComponent kpi={kpi} />;
                    })}

                    {/* Financial Review Starts Here */}
                    <div
                      className="col-lg-12 d-flex border-bottom pt-3 pb-3"
                      style={{
                        fontWeight: "bolder",
                        backgroundColor: "#efefef",
                      }}
                    >
                      <div className="col-lg-2">TOTAL</div>
                      <div className="col-lg-3"></div>
                      <div className="col-lg-1 text-center"></div>
                      <div className="col-lg-2 text-center"></div>
                      <div className="col-lg-2 text-center"></div>
                      <div className="col-lg-2 text-center">
                        {" "}
                        {Number(kpiResult)?.toFixed()}
                      </div>
                    </div>
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
                      {allData?.data.exceptionalAchievement}
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
          {/* /Page Header */}
        </div>
      </div>
      {/* /Page Content */}
      {/* /Page Wrapper */}
    </div>
  );
};
export default Staff_Appraisal_Review;

import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useStateMachine } from "little-state-machine";
import { submitStaffAppraisal } from "./../../../services/PerformanceManagement/StaffAppraisal/submitStaffAppraisal";
import { NewKpiReviewComponent } from "./../KpiComponent/index";
import { updateName } from "./../../../utils/helper";
import { getIndividualKpis } from "./../../../services/PerformanceManagement/Configurations/individualKpi/getIndividualKpi";
import { getCategoryTypes } from "./../../../services/PerformanceManagement/Configurations/categoryType/getCategoryTypes";
import Modal from "react-bootstrap/Modal";

const StaffAppraisalReview = () => {
  const { state: allData, actions } = useStateMachine({ updateName });
  const dispatch = useDispatch();
  const [kpiResult, setKpiResult] = useState("");
  const history = useHistory();
  const [openModal, setOpenModal] = useState(false);

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

  let results = [];

  for (let category = 0; category < categories.length; category++) {
    results.push(
      KPIs.filter((kpi) => kpi.category == categories[category].description)
    );
  }

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    dispatch(getIndividualKpis());
  }, []);

  useEffect(() => {
    dispatch(getCategoryTypes());
  }, []);

  const staffData = JSON.parse(localStorage.getItem("cachedData"));

  console.log(">>>>>>staffData", staffData);

  const submitAppraisal = () => {
    const appraise = KPIs?.map((kpi) => {
      return {
        supervisorRate: "",
        key: 0,
        supervisorResult: "",
        kpiId: Number(kpi.id),
        categoryId: Number(kpi.categoryId),
        appraiseeResult: allData.data.appraisalResults[kpi.id].toFixed(),
        appraiseeRate: allData.data.appraisalRates[kpi.id],
      };
    });

    const {
      staffId,
      supervisorStaffId,
      superVisorFistName,
      supervisorLastName,
      firstName,
      lastName,
      secondLevelSupervisorStaffId,
    } = staffData;

    // console.log(">>>>staffID", staffId, superVisorFistName)

    const appraisals = {
      staffId,
      secondLevelSupervisorId: secondLevelSupervisorStaffId,
      supervisorId: supervisorStaffId,
      supervisorName: `${superVisorFistName} ${supervisorLastName}`,
      appraiseeName: `${firstName} ${lastName}`,
      exceptionalAchievement: allData.data.exceptionalAchievement,
      secondSupervisorName: "",
      appraiseeComment: "",
      totalAppraiseeResult: kpiResult,
      kpis: appraise,
    };

    const data = {
      appraisals,
      history,
      toggleModal,
    };
    // console.log(">>>>>>appraisals", appraisals);
    dispatch(submitStaffAppraisal(data));
  };

  const resultValues = Object.values(allData.data.appraisalResults);

  const result = resultValues
    ?.reduce((acc, num) => {
      return Number(acc) + Number(num);
    }, 0)
    .toFixed(1);

  useEffect(() => {
    setKpiResult(result);
  });

  const processPerspective = results[0]?.map((kpi, index) => {
    if (index === 0) {
      return {
        ...kpi,
        category: kpi.category,
        appraiseeRate: allData.data.appraisalRates[kpi.id],
        appraiseeResult: allData.data.appraisalResults[kpi.id].toFixed(),
      };
    }
    return {
      ...kpi,
      category: "",
      appraiseeRate: allData.data.appraisalRates[kpi.id],
      appraiseeResult: allData.data.appraisalResults[kpi.id].toFixed(),
    };
  });

  const customerPerspective = results[1]?.map((kpi, index) => {
    if (index === 0) {
      return {
        ...kpi,
        category: kpi.category,
        appraiseeRate: allData.data.appraisalRates[kpi.id],
        appraiseeResult: allData.data.appraisalResults[kpi.id].toFixed(),
      };
    }
    return {
      ...kpi,
      category: "",
      appraiseeRate: allData.data.appraisalRates[kpi.id],
      appraiseeResult: allData.data.appraisalResults[kpi.id].toFixed(),
    };
  });

  const financialPerspective = results[2]?.map((kpi, index) => {
    if (index === 0) {
      return {
        ...kpi,
        category: kpi.category,
        appraiseeRate: allData.data.appraisalRates[kpi.id],
        appraiseeResult: allData.data.appraisalResults[kpi.id].toFixed(),
      };
    }
    return {
      ...kpi,
      category: "",
      appraiseeRate: allData.data.appraisalRates[kpi.id],
      appraiseeResult: allData.data.appraisalResults[kpi.id].toFixed(),
    };
  });

  const capacityPerspective = results[3]?.map((kpi, index) => {
    if (index === 0) {
      return {
        ...kpi,
        category: kpi.category,
        appraiseeRate: allData.data.appraisalRates[kpi.id],
        appraiseeResult: allData.data.appraisalResults[kpi.id].toFixed(),
      };
    }
    return {
      ...kpi,
      category: "",
      appraiseeRate: allData.data.appraisalRates[kpi.id],
      appraiseeResult: allData.data.appraisalResults[kpi.id].toFixed(),
    };
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
                      <div
                        className="col-lg-2 text-center"
                        style={{
                          color: "#DAA520",
                          fontSize: "18px",
                          fontWeight: "bolder",
                        }}
                      >
                        {" "}
                        {Number(kpiResult)?.toFixed()}
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-12"
                    style={{ marginTop: "50px", marginBottom: "20px" }}
                  >
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
                      {allData?.data?.exceptionalAchievement}
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
                        <textarea
                          className="form-control mb-3 "
                          defaultValue={""}
                        />
                      </div>
                    </div> */}
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
                    className="btn btn-block btn-suntrust font-weight-700"
                    onClick={() => toggleModal()}
                  >
                    Confirm
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Header */}
        </div>
      </div>

      <Modal show={openModal} centered backdrop="static" keyboard={false}>
        <div className="modal-90w  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Appraisal Rating</h3>
                <p>Are you sure you want to proceed</p>
              </div>
              <div className="modal-btn delete-action">
                <div className="row">
                  <div className="col-6">
                    <a
                      className="btn btn-primary continue-btn"
                      onClick={() => {
                        submitAppraisal();
                        toggleModal();
                      }}
                    >
                      Yes
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      onClick={() => toggleModal()}
                      className="btn btn-primary cancel-btn"
                    >
                      Cancel
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default StaffAppraisalReview;

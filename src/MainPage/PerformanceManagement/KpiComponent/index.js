import React from "react";

function KpiComponent({ kpi }) {
  return (
    <div className="row m-t-20">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
            <div className="col-lg-4">{kpi.description}</div>
            <div className="col-lg-2 text-center">{kpi.measurableTarget}</div>
            <div className="col-lg-2 text-center">{kpi.weightedScore}</div>
            <div
              className="col-lg-2 text-center"
              style={{
                color: "#139b23",
                fontWeight: "bolder",
              }}
            >
              {kpi.appraiseeRate}
            </div>
            <div
              className="col-lg-2 text-center"
              style={{ color: "red", fontWeight: "bolder" }}
            >
              {kpi.appraiseeResult}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const KpiInputComponent = ({
  kpi,
  values,
  appraiseeResults,
  updateValues,
}) => {
  return (
    <div className="row m-t-20">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
            <div className="col-lg-4">{kpi.description}</div>
            <div className="col-lg-2 text-center">{kpi.measurableTarget}</div>
            <div className="col-lg-2 text-center"> {kpi.weightedScore}</div>
            <div
              className="col-lg-2 text-center"
              style={{
                color: "#139b23",
                fontWeight: "bolder",
              }}
            >
              <input
                type="number"
                value={values?.id}
                min={1}
                max={kpi.measurableTarget}
                className="rate-input"
                onChange={(e) => updateValues(e, kpi.id, kpi)}
              />
            </div>
            <div
              className="col-lg-2 text-center"
              style={{ color: "red", fontWeight: "bolder" }}
            >
              {appraiseeResults[kpi.id]?.toFixed()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SupervisorKpiInput = ({
  kpi,
  values,
  appraiseeResults,
  updateValues,
}) => {
  return (
    <div className="row m-t-20">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
            <div className="col-lg-3">{kpi.kpiDescription}</div>
            <div className="col-lg-2 text-center">{kpi.measurableTarget}</div>
            <div className="col-lg-1 text-center">{kpi.weightedScore}</div>
            <div
              className="col-lg-2 text-center"
              style={{
                color: "#139b23",
                fontWeight: "bolder",
              }}
            >
              {kpi.appraiseeRate}
            </div>
            <div
              className="col-lg-2 text-center"
              style={{
                color: "#139b23",
                fontWeight: "bolder",
              }}
            >
              {kpi.appraiseeResult}
            </div>
            <div
              className="col-lg-1 text-center"
              style={{
                color: "#139b23",
                fontWeight: "bolder",
              }}
            >
              <input
                min={1}
                max={kpi.measurableTarget}
                value={values?.id}
                onChange={(e) => updateValues(e, kpi.kpiId, kpi)}
                type="number"
                className="form-control"
              />
            </div>
            <div
              className="col-lg-1 text-center"
              style={{
                color: "#139b23",
                fontWeight: "bolder",
              }}
            >
              {appraiseeResults[kpi.kpiId]?.toFixed()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SupervisorKpiComponent = ({ kpi }) => {
  return (
    <div className="row m-t-20">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
            <div className="col-lg-3">{kpi.description}</div>
            <div className="col-lg-2 text-center">{kpi.measurableTarget}</div>
            <div className="col-lg-1 text-center">{kpi.weightedScore}</div>
            <div
              className="col-lg-2 text-center"
              style={{
                color: "#139b23",
                fontWeight: "bolder",
              }}
            >
              {kpi.appraiseeRate}
            </div>
            <div
              className="col-lg-2 text-center"
              style={{
                color: "#139b23",
                fontWeight: "bolder",
              }}
            >
              {kpi.appraiseeResult}
            </div>
            <div
              className="col-lg-1 text-center"
              style={{
                color: "#139b23",
                fontWeight: "bolder",
              }}
            >
              {kpi.supervisorRate}
            </div>
            <div
              className="col-lg-1 text-center"
              style={{
                color: "#139b23",
                fontWeight: "bolder",
              }}
            >
              {kpi.supervisorResult}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NewKpiInputComponent = ({
  kpi,
  values,
  appraiseeResults,
  updateValues,
  errors,
}) => {
  console.log(">>>>error", errors);
  return (
    <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
      <div className="col-lg-2" style={{ fontWeight: "bolder" }}>
        {kpi.category.toUpperCase()}
      </div>
      <div className="col-lg-3">{kpi.description}</div>
      <div className="col-lg-1 text-center">{kpi.measurableTarget}</div>
      <div className="col-lg-2 text-center">{kpi.weightedScore}</div>
      <div className="col-lg-2 text-center">
        {/* <input type="text" className="form-control" /> */}
        <input
          type="number"
          value={values?.id}
          min={1}
          max={kpi.measurableTarget}
          className={errors[kpi.id] ? "error-input" : "rate-input"}
          onChange={(e) => updateValues(e, kpi.id, kpi)}
        />
      </div>
      <div className="col-lg-2 text-center">
        {errors[kpi.id] ? <p className="error-color">value can not exceed target</p> : appraiseeResults[kpi.id]?.toFixed()}
      </div>
    </div>
  );
};

export const NewKpiReviewComponent = ({ kpi }) => {
  return (
    <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
      <div className="col-lg-2" style={{ fontWeight: "bolder" }}>
        {kpi.category.toUpperCase()}
      </div>
      <div className="col-lg-3">{kpi.description}</div>
      <div className="col-lg-1 text-center">{kpi.measurableTarget}</div>
      <div className="col-lg-2 text-center">{kpi.weightedScore}</div>
      <div className="col-lg-2 text-center">
        {/* <input type="text" className="form-control" /> */}
        {kpi.appraiseeRate}
      </div>
      <div className="col-lg-2 text-center">{kpi.appraiseeResult}</div>
    </div>
  );
};

export const NewSupervisorKpiInputComponent = ({
  kpi,
  values,
  appraiseeResults,
  updateValues,
  errors
}) => {
  return (
    <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
      <div className="col-lg-2" style={{ fontWeight: "bolder" }}>
        {kpi.categoryDescription.toUpperCase()}
      </div>
      <div className="col-lg-3">{kpi.kpiDescription}</div>
      <div className="col-lg-1 text-center">{kpi.measurableTarget}</div>
      <div className="col-lg-1 text-center">{kpi.weightedScore}</div>
      <div className="col-lg-1 text-center">{kpi.appraiseeRate}</div>
      <div className="col-lg-2 text-center">{kpi.appraiseeResult}</div>
      <div className="col-lg-1 text-center">
        {/* <input type="text" className="form-control" /> */}
        <input
          min={1}
          max={kpi.measurableTarget}
          value={values?.id}
          onChange={(e) => updateValues(e, kpi.kpiId, kpi)}
          type="number"
          className="form-control"
        />
      </div>
      <div className="col-lg-1 text-center">
        {errors[kpi.kpiId] ? (
          <p className="error-color">value can not exceed target</p>
        ) : (
          appraiseeResults[kpi.kpiId]?.toFixed()
        )}
      </div>
    </div>
  );
};

export const NewSupervisorKpiReviewComponent = ({ kpi }) => {
  return (
    <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
      <div className="col-lg-2" style={{ fontWeight: "bolder" }}>
        {kpi.categoryDescription.toUpperCase()}
      </div>
      <div className="col-lg-3">{kpi.kpiDescription}</div>
      <div className="col-lg-1 text-center">{kpi.measurableTarget}</div>
      <div className="col-lg-1 text-center">{kpi.weightedScore}</div>
      <div className="col-lg-1 text-center">{kpi.appraiseeRate}</div>
      <div className="col-lg-2 text-center">{kpi.appraiseeResult}</div>
      <div className="col-lg-1 text-center">
        {/* <input type="text" className="form-control" /> */}
        {kpi.supervisorRate}
      </div>
      <div className="col-lg-1 text-center">{kpi.supervisorResult}</div>
    </div>
  );
};

export default KpiComponent;

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

export default KpiComponent;

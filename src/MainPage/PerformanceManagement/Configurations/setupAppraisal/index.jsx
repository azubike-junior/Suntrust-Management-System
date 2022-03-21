/**
 * TermsCondition Page
 */
import React, { Component, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../../../paginationfunction";
import "../../../antdstyle.css";
import { useForm } from "react-hook-form";
import InputField from "../../../UIinterface/Forms/InputField/Index";
import { addSelect, timeDuration } from "../../../../utils/helper";
import { classNames } from "./../../../../utils/classNames";
import { useDispatch } from "react-redux";
import { setupAppraisal } from "./../../../../services/PerformanceManagement/Configurations/appraisalSetup/setupAppraisal";

const SetupAppraisal = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }
  });

  const {
    register,
    handleSubmit,
    reset,
    resetField,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {},
  });

  const setupAppraisalHandler = (data) => {
    console.log(data);
    dispatch(setupAppraisal({ data, reset }));
  };

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Client Profile - HRMS admin Template</title>
        <meta name="description" content="Reactify Blank Page" />
      </Helmet>

      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}

        <div className="">
          <h3 className="user-name m-b-10">Appraisal</h3>
        </div>
        {/* /Page Header */}

        <form
          className="card m-b-50 col-lg-12"
          onSubmit={handleSubmit(setupAppraisalHandler)}
        >
          <div className="card-body">
            <div className="row flex-column">
              <div className="col-lg-12 m-t-10 m-b-20">
                <h4 className="user-name m-t-0">Setup Appraisal</h4>
              </div>

              <div className="col-lg-4 m-b-10">
                <div className="m-b-10">Status</div>
                <div className="form-group">
                  <select
                    {...register("status", { required: true })}
                    className={classNames(
                      errors?.status ? "error-class" : "",
                      "form-control"
                    )}
                  >
                    <option value="">Select Option</option>
                    <option value={true}>Open</option>
                    <option value={false}>Closed</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-4 m-b-10">
                <div className="m-b-10">Appraisal Period</div>
                <div className="form-group">
                  <select
                    {...register("appraisalPeriod", { required: true })}
                    className={classNames(
                      errors?.appraisalPeriod ? "error-class" : "",
                      "form-control"
                    )}
                  >
                    {timeDuration.map((duration, index) => {
                      return (
                        <option value={duration.value} key={index}>
                          {" "}
                          {duration.duration}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <InputField
                register={register}
                name="startDate"
                label="Start Date"
                className="col-lg-4 m-b-30"
                required
                type="date"
                errors={errors?.startDate}
              />

              <InputField
                register={register}
                name="endDate"
                label="End Date"
                className="col-lg-4 m-b-30"
                required
                type="date"
                errors={errors?.endDate}
              />

              <div className="col-lg-3 m-b-10">
                <div className="form-group">
                  <button
                    type="submit"
                    href=""
                    className="btn btn-block btn-primary font-weight-700"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* /Page Content */}
    </div>
  );
};
export default SetupAppraisal;

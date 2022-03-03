import moment from "moment";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import InputField, {
  SelectField,
} from "../../../../../MainPage/UIinterface/Forms/InputField/Index";
import {
  useGetBranchByRegionQuery,
  useGetRegionsQuery,
} from "../../../../../services/configurations/codeConfig/getCodesQueries";
import { toggleAddDivisionModal } from "../../../../../services/modals/modals";
import { getValues } from "../../../../../utils/helper";
import Loader from "./../../../../../MainPage/UIinterface/Loader/index";
import { addDivision } from './../../../../../services/configurations/codeConfig/divisions/addDivisions';

export default function AddDivisionModal() {
  const dispatch = useDispatch();
  const { openAddDivision } = useSelector((state) => state.modalReducer);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {},
  });

  const addDivisionHandler = (data) => {
    const newData = {
      data, 
      dispatch,
      reset
    }
    dispatch(addDivision(newData))
  };

  return (
    <Modal show={openAddDivision} centered backdrop="static" keyboard={false}>
      <div className="modal-90w modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New Division</h5>
            <button
              type="button"
              className="close"
              onClick={() => dispatch(toggleAddDivisionModal())}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(addDivisionHandler)}>
              <div class="d-flex align-items-center justify-content-center">
                <InputField
                  register={register}
                  name="divisionCode"
                  label="Division Code"
                  type="text"
                  className="col-lg-6"
                  required
                  errors={errors?.divisionCode}
                />

                <InputField
                  register={register}
                  name="divisionName"
                  label="Division Name"
                  type="text"
                  className="col-lg-6"
                  required
                  errors={errors?.divisionName}
                />
              </div>

              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}

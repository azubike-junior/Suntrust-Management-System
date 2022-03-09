import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../../../../MainPage/UIinterface/Forms/InputField/Index";
import { toggleUpdateDivisionModal } from "../../../../../services/modals/modals";
import { updateDivision } from './../../../../../services/configurations/codeConfig/divisions/updateDivision';


export default function UpdateDivisionModal({ divisionDetail }) {
  const dispatch = useDispatch();
  const { openUpdateDivision } = useSelector((state) => state.modalReducer);

  const {
    register,
    handleSubmit,
    resetField,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {},
  });

  const updateDivisionHandler = (data) => {
    let editData = [
      {
        path: "/divisionName",
        op: "replace",
        value: data.divisionName,
      },
    ];

    const newData = {
      id: divisionDetail?.id,
      editData,
      dispatch,
      reset,
    };

    dispatch(updateDivision(newData));
  };

  const resetFields = () => {
    resetField("divisionName");
  };

  return (
    <Modal
      show={openUpdateDivision}
      centered
      backdrop="static"
      keyboard={false}
    >
      <div className="modal-90w modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Division</h5>
            <button
              type="button"
              className="close"
              onClick={() => {
                resetFields();
                dispatch(toggleUpdateDivisionModal());
              }}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleSubmit(updateDivisionHandler)}>
              <div class="d-flex align-items-center justify-content-center">
                <InputField
                  register={register}
                  name="divisionName"
                  label="Division Name"
                  value={divisionDetail?.divisionName}
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

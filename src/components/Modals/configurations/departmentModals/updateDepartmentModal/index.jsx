import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../../../../MainPage/UIinterface/Forms/InputField/Index";
import { toggleUpdateDepartmentModal } from "../../../../../services/modals/modals";
import { updateDepartment } from "./../../../../../services/configurations/codeConfig/depts/updateDepartment";

export default function UpdateDepartmentModal({ departmentDetail }) {
  const dispatch = useDispatch();
  const { openUpdateDepartment } = useSelector((state) => state.modalReducer);

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

  const updateDepartmentHandler = (data) => {
    let editData = [
      {
        path: "/departmentName",
        op: "replace",
        value: data.departmentName,
      },
    ];

    const newData = {
      id: departmentDetail?.id,
      editData,
      dispatch,
      reset,
    };

    dispatch(updateDepartment(newData));
  };

  const resetFields = () => {
    resetField("departmentName");
  };

  return (
    <Modal
      show={openUpdateDepartment}
      centered
      backdrop="static"
      keyboard={false}
    >
      <div className="modal-90w modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Department</h5>
            <button
              type="button"
              className="close"
              onClick={() => {
                resetFields();
                dispatch(toggleUpdateDepartmentModal());
              }}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleSubmit(updateDepartmentHandler)}>
              <div class="d-flex align-items-center justify-content-center">
                <InputField
                  register={register}
                  name="departmentName"
                  label="Department Name"
                  value={departmentDetail?.departmentName}
                  type="text"
                  className="col-lg-6"
                  required
                  errors={errors?.departmentName}
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

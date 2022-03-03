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
import { toggleAddBranchModal } from "../../../../../services/modals/modals";
import { getValues } from "../../../../../utils/helper";
import Loader from "./../../../../../MainPage/UIinterface/Loader/index";
import { addBranch } from "./../../../../../services/configurations/codeConfig/branches/addBranch";

export default function AddBranchModal() {
  const dispatch = useDispatch();
  const { openAddBranch } = useSelector((state) => state.modalReducer);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {},
  });

  const addBranchHandler = (data) => {
    console.log(">>>>>>data", data);
    const payload = {
      ...data,
      visible: data?.visible === "true" ? true : false,
      gpslocation: "00",
    };
    const newData = {
      payload,
      dispatch,
      reset,
    };
    dispatch(addBranch(newData));
  };

  return (
    <Modal show={openAddBranch} centered backdrop="static" keyboard={false}>
      <div className="modal-90w modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New Branch</h5>
            <button
              type="button"
              className="close"
              onClick={() => dispatch(toggleAddBranchModal(addBranchHandler))}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(addBranchHandler)}>
              <div class="d-flex align-items-center justify-content-center">
                <InputField
                  register={register}
                  name="branchCode"
                  label="Branch Code"
                  type="number"
                  className="col-lg-6"
                  required
                  errors={errors?.branchCode}
                />
                <InputField
                  register={register}
                  name="branchName"
                  label="Branch Name"
                  type="text"
                  className="col-lg-6"
                  required
                  errors={errors?.branchName}
                />
              </div>

              <div class="d-flex align-items-center justify-content-center">
                <InputField
                  register={register}
                  name="branchAddress"
                  label="Branch Address"
                  type="text"
                  className="col-lg-6"
                  required
                  errors={errors?.branchAddress}
                />
                <div className="col-lg-6">
                  <label className="col-form-label">
                    Visible<span className="text-danger">*</span>
                  </label>
                  <select
                    name="visible"
                    {...register("visible", { required: true })}
                    className="form-control"
                  >
                    <option value="">Choose Visibility</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
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

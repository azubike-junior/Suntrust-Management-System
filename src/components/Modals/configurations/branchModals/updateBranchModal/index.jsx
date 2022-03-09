import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../../../../MainPage/UIinterface/Forms/InputField/Index";
import { updateBranch } from "../../../../../services/configurations/codeConfig/branches/updateBranch";
import { useGetBranchByRegionQuery } from "../../../../../services/configurations/codeConfig/getCodesQueries";
import { toggleUpdateBranchModal } from "../../../../../services/modals/modals";

export default function EditBranchModal({ branchDetail }) {
  const dispatch = useDispatch();
  const { openUpdateBranch } = useSelector((state) => state.modalReducer);

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

  const updateBranchHandler = (data) => {
    let editData = [
      {
        path: "/branchName",
        op: "replace",
        value: data.branchName,
      },
      {
        path: "/branchAddress",
        op: "replace",
        value: data.branchAddress,
      },
    ];

    const newData = {
      id: branchDetail?.id,
      editData,
      dispatch,
      reset,
    };

    dispatch(updateBranch(newData));
  };

  const resetFields = () => {
    resetField("branchAddress");
    resetField("branchName");
  };

  return (
    <Modal show={openUpdateBranch} centered backdrop="static" keyboard={false}>
      <div className="modal-90w modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Branch</h5>
            <button
              type="button"
              className="close"
              onClick={() => {
                resetFields();
                dispatch(toggleUpdateBranchModal());
              }}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleSubmit(updateBranchHandler)}>
              <div class="d-flex align-items-center justify-content-center">
                <InputField
                  register={register}
                  name="branchName"
                  label="Branch Name"
                  type="text"
                  value={branchDetail?.branchName}
                  className="col-lg-6"
                  required
                  errors={errors?.branchName}
                />
                <InputField
                  register={register}
                  name="branchAddress"
                  label="Branch Address"
                  value={branchDetail?.branchAddress}
                  type="text"
                  className="col-lg-6"
                  required
                  errors={errors?.branchAddress}
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

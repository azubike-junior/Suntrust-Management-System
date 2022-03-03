import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../../../../MainPage/UIinterface/Forms/InputField/Index";
import { editBranch } from "../../../../../services/configurations/codeConfig/branches/editBranch";
import { useGetBranchByRegionQuery } from "../../../../../services/configurations/codeConfig/getCodesQueries";
import { toggleEditBranchModal } from "../../../../../services/modals/modals";
import { getValues } from "../../../../../utils/helper";
import Loader from "./../../../../../MainPage/UIinterface/Loader/index";

export default function EditBranchModal({ branchDetail }) {
  const dispatch = useDispatch();
  const { openEditBranch } = useSelector((state) => state.modalReducer);

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

  const editBranchHandler = (data) => {
    console.log(">>>>>>data", data);
    // const payload = {
    //   ...data,
    //   visible: data?.visible === "true" ? true : false,
    //   gpslocation: "00",
    // };

    let editData = [
      {
        path: "/branchName",
        op: "replace",
        from: data.branchName,
      },
      {
        path: "/branchCode",
        op: "replace",
        from: data.branchCode,
      },
      {
        path: "/branchAddress",
        op: "replace",
        from: data.branchAddress,
      },
    ];

    const newData = {
      id: branchDetail?.id,
      editData,
      dispatch,
      reset,
    };

    dispatch(editBranch(newData));
  };

  const resetFields = () => {
    resetField("branchCode");
    resetField("branchAddress");
    resetField("branchName");
  };

  return (
    <Modal show={openEditBranch} centered backdrop="static" keyboard={false}>
      <div className="modal-90w modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Branch</h5>
            <button
              type="button"
              className="close"
              onClick={() => {
                resetFields();
                dispatch(toggleEditBranchModal());
              }}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleSubmit(editBranchHandler)}>
              <div class="d-flex align-items-center justify-content-center">
                <InputField
                  register={register}
                  name="branchCode"
                  label="Branch Code"
                  type="number"
                  value={branchDetail?.branchCode}
                  className="col-lg-4"
                  required
                  errors={errors?.branchCode}
                />
                <InputField
                  register={register}
                  name="branchName"
                  label="Branch Name"
                  type="text"
                  value={branchDetail?.branchName}
                  className="col-lg-4"
                  required
                  errors={errors?.branchName}
                />
                <InputField
                  register={register}
                  name="branchAddress"
                  label="Branch Address"
                  value={branchDetail?.branchAddress}
                  type="text"
                  className="col-lg-4"
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

import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../../../../MainPage/UIinterface/Forms/InputField/Index";
import { toggleUpdateUnitModal } from "../../../../../services/modals/modals";
import { getValues } from "../../../../../utils/helper";
import { updateUnit } from "./../../../../../services/configurations/codeConfig/units/updateUnit";
import { classNames } from "./../../../../../utils/classNames";

export default function UpdateUnitModal({ unitDetail }) {
  //   console.log("userDetaial", unitDetail.departmentCode);
  const dispatch = useDispatch();
  const { openUpdateUnit } = useSelector((state) => state.modalReducer);
  const [departmentCode, setDepartmentCode] = useState(
    unitDetail.departmentCode
  );
  const { data: departments } = useSelector(
    (state) => state.getDepartmentsReducer
  );

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

  const updateUnitHandler = (data) => {
    console.log(">>>>>dta", data);
    let editData = [
      {
        path: "/unitName",
        op: "replace",
        value: data.unitName,
      },
      {
        path: "/unitDescription",
        op: "replace",
        value: data.unitDescription,
      },
      {
        path: "/departmentCode",
        op: "replace",
        value: data.departmentCode,
      },
    ];

    const newData = {
      id: unitDetail?.id,
      editData,
      dispatch,
      reset,
    };

    dispatch(updateUnit(newData));
  };

  const resetFields = () => {
    resetField("unitName");
    resetField("unitDescription");
    resetField("departmentCode");
  };

  console.log(">>>>>errpr,", errors?.departmentCode);

  return (
    <Modal show={openUpdateUnit} centered backdrop="static" keyboard={false}>
      <div className="modal-90w modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Unit</h5>
            <button
              type="button"
              className="close"
              onClick={() => {
                resetFields();
                dispatch(toggleUpdateUnitModal());
              }}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleSubmit(updateUnitHandler)}>
              <div class="d-flex align-items-center justify-content-center">
                <InputField
                  register={register}
                  name="unitName"
                  label="Unit Name"
                  type="text"
                  value={unitDetail?.unitName}
                  className="col-lg-4"
                  required
                  errors={errors?.unitName}
                />
                <InputField
                  register={register}
                  name="unitDescription"
                  label="Description"
                  value={unitDetail?.unitDescription}
                  type="text"
                  className="col-lg-4"
                  required
                  errors={errors?.unitDescription}
                />
                <div className="col-lg-4">
                  <div className="form-group">
                    <label className="col-form-label">
                      Department Code<span className="text-danger">*</span>
                    </label>
                    <select
                      name="departmentCode"
                      {...register("departmentCode", { required: true })}
                      className={classNames(
                        errors?.departmentCode ? "error-class" : "",
                        "form-control"
                      )}
                    >
                      {getValues(departments, {
                        departmentCode: "",
                        departmentName: "Choose a Department",
                      })?.map((department) => {
                        return (
                          <option
                            key={department.departmentId}
                            value={department.departmentCode}
                          >
                            {department.departmentName}
                          </option>
                        );
                      })}
                    </select>
                  </div>
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

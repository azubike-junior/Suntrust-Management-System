import moment from "moment";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import InputField, {
  SelectField,
} from "../../../../../MainPage/UIinterface/Forms/InputField/Index";
import { useGetDivisionsQuery } from "../../../../../services/configurations/codeConfig/getCodesQueries";
import { toggleAddDepartmentModal } from "../../../../../services/modals/modals";
import { getValues } from "../../../../../utils/helper";
import Loader from "./../../../../../MainPage/UIinterface/Loader/index";
import { addDepartment } from "./../../../../../services/configurations/codeConfig/depts/addDepartment";

export default function AddDepartmentModal() {
  const dispatch = useDispatch();
  const { openAddDepartment } = useSelector((state) => state.modalReducer);

  const { loading: submitLoading } = useSelector((state) => state.addDepartmentReducer)


  const { data: divisions, isLoading: divisionLoading } =
    useGetDivisionsQuery("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {},
  });

  const addDepartmentHandler = (data) => {
    console.log(">>>>>>.data", data);
    const newData = {
      data,
      dispatch,
      reset,
    };
    dispatch(addDepartment(newData));
  };

  return (
    <Modal show={openAddDepartment} centered backdrop="static" keyboard={false}>
      <div className="modal-90w modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New Department</h5>
            <button
              type="button"
              className="close"
              onClick={() => dispatch(toggleAddDepartmentModal())}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(addDepartmentHandler)}>
              <div class="d-flex align-items-center justify-content-center">
                <InputField
                  register={register}
                  name="departmentCode"
                  label="Department Code"
                  type="text"
                  className="col-lg-4"
                  required
                  errors={errors?.departmentCode}
                />

                <InputField
                  register={register}
                  name="departmentName"
                  label="Department Name"
                  type="text"
                  className="col-lg-4"
                  required
                  errors={errors?.departmentName}
                />

                <div className="col-lg-4">
                  <div className="form-group">
                    <label className="col-form-label">
                      DivisionCode<span className="text-danger">*</span>
                    </label>
                    <select
                      name="divisionCode"
                      onChange={(e) => setDivisionCode(e.target.value)}
                      {...register("divisionCode", { required: true })}
                      className="form-control"
                    >
                      {getValues(divisions, {
                        divisionCode: "",
                      })?.map((division) => {
                        return (
                          <option
                            key={division.divisionCode}
                            value={division.divisionCode}
                          >
                            {division?.divisionCode}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>

              <div className="submit-section">
                <button className="btn btn-primary submit-btn">{submitLoading ? <Loader/> : "Submit"}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}

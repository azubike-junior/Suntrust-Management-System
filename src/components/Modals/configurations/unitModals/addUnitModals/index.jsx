import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import InputField, {
  SelectField,
} from "../../../../../MainPage/UIinterface/Forms/InputField/Index";
import {
  useGetBranchByRegionQuery,
  useGetDepartmentByBranchIdQuery,
  useGetRegionsQuery,
} from "../../../../../services/configurations/codeConfig/getCodesQueries";
import { addUnit } from "../../../../../services/configurations/codeConfig/units/addUnit";
import { toggleAddUnitModal } from "../../../../../services/modals/modals";
import { classNames } from "../../../../../utils/classNames";
import { getValues } from "../../../../../utils/helper";
import Loader from "./../../../../../MainPage/UIinterface/Loader/index";
import { getDepartments } from "./../../../../../services/configurations/codeConfig/depts/getDepartments";

export default function AddUnitModal() {
  const dispatch = useDispatch();
  const { openAddUnit } = useSelector((state) => state.modalReducer);
  // const [departmentCode, setDepartmentCode] = useState("");

  const { data: departments } = useSelector(
    (state) => state.getDepartmentsReducer
  );

  const { loading: submitLoader } = useSelector(
    (state) => state.addUnitReducer
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {},
  });

  useEffect(() => {
    dispatch(getDepartments());
  }, []);

  const addUnitHandler = (data) => {
    console.log(">>>>data", data);
    const newData = {
      data,
      dispatch,
      reset,
    };
    dispatch(addUnit(newData));
  };

  return (
    <Modal show={openAddUnit} centered backdrop="static" keyboard={false}>
      <div className="modal-90w modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New Unit</h5>
            <button
              type="button"
              className="close"
              onClick={() => dispatch(toggleAddUnitModal())}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(addUnitHandler)}>
              <div class="d-flex align-items-center justify-content-center">
                <InputField
                  register={register}
                  name="unitName"
                  label="Unit Name"
                  type="text"
                  className="col-lg-6"
                  required
                  errors={errors?.unitName}
                />

                <InputField
                  register={register}
                  name="unitCode"
                  label="Unit Code"
                  type="number"
                  className="col-lg-6"
                  required
                  errors={errors?.unitCode}
                />
              </div>
              <div class="d-flex align-items-center justify-content-center">
                <InputField
                  register={register}
                  name="unitDescription"
                  label="Description"
                  type="text"
                  className="col-lg-6"
                  required
                  errors={errors?.unitDescription}
                />

                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      Department Code<span className="text-danger">*</span>
                    </label>
                    <select
                      name="departmentCode"
                      {...register("departmentCode", { required: true })}
                      // onChange={(e) => setDepartmentCode(e.target.value)}
                       className={classNames(
                        errors?.departmentCode ? "error-class" : "",
                        "form-control"
                      )}
                    >
                      {getValues(departments, { departmentCode: "", departmentName:"Choose a Department" })?.map(
                        (department) => {
                          return (
                            <option
                              key={department.departmentId}
                              value={department.departmentCode}
                            >
                              {department.departmentName}
                            </option>
                          );
                        }
                      )}
                    </select>
                  </div>
                </div>
              </div>

              <div className="submit-section">
                <button className="btn btn-primary submit-btn">{submitLoader ? <Loading/> : "Submit"}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}

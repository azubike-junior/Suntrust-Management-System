import React, { useState } from "react";
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
  useGetUnitByDepartmentIdQuery,
} from "../../../../../services/configurations/codeConfig/getCodesQueries";
import {
  toggleAddStaffModal,
  toggleAddUnitModal,
} from "../../../../../services/modals/modals";
import { getValues } from "../../../../../utils/helper";
import Loader from "./../../../../../MainPage/UIinterface/Loader/index";

export default function AddStaffModal() {
  const dispatch = useDispatch();
  const { openAddStaff } = useSelector((state) => state.modalReducer);
  const [regionName, setRegionName] = useState("");
  const [regionId, setRegionId] = useState("");
  const [branchName, setBranchName] = useState("");
  const [branchId, setBranchId] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [unitName, setUnitName] = useState("");

  const { data: regions } = useGetRegionsQuery("");
  const {
    data: branches,
    isFetching,
    isLoading,
  } = useGetBranchByRegionQuery(regionId);
  const { data: departments } = useGetDepartmentByBranchIdQuery(branchId);
  const { data: units } = useGetUnitByDepartmentIdQuery(departmentId);

  console.log(">>>>units", units, departmentId);

  const handleRegion = (e) => {
    const value = e.target.value;
    setRegionName(value);
    setRegionId(value);
  };

  const handleBranch = (e) => {
    const value = e.target.value;
    setBranchName(value);
    setBranchId(value);
  };

  const handleDepartment = (e) => {
    const value = e.target.value;
    setDepartmentName(value);
    setDepartmentId(value);
  };

  const handleUnit = (e) => {
    const value = e.target.value;
    setUnitName(value);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {},
  });

  const allRegions = getValues(regions, {
    regionId: "",
    regionName: "Choose a region",
  });
  const allBranches = getValues(branches, {
    branchId: "",
    branchName: "Choose a branch",
  });
  const allDepartments = getValues(departments, {
    departmentId: "",
    departmentName: "Choose a department",
  });
  const allUnits = getValues(units, {
    unitId: "",
    unitName: "Choose a unit",
  });

  const addStaffHandler = (data) => {
    console.log(">>>>>>data", data);
  };

  return (
    <Modal show={openAddStaff} centered backdrop="static" keyboard={false}>
      <div className="modal-90w modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New Branch</h5>
            <button
              type="button"
              className="close"
              onClick={() => dispatch(toggleAddStaffModal())}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(addStaffHandler)}>
              <div class="d-flex align-items-center justify-content-center">
                <div className="col-lg-4">
                  <label className="col-form-label">
                    Region Name<span className="text-danger">*</span>
                  </label>
                  <select
                    name="regionName"
                    value={regionName}
                    {...register("regionName", { required: true })}
                    onChange={handleRegion}
                    className="form-control"
                  >
                    {allRegions?.map((region) => {
                      return (
                        <option key={region.regionId} value={region.regionId}>
                          {region.regionName}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="col-lg-4">
                  <label className="col-form-label">
                    Branch Name<span className="text-danger">*</span>
                  </label>
                  <select
                    name="branchName"
                    value={branchName}
                    {...register("branchName", { required: true })}
                    onChange={handleBranch}
                    className="form-control"
                  >
                    {allBranches?.map((branch) => {
                      return (
                        <option key={branch.branchId} value={branch.branchId}>
                          {branch.branchName}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-lg-4">
                  <label className="col-form-label">
                    Department<span className="text-danger">*</span>
                  </label>
                  <select
                    name="departmentName"
                    value={departmentName}
                    {...register("departmentName", { required: true })}
                    onChange={handleDepartment}
                    className="form-control"
                  >
                    {allDepartments?.map((department) => {
                      return (
                        <option
                          key={department.departmentId}
                          value={department.departmentId}
                        >
                          {department.departmentName}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div class="d-flex align-items-center justify-content-center">
                <div className="col-lg-4">
                  <label className="col-form-label">
                    Unit Name<span className="text-danger">*</span>
                  </label>
                  {units === null ? (
                    <p>Department has no Units</p>
                  ) : (
                    <select
                      name="UnitName"
                      value={unitName}
                      {...register("UnitName", { required: true })}
                      onChange={handleUnit}
                      className="form-control"
                    >
                      {allUnits?.map((unit) => {
                        return (
                          <option key={unit.unitId} value={unit.unitId}>
                            {unit.unitName}
                          </option>
                        );
                      })}
                    </select>
                  )}
                </div>

                <InputField
                  register={register}
                  name="staffId"
                  label="Staff ID"
                  type="number"
                  className="col-lg-4"
                  required
                  errors={errors?.StaffId}
                />

                <InputField
                  register={register}
                  name="Staff Name"
                  label="staffName"
                  type="text"
                  className="col-lg-4"
                  required
                  errors={errors?.staffName}
                />
              </div>
              <div class="d-flex align-items-center justify-content-center">
                <InputField
                  register={register}
                  name="staffCode"
                  label="Staff Code"
                  type="number"
                  className="col-lg-4"
                  required
                  errors={errors?.unitName}
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

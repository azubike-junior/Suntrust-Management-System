import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import AsyncSelect from "react-select/async";
import {
  itemRender,
  onShowSizeChange,
} from "../../../../MainPage/paginationfunction";
import { toggleAddExpenseModal } from "../../../../services/modals/modals";
import { getRequests } from "./../../../../services/configurations/requests/getRequests";
import { configUrl, addSelect, codeConfigUrl } from "../../../../utils/helper";
import { getVendors } from "../../../../services/configurations/vendors/getVendors";
import { getDocuments } from "../../../../services/configurations/documents/getDocuments";
import {
  useGetDocumentTypesQuery,
  useGetVendorsQuery,
  useGetExpenseRequestQuery,
  useGetStaffsQuery,
  useGetBranchesQuery,
  useGetDepartmentsQuery,
  useGetUnitsQuery,
} from "../../../../services/configurations/codeConfig/getCodesQueries";
import axios from "axios";
import { useForm } from "react-hook-form";
import { submitExpense } from "./../../../../services/Expense/submitExpense";
import Loader from "../../../../MainPage/UIinterface/Loader";

export default function AddExpenseModal() {
  const { openAddExpense } = useSelector((state) => state.modalReducer);
  const [file, setFile] = useState({});
  const dispatch = useDispatch();
  const { data: expenseRequests } = useGetExpenseRequestQuery();
  const { data: vendors } = useGetVendorsQuery();
  const { data: documentTypes } = useGetDocumentTypesQuery();
  const [selectedOption, setSelectedOption] = useState("");
  const [requestBy, setRequestBy] = useState("");
  const [vendor1, setVendor] = useState("");

  const [allDetails, setAllDetails] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [expenseTypeId, setExpenseTypeId] = useState();
  const [narrate, setNarrate] = useState("");

  const { data: staffs } = useGetStaffsQuery();
  const { data: branches } = useGetBranchesQuery();
  const { data: departments } = useGetDepartmentsQuery();
  const { data: units } = useGetUnitsQuery();
  const { data: expenseRequestTypes } = useGetExpenseRequestQuery();

  const { data: ExpenseResponse, loading: expenseResponseLoading } =
    useSelector((state) => state.submitExpenseReducer);

  const handleSearchChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const mapOptionsToValue = (options, requestBy) => {
    if (requestBy === "staff") {
      return options.map((option) => ({
        value: option.staffId,
        label: option.staffName,
      }));
    }
    if (requestBy === "branch") {
      return options.map((option) => ({
        value: option.id,
        label: option.branchName,
      }));
    }
    if (requestBy === "department") {
      return options.map((option) => ({
        value: option.id,
        label: option.departmentName,
      }));
    }
    if (requestBy === "unit") {
      return options.map((option) => ({
        value: option.id,
        label: option.unitName,
      }));
    }
  };

  const filterHandler = (inputValue, requestBy) => {
    if (requestBy === "staff") {
      return staffs?.filter((staff) =>
        staff.staffName.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
    if (requestBy === "department") {
      return departments?.filter((department) =>
        department.departmentName
          .toLowerCase()
          .includes(inputValue.toLowerCase())
      );
    }
    if (requestBy === "unit") {
      return units?.filter((unit) =>
        unit.unitName.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
    if (requestBy === "branch") {
      return branches?.filter((branch) =>
        branch.branchName.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
  };

  const fetchSelectedStaff = (value, callback) => {
    console.log("value from func", value);
    if (!value) {
      return callback([]);
    } else {
      setTimeout(() => {
        if (requestBy === "staff") {
          callback(mapOptionsToValue(filterHandler(value, "staff"), "staff"));
        }
        if (requestBy === "branch") {
          callback(mapOptionsToValue(filterHandler(value, "branch"), "branch"));
        }
        if (requestBy === "department") {
          callback(
            mapOptionsToValue(filterHandler(value, "department"), "department")
          );
        }
        if (requestBy === "unit") {
          callback(mapOptionsToValue(filterHandler(value, "unit"), "unit"));
        }
      }, 1000);
    }
  };

  const handleFiles = async (e) => {
    const file = e.target.files;
    setFile(file[0]);
  };

  const [modal_data, setModalData] = useState([
    {
      id: 1,
      vendor_name: "Samsung Group",
      doc_type: "Invoice",
      exp_amount: "50,000",
    },
  ]);

  const allExpenses = addSelect(expenseRequests, {
    expenseRequestId: "",
    description: "Select Request Type",
  });
  const allVendors = addSelect(vendors, {
    id: "",
    companyName: "Choose a Vendor",
  });
  const allDocumentTypes = addSelect(documentTypes, {
    id: "",
    documentName: "Choose a Document Type",
  });

  const {
    register,
    handleSubmit,
    reset,
    resetField,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {},
  });

  const handleRequestBy = (e) => {
    const value = e.target.value;
    setRequestBy(value);
  };

  const handleVendor = (e) => {
    setVendor(e.target.value);
  };

  // const vendorName = vendors?.find((vendor) => vendor.id == Number(vendor1));
  // console.log(">>>>>>>vendor", vendor1, vendorName);

  let details = [];

  const handleAddRequest = (data) => {
    const {
      recommend,
      amount,
      requestType,
      narration,
      vendor,
      documentType,
      reason,
      requestBy,
    } = data;

    const vendorName = vendors?.find(
      (vendor) => vendor.id === Number(vendor1)
    )?.companyName;
    const expenseRequestTypeName = expenseRequestTypes?.find(
      (expense) => expense.expenseRequestId === Number(requestType)
    )?.description;

    // console.log(">>>>vendorName", vendorName);

    setExpenseName(expenseRequestTypeName);
    setExpenseTypeId(Number(requestType));
    setNarrate(narration);

    const recommendBool = recommend === "true" ? true : false;

    const vendorDetails = {
      vendorName,
      vendorId: Number(vendor),
      amount,
      recommend: recommendBool,
      reason,
      documentTypeId: Number(documentType),
      uploadedFile: file,
    };

    // details.push(...details, vendorDetails);

    setAllDetails((prev) => [...prev, vendorDetails]);

    resetField("reason");
    resetField("amount");
    resetField("recommend");
    resetField("vendor");
    resetField("documentType");


    // const formData = new FormData();
    // formData.append("expenseRequestTypeName", expenseRequestTypeName);
    // formData.append("expenseRequestTypeId", Number(requestType));
    // formData.append("narration", narration);
    // formData.append("requestorId", Number(selectedOption.value));
    // formData.append("requestorName", selectedOption.label);
    // formData.append("requestBy", requestBy);
    // formData.append("initiatingStaffId", "330");
    // formData.append("initiatingStaffName", "sean");
    // formData.append("details", details);

    // formData.append("vendorName", vendorName);
    // formData.append("vendorId", Number(vendor));
    // formData.append("amount", amount);
    // formData.append("recommend", recommendBool);
    // formData.append("reason", reason);
    // formData.append("documentTypeId", Number(documentType));
    // formData.append("uploadedFile", file);

    // const newData = {
    //   formData,
    //   dispatch,
    //   reset,
    // };

    // dispatch(submitExpense(newData));

    // console.log("someData", someData);
  };

  const handleSubmitRequest = () => {
    const formData = new FormData();
    formData.append("expenseRequestTypeName", expenseName);
    formData.append("expenseRequestTypeId", expenseTypeId);
    formData.append("narration", narrate);
    formData.append("requestorId", Number(selectedOption.value));
    formData.append("requestorName", selectedOption.label);
    formData.append("requestBy", requestBy);
    formData.append("initiatingStaffId", "330");
    formData.append("initiatingStaffName", "sean");
    formData.append("details", allDetails);

    const lastSubmit = {
      expenseRequestTypeName: expenseName,
      expenseRequestTypeId: expenseTypeId,
      narration: narrate,
      requestorId: Number(selectedOption.value),
      requestorName: selectedOption.label,
      requestBy: requestBy,
      initiatingStaffId: "330",
      initiatingStaffName: "sean",
      details: allDetails,
    };

    console.log(">>>>>>lastSubmit", lastSubmit);

    const newData = {
      formData,
      dispatch,
      reset,
    };

    dispatch(submitExpense(newData));
  };

  const modal_columns = [
    {
      title: "Vendor",
      dataIndex: "vendorName",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "Document Type",
      dataIndex: "documentTypeId",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "",
      render: (text, record) => (
        <div className="">
          <a
            className="btn btn-sm btn-outline-danger m-r-10"
            href="#"
            data-toggle="modal"
            data-target="#delete_expense"
          >
            <i className="fa fa-trash-o" />
          </a>
        </div>
      ),
    },
  ];

  console.log(">>>>allDetails", allDetails);

  return (
    <Modal show={openAddExpense} centered backdrop="static" keyboard={false}>
      <div className="modal-90w modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New Expense</h5>
            <button
              type="button"
              className="close"
              onClick={() => dispatch(toggleAddExpenseModal())}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(handleAddRequest)}>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="col-form-label">
                      Request Type<span className="text-danger">*</span>
                    </label>
                    <select
                      {...register("requestType", { required: true })}
                      name="requestType"
                      className="select"
                    >
                      {allExpenses?.map((expense) => {
                        return (
                          <option
                            key={expense.expenseRequestId}
                            value={expense.expenseRequestId}
                          >
                            {expense.description}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label className="col-form-label">
                      Request By<span className="text-danger">*</span>
                    </label>
                    <select
                      name="requestBy"
                      {...register("requestBy", { required: true })}
                      onChange={(e) => handleRequestBy(e)}
                      className="custom-select"
                    >
                      <option value="">Select an Option</option>
                      <option value="department">Department</option>
                      <option value="branch">Branch</option>
                      <option value="unit">Unit</option>
                      <option value="staff">Staff</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-4">
                  {/* <div className="form-group"> */}
                  <label className="col-form-label">Requestor Name</label>
                  <AsyncSelect
                    cacheOptions
                    value={selectedOption}
                    loadOptions={fetchSelectedStaff}
                    defaultOptions
                    onChange={handleSearchChange}
                  />
                  {/* </div> */}
                </div>

                <div className="col-lg-12 m-b-10">
                  <div className="form-group">
                    <label className="col-form-label">
                      Narration<span className="text-danger">*</span>
                    </label>
                    <textarea
                      name="narration"
                      {...register("narration", { required: true })}
                      className="form-control"
                      rows="2"
                    />
                  </div>
                </div>

                <div className="col-lg-12 m-b-10">
                  <div className="form-group font-weight-700">
                    <label className="text-center">Upload Document</label>
                    <br />
                    <input
                      type="file"
                      name="file-1[]"
                      id="file-1"
                      onChange={(e) => handleFiles(e)}
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label className="col-form-label">
                      Document Type<span className="text-danger">*</span>
                    </label>
                    <select
                      name="documentType"
                      {...register("documentType")}
                      className="custom-select"
                    >
                      {allDocumentTypes?.map((document) => {
                        return (
                          <option value={document.id} key={document.id}>
                            {document.documentName}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div className="col-md-4 m-b-10">
                  <div className="form-group">
                    <label className="col-form-label">Vendor</label>
                    <select
                      name="vendor"
                      {...register("vendor", { required: true })}
                      onChange={(e) => handleVendor(e)}
                      className="custom-select"
                    >
                      {allVendors?.map((vendor) => {
                        return (
                          <option key={vendor.id} value={vendor.id}>
                            {vendor.companyName}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div className="col-md-4 m-b-10">
                  <div className="form-group">
                    <label className="col-form-label">Recommend Vendor</label>
                    <select
                      name="recommend"
                      {...register("recommend")}
                      className="custom-select"
                    >
                      <option value="">Select an Option</option>
                      <option value={true}>Yes</option>
                      <option value={false}>No</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="col-form-label">Reason</label>
                    <input
                      name="reason"
                      {...register("reason")}
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="col-form-label">Amount Requested</label>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text font-14">
                          &#8358;
                        </span>
                      </div>
                      <input
                        name="amount"
                        {...register("amount", { required: true })}
                        type="number"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="submit-section m-b-30">
                <button
                  type="submit"
                  className="btn btn-sm btn-primary submit-btn m-r-10"
                >
                  Add
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-primary submit-btn"
                >
                  Clear
                </button>
              </div>

              <div className="text-lg font-weight-light">EXPENSES ADDED</div>

              <div className="row">
                <div className="col-md-12">
                  <div className="table-responsive">
                    <Table
                      className="table-striped"
                      pagination={{
                        total: allDetails.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
                      style={{ overflowX: "auto" }}
                      columns={modal_columns}
                      // bordered
                      dataSource={allDetails}
                      rowKey={(record) => record.id}
                      //   onChange={console.log("change")}
                    />
                  </div>
                </div>
              </div>
            </form>

            <div className="submit-section m-b-30">
              <button
                onClick={() => handleSubmitRequest()}
                className="btn btn-sm btn-primary submit-btn m-r-10"
              >
                {expenseResponseLoading ? <Loader /> : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

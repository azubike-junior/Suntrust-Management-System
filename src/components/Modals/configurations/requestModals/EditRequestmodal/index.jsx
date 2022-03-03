import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputField, {
  SelectField,
} from "../../../../../MainPage/UIinterface/Forms/InputField/Index";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toggleEditRequestModal } from "../../../../../services/modals/modals";
import date from "../../../../../utils/helper";
import Loader from "../../../../../MainPage/UIinterface/Loader";
import { useGetRequestTypesQuery } from "../../../../../services/configurations/requests/getRequestTypes";

export default function EditRequestModal({ requestDetail }) {
  const { openEditRequest } = useSelector((state) => state.modalReducer);
  const { loading: editRequestLoader } = useSelector(
    (state) => state.addRequestReducer
  );

  const ledger = requestDetail?.ledger?.split("/");

  //   console.log("====================================");
  //   console.log(requestDetail);
  //   console.log(ledger);
  //   console.log("====================================");

  const { data: requestTypes } = useGetRequestTypesQuery();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    resetField,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      // description: hello,
    },
  });

  const editRequestHandler = (data, e) => {
    if (data) {
      const {
        description,
        requestType,
        branchCode,
        customerNumber,
        currencyCode,
        ledgerCode,
        subAccount,
      } = data;

      const requestData = {
        description,
        requestType,
        ledger:
          branchCode +
          "/" +
          customerNumber +
          "/" +
          currencyCode +
          "/" +
          ledgerCode +
          "/" +
          subAccount,
      };
      const newData = { requestData, dispatch };
      //   dispatch(addRequest(newData));
    }
  };

  const resetFields = () => {
    resetField("description");
    resetField("branchCode");
    resetField("customerNumber");
    resetField("ledgerCode");
    resetField("subAccount");
    resetField("currencyCode");
  };

  return (
    <Modal show={openEditRequest} centered backdrop="static" keyboard={false}>
      <div className="modal-90w modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Request</h5>
            <button
              type="button"
              className="close"
              onClick={() => {
                resetFields();
                dispatch(toggleEditRequestModal());
              }}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(editRequestHandler)}>
              <div className="row">
                <SelectField
                  register={register}
                  name="requestType"
                  label="Request Type"
                  className="col-md-6"
                  selectArray={requestTypes}
                  required
                  type="text"
                  errors={errors?.requestType}
                />

                <InputField
                  register={register}
                  name="description"
                  label="Request Description"
                  value={requestDetail?.description}
                  className="col-lg-6"
                  required
                  type="text"
                  errors={errors?.description}
                />

                <div className="col-md-12 m-t-20 d-flex">
                  <InputField
                    register={register}
                    name="branchCode"
                    label="branch Code"
                    className="form-group m-r-10"
                    required
                    type="text"
                    value={ledger && ledger[0]}
                    errors={errors?.branchCode}
                  />
                  <InputField
                    register={register}
                    name="customerNumber"
                    label="Customer Number"
                    className="form-group m-r-10"
                    required
                    value={ledger && ledger[1]}
                    type="text"
                    errors={errors?.customerNumber}
                  />
                  <InputField
                    register={register}
                    name="currencyCode"
                    label="Currency Code"
                    className="form-group m-r-10"
                    required
                    value={ledger && ledger[2]}
                    type="text"
                    errors={errors?.currencyCode}
                  />

                  <InputField
                    register={register}
                    name="ledgerCode"
                    label="Ledger Code"
                    className="form-group m-r-10"
                    required
                    value={ledger && ledger[3]}
                    type="text"
                    errors={errors?.ledgerCode}
                  />
                  <InputField
                    register={register}
                    name="subAccount"
                    label="Sub Account Code"
                    className="form-group m-r-10"
                    required
                    value={ledger && ledger[4]}
                    type="text"
                    errors={errors?.subAccount}
                  />
                </div>
              </div>

              <div className="submit-section">
                <button className="btn btn-primary submit-btn">
                  {editRequestLoader ? <Loader /> : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}

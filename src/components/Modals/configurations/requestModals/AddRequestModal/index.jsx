import React from "react";
import { useForm } from "react-hook-form";
import InputField, {
  SelectField,
} from "../../../../../MainPage/UIinterface/Forms/InputField/Index";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toggleRequestModal } from "../../../../../services/modals/modals";
import date from "../../../../../utils/helper";
import Loader from "../../../../../MainPage/UIinterface/Loader";
import { useGetRequestTypesQuery } from "../../../../../services/configurations/requests/getRequestTypes";
import { addRequest } from "../../../../../services/configurations/requests/addRequest";

export default function AddRequestModal() {
  const { openRequest } = useSelector((state) => state.modalReducer);
  const { loading: addRequestLoader } = useSelector(
    (state) => state.addRequestReducer
  );

  const { data: requestTypes } = useGetRequestTypesQuery();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {},
  });

  const addRequestHandler = (data, e) => {
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
      const newData = { requestData, dispatch, reset };
      dispatch(addRequest(newData));
    }
  };

  return (
    <Modal show={openRequest} centered backdrop="static" keyboard={false}>
      <div className="modal-90w modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Request</h5>
            <button
              type="button"
              className="close"
              onClick={() => dispatch(toggleRequestModal())}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(addRequestHandler)}>
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
                    errors={errors?.branchCode}
                  />
                  <InputField
                    register={register}
                    name="customerNumber"
                    label="Customer Number"
                    className="form-group m-r-10"
                    required
                    type="text"
                    errors={errors?.customerNumber}
                  />
                  <InputField
                    register={register}
                    name="currencyCode"
                    label="Currency Code"
                    className="form-group m-r-10"
                    required
                    type="text"
                    errors={errors?.currencyCode}
                  />

                  <InputField
                    register={register}
                    name="ledgerCode"
                    label="Ledger Code"
                    className="form-group m-r-10"
                    required
                    type="text"
                    errors={errors?.ledgerCode}
                  />
                  <InputField
                    register={register}
                    name="subAccount"
                    label="Sub Account Code"
                    className="form-group m-r-10"
                    required
                    type="text"
                    errors={errors?.subAccount}
                  />
                </div>
              </div>

              <div className="submit-section">
                <button className="btn btn-primary submit-btn">
                  {addRequestLoader ? <Loader /> : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}

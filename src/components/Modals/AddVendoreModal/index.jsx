import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../../../MainPage/UIinterface/Forms/InputField/Index";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  closeVendorModal,
  toggleUpdateVendorModal,
} from "../../../services/modals/modals";
import date from "../../../utils/helper";
import { addVendor } from "../../../services/configurations/vendors/addVendor";
import Loader from "../../../MainPage/UIinterface/Loader";

export default function AddVendorModal() {
  const { openVendor } = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();
  const { loading: addVendorLoader, data: response } = useSelector(
    (state) => state.addVendorReducer
  );

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {},
  });

  const AddVendorHandler = (data, e) => {
    const vendorData = {
      data,
      dispatch,
      reset,
    };
    if (data) {
      dispatch(addVendor(vendorData));
    }
  };

  return (
    <Modal show={openVendor} centered backdrop="static" keyboard={false}>
      <div className="modal-90w modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Vendor</h5>
            <button
              type="button"
              className="close"
              onClick={() => dispatch(closeVendorModal())}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form
              onSubmit={handleSubmit(AddVendorHandler)}
              className="modal-body"
            >
              <div>
                <div className="row">
                  <InputField
                    register={register}
                    name="companyName"
                    label="Company Name"
                    className="col-md-6"
                    required
                    type="text"
                    errors={errors?.companyName}
                  />
                  <InputField
                    register={register}
                    name="contactName"
                    label="Contact Name"
                    className="col-md-6"
                    required
                    type="text"
                    errors={errors?.contactName}
                  />
                  <InputField
                    register={register}
                    name="email"
                    label="Email"
                    className="col-md-6"
                    required
                    type="text"
                    errors={errors?.email}
                  />
                  <InputField
                    register={register}
                    name="phone"
                    label="Phone Number"
                    className="col-md-6"
                    minLength={11}
                    required
                    type="number"
                    errors={errors?.phone}
                  />
                  <InputField
                    register={register}
                    name="address"
                    label="Address"
                    className="col-md-6"
                    required
                    errors={errors?.address}
                    type="text"
                  />
                  <InputField
                    register={register}
                    name="accountNumber"
                    label="Account Number"
                    className="col-md-6"
                    required
                    errors={errors?.accountNumber}
                    type="text"
                  />
                  <InputField
                    register={register}
                    name="tin"
                    label="TIN No"
                    className="col-md-6"
                    required
                    errors={errors?.tin}
                    type="text"
                  />
                  <InputField
                    register={register}
                    name="rcNumber"
                    label="RC NO"
                    className="col-md-6"
                    required
                    type="text"
                    errors={errors?.rcNumber}
                  />
                  <InputField
                    register={register}
                    name="registeredBy"
                    label="Registered By"
                    className="col-md-6"
                    required
                    type="Date"
                    errors={errors?.registeredBy}
                  />
                </div>

                <div className="submit-section">
                  <button type="submit" className="btn btn-primary submit-btn">
                    {addVendorLoader ? <Loader /> : "Submit"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}

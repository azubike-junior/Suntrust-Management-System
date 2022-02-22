import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../../../../../MainPage/UIinterface/Forms/InputField/Index";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toggleUpdateVendorModal } from "../../../../../services/modals/modals";
import { updateVendor } from "../../../../../services/configurations/vendors/updateVendor";
import date from "../../../../../utils/helper";

export default function EditVendorModal({ editData }) {
  const { openUpdateVendor } = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  /**
   * todo: change hard coded parameters in newData
   */
  const editVendorHandler = (data) => {
    console.log(editData);
    const { registeredBy, ...rest } = data;
    if (data) {
      const newData = {
        vendorId: editData?.id,
        staffId: "33",
        ...rest,
      };
      dispatch(updateVendor({ id: editData?.id, newData, dispatch }));
    }
  };

  const resetFields = () => {
    resetField("companyName");
    resetField("contactName");
    resetField("email");
    resetField("phone");
    resetField("address");
    resetField("accountNumber");
    resetField("tin");
    resetField("rcNumber");
  };

  return (
    <Modal show={openUpdateVendor} centered backdrop="static" keyboard={false}>
      <div className="modal-90w modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Vendor</h5>
            <button
              type="button"
              className="close"
              onClick={() => {
                resetFields();
                dispatch(toggleUpdateVendorModal());
              }}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(editVendorHandler)}>
              <div className="row">
                <InputField
                  register={register}
                  name="companyName"
                  label="Company Name"
                  className="col-md-6"
                  required
                  type="text"
                  value={editData?.companyName}
                  errors={errors?.companyName}
                />
                <InputField
                  register={register}
                  name="contactName"
                  label="Contact Name"
                  className="col-md-6"
                  required
                  type="text"
                  value={editData?.contactName}
                  errors={errors?.contactName}
                />
                <InputField
                  register={register}
                  name="email"
                  label="Email"
                  className="col-md-6"
                  required
                  type="text"
                  value={editData?.email}
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
                  value={editData?.phone}
                  errors={errors?.phone}
                />
                <InputField
                  register={register}
                  name="address"
                  label="Address"
                  className="col-md-6"
                  required
                  errors={errors?.address}
                  value={editData?.address}
                  type="text"
                />
                <InputField
                  register={register}
                  name="accountNumber"
                  label="Account Number"
                  className="col-md-6"
                  required
                  errors={errors?.accountNumber}
                  value={editData?.accountNumber}
                  type="text"
                />
                <InputField
                  register={register}
                  name="tin"
                  label="TIN No"
                  className="col-md-6"
                  required
                  errors={errors?.tin}
                  value={editData?.tin}
                  type="text"
                />
                <InputField
                  register={register}
                  name="rcNumber"
                  label="RC NO"
                  className="col-md-6"
                  required
                  type="text"
                  value={editData?.rcNumber}
                  errors={errors?.rcNumber}
                />
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}

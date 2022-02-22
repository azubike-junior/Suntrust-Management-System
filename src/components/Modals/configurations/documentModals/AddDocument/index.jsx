import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../../../../MainPage/UIinterface/Forms/InputField";
import { toggleAddDocumentModal } from "../../../../../services/modals/modals";
import Modal from "react-bootstrap/Modal";
import { addDocument } from "../../../../../services/configurations/documents/addDocument";
import Loader from "../../../../../MainPage/UIinterface/Loader/index";

export default function AddDocumentModal() {
  const { openAddDocument } = useSelector((state) => state.modalReducer);
  const { loading: addDocumentLoader } = useSelector(
    (state) => state.addDocumentReducer
  );

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {},
  });

  const addDocumentHandler = (data) => {
    if (data) {
      const { documentName } = data;
      const newData = {
        documentName,
        dispatch,
      };
      dispatch(addDocument(newData));
    }
  };

  return (
    <Modal show={openAddDocument} centered backdrop="static" keyboard={false}>
      <div className="modal-90w modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New Document</h5>
            <button
              type="button"
              className="close"
              onClick={() => dispatch(toggleAddDocumentModal())}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(addDocumentHandler)}>
              <div className="d-flex align-items-center justify-content-center">
                <InputField
                  className="col-lg-6"
                  register={register}
                  type="text"
                  required
                  name="documentName"
                  label="Document Name"
                  errors={errors?.documentName}
                />
              </div>

              <div className="submit-section">
                <button className="btn btn-primary submit-btn">
                  {addDocumentLoader ? <Loader /> : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}

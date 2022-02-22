import React from "react";
import { useForm } from "react-hook-form";
import InputField, {
  SelectField,
} from "../../../../../MainPage/UIinterface/Forms/InputField/Index";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toggleDeleteRequestModal } from "../../../../../services/modals/modals";
import { useGetRequestTypesQuery } from "../../../../../services/configurations/requests/getRequestTypes";

export default function DeleteRequestModal() {
  const { openDeleteRequest } = useSelector((state) => state.modalReducer);
  const { loading: addRequestLoader } = useSelector(
    (state) => state.addRequestReducer
  );

  const dispatch = useDispatch();

    /**
     * todo: delete function
     */
  const deleteRequestHandler = (data, e) => {};

  return (
    <Modal show={openDeleteRequest} centered backdrop="static" keyboard={false}>
      <div className="modal-90w  modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-header">
              <h3>Delete Request</h3>
              <p>Are you sure want to delete?</p>
            </div>
            <div className="modal-btn delete-action">
              <div className="row">
                <div className="col-6">
                  <a href="" className="btn btn-primary continue-btn">
                    Delete
                  </a>
                </div>
                <div className="col-6">
                  <a
                    // href=""
                    // data-dismiss="modal"
                    onClick={() => dispatch(toggleDeleteRequestModal())}
                    className="btn btn-primary cancel-btn"
                  >
                    Cancel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

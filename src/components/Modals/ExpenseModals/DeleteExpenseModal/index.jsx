import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toggleDeleteExpenseModal } from "../../../../services/modals/modals";
import { deleteExpenseByReference } from "../../../../services/Expense/deleteExpenseByReference";

export default function DeleteExpenseModal({ referenceId }) {
  const { openDeleteExpense } = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();

  console.log(">>>>>", referenceId);

  return (
    <Modal show={openDeleteExpense} centered backdrop="static" keyboard={false}>
      <div className="modal-90w  modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-header">
              <h3>Delete Expense</h3>
              <p>Are you sure want to Delete this Expense?</p>
            </div>
            <div className="modal-btn delete-action">
              <div className="row">
                <div className="col-6">
                  <a
                    className="btn btn-primary continue-btn"
                    onClick={() => {
                      dispatch(
                        deleteExpenseByReference({ referenceId, dispatch })
                      );
                    }}
                  >
                    Delete
                  </a>
                </div>
                <div className="col-6">
                  <a
                    onClick={() => dispatch(toggleDeleteExpenseModal())}
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

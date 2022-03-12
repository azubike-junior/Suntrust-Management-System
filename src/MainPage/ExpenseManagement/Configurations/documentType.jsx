import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import "../../antdstyle.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddDocumentModal } from "../../../services/modals/modals";
import AddDocumentModal from "../../../components/Modals/configurations/documentModals/AddDocument";
import { getDocuments } from "../../../services/configurations/documents/getDocuments";
import Loader from "../../UIinterface/Loader";

const Documents = () => {
  const dispatch = useDispatch();
  const { loading: getDocumentsLoader, data: documents } = useSelector(
    (state) => state.getDocumentsReducer
  );

  useEffect(() => {
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }
  });

  useEffect(() => {
    dispatch(getDocuments());
  }, []);

  const columns = [
    {
      title: "Document ID",
      dataIndex: "id",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Document Name",
      dataIndex: "documentName",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "Action",
      render: (text, record) => (
        <div className="">
          <a className="btn btn-sm btn-outline-secondary m-r-10" href="#">
            <i className="fa fa-pencil m-r-5" /> Edit
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Expense Management | Document Type</title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}

      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Document Types</h3>
            </div>
            <div className="col-auto float-right ml-auto">
              <a
                href="#"
                className="btn add-btn"
                onClick={() => dispatch(toggleAddDocumentModal())}
              >
                <i className="fa fa-plus" /> Add Document Type
              </a>
            </div>
          </div>
        </div>
        {/* /Page Header */}

        {/* Search Filter */}
        <div className="row filter-row">
          <div className="col-sm-10 col-md-10">
            <div className="form-group form-focus">
              <input type="text" className="form-control floating" />
              <label className="focus-label">
                Search for a Document (e.g. Document Title)
              </label>
            </div>
          </div>

          <div className="col-sm-2 col-md-2">
            <a href="#" className="btn btn-success btn-block">
              {" "}
              Search{" "}
            </a>
          </div>
        </div>
        {/* Search Filter */}

        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <Table
                className="table-striped"
                pagination={{
                  total: documents,
                  showTotal: (total, range) =>
                    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  showSizeChanger: true,
                  onShowSizeChange: onShowSizeChange,
                  itemRender: itemRender,
                }}
                loading={{
                  indicator: <Loader />,
                  spinning: getDocumentsLoader,
                }}
                style={{ overflowX: "auto" }}
                columns={columns}
                // bordered
                dataSource={documents}
                rowKey={(record) => record.id}
                // onChange={console.log("change")}
              />
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}

      {/* Add Document Modal */}
      <AddDocumentModal />
      {/* /Add Document Modal */}

      {/* Edit Document Modal */}
      <div id="edit_client" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Documents</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="modal-body">
              <form>
                <div class="d-flex align-items-center justify-content-center">
                  <div className="col-lg-6">
                    <label className="col-form-label">
                      Document Name<span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" value="Hello" />
                  </div>
                </div>

                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Document Modal */}

      {/* Delete Document Modal */}
      <div className="modal custom-modal fade" id="delete_client" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Document</h3>
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
                      href=""
                      data-dismiss="modal"
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
      </div>
      {/* /Delete Document Modal */}
    </div>
  );
};

export default Documents;

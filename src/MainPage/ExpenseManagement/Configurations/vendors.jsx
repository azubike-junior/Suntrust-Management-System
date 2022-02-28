import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { getVendors } from "../../../services/configurations/vendors/getVendors";
import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import "../../antdstyle.css";
import {
  closeVendorModal,
  openVendorModal,
  toggleDeleteVendorModal,
  toggleUpdateVendorModal,
} from "../../../services/modals/modals";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../UIinterface/Loader";
import Modal from "react-bootstrap/Modal";
import { deleteVendor } from "../../../services/configurations/vendors/deleteVendor.js";
import EditVendorModal from "../../../components/Modals/configurations/vendorModals/EditVendorModal";
import AddVendorModal from "../../../components/Modals/configurations/vendorModals/AddVendoreModal";

const Vendors_List = () => {
  const dispatch = useDispatch();
  const [editData, setEditData] = useState({});
  const { openVendor, openDeleteVendor } = useSelector(
    (state) => state.modalReducer
  );
  const [vendorId, setVendorId] = useState("");
  const { loading: getVendorLoader, data: vendorsData } = useSelector(
    (state) => state.getVendorsReducer
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
    dispatch(getVendors());
  }, []);

  const columns = [
    {
      title: "Vendor ID",
      dataIndex: "id",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      render: (text, record) => (
        <h2 className="table-avatar">
          <Link to="/app/profile/client-profile">{text}</Link>
        </h2>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },

    {
      title: "Account No.",
      dataIndex: "accountNumber",
      sorter: (a, b) => a.mobile.length - b.mobile.length,
    },
    {
      title: "Contact Name",
      dataIndex: "contactName",
      sorter: (a, b) => a.contactperson.length - b.contactperson.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },

    {
      title: "Phone No.",
      dataIndex: "phone",
      sorter: (a, b) => a.mobile.length - b.mobile.length,
    },

    {
      title: "Action",
      render: (text, record) => (
        <div className="">
          <a
            className="btn btn-sm btn-outline-secondary m-r-10"
            href="#"
            onClick={() => {
              setEditData(text);
              dispatch(toggleUpdateVendorModal());
            }}
          >
            <i className="fa fa-pencil m-r-5" /> Edit
          </a>
          <a
            className="btn btn-sm btn-outline-danger m-r-10"
            href="#"
            onClick={() => {
              setVendorId(text.id);
              dispatch(toggleDeleteVendorModal());
            }}
          >
            <i className="fa fa-trash-o m-r-5" /> Delete
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Expense Management | Vendors</title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}

      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Vendors</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/app/main/dashboard">Configurations</Link>
                </li>
                <li className="breadcrumb-item active">Vendors</li>
              </ul>
            </div>
            <div className="col-auto float-right ml-auto">
              <a
                href="#"
                className="btn add-btn"
                onClick={() => dispatch(openVendorModal())}
              >
                <i className="fa fa-plus" /> Add Vendor
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
                Search for a Vendor (e.g. Vendor Name, Vendor ID)
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
                  total: vendorsData,
                  showTotal: (total, range) =>
                    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  showSizeChanger: true,
                  onShowSizeChange: onShowSizeChange,
                  itemRender: itemRender,
                }}
                loading={{ indicator: <Loader />, spinning: getVendorLoader }}
                style={{ overflowX: "auto" }}
                columns={columns}
                // bordered
                dataSource={vendorsData}
                rowKey={(record) => record.id}
                // onChange={console.log("change")}
              />
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}

      {/* Add Vendor Modal */}
      <AddVendorModal />
      {/* Add Vendor Modal */}

      {/* Edit Vendor Modal */}
      <EditVendorModal editData={editData} />
      {/* /Edit Vendor Modal */}

      {/* Delete Vendor Modal */}
      <Modal
        show={openDeleteVendor}
        centered
        backdrop="static"
        keyboard={false}
      >
        <div className="modal-90w modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Vendor</h3>
                <p>Are you sure want to delete?</p>
              </div>
              <div className="modal-btn delete-action">
                <div className="row">
                  <div className="col-6">
                    <a
                      className="btn btn-primary continue-btn"
                      onClick={() => {
                        dispatch(deleteVendor({ vendorId, dispatch }));
                      }}
                    >
                      Delete
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      className="btn btn-primary cancel-btn"
                      onClick={() => dispatch(toggleDeleteVendorModal())}
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
      {/* /Delete Vendor Modal */}
    </div>
  );
};

export default Vendors_List;

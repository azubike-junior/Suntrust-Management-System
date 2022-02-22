import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Avatar_07 } from "../../Entryfile/imagepath";
import { Table, Select, Option } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import "../antdstyle.css";
import AddRequestModal from "../../components/Modals/configurations/requestModals/AddRequestModal";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleRequestModal,
  toggleEditRequestModal,
  toggleDeleteRequestModal,
} from "../../services/modals/modals";
import { getRequests } from "./../../services/configurations/requests/getRequests";
import Loader from "../UIinterface/Loader";
import EditRequestModal from "../../components/Modals/configurations/requestModals/EditRequestmodal";
import { useForm } from "react-hook-form";
import DeleteRequestModal from "../../components/Modals/configurations/requestModals/DeleteRequestModal";

const Request = () => {
  const [requestDetail, setRequestDetail] = useState({});
  const dispatch = useDispatch();
  const { openRequest } = useSelector((state) => state.modalReducer);
  const { data: requestsData, loading: getRequestsLoader } = useSelector(
    (state) => state.getRequestsReducer
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
    dispatch(getRequests());
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {},
  });

  const columns = [
    {
      title: "Request Description",
      dataIndex: "description",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Request Type",
      dataIndex: "requestType",
      render: (text, record) => (
        <p>{text === "1" ? "EXPENSE" : "PURCHASE AND ASSETS"}</p>
      ),
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "Ledger",
      dataIndex: "ledger",
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
              setRequestDetail(text);
              dispatch(toggleEditRequestModal());
            }}
          >
            <i className="fa fa-pencil m-r-5" /> Edit
          </a>
          <a
            className="btn btn-sm btn-outline-danger m-r-10"
            href="#"
            onClick={() => dispatch(toggleDeleteRequestModal())}
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
        <title>Expense Management | Requests</title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}

      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Requests</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/app/main/dashboard">Configurations</Link>
                </li>
                <li className="breadcrumb-item active">Requests</li>
              </ul>
            </div>
            <div className="col-auto float-right ml-auto">
              <a
                href="#"
                className="btn add-btn"
                onClick={() => dispatch(toggleRequestModal())}
              >
                <i className="fa fa-plus" /> Add Request
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
                Search for a Request (e.g. Request Description)
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
                  total: requestsData,
                  showTotal: (total, range) =>
                    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  showSizeChanger: true,
                  onShowSizeChange: onShowSizeChange,
                  itemRender: itemRender,
                }}
                loading={{ indicator: <Loader />, spinning: getRequestsLoader }}
                style={{ overflowX: "auto" }}
                columns={columns}
                // bordered
                dataSource={requestsData}
                rowKey={(record) => record.expenseRequestId}
                // onChange={console.log("change")}
              />
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}

      {/* Add Request Modal */}
      <AddRequestModal />
      {/* /Add Request Modal */}

      {/* Edit Request Modal */}
      <EditRequestModal requestDetail={requestDetail} />
      {/* /Edit Request Modal */}

      {/* Delete Request Modal */}
      <DeleteRequestModal />
      {/* /Delete Request Modal */}
    </div>
  );
};

export default Request;

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../../../paginationfunction";
import "../../../antdstyle.css";
import AddBranchModal from "../../../../components/Modals/configurations/branchModals/addBranchModal";
import {
  toggleAddBranchModal,
  toggleUpdateBranchModal,
} from "../../../../services/modals/modals";
import { useDispatch, useSelector } from "react-redux";
import { useGetBranchesQuery } from "../../../../services/configurations/codeConfig/getCodesQueries";
import Loader from "../../../UIinterface/Loader";
import { getBranches } from "../../../../services/configurations/codeConfig/branches/getBranches";
import EditBranchModal from "../../../../components/Modals/configurations/branchModals/updateBranchModal";

const Branches = () => {
  const dispatch = useDispatch();
  const [branchDetail, setBranchDetail] = useState({});
  const { data: branches, loading: branchLoading } = useSelector(
    (state) => state.getBranchesReducer
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
    dispatch(getBranches());
  }, []);

  const columns = [
    {
      title: "Branch Code",
      dataIndex: "branchCode",
      render: (text, record) => <h2 className="table-avatar">{text}</h2>,
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Branch Name",
      dataIndex: "branchName",
      render: (text, record) => <h2 className="table-avatar">{text}</h2>,
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Branch Address",
      dataIndex: "branchAddress",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "Action",
      render: (text, record) => (
        <div className="">
          <a
            className="btn btn-sm btn-outline-secondary m-r-10"
            onClick={() => {
              setBranchDetail(text);
              dispatch(toggleUpdateBranchModal());
            }}
          >
            <i className="fa fa-pencil m-r-5" /> Edit
          </a>
          {/* <a
            className="btn btn-sm btn-outline-danger m-r-10"
            href="#"
            data-toggle="modal"
            data-target="#delete_client"
          >
            <i className="fa fa-trash-o m-r-5" /> Delete
          </a> */}
        </div>
      ),
    },
  ];

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Expense Management | Branches</title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}

      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Branches</h3>
            </div>
            <div className="col-auto float-right ml-auto">
              <a
                href="#"
                className="btn add-btn"
                onClick={() => dispatch(toggleAddBranchModal())}
              >
                <i className="fa fa-plus" /> Add New Branch
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
                Search for a Branch (e.g. Branch Name)
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
                  total: branches?.length,
                  showTotal: (total, range) =>
                    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  showSizeChanger: true,
                  onShowSizeChange: onShowSizeChange,
                  itemRender: itemRender,
                }}
                loading={{ indicator: <Loader />, spinning: branchLoading }}
                style={{ overflowX: "auto" }}
                columns={columns}
                // bordered
                dataSource={branches}
                rowKey={(record) => record.id}
                onChange={console.log("change")}
              />
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}

      <AddBranchModal />

      <EditBranchModal branchDetail={branchDetail} />

      {/* Delete Branch Modal */}
      <div className="modal custom-modal fade" id="delete_client" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Branch</h3>
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
      {/* /Delete Branch Modal */}
    </div>
  );
};

export default Branches;

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../../../paginationfunction";
import "../../../antdstyle.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../UIinterface/Loader";
import AddDivisionModal from "../../../../components/Modals/configurations/divisionModals/AddDivisionModal";
import {
  toggleAddDivisionModal,
  toggleUpdateDivisionModal,
} from "../../../../services/modals/modals";
import { getDivision } from "../../../../services/configurations/codeConfig/divisions/getDivisions";
import UpdateDivisionModal from "../../../../components/Modals/configurations/divisionModals/UpdateDivisionModal";

const Divisions = () => {
  const dispatch = useDispatch();
  const [divisionDetail, setDivisionDetail] = useState({});

  const { data: divisions, loading: divisionsLoading } = useSelector(
    (state) => state.getDivisionsReducer
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
    dispatch(getDivision());
  }, []);

  const columns = [
    {
      title: "Division Code",
      dataIndex: "divisionCode",
      sorter: (a, b) => a.divisionCode.length - b.divisionCode.length,
      render: (text, record) => <h2 className="table-avatar">{text}</h2>,
    },
    {
      title: "Division Name",
      dataIndex: "divisionName",
      sorter: (a, b) => a.divisionName.length - b.divisionName.length,
    },
    {
      title: "Action",
      render: (text, record) => (
        <div className="">
          <a
            className="btn btn-sm btn-outline-secondary m-r-10"
            href="#"
            onClick={() => {
              setDivisionDetail(text);
              dispatch(toggleUpdateDivisionModal());
            }}
          >
            <i className="fa fa-pencil m-r-5" /> Edit
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Expense Management | Division</title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}

      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Division</h3>
            </div>
            <div className="col-auto float-right ml-auto">
              <a
                href="#"
                className="btn add-btn"
                onClick={() => dispatch(toggleAddDivisionModal())}
              >
                <i className="fa fa-plus" /> Add New Division
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
                Search for a Division (e.g. Division Name)
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
                  total: divisions?.length,
                  showTotal: (total, range) =>
                    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  showSizeChanger: true,
                  onShowSizeChange: onShowSizeChange,
                  itemRender: itemRender,
                }}
                loading={{ indicator: <Loader />, spinning: divisionsLoading }}
                style={{ overflowX: "auto" }}
                columns={columns}
                dataSource={divisions}
                rowKey={(record) => {}}
                // onChange={console.log("change")}
              />
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}

      <AddDivisionModal />

      <UpdateDivisionModal divisionDetail={divisionDetail}/>

      {/* Delete Region Modal */}
      <div className="modal custom-modal fade" id="delete_client" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Region</h3>
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
      {/* /Delete Region Modal */}
    </div>
  );
};

export default Divisions;

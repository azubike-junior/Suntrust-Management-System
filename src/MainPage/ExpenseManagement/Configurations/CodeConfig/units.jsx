import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
// import { Avatar_07 } from "../../Entryfile/imagepath";
import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../../../paginationfunction";
import "../../../antdstyle.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddUnitModal, toggleUpdateUnitModal } from "../../../../services/modals/modals";
import AddUnitModal from "../../../../components/Modals/configurations/unitModals/addUnitModals";
import { useGetUnitsQuery } from "../../../../services/configurations/codeConfig/getCodesQueries";
import Loader from "../../../UIinterface/Loader";
import { getUnits } from "../../../../services/configurations/codeConfig/units/getUnits";
import UpdateUnitModal from "../../../../components/Modals/configurations/unitModals/updateUnitModals";

const Units = () => {
  const [unitDetail, setUnitDetail] = useState({});
  const dispatch = useDispatch();
  const { data: units, loading: unitsLoading } = useSelector(
    (state) => state.getUnitsReducer
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
    dispatch(getUnits());
  }, []);

  const columns = [
    {
      title: "Unit Code",
      dataIndex: "unitCode",
      render: (text, record) => <h2 className="table-avatar">{text}</h2>,
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Unit Name",
      dataIndex: "unitName",
      render: (text, record) => <h2 className="table-avatar">{text}</h2>,
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Description",
      dataIndex: "unitDescription",
      render: (text, record) => (
        <h2 className="table-avatar">
          {text ? text : "No description provided"}
        </h2>
      ),
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "Department Code",
      dataIndex: "departmentCode",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "Action",
      render: (text, record) => (
        <div className="">
          <a
            className="btn btn-sm btn-outline-secondary m-r-10"
            href="#"
            onClick={() => {
              setUnitDetail(text);
              dispatch(toggleUpdateUnitModal());
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
        <title>Expense Management | Units</title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}

      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Units</h3>
            </div>
            <div className="col-auto float-right ml-auto">
              <a
                href="#"
                className="btn add-btn"
                onClick={() => dispatch(toggleAddUnitModal())}
              >
                <i className="fa fa-plus" /> Add New Unit
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
                Search for a Unit (e.g. Unit Name)
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
                  total: units?.length,
                  showTotal: (total, range) =>
                    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  showSizeChanger: true,
                  onShowSizeChange: onShowSizeChange,
                  itemRender: itemRender,
                }}
                loading={{ indicator: <Loader />, spinning: unitsLoading }}
                style={{ overflowX: "auto" }}
                columns={columns}
                // bordered
                dataSource={units}
                rowKey={(record) => record.id}
                onChange={console.log("change")}
              />
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}

      <AddUnitModal />

      <UpdateUnitModal unitDetail={unitDetail}/>

      {/* Delete Unit Modal */}
      <div className="modal custom-modal fade" id="delete_unit" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Unit</h3>
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
      {/* /Delete Unit Modal */}
    </div>
  );
};

export default Units;

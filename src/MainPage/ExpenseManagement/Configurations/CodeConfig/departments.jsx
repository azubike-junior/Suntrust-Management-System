import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
// import { Avatar_07 } from "../../../Entryfile/imagepath";

import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../../../paginationfunction";
import "../../../antdstyle.css";

const Departments = () => {
  const [data, setData] = useState([
    {
      id: 1,
      bra_name: "Lagos Office",
      dept_name: "Information Technology",
      dept_code: "DEP-0021",
    },
  ]);
  useEffect(() => {
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }
  });

  const columns = [
    {
      title: "Branch Name",
      dataIndex: "bra_name",
      render: (text, record) => <h2 className="table-avatar">{text}</h2>,
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Department Name",
      dataIndex: "dept_name",
      render: (text, record) => <h2 className="table-avatar">{text}</h2>,
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Department Code",
      dataIndex: "dept_code",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "Action",
      render: (text, record) => (
        <div className="">
          <a
            className="btn btn-sm btn-outline-secondary m-r-10"
            href="#"
            data-toggle="modal"
            data-target="#edit_client"
          >
            <i className="fa fa-pencil m-r-5" /> Edit
          </a>
          <a
            className="btn btn-sm btn-outline-danger m-r-10"
            href="#"
            data-toggle="modal"
            data-target="#delete_client"
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
        <title>Expense Management | Departments</title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}

      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Departments</h3>
            </div>
            <div className="col-auto float-right ml-auto">
              <a
                href="#"
                className="btn add-btn"
                data-toggle="modal"
                data-target="#add_client"
              >
                <i className="fa fa-plus" /> Add New Department
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
                Search for a Department (e.g. Department Name)
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
                  total: data.length,
                  showTotal: (total, range) =>
                    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  showSizeChanger: true,
                  onShowSizeChange: onShowSizeChange,
                  itemRender: itemRender,
                }}
                style={{ overflowX: "auto" }}
                columns={columns}
                // bordered
                dataSource={data}
                rowKey={(record) => record.id}
                onChange={console.log("change")}
              />
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}

      {/* Add Department Modal */}
      <div id="add_client" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add New Department</h5>
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
                  <div className="col-lg-4">
                    <label className="col-form-label">
                      Branch Name<span className="text-danger">*</span>
                    </label>
                    <select className="select">
                      <option>Choose a Branch</option>
                      <option value={1}>Lagos Office</option>
                      <option value={2}>Idumota Office</option>
                    </select>
                  </div>

                  <div className="col-lg-4">
                    <label className="col-form-label">
                      Department Name<span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>

                  <div className="col-lg-4">
                    <label className="col-form-label">
                      Department Code<span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
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
      {/* /Add Department Modal */}

      {/* Edit Department Modal */}
      <div id="edit_client" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Department</h5>
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
                  <div className="col-lg-4">
                    <label className="col-form-label">
                      Branch Name<span className="text-danger">*</span>
                    </label>
                    <select className="select">
                      <option>Choose a Branch</option>
                      <option value={1}>Lagos Office</option>
                      <option value={2}>Idumota Office</option>
                    </select>
                  </div>

                  <div className="col-lg-4">
                    <label className="col-form-label">
                      Department Name<span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>

                  <div className="col-lg-4">
                    <label className="col-form-label">
                      Department Code<span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
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
      {/* /Edit Department Modal */}

      {/* Delete Department Modal */}
      <div className="modal custom-modal fade" id="delete_client" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Department</h3>
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
      {/* /Delete Department Modal */}
    </div>
  );
};

export default Departments;

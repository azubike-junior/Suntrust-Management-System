/**
 * TermsCondition Page
 */
import React, { Component, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Avatar_01,
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_11,
  Avatar_12,
  Avatar_13,
  Avatar_16,
  Avatar_19,
} from "../../Entryfile/imagepath";

import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import "../antdstyle.css";

const Category_Type = () => {
  const [category_data, setCategoryData] = useState([
    {
      id: 1,
      category_name: "Process",
    },
    {
      id: 2,
      category_name: "Customer",
    },
    {
      id: 3,
      category_name: "Financial",
    },
    {
      id: 4,
      category_name: "Capacity Development",
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

  // Table displayed on Expense Requests Page
  const category_columns = [
    {
      title: "Category Name",
      dataIndex: "category_name",
      sorter: (a, b) => a.mobile.length - b.mobile.length,
    },
    {
      title: "",
      render: (text, record) => (
        <div className="">
          <Link
            to="#"
            data-toggle="modal"
            data-target="#edit_category"
            className="btn btn-sm btn-outline-primary m-r-10"
          >
            <i className="fa fa-edit" />
          </Link>

          <Link
            to="#"
            data-toggle="modal"
            data-target="#delete_category"
            className="btn btn-sm btn-outline-danger m-r-10"
          >
            <i className="fa fa-trash" />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Client Profile - HRMS admin Template</title>
        <meta name="description" content="Reactify Blank Page" />
      </Helmet>

      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}

        <div className="">
          <h3 className="user-name m-b-10">Category Type</h3>
        </div>
        {/* /Page Header */}

        <div className="card m-b-50 col-lg-12">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12 m-t-10 m-b-20">
                <h4 className="user-name m-t-0">Setup Category Type</h4>
              </div>

              <div className="col-lg-4 m-b-10">
                <div className="m-b-10">Category</div>
                <div className="form-group">
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 m-b-10">
                <a
                  href=""
                  className="btn btn-block btn-primary font-weight-700"
                >
                  ADD
                </a>
              </div>
            </div>

            <div className="row m-t-50 m-b-20">
              <h4 className="user-name m-b-10 col-md-12">CATEGORY LIST</h4>

              <div className="col-lg-12">
                <div className="table-responsive">
                  <Table
                    className="table-striped"
                    pagination={{
                      total: category_data.length,
                      showTotal: (total, range) =>
                        `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                      showSizeChanger: true,
                      onShowSizeChange: onShowSizeChange,
                      itemRender: itemRender,
                    }}
                    style={{ overflowX: "auto" }}
                    columns={category_columns}
                    // bordered
                    dataSource={category_data}
                    rowKey={(record) => record.id}
                    onChange={console.log("change")}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-group col-lg-12 col-md-12 col-sm-12 m-b-20">
              <div className="d-flex align-items-center justify-content-center">
                <div className="col-lg-5 col-md-6 col-sm-12 m-b-10">
                  <a
                    href=""
                    className="btn btn-block btn-primary font-weight-700"
                  >
                    SUBMIT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}

      {/* Delete Request Modal */}
      <div
        className="modal custom-modal fade"
        id="delete_category"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Category</h3>
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
      {/* /Delete Request Modal */}
    </div>
  );
};
export default Category_Type;

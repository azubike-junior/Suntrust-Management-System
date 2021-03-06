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
import { useGetCategoriesQuery } from "../../services/PerformanceManagement/Configurations/getPerformanceConfigs";

const Organizational_Goal = () => {
  const { data: categories } = useGetCategoriesQuery("");

  const [organizational_data, setOrganizationalData] = useState([
    {
      id: 1,
      category_name: "Process",
      organ_goal: "Codified and Automated Processes and Manuals",
    },
    {
      id: 2,
      category_name: "Process",
      organ_goal: "Zero Governace Breaches, Regulatory Penalties and Fines",
    },
    {
      id: 3,
      category_name: "Customer",
      organ_goal: "External Net Promoter Score (Customer Experience) > 70%",
    },
    {
      id: 4,
      category_name: "Financial",
      organ_goal: "Total Customer Liabilities of N100 Billion",
    },
    {
      id: 5,
      category_name: "Financial",
      organ_goal: "Profitability of N1 Billion",
    },
    {
      id: 6,
      category_name: "Financial",
      organ_goal: "Profitability of N1 Billion",
    },
    {
      id: 7,
      category_name: "Financial",
      organ_goal: "Profitability of N1 Billion",
    },
    {
      id: 8,
      category_name: "Financial",
      organ_goal: "Profitability of N1 Billion",
    },
    {
      id: 9,
      category_name: "Capacity Development",
      organ_goal: "Human Capacity Development Index  > 70%",
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

  // Table displayed on
  const organizational_columns = [
    {
      title: "Category Type",
      dataIndex: "category_name",
      sorter: (a, b) => a.mobile.length - b.mobile.length,
    },
    {
      title: "Organizational Goals",
      dataIndex: "organ_goal",
      sorter: (a, b) => a.mobile.length - b.mobile.length,
    },
    {
      title: "",
      render: (text, record) => (
        <Link
          to="#"
          data-toggle="modal"
          data-target="#delete_category"
          className="btn btn-sm btn-outline-danger m-r-10"
        >
          <i className="fa fa-trash" />
        </Link>
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
          <h3 className="user-name m-b-10">Organizational Goals</h3>
        </div>
        {/* /Page Header */}

        <div className="card m-b-50 col-lg-12">
          <div className="card-body">
            <div className="row flex-column">
              <div className="col-lg-12 m-t-10 m-b-20">
                <h4 className="user-name m-t-0">Setup Organizational Goal</h4>
              </div>

              <div className="col-lg-4 m-b-10">
                <div className="m-b-10">Category</div>
                <div className="form-group">
                  <select className="form-control">
                    {categories?.map((category) => {
                      return (
                        <option value={category?.id}>
                          {category?.categoryType}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="col-lg-4 m-b-10">
                <div className="m-b-10">Organizational Goal</div>
                <div className="form-group">
                  <textarea className="form-control" rows="3" />
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
              {/* <h4 className="user-name m-b-10 col-md-12">CATEGORY LIST</h4> */}

              <div className="col-md-12">
                <div className="table-responsive">
                  <Table
                    className="table-striped"
                    pagination={{
                      total: organizational_data.length,
                      showTotal: (total, range) =>
                        `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                      showSizeChanger: true,
                      onShowSizeChange: onShowSizeChange,
                      itemRender: itemRender,
                    }}
                    style={{ overflowX: "auto" }}
                    columns={organizational_columns}
                    // bordered
                    dataSource={organizational_data}
                    rowKey={(record) => record.id}
                    onChange={console.log("change")}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-group col-lg-12 col-md-12 col-sm-12 m-b-20">
              <div className="d-flex align-items-center justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-12 m-b-10">
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
export default Organizational_Goal;

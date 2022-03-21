/**
 * TermsCondition Page
 */
import React, { Component, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../../../paginationfunction";
import "../../../antdstyle.css";
import {
  useDeleteCategoryTypeMutation,
  useGetCategoriesQuery,
  usePostCategoryTypeMutation,
} from "../../../../services/PerformanceManagement/Configurations/getPerformanceConfigs";
import { useForm } from "react-hook-form";
import InputField from "../../../UIinterface/Forms/InputField/Index";
import { useDispatch } from "react-redux";

const CategoryType = () => {
  const [allCategories, setAllCategories] = useState([]);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    resetField,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {},
  });

  const { data: categories } = useGetCategoriesQuery("");
  const [postCategory, { data: response }] = usePostCategoryTypeMutation();
  const [deleteCategoryType] = useDeleteCategoryTypeMutation();

  // console.log(">>>>cat", categories);

  const deleteCategory = (cat) => {
    const filtered = allCategories.filter(
      (category) => category.categoryType !== cat
    );
    setAllCategories(filtered);
  };

  const categoryTypeHandler = async (data) => {
    setAllCategories((prev) => [...prev, data]);
    reset();
    await postCategory(data);
  };

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
      dataIndex: "categoryType",
    },
    {
      title: "",
      render: (text, record) => (
        <div className="">
          <a
            to="#"
            data-toggle="modal"
            data-target="#edit_category"
            className="btn btn-sm btn-outline-primary m-r-10"
          >
            <i className="fa fa-edit" />
          </a>

          <a
            className="btn btn-sm btn-outline-danger m-r-10"
            onClick={() => {
              console.log(text)
              deleteCategory(text.categoryType);
            }}
          >
            <i className="fa fa-trash" />
          </a>
        </div>
      ),
    },
  ];

  // const addCategoryType = (data) => {
  //   if (allCategories.includes(data.category)) {
  //     return;
  //   }
  //   setAllCategories((prev) => [...prev, data]);
  //   reset();
  // };

  

  // console.log(">>>>>categories", allCategories, response);
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
            <form onSubmit={handleSubmit(categoryTypeHandler)}>
              <div className="row">
                <div className="col-lg-12 m-t-10 m-b-20">
                  <h4 className="user-name m-t-0">Setup Category Type</h4>
                </div>
                <InputField
                  register={register}
                  name="categoryType"
                  label="Category"
                  className="col-lg-5 m-b-10"
                  required
                  type="text"
                  errors={errors?.categoryType}
                />
              </div>

              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 m-b-10">
                  <button
                    href=""
                    className="btn btn-block btn-primary font-weight-700"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>

            <div className="row m-t-50 m-b-20">
              <h4 className="user-name m-b-10 col-md-12">CATEGORY LIST</h4>

              <div className="col-lg-12">
                <div className="table-responsive">
                  <Table
                    className="table-striped"
                    pagination={{
                      total: allCategories.length,
                      showTotal: (total, range) =>
                        `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                      showSizeChanger: true,
                      onShowSizeChange: onShowSizeChange,
                      itemRender: itemRender,
                    }}
                    style={{ overflowX: "auto" }}
                    columns={category_columns}
                    // bordered
                    dataSource={allCategories}
                    rowKey={(record) => record.id}
                    // onChange={console.log("change")}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            {/* <div className="form-group col-lg-12 col-md-12 col-sm-12 m-b-20">
              <div className="d-flex align-items-center justify-content-center">
                <div className="col-lg-5 col-md-6 col-sm-12 m-b-10">
                  <a
                    href="#"
                    className="btn btn-block btn-primary font-weight-700"
                    onClick={() => categoryTypeHandler()}
                  >
                    SUBMIT
                  </a>
                </div>
              </div>
            </div> */}
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
                    <a
                      href="#"
                      className="btn btn-primary continue-btn"
                      // onClick={() => deleteCategory(category)}
                    >
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
export default CategoryType;

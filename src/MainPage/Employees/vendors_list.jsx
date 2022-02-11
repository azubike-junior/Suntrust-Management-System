
import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Avatar_07 } from "../../Entryfile/imagepath"

import { Table } from 'antd';
import 'antd/dist/antd.css';
import { itemRender, onShowSizeChange } from "../paginationfunction"
import "../antdstyle.css"

const Vendors_List = () => {

  const [data, setData] = useState([
    {
      id: 1, company_name: "Samsung Group", vendor_id: "VEN-0001", acct_no: "012346789", contact_name: "Barry Cuda",
      email: "barrycuda@example.com", mobile: "9876543210"
    }
  ]);
  useEffect(() => {
    if ($('.select').length > 0) {
      $('.select').select2({
        minimumResultsForSearch: -1,
        width: '100%'
      });
    }
  });


  const columns = [

    {
      title: 'Company Name',
      dataIndex: 'company_name',
      render: (text, record) => (
        <h2 className="table-avatar">
          {/* <Link to="/app/profile/employee-profile" className="avatar"><img alt="" src={record.image} /></Link> */}
          {/* <Link to="/app/profile/employee-profile">{text}</Link> */}
          <Link to="/app/profile/client-profile">{text}</Link>
        </h2>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Vendor ID',
      dataIndex: 'vendor_id',
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: 'Account No.',
      dataIndex: 'acct_no',
      sorter: (a, b) => a.mobile.length - b.mobile.length,
    },
    {
      title: 'Contact Name',
      dataIndex: 'contact_name',
      sorter: (a, b) => a.contactperson.length - b.contactperson.length,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: (a, b) => a.email.length - b.email.length,
    },

    {
      title: 'Phone No.',
      dataIndex: 'mobile',
      sorter: (a, b) => a.mobile.length - b.mobile.length,
    },

    {
      title: 'Action',
      render: (text, record) => (
        <div className="">
          <a className="btn btn-sm btn-outline-secondary m-r-10" href="#" data-toggle="modal" data-target="#edit_vendor"><i className="fa fa-pencil m-r-5" /> Edit</a>
          <a className="btn btn-sm btn-outline-danger m-r-10" href="#" data-toggle="modal" data-target="#delete_vendor"><i className="fa fa-trash-o m-r-5" /> Delete</a>

        </div>

      ),
    },

  ]

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
                <li className="breadcrumb-item"><Link to="/app/main/dashboard">Configurations</Link></li>
                <li className="breadcrumb-item active">Vendors</li>
              </ul>
            </div>
            <div className="col-auto float-right ml-auto">
              <a href="#" className="btn add-btn" data-toggle="modal" data-target="#add_vendor"><i className="fa fa-plus" /> Add Vendor</a>
              <div className="view-icons">
                <Link to="/app/employees/vendors" className="grid-view btn btn-link"><i className="fa fa-th" /></Link>
                <Link to="/app/employees/vendors-list" className="list-view btn btn-link active"><i className="fa fa-bars" /></Link>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Header */}


        {/* Search Filter */}
        <div className="row filter-row">
          <div className="col-sm-10 col-md-10">
            <div className="form-group form-focus">
              <input type="text" className="form-control floating" />
              <label className="focus-label">Search for a Vendor (e.g. Vendor Name, Vendor ID)</label>
            </div>
          </div>

          <div className="col-sm-2 col-md-2">
            <a href="#" className="btn btn-success btn-block"> Search </a>
          </div>
        </div>
        {/* Search Filter */}

        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <Table className="table-striped"
                pagination={{
                  total: data.length,
                  showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  showSizeChanger: true, onShowSizeChange: onShowSizeChange, itemRender: itemRender
                }}
                style={{ overflowX: 'auto' }}
                columns={columns}
                // bordered
                dataSource={data}
                rowKey={record => record.id}
                onChange={console.log("change")}
              />
            </div>
          </div>
        </div>

      </div>
      {/* /Page Content */}


      {/* Add Vendor Modal */}
      <div id="add_vendor" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Vendor</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Company Name <span className="text-danger">*</span></label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Contact Name</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Email <span className="text-danger">*</span></label>
                      <input className="form-control" type="email" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Phone Number<span className="text-danger">*</span></label>
                      <input className="form-control floating" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Address</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Account Number</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">RC NO <span className="text-danger">*</span></label>
                      <input className="form-control floating" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">TIN NO </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Date Registered</label>
                      <input className="form-control" type="date" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Registered By</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Approved By</label>
                      <input className="form-control" type="text" />
                    </div>
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
      {/* /Add Vendor Modal */}


      {/* Edit Vendor Modal */}
      <div id="edit_vendor" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Vendor</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Company Name <span className="text-danger">*</span></label>
                      <input className="form-control" defaultValue="Barry" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Contact Name</label>
                      <input className="form-control" defaultValue="Cuda" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Email <span className="text-danger">*</span></label>
                      <input className="form-control" defaultValue="barrycuda" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Phone</label>
                      <input className="form-control" defaultValue="barrycuda" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Address</label>
                      <input className="form-control" defaultValue="barrycuda" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Account Number<span className="text-danger">*</span></label>
                      <input className="form-control floating" defaultValue="CLT-0001" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">RC NO </label>
                      <input className="form-control" defaultValue={9876543210} type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">TIN NO</label>
                      <input className="form-control" type="text" defaultValue="Global Technologies" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Date Registered</label>
                      <input className="form-control" defaultValue={9876543210} type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Registered By</label>
                      <input className="form-control" type="text" defaultValue="Global Technologies" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Approved By</label>
                      <input className="form-control" type="text" defaultValue="Global Technologies" />
                    </div>
                  </div>
                </div>

                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Vendor Modal */}


      {/* Delete Vendor Modal */}
      <div className="modal custom-modal fade" id="delete_vendor" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Vendor</h3>
                <p>Are you sure want to delete?</p>
              </div>
              <div className="modal-btn delete-action">
                <div className="row">
                  <div className="col-6">
                    <a href="" className="btn btn-primary continue-btn">Delete</a>
                  </div>
                  <div className="col-6">
                    <a href="" data-dismiss="modal" className="btn btn-primary cancel-btn">Cancel</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Vendor Modal */}

    </div>
  );
}

export default Vendors_List;

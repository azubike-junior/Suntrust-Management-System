
import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Avatar_19, Avatar_29, Avatar_07, Avatar_06, Avatar_14, Avatar_18, Avatar_28, Avatar_13 } from "../../Entryfile/imagepath"

const Vendors = () => {

  useEffect(() => {
    if ($('.select').length > 0) {
      $('.select').select2({
        minimumResultsForSearch: -1,
        width: '100%'
      });
    }
  });
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
              <a href="#" className="btn add-btn" data-toggle="modal" data-target="#add_client"><i className="fa fa-plus" /> Add Vendor</a>
              <div className="view-icons">
                <Link to="/app/employees/vendors" className="grid-view btn btn-link active"><i className="fa fa-th" /></Link>
                <Link to="/app/employees/vendors-list" className="list-view btn btn-link"><i className="fa fa-bars" /></Link>
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
              <label className="focus-label">Search for a Vendor</label>
            </div>
          </div>

          <div className="col-sm-2 col-md-2">
            <a href="#" className="btn btn-success btn-block"> Search </a>
          </div>
        </div>
        {/* Search Filter */}

        <div className="row staff-grid-row">

          <div className="col-md-3 col-sm-6 col-12 col-lg-3 col-xl-3">
            <div className="profile-widget">

              <div className="dropdown profile-action">
                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_vendor"><i className="fa fa-pencil m-r-5" /> Edit</a>
                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_vendor"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                </div>
              </div>

              <h4 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/client-profile">Delta Infotech</Link></h4>
              <h5 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/client-profile">Tressa Wexler</Link></h5>
              <div className="small text-muted">Manager</div>
              {/* <Link onClick={() => localStorage.setItem("minheight", "true")} to="/conversation/chat" className="btn btn-white btn-sm m-t-10 mr-1">Message</Link> */}
              <Link to="/app/profile/client-profile" className="btn btn-primary btn-sm m-t-10">Vendor Details</Link>
            </div>
          </div>

        </div>
      </div>

      {/* /Page Content */}

      {/* Add Vendor Modal */}
      <div id="add_client" className="modal custom-modal fade" role="dialog">
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
                      <label className="col-form-label">Phone Number <span className="text-danger">*</span></label>
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
                      <label className="col-form-label">Phone Number <span className="text-danger">*</span></label>
                      <input className="form-control floating" defaultValue="barrycuda@example.com" type="email" />
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
                      <label className="col-form-label">RC NO</label>
                      <input className="form-control" defaultValue="barrycuda" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">TIN NO <span className="text-danger">*</span></label>
                      <input className="form-control floating" defaultValue="CLT-0001" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Account No.<span className="text-danger">*</span></label>
                      <input className="form-control floating" defaultValue="CLT-0001" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Date Registered </label>
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
                <h3>Delete Client</h3>
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

export default Vendors;

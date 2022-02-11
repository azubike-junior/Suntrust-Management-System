/**
 * TermsCondition Page
 */
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Avatar_01, Avatar_02, Avatar_05, Avatar_09, Avatar_10, Avatar_11, Avatar_12, Avatar_13, Avatar_16, Avatar_19 } from '../../../Entryfile/imagepath'

const RequestProfile = () => {
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>Client Profile - HRMS admin Template</title>
                <meta name="description" content="Reactify Blank Page" />
            </Helmet>
            {/* Page Content */}
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Requests</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/app/employees/requests">Back to Requests</Link></li>
                                <li className="breadcrumb-item active">Details</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* /Page Header */}
                <div className="card mb-0">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="profile-view">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="profile-info-left">
                                                <h3 className="user-name m-t-0">Global Technologies</h3>
                                                <h5 className="company-role m-t-0 mb-0">Contact Name: Barry Cuda</h5>
                                                <div className="staff-id">Employee ID : CLT-0001</div>
                                                <div className="staff-id">Address : 5754 Airport Rd, Coosada, AL, 36020</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
            {/* /Page Content */}
        </div>

    );
}
export default RequestProfile;

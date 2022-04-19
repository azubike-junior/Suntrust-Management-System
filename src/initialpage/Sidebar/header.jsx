/**
 * App Header
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  headerlogo,suntrustlogo, lnEnglish, lnFrench, lnSpanish, lnGerman, Avatar_02, Avatar_03, Avatar_05,
  Avatar_06, Avatar_08, Avatar_09, Avatar_13, Avatar_17, Avatar_21
} from '../../Entryfile/imagepath'

class Header extends Component {

  render() {
    const { location } = this.props
    let pathname = location.pathname

    return (
      <div className="header" style={{ right: "0px" }}>
        {/* Logo */}
        <div className="header-left">
          <Link to="/app/main/dashboard" className="logo">
            {/* <img src={headerlogo} width={40} height={40} alt="" /> */}
            <img src={suntrustlogo} width={60} height={55} alt="" />
          </Link>
        </div>
        {/* /Logo */}
        <a id="toggle_btn" href="" style={{ display: pathname.includes('tasks') ? "none" : pathname.includes('compose') ? "none" : "" }}>
          <span className="bar-icon"><span />
            <span />
            <span />
          </span>
        </a>


        {/* Header Title */}
        <div className="page-title-box">
          <h3>HR MANAGEMENT SYSTEM</h3>
        </div>
        {/* /Header Title */}

        <a id="mobile_btn" className="mobile_btn" href="#sidebar"><i className="fa fa-bars" /></a>
        {/* Header Menu */}

        {/* Mobile Menu */}
        <div className="dropdown mobile-user-menu">
          <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="/app/profile/employee-profile">My Profile</Link>
            <Link className="dropdown-item" to="/settings/companysetting">Settings</Link>
            <Link className="dropdown-item" to="/login">Logout</Link>
          </div>
        </div>
        {/* /Mobile Menu */}
      </div>

    );
  }
}

export default withRouter(Header);
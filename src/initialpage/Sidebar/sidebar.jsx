/**
 * App Header
 */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
    let pathname = props.location.pathname
    return (
        <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title"> 
                <span>EXPENSE MANAGEMENT</span>
              </li>

              <li className={pathname.includes('clients') ?"active" :""}> 
                <Link to = "/app/employees/expenses"><i className="la la-money-bill"/> <span>Raise Expense</span></Link>
                {/* <Link to = "/app/employees/myrequests"><i className="la la-hand-holding-usd"/> <span>Pending Requests</span></Link> */}
                <Link to = "/app/employees/approversPage_Snr"><i className="la la-hand-holding-usd"/> <span>Approve Request</span></Link>
                <Link to = "/app/employees/approversPage_Init"><i className="la la-hand-holding-usd"/> <span>Complete Job Order</span></Link>
                <Link to = "/app/employees/personnelconfig"><i className="la la-users-cog"/> <span>Personnel Configuration</span></Link>
              </li>

              <li className="submenu">
                <a href="#"><i className="la la-cube"/> <span> Configurations</span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  {/* <li><Link onClick={()=>localStorage.setItem("minheight","true")} to="/conversation/chat">Chat</Link></li> */}
                  <li><Link onClick={()=>localStorage.setItem("minheight","true")} to="/app/employees/vendors-list">Vendors</Link></li>
                  {/* <li><Link className={pathname.includes('apps/calendar') ?"active" :""} to="/app/apps/calendar">Calendar</Link></li> */}
                  <li><Link onClick={()=>localStorage.setItem("minheight","true")} to="/app/employees/requests">Requests</Link></li>
                  <li><Link onClick={()=>localStorage.setItem("minheight","true")} to="/app/employees/document_type">Document Type</Link></li>
                  
                  <li className="submenu">
                    <a href="#"><span> Code Configuration</span> <span className="menu-arrow" /></a>
                    <ul style={{display: 'none'}}>
                      {/* <li><Link onClick={()=>localStorage.setItem("minheight","true")} to = "/conversation/voice-call">Voice Call</Link></li> */}
                      <li><Link onClick={()=>localStorage.setItem("minheight","true")} to = "/app/employees/regions">Regions</Link></li>
                      {/* <li><Link onClick={()=>localStorage.setItem("minheight","true")} to = "/conversation/video-call">Video Call</Link></li> */}
                      <li><Link onClick={()=>localStorage.setItem("minheight","true")} to = "/app/employees/branches">Branches</Link></li>
                      {/* <li><Link onClick={()=>localStorage.setItem("minheight","true")} to = "/conversation/outgoing-call">Outgoing Call</Link></li> */}
                      <li><Link onClick={()=>localStorage.setItem("minheight","true")} to = "/app/employees/departments">Departments</Link></li>
                      {/* <li><Link onClick={()=>localStorage.setItem("minheight","true")} to = "/conversation/incoming-call">Incoming Call</Link></li> */}
                      <li><Link onClick={()=>localStorage.setItem("minheight","true")} to = "/app/employees/units">Units</Link></li>
                      {/* <li><Link onClick={()=>localStorage.setItem("minheight","true")} to = "/conversation/incoming-call">Incoming Call</Link></li> */}
                      <li><Link onClick={()=>localStorage.setItem("minheight","true")} to = "/app/employees/staff">Staff</Link></li>
                    </ul>
                  </li>

                </ul>
              </li>

              <li className="menu-title"> 
                <span>PAYROLL MANAGEMENT</span>
              </li>

              <li className="menu-title"> 
                <span>PERFORMANCE MANAGEMENT</span>
              </li>

              <li className="submenu">
                <a href="#"><i className="la la-cube"/> <span> Configurations</span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><Link onClick={()=>localStorage.setItem("minheight","true")} to="/app/employees/appraisal">Appraisal</Link></li>
                  <li><Link onClick={()=>localStorage.setItem("minheight","true")} to="/app/employees/category_type">Category Type</Link></li>
                  <li><Link onClick={()=>localStorage.setItem("minheight","true")} to="/app/employees/organizational_goal">Organizational Goal</Link></li>
                  <li><Link onClick={()=>localStorage.setItem("minheight","true")} to="/app/employees/team_goal">Team Goal</Link></li>
                  <li><Link onClick={()=>localStorage.setItem("minheight","true")} to="/app/employees/unit_kpi">Unit KPI</Link></li>
                  <li><Link onClick={()=>localStorage.setItem("minheight","true")} to="/app/employees/individual_kpi">Individual KPI</Link></li>
                </ul>
              </li>

              <li className={pathname.includes('clients') ?"active" :""}> 
                <Link to = "/app/employees/staff_Appraisal"><i className="la la-comment"/> <span>Staff Appraisal</span></Link>
              </li>

              <li className={pathname.includes('clients') ?"active" :""}> 
                <Link to = "/app/employees/super_self_Appraisal"><i className="la la-comment"/> <span>Supervisor Self Appraisal</span></Link>
              </li>

              <li className={pathname.includes('clients') ?"active" :""}> 
                <Link to = "/app/employees/my_staff_Appraisal"><i className="la la-comment"/> <span>My Staff Appraisals</span></Link>
              </li>

              <li className="menu-title"> 
                <span>LEAVE MANAGEMENT</span>
              </li>

              <li className="menu-title"> 
                <span>HMO</span>
              </li>

            </ul>
          </div>
        </div>
      </div>
       
      );
   
}

export default withRouter(Sidebar);

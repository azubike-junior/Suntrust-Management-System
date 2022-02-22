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
                <Link to = "/app/employees/expenses"><i className="la la-money-bill"/> <span>Expenses</span></Link>
                <Link to = "/app/employees/myrequests"><i className="la la-hand-holding-usd"/> <span>My Requests</span></Link>
                <Link to = "/app/employees/approversPage_Snr"><i className="la la-hand-holding-usd"/> <span>Expense Reports</span></Link>
                <Link to = "/app/employees/approversPage_Init"><i className="la la-hand-holding-usd"/> <span>Approvers Page - Init</span></Link>
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

              <li className="menu-title"> 
                <span>LEAVE MANAGEMENT</span>
              </li>

              <li className="menu-title"> 
                <span>HMO</span>
              </li>

              {/* <li className="submenu">
                <a href="#"><i className="la la-graduation-cap" /> <span> Performance </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><Link className={pathname.includes('-indicator') ?"active" :""} to="/app/performances/performance-indicator"> Performance Indicator </Link></li>
                  <li><Link className={pathname.includes('-review') ?"active" :""} to="/app/performances/performance-review"> Performance Review </Link></li>
                  <li><Link className={pathname.includes('-appraisal') ?"active" :""} to="/app/performances/performance-appraisal"> Performance Appraisal </Link></li>
                </ul>
              </li> */}
              {/* <li className="submenu">
                <a href="#"><i className="la la-crosshairs" /> <span> Goals </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><Link className={pathname.includes('-tracking') ?"active" :""} to="/app/goals/goal-tracking"> Goal List </Link></li>
                  <li><Link className={pathname.includes('l-type') ?"active" :""} to="/app/goals/goal-type"> Goal Type </Link></li>
                </ul>
              </li> */}
              {/* <li className="submenu">
                <a href="#"><i className="la la-edit" /> <span> Training </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><Link className={pathname.includes('training-list') ?"active" :""} to="/app/training/training-list"> Training List </Link></li>
                  <li><Link className={pathname.includes('trainer') ?"active" :""} to="/app/training/trainer"> Trainers</Link></li>
                  <li><Link className={pathname.includes('training-type') ?"active" :""} to="/app/training/training-type"> Training Type </Link></li>
                </ul>
              </li> */}
              {/* <li className={pathname.includes('promotion') ?"active" :""}><Link to = "/app/performance/promotion"><i className="la la-bullhorn" /> <span>Promotion</span></Link></li>
              <li className={pathname.includes('resignation') ?"active" :""}><Link to = "/app/performance/resignation"><i className="la la-external-link-square" /> <span>Resignation</span></Link></li>
              <li className={pathname.includes('termination') ?"active" :""}><Link to = "/app/performance/termination"><i className="la la-times-circle" /> <span>Termination</span></Link></li>
              <li className="menu-title"> 
                <span>Administration</span>
              </li>
              <li className={pathname.includes('assets') ?"active" :""}> 
                <Link to = "/app/administrator/assets"><i className="la la-object-ungroup" /> <span>Assets</span></Link>
              </li> */}
              {/* <li className="submenu">
                <a href="#"><i className="la la-briefcase" /> <span> Jobs </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><Link className={pathname.includes('user-dashboard') || pathname.includes('user-all-jobs')|| pathname.includes('saved-jobs')
                      || pathname.includes('applied-jobs')|| pathname.includes('interviewing')|| pathname.includes('offered-jobs')|| 
                      pathname.includes('visited-jobs') || pathname.includes('archived-jobs')
                      || pathname.includes('job-aptitude') || pathname.includes('questions') ?"active" :""} 
                      to="/app/administrator/user-dashboard"> User Dasboard </Link></li>
                  <li><Link className={pathname.includes('jobs-dashboard') ?"active" :""} to="/app/administrator/jobs-dashboard"> Jobs Dasboard </Link></li>
                  <li><Link className={pathname === ('/app/administrator/jobs') ?"active" :""} to="/app/administrator/jobs"> Manage Jobs </Link></li>
                  <li><Link className={pathname.includes('manage-resumes') ?"active" :""} to="/app/administrator/manage-resumes"> Manage Resumes </Link></li>
                  <li><Link className={pathname.includes('shortlist-candidates') ?"active" :""} to="/app/administrator/shortlist-candidates"> Shortlist Candidates </Link></li>
                  <li><Link className={pathname === ('/app/administrator/interview-questions') ?"active" :""} to="/app/administrator/interview-questions"> Interview Questions </Link></li>
                  <li><Link className={pathname.includes('offer_approvals') ?"active" :""} to="/app/administrator/offer_approvals"> Offer Approvals </Link></li>
                  <li><Link className={pathname.includes('experiance-level') ?"active" :""} to="/app/administrator/experiance-level"> Experience Level </Link></li>
                  <li><Link className={pathname === ('/app/administrator/candidates') ?"active" :""} to="/app/administrator/candidates"> Candidates List </Link></li>
                  <li><Link className={pathname.includes('schedule-timing') ?"active" :""} to="/app/administrator/schedule-timing"> Schedule timing </Link></li>
                  <li><Link className={pathname.includes('apptitude-result') ?"active" :""} to="/app/administrator/apptitude-result"> Aptitude Results </Link></li>
                  
                </ul>
              </li> */}
              {/* <li className={pathname.includes('knowledgebase') ?"active" :""}> 
                <Link to = "/app/administrator/knowledgebase"><i className="la la-question" /> <span>Knowledgebase</span></Link>
              </li>
              <li className={pathname.includes('activities') ?"active" :""}> 
                <Link to = "/app/administrator/activities"><i className="la la-bell" /> <span>Activities</span></Link>
              </li>
              <li className={pathname.includes('administrator/users') ?"active" :""}> 
                <Link to = "/app/administrator/users"><i className="la la-user-plus" /> <span>Users</span></Link>
              </li>
              <li> 
                <Link to = "/settings/companysetting"><i className="la la-cog" /> <span>Settings</span></Link>
              </li>
              <li className="menu-title"> 
                <span>Pages</span>
              </li>
              <li className="submenu">
                <a href="#"><i className="la la-user" /> <span> Profile </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><Link className={pathname.includes('profile/employee-') ?"active" :""} to="/app/profile/employee-profile"> Employee Profile </Link></li>
                  <li><Link className={pathname.includes('client-') ?"active" :""} to="/app/profile/client-profile"> Client Profile </Link></li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#"><i className="la la-key" /> <span> Authentication </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><Link to = "/login"> Login </Link></li>
                  <li><Link to = "/register"> Register </Link></li>
                  <li><Link to = "/forgotpassword"> Forgot Password </Link></li>
                  <li><Link to = "/otp"> OTP </Link></li>
                  <li><Link to = "/lockscreen"> Lock Screen </Link></li>
                </ul>
              </li> */}
              {/* <li className="submenu">
                <a href="#"><i className="la la-exclamation-triangle" /> <span> Error Pages </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><Link to = "/error-404">404 Error </Link></li>
                  <li><Link to = "/error-500">500 Error </Link></li>
                </ul>
              </li> */}
              {/* <li className="submenu">
                <a href="#"><i className="la la-hand-o-up" /> <span> Subscriptions </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><Link className={pathname.includes('subscriptionadmin') ?"active" :""} to="/app/subscription/subscriptionadmin"> 
                  Subscriptions (Admin) </Link></li>
                  <li><Link className={pathname.includes('subscriptioncompany') ?"active" :""} to="/app/subscription/subscriptioncompany">
                     Subscriptions (Company) </Link></li>
                  <li><Link className={pathname.includes('subscribedcompanies') ?"active" :""} to="/app/subscription/subscribedcompanies">
                     Subscribed Companies</Link></li>
                </ul>
              </li> */}
              {/* <li className="submenu">
                <a href="#"><i className="la la-columns" /> <span> Pages </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><Link className={pathname.includes('pages/search') ?"active" :""} to="/app/pages/search"> Search </Link></li>
                  <li><Link className={pathname.includes('pages/faq') ?"active" :""} to="/app/pages/faq"> FAQ </Link></li>
                  <li><Link className={pathname.includes('pages/terms') ?"active" :""} to="/app/pages/terms"> Terms </Link></li>
                  <li><Link className={pathname.includes('privacypolicy') ?"active" :""} to="/app/pages/privacypolicy"> Privacy Policy </Link></li>
                  <li><Link className={pathname.includes('pages/blank') ?"active" :""} to="/app/pages/blank"> Blank Page </Link></li>
                </ul>
              </li> */}
              {/* <li className="menu-title"> 
                <span>UI Interface</span>
              </li>
              <li> 
                <Link to = "/ui-components"><i className="la la-puzzle-piece" /> <span>Components</span></Link>
              </li>
              <li className="submenu">
                <a href="#"><i className="la la-object-group" /> <span> Forms </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><Link className={pathname.includes('basicinputs') ?"active" :""}
                      to="/app/ui-interface/forms/basicinputs">Basic Inputs </Link></li>
                  <li><Link className={pathname.includes('inputgroups') ?"active" :""} 
                      to="/app/ui-interface/forms/inputgroups">Input Groups </Link></li>
                  <li><Link className={pathname.includes('horizontalform') ?"active" :""}
                     to="/app/ui-interface/forms/horizontalform">Horizontal Form </Link></li>
                  <li><Link className={pathname.includes('verticalform') ?"active" :""} 
                    to="/app/ui-interface/forms/verticalform"> Vertical Form </Link></li>
                  <li><Link className={pathname.includes('formmask') ?"active" :""}
                      to="/app/ui-interface/forms/formmask"> Form Mask </Link></li>
                  <li><Link className={pathname.includes('formvalidation') ?"active" :""}
                      to="/app/ui-interface/forms/formvalidation"> Form Validation </Link></li>
                </ul>
              </li> */}

              {/* <li className="submenu">
                <Link to = "/app/ui-interface/tables/basic"><i className="la la-table" /> <span> Tables </span> <span className="menu-arrow" /></Link>
                <ul style={{display: 'none'}}>
                  <li><Link className={pathname.includes('tables/basic') ?"active" :""} to="/app/ui-interface/tables/basic">Basic Tables </Link></li>
                  <li><Link className={pathname.includes('tables/data-table') ?"active" :""} to="/app/ui-interface/tables/data-table">Data Table </Link></li>
                </ul>
              </li>
              <li className="menu-title"> 
                <span>Extras</span>
              </li>
              <li> 
                <a href="#"><i className="la la-file-text" /> <span>Documentation</span></a>
              </li>
              <li> 
                <a href=""><i className="la la-info" /> <span>Change Log</span> <span className="badge badge-primary ml-auto">v3.4</span></a>
              </li> */}
              {/* <li className="submenu">
                <a href=""><i className="la la-share-alt" /> <span>Multi Level</span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li className="submenu">
                    <a href=""> <span>Level 1</span> <span className="menu-arrow" /></a>
                    <ul style={{display: 'none'}}>
                      <li><a href=""><span>Level 2</span></a></li>
                      <li className="submenu">
                        <a href=""> <span> Level 2</span> <span className="menu-arrow" /></a>
                        <ul style={{display: 'none'}}>
                          <li><a href="">Level 3</a></li>
                          <li><a href="">Level 3</a></li>
                        </ul>
                      </li>
                      <li><a href=""> <span>Level 2</span></a></li>
                    </ul>
                  </li>
                  <li>
                    <a href=""> <span>Level 1</span></a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
       
      );
   
}

export default withRouter(Sidebar);

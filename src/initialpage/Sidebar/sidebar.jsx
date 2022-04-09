/**
 * App Header
 */
import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  let pathname = props.location.pathname;
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title">
              <span>EXPENSE MANAGEMENT</span>
            </li>

            <li className={pathname.includes("clients") ? "active" : ""}>
              <Link to="/app/expenseManagement/expenses">
                <i className="la la-money-bill" />
                <span>Raise Expenses</span>
              </Link>
              {/* <Link to = "/app/employees/myrequests"><i className="la la-hand-holding-usd"/> <span>My Requests</span></Link> */}
              <Link to="/app/expenseManagement/approveExpense">
                <i className="la la-hand-holding-usd" />{" "}
                <span>Approve Expense</span>
              </Link>
              <Link to="/app/expenseManagement/completeJobOrder">
                <i className="la la-hand-holding-usd" />{" "}
                <span>Complete Job Order</span>
              </Link>
              <Link to="/app/expenseManagement/personnelconfig">
                <i className="la la-users-cog" />{" "}
                <span>Approver Configuration</span>
              </Link>
            </li>

            <li className="submenu">
              <a href="#">
                <i className="la la-cube" /> <span> Configurations</span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                {/* <li><Link onClick={()=>localStorage.setItem("minheight","true")} to="/conversation/chat">Chat</Link></li> */}
                <li>
                  <Link
                    onClick={() => localStorage.setItem("minheight", "true")}
                    to="/app/expenseManagement/config/vendors"
                  >
                    Vendors
                  </Link>
                </li>
                {/* <li><Link className={pathname.includes('apps/calendar') ?"active" :""} to="/app/apps/calendar">Calendar</Link></li> */}
                <li>
                  <Link
                    onClick={() => localStorage.setItem("minheight", "true")}
                    to="/app/expenseManagement/config/requests"
                  >
                    Requests
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => localStorage.setItem("minheight", "true")}
                    to="/app/expenseManagement/config/document_type"
                  >
                    Document Type
                  </Link>
                </li>

                <li className="submenu">
                  <a href="#">
                    <span> Code Configuration</span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    {/* <li><Link onClick={()=>localStorage.setItem("minheight","true")} to = "/conversation/voice-call">Voice Call</Link></li> */}
                    <li>
                      <Link
                        onClick={() =>
                          localStorage.setItem("minheight", "true")
                        }
                        to="/app/expenseManagement/config/divisions"
                      >
                        Divisions
                      </Link>
                    </li>
                    {/* <li><Link onClick={()=>localStorage.setItem("minheight","true")} to = "/conversation/video-call">Video Call</Link></li> */}
                    <li>
                      <Link
                        onClick={() =>
                          localStorage.setItem("minheight", "true")
                        }
                        to="/app/expenseManagement/config/branches"
                      >
                        Branches
                      </Link>
                    </li>
                    {/* <li><Link onClick={()=>localStorage.setItem("minheight","true")} to = "/conversation/outgoing-call">Outgoing Call</Link></li> */}
                    <li>
                      <Link
                        onClick={() =>
                          localStorage.setItem("minheight", "true")
                        }
                        to="/app/expenseManagement/config/departments"
                      >
                        Departments
                      </Link>
                    </li>
                    {/* <li><Link onClick={()=>localStorage.setItem("minheight","true")} to = "/conversation/incoming-call">Incoming Call</Link></li> */}
                    <li>
                      <Link
                        onClick={() =>
                          localStorage.setItem("minheight", "true")
                        }
                        to="/app/expenseManagement/config/units"
                      >
                        Units
                      </Link>
                    </li>
                    {/* <li><Link onClick={()=>localStorage.setItem("minheight","true")} to = "/conversation/incoming-call">Incoming Call</Link></li> */}
                  </ul>
                </li>
              </ul>
            </li>

            {/* <li className="menu-title"> 
                <span>PAYROLL MANAGEMENT</span>
              </li> */}

            <li className="menu-title">
              <span>PERFORMANCE MANAGEMENT</span>
            </li>

            <li className="submenu">
              <a href="#">
                <i className="la la-cube" /> <span> Configurations</span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <Link
                    onClick={() => localStorage.setItem("minheight", "true")}
                    to="/app/performanceManagement/config/setupAppraisal"
                  >
                    Setup Appraisal
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => localStorage.setItem("minheight", "true")}
                    to="/app/performanceManagement/config/categoryType"
                  >
                    Perspectives
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => localStorage.setItem("minheight", "true")}
                    to="/app/performanceManagement/config/organizationalGoal"
                  >
                    Organizational Goal
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => localStorage.setItem("minheight", "true")}
                    to="/app/performanceManagement/config/teamGoal"
                  >
                    Team Goal
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => localStorage.setItem("minheight", "true")}
                    to="/app/performanceManagement/config/unitKpi"
                  >
                    Unit KPI
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => localStorage.setItem("minheight", "true")}
                    to="/app/performanceManagement/config/individualKpi"
                  >
                    Individual KPI
                  </Link>
                </li>
              </ul>
            </li>

            <li className={pathname.includes("clients") ? "active" : ""}>
              <Link to="/app/performanceManagement/staffAppraisal">
                <i className="la la-comment" /> <span>Staff Appraisal</span>
              </Link>
            </li>

            <li className={pathname.includes("clients") ? "active" : ""}>
              <Link to="/app/performanceManagement/allStaffAppraisals">
                <i className="la la-comment" /> <span>My Staff Appraisals</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);

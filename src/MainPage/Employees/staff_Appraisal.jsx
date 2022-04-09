/**
 * Signin Firebase
 */

import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Staff_Appraisal = (props) => {
  const { location } = props;
  let pathname = location.pathname;

  return (
    <div>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <Helmet>
          <title>User Dashboard - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">

          {/* Page Header */}
          <div className="page-header">
            <div className="card">
              <div className="card-body">
                <label className="font-18 font-weight-bold m-b-20">APPRAISAL</label>

                <div className="profile-view">

                  <div className="row d-flex border-bottom pt-2 pb-2 font-weight-bolder" style={{ backgroundColor: '#cccccc', marginBottom: '10px' }}>
                    <div className='col-lg-12'>
                      <div className="user-name" style={{ fontWeight: 'bolder' }}>SCORECARD</div>
                    </div>
                  </div>


                  <div className="row">

                    {/* Table Header  Starts Here */}
                    <div className="col-lg-12 d-flex border-bottom pt-2 pb-2 font-weight-bolder" style={{ backgroundColor: '#efefef' }}>
                      <div className="col-lg-2">PERSPECTIVE</div>
                      <div className="col-lg-3">KPI</div>
                      <div className="col-lg-1 text-center">TARGET</div>
                      <div className="col-lg-2 text-center">WEIGHT</div>
                      <div className="col-lg-2 text-center">APP. RATE</div>
                      <div className="col-lg-2 text-center">APP. RESULT</div>
                    </div>
                    {/* Table Header Ends Here */}


                    {/* Process Review Starts Here */}
                    <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                      <div className="col-lg-2" style={{ fontWeight: 'bolder' }}>PROCESS</div>
                      <div className="col-lg-3"># Self-help reports built for internal customers within a period.</div>
                      <div className="col-lg-1 text-center">40</div>
                      <div className="col-lg-2 text-center">10</div>
                      <div className="col-lg-2 text-center">
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-lg-2 text-center">30</div>
                    </div>

                    <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                      <div className="col-lg-2" style={{ fontWeight: 'bolder' }}></div>
                      <div className="col-lg-3">% Completion of all projects committed to for delivery.</div>
                      <div className="col-lg-1 text-center">40</div>
                      <div className="col-lg-2 text-center">10</div>
                      <div className="col-lg-2 text-center">
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-lg-2 text-center">30</div>
                    </div>

                    <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                      <div className="col-lg-2" style={{ fontWeight: 'bolder' }}></div>
                      <div className="col-lg-3">% Provision of quarterly DB/CBA capacity report.</div>
                      <div className="col-lg-1 text-center">40</div>
                      <div className="col-lg-2 text-center">10</div>
                      <div className="col-lg-2 text-center">
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-lg-2 text-center">30</div>
                    </div>

                    {/* Process Review Ends Here */}



                    {/* Customer Review Starts Here */}
                    <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                      <div className="col-lg-2" style={{ fontWeight: 'bolder' }}>CUSTOMER</div>
                      <div className="col-lg-3"># Self-help reports built for internal customers within a period.</div>
                      <div className="col-lg-1 text-center">40</div>
                      <div className="col-lg-2 text-center">10</div>
                      <div className="col-lg-2 text-center">
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-lg-2 text-center">30</div>
                    </div>

                    <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                      <div className="col-lg-2" style={{ fontWeight: 'bolder' }}></div>
                      <div className="col-lg-3">% Completion of all projects committed to for delivery.</div>
                      <div className="col-lg-1 text-center">40</div>
                      <div className="col-lg-2 text-center">10</div>
                      <div className="col-lg-2 text-center">
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-lg-2 text-center">30</div>
                    </div>

                    <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                      <div className="col-lg-2" style={{ fontWeight: 'bolder' }}></div>
                      <div className="col-lg-3">% Provision of quarterly DB/CBA capacity report.</div>
                      <div className="col-lg-1 text-center">40</div>
                      <div className="col-lg-2 text-center">10</div>
                      <div className="col-lg-2 text-center">
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-lg-2 text-center">30</div>
                    </div>
                    {/* Customer Review Ends Here */}




                    {/* Financial Review Starts Here */}
                    <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                      <div className="col-lg-2" style={{ fontWeight: 'bolder' }}>FINANCIAL</div>
                      <div className="col-lg-3"># Self-help reports built for internal customers within a period.</div>
                      <div className="col-lg-1 text-center">40</div>
                      <div className="col-lg-2 text-center">10</div>
                      <div className="col-lg-2 text-center">
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-lg-2 text-center">30</div>
                    </div>

                    <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                      <div className="col-lg-2" style={{ fontWeight: 'bolder' }}></div>
                      <div className="col-lg-3">% Completion of all projects committed to for delivery.</div>
                      <div className="col-lg-1 text-center">40</div>
                      <div className="col-lg-2 text-center">10</div>
                      <div className="col-lg-2 text-center">
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-lg-2 text-center">30</div>
                    </div>

                    <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                      <div className="col-lg-2" style={{ fontWeight: 'bolder' }}></div>
                      <div className="col-lg-3">% Provision of quarterly DB/CBA capacity report.</div>
                      <div className="col-lg-1 text-center">40</div>
                      <div className="col-lg-2 text-center">10</div>
                      <div className="col-lg-2 text-center">
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-lg-2 text-center">30</div>
                    </div>
                    {/* Financial Review Ends Here */}





                    {/* Financial Review Starts Here */}
                    <div className="col-lg-12 d-flex border-bottom pt-3 pb-3" style={{ fontWeight: 'bolder', backgroundColor: '#efefef' }}>
                      <div className="col-lg-2">TOTAL</div>
                      <div className="col-lg-3"></div>
                      <div className="col-lg-1 text-center"></div>
                      <div className="col-lg-2 text-center"></div>
                      <div className="col-lg-2 text-center"></div>
                      <div className="col-lg-2 text-center">87%</div>
                    </div>

                    {/* Financial Review Ends Here */}

                  </div>



                  <div className="col-lg-12" style={{ marginTop: '50px', marginBottom: '20px' }}>
                    <div className='font-weight-bolder' style={{ textDecoration: 'underline' }}>EXCEPTIONAL ACHIEVEMENTS</div>

                    <div className="mt-3" style={{ marginBottom: '30px' }}>
                      <label>If you have any exceptional achievements, provide it in the field below:</label>
                    </div>


                    <div className="form-group mb-5">
                      <div className='mb-3 font-weight-bold' style={{ marginBottom: '30px', textDecoration: 'underline' }}>ACHIEVEMENT(S)</div>
                      <textarea className="form-control mb-3 " defaultValue={""} />
                    </div>


                    <div className="form-group" style={{ marginBottom: '30px' }}>
                      <div className='mb-3 font-weight-bold' style={{ marginBottom: '20px', textDecoration: 'underline' }}>SUPERVISOR'S COMMENT</div>
                      <div className='mb-3'>
                        Own yo' ipsizzle pimpin' sizzle amizzle, consectetizzle bizzle elit. Nullam dawg velit, mammasay mammasa mamma oo sa volutpat, ma nizzle mah nizzle, gravida vel, arcu. Pellentesque shizznit tortizzle. Shiz erizzle. Fusce izzle shit dapibizzle turpis tempizzle dope. Maurizzle pellentesque nibh et sizzle. Things fo shizzle my nizzle tortor. Sheezy izzle rhoncizzle nisi. In hac habitasse platea dictumst. Uhuh ... yih! dapibizzle.
                      </div>
                    </div>


                    <div className="form-group">
                      <div className='mb-3 font-weight-bold' style={{ marginBottom: '20px', textDecoration: 'underline' }}>STAFF'S COMMENT</div>
                      <div className='mb-3'>
                        <textarea className="form-control mb-3 " defaultValue={""} />
                      </div>
                    </div>

                  </div>


                </div>
              </div>
            </div>


            <div className="form-group col-lg-12 col-md-12 col-sm-12" style={{ marginTop: '50px' }}>
              <div className="d-flex align-items-center justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-12 m-b-10">
                  <a href="" className="btn btn-block btn-primary font-weight-700">SUBMIT</a>
                </div>
              </div>
            </div>

          </div>
          {/* /Page Header */}


        </div>
      </div>
      {/* /Page Content */}
      {/* /Page Wrapper */}
    </div>
  );
};
export default Staff_Appraisal;

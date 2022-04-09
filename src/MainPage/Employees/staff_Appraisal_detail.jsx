/**
 * TermsCondition Page
 */
import React, { Component, useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Avatar_01, Avatar_02, Avatar_05, Avatar_09, Avatar_10, Avatar_11, Avatar_12, Avatar_13, Avatar_16, Avatar_19 } from '../../Entryfile/imagepath'

import { Table } from 'antd';
import 'antd/dist/antd.css';
import { itemRender, onShowSizeChange } from "../paginationfunction"
import "../antdstyle.css"
import Staff_Appraisal from './staff_Appraisal';

const Staff_Appraisal_Detail = () => {

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
                <title>Client Profile - HRMS admin Template</title>
                <meta name="description" content="Reactify Blank Page" />
            </Helmet>
            {/* Page Content */}
            <div className="content container-fluid">

                {/* Page Header */}
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Appraisal Review</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/app/employees/my_staff_Appraisal">Back to Appraisal Page</Link>
                                </li>
                                <li className="breadcrumb-item active">Review</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* /Page Header */}


                <div className="card m-b-50">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="profile-view">

                                    <label className="font-18 font-weight-bold m-b-20" style={{ textDecoration: 'underline' }}>STAFF DETAILS</label>

                                    {/* Staff Details Starts Here */}
                                    <div className="d-flex mb-5">
                                        <div className="col-lg-6">
                                            <div className="d-flex m-b-10 font_size">
                                                <div className="col-lg-5 col-md-6 col-sm-12 font-weight-bold">EMPLOYEE ID:</div>
                                                <div className="col-lg-7 col-md-6 col-sm-12">0019</div>
                                            </div>

                                            <div className="d-flex m-b-10 font_size">
                                                <div className="col-lg-5 col-md-6 col-sm-12 font-weight-bold">EMPLOYEE NAME:</div>
                                                <div className="col-lg-7 col-md-6 col-sm-12">James Darwin</div>
                                            </div>

                                            <div className="d-flex m-b-10 font_size">
                                                <div className="col-lg-5 col-md-6 col-sm-12 font-weight-bold">GRADE:</div>
                                                <div className="col-lg-7 col-md-6 col-sm-12">B.O</div>
                                            </div>

                                            <div className="d-flex m-b-10 font_size">
                                                <div className="col-lg-5 col-md-6 col-sm-12 font-weight-bold">FUNCTION:</div>
                                                <div className="col-lg-7 col-md-6 col-sm-12">Head, HR Strategy</div>
                                            </div>

                                            <div className="d-flex m-b-10 font_size">
                                                <div className="col-lg-5 col-md-6 col-sm-12 font-weight-bold">BRANCH:</div>
                                                <div className="col-lg-7 col-md-6 col-sm-12">Head Office</div>
                                            </div>

                                            <div className="d-flex m-b-10 font_size">
                                                <div className="col-lg-5 col-md-6 col-sm-12 font-weight-bold">DEPARTMENT:</div>
                                                <div className="col-lg-7 col-md-6 col-sm-12">Human Capital Management
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="d-flex m-b-10 font_size">
                                                <div className="col-lg-5 col-md-6 col-sm-12 font-weight-bold">GROUP:</div>
                                                <div className="col-lg-7 col-md-6 col-sm-12">HR & Strategy Group
                                                </div>
                                            </div>

                                            <div className="d-flex m-b-10 font_size">
                                                <div className="col-lg-5 col-md-6 col-sm-12 font-weight-bold">APPRAISAL PERIOD:</div>
                                                <div className="col-lg-7 col-md-6 col-sm-12">01/04/2022 - 06/04/2022</div>
                                            </div>

                                            <div className="d-flex m-b-10 font_size">
                                                <div className="col-lg-5 col-md-6 col-sm-12 font-weight-bold">APPRAISER:</div>
                                                <div className="col-lg-7 col-md-6 col-sm-12">Demarai Gray</div>
                                            </div>

                                            <div className="d-flex m-b-10 font_size">
                                                <div className="col-lg-5 col-md-6 col-sm-12 font-weight-bold">GROUP HEAD:</div>
                                                <div className="col-lg-7 col-md-6 col-sm-12">Michael Abobade</div>
                                            </div>

                                            <div className="d-flex m-b-10 font_size">
                                                <div className="col-lg-5 col-md-6 col-sm-12 font-weight-bold">LAST PROMOTION DATE:</div>
                                                <div className="col-lg-7 col-md-6 col-sm-12">29/11/2021</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Staff Details Ends Here */}


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
                                            <div className="col-lg-1 text-center">WEIGHT</div>
                                            <div className="col-lg-1 text-center">APP. RATE</div>
                                            <div className="col-lg-2 text-center">APP. RESULT</div>
                                            <div className="col-lg-1 text-center">ACTUAL</div>
                                            <div className="col-lg-1 text-center">POINTS</div>
                                        </div>
                                        {/* Table Header Ends Here */}


                                        {/* Process Review Starts Here */}
                                        <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                            <div className="col-lg-2" style={{ fontWeight: 'bolder' }}>PROCESS</div>
                                            <div className="col-lg-3"># Self-help reports built for internal customers within a period.</div>
                                            <div className="col-lg-1 text-center">40</div>
                                            <div className="col-lg-1 text-center">10</div>
                                            <div className="col-lg-1 text-center">35</div>
                                            <div className="col-lg-2 text-center">10</div>
                                            <div className="col-lg-1 text-center">
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col-lg-1 text-center">30</div>
                                        </div>

                                        <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                            <div className="col-lg-2"></div>
                                            <div className="col-lg-3">% Completion of all projects committed to for delivery.</div>
                                            <div className="col-lg-1 text-center">40</div>
                                            <div className="col-lg-1 text-center">10</div>
                                            <div className="col-lg-1 text-center">35</div>
                                            <div className="col-lg-2 text-center">10</div>
                                            <div className="col-lg-1 text-center">
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col-lg-1 text-center">30</div>
                                        </div>

                                        <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                            <div className="col-lg-2"></div>
                                            <div className="col-lg-3">% Provision of quarterly DB/CBA capacity report.</div>
                                            <div className="col-lg-1 text-center">40</div>
                                            <div className="col-lg-1 text-center">10</div>
                                            <div className="col-lg-1 text-center">35</div>
                                            <div className="col-lg-2 text-center">10</div>
                                            <div className="col-lg-1 text-center">
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col-lg-1 text-center">30</div>
                                        </div>
                                        {/* Process Review Ends Here */}



                                        {/* Customer Review Starts Here */}
                                        <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                            <div className="col-lg-2" style={{ fontWeight: 'bolder' }}>CUSTOMER</div>
                                            <div className="col-lg-3"># Self-help reports built for internal customers within a period.</div>
                                            <div className="col-lg-1 text-center">40</div>
                                            <div className="col-lg-1 text-center">10</div>
                                            <div className="col-lg-1 text-center">35</div>
                                            <div className="col-lg-2 text-center">10</div>
                                            <div className="col-lg-1 text-center">
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col-lg-1 text-center">30</div>
                                        </div>

                                        <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                            <div className="col-lg-2"></div>
                                            <div className="col-lg-3">% Completion of all projects committed to for delivery.</div>
                                            <div className="col-lg-1 text-center">40</div>
                                            <div className="col-lg-1 text-center">10</div>
                                            <div className="col-lg-1 text-center">35</div>
                                            <div className="col-lg-2 text-center">10</div>
                                            <div className="col-lg-1 text-center">
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col-lg-1 text-center">30</div>
                                        </div>

                                        <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                            <div className="col-lg-2"></div>
                                            <div className="col-lg-3">% Provision of quarterly DB/CBA capacity report.</div>
                                            <div className="col-lg-1 text-center">40</div>
                                            <div className="col-lg-1 text-center">10</div>
                                            <div className="col-lg-1 text-center">35</div>
                                            <div className="col-lg-2 text-center">10</div>
                                            <div className="col-lg-1 text-center">
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col-lg-1 text-center">30</div>
                                        </div>
                                        {/* Customer Review Ends Here */}




                                        {/* Financial Review Starts Here */}
                                        <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                            <div className="col-lg-2" style={{ fontWeight: 'bolder' }}>FINANCIAL</div>
                                            <div className="col-lg-3"># Self-help reports built for internal customers within a period.</div>
                                            <div className="col-lg-1 text-center">40</div>
                                            <div className="col-lg-1 text-center">10</div>
                                            <div className="col-lg-1 text-center">35</div>
                                            <div className="col-lg-2 text-center">10</div>
                                            <div className="col-lg-1 text-center">
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col-lg-1 text-center">30</div>
                                        </div>

                                        <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                            <div className="col-lg-2"></div>
                                            <div className="col-lg-3">% Completion of all projects committed to for delivery.</div>
                                            <div className="col-lg-1 text-center">40</div>
                                            <div className="col-lg-1 text-center">10</div>
                                            <div className="col-lg-1 text-center">35</div>
                                            <div className="col-lg-2 text-center">10</div>
                                            <div className="col-lg-1 text-center">
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col-lg-1 text-center">30</div>
                                        </div>

                                        <div className="col-lg-12 d-flex border-bottom pt-2 pb-2">
                                            <div className="col-lg-2"></div>
                                            <div className="col-lg-3">% Provision of quarterly DB/CBA capacity report.</div>
                                            <div className="col-lg-1 text-center">40</div>
                                            <div className="col-lg-1 text-center">10</div>
                                            <div className="col-lg-1 text-center">35</div>
                                            <div className="col-lg-2 text-center">10</div>
                                            <div className="col-lg-1 text-center">
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col-lg-1 text-center">30</div>
                                        </div>
                                        {/* Financial Review Ends Here */}





                                        {/* Financial Review Starts Here */}
                                        <div className="col-lg-12 d-flex border-bottom pt-3 pb-3" style={{ fontWeight: 'bolder', backgroundColor: '#efefef' }}>
                                            <div className="col-lg-2">TOTAL</div>
                                            <div className="col-lg-3"></div>
                                            <div className="col-lg-1 text-center"></div>
                                            <div className="col-lg-1 text-center"></div>
                                            <div className="col-lg-1 text-center"></div>
                                            <div className="col-lg-2 text-center">80%</div>
                                            <div className="col-lg-1 text-center"></div>
                                            <div className="col-lg-1 text-center">87%</div>
                                        </div>

                                        {/* Financial Review Ends Here */}


                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-lg-12 border-bottom pt-2 pb-2 font-weight-bolder" style={{ fontWeight: 'bolder', marginBottom: '10px', backgroundColor: '#cccccc' }}>
                    <div className="col-lg-12  user-name">STRENGTHS</div>
                </div>


                <div className='d-flex m-b-50 '>
                    <div className="card col-lg-8">
                        <div className="card-body">
                            {/* <div className="row"> */}
                            <div className="profile-view">

                                {/* Staff Details Starts Here */}
                                <div className="d-flex mb-2 border-bottom">
                                    <div className="col-lg-12 d-flex">
                                        <h4 className='col-lg-4'>Skills</h4>
                                        <h4 className='col-lg-8'>Ratings</h4>
                                    </div>
                                </div>

                                <div className="d-flex mt-3 mb-3 border-bottom">
                                    <div className="col-lg-12 d-flex">
                                        <div className='col-lg-4'>Time Management</div>

                                        <div className='col-lg-8'>
                                            <div id="ratings_group">
                                                <div class="radio_group mr-4">
                                                    <input type="radio" name="radio_1" id="rating_1" />
                                                    <label for="rating_1">1</label>
                                                </div>
                                                <div class="radio_group mr-4">
                                                    <input type="radio" name="radio_2" id="rating_2" />
                                                    <label for="rating_2">2</label>
                                                </div>
                                                <div class="radio_group mr-4">
                                                    <input type="radio" name="radio_3" id="rating_3" />
                                                    <label for="rating_3">3</label>
                                                </div>
                                                <div class="radio_group mr-4">
                                                    <input type="radio" name="radio_4" id="rating_4" />
                                                    <label for="rating_4">4</label>
                                                </div>
                                                <div class="radio_group mr-4">
                                                    <input type="radio" name="radio_5" id="rating_5" />
                                                    <label for="rating_5">5</label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex mb-3 border-bottom">
                                    <div className="col-lg-12 d-flex">
                                        <div className='col-lg-4'>Communication</div>

                                        <div className='col-lg-8'>
                                            <div id="ratings_group">
                                                <div class="radio_group mr-4">
                                                    <input type="radio" name="radio" id="radio_rating_1" />
                                                    <label for="radio_rating_1">1</label>
                                                </div>
                                                <div class="radio_group mr-4">
                                                    <input type="radio" name="radio" id="radio_rating_2" />
                                                    <label for="radio_rating_2">2</label>
                                                </div>
                                                <div class="radio_group mr-4">
                                                    <input type="radio" name="radio" id="radio_rating_3" />
                                                    <label for="radio_rating_3">3</label>
                                                </div>
                                                <div class="radio_group mr-4">
                                                    <input type="radio" name="radio" id="radio_rating_4" />
                                                    <label for="radio_rating_4">4</label>
                                                </div>
                                                <div class="radio_group mr-4">
                                                    <input type="radio" name="radio" id="radio_rating_5" />
                                                    <label for="radio_rating_5">5</label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex border-bottom">
                                    <div className="col-lg-12 d-flex">
                                        <div className='col-lg-4'>Leadership</div>

                                        <div className='col-lg-8'>
                                            <div id="ratings_group">
                                                <div class="radio_group mr-4">
                                                    <input type="radio" name="radio__1" id="rating_1" />
                                                    <label for="rating_1">1</label>
                                                </div>
                                                <div class="radio_group mr-4">
                                                    <input type="radio" name="radio__2" id="rating_2" />
                                                    <label for="rating_2">2</label>
                                                </div>
                                                <div class="radio_group mr-4">
                                                    <input type="radio" name="radio__3" id="rating_3" />
                                                    <label for="rating_3">3</label>
                                                </div>
                                                <div class="radio_group mr-4">
                                                    <input type="radio" name="radio__4" id="rating_4" />
                                                    <label for="rating_4">4</label>
                                                </div>
                                                <div class="radio_group mr-4">
                                                    <input type="radio" name="radio__5" id="rating_5" />
                                                    <label for="rating_5">5</label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex border-bottom">
                                    <div className="col-lg-12 pt-3 pb-3 d-flex" style={{ fontWeight: 'bolder', backgroundColor: '#efefef' }}>
                                        <div className='col-lg-4'>TOTAL</div>

                                        <div className='col-lg-8'>
                                            15/25
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* </div> */}
                        </div>
                    </div>

                    <div className="card col-lg-4">
                        <div className="card-body">
                            <div className="profile-view">
                                <div className="d-flex mb-5">
                                    <div className="col-lg-12">
                                        <h4 className="card-title">Ratings Key</h4>
                                        <div>
                                            <p><i className="fa fa-dot-circle-o text-purple mr-2" />Excellent<span className="float-right">5</span></p>
                                            <p><i className="fa fa-dot-circle-o text-success mr-2" />Very Good <span className="float-right">4</span></p>
                                            <p><i className="fa fa-dot-circle-o text-info mr-2" />Average<span className="float-right">3</span></p>
                                            <p><i className="fa fa-dot-circle-o text-warning mr-2" />Fair<span className="float-right">2</span></p>
                                            <p><i className="fa fa-dot-circle-o text-danger mr-2" />Poor<span className="float-right">1</span></p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>



                <div className="col-lg-12 border-bottom pt-2 pb-2 font-weight-bolder" style={{ fontWeight: 'bolder', marginBottom: '10px', backgroundColor: '#cccccc' }}>
                    <div className="col-lg-12  user-name">TRAINING</div>
                </div>


                <div className="card">
                    <div className="card-body">
                        <div className="profile-view d-flex">
                            <div className='col-lg-6'>
                                <div className="panel panel-default">
                                    <div className="panel-heading text-center font-weight-bold">
                                        BEHAVIOURAL TRAINING
                                    </div>
                                    <div className="panel-body">
                                        <div className='m-3'>
                                            <div className="form-group">
                                                <label>Suggest a Behavioural Training:</label>
                                                <select className="select">
                                                    <option value={1}>Time Management</option>
                                                    <option value={2}>Communication</option>
                                                    <option value={3}>Leadership</option>
                                                </select>
                                                <div className="selected_items mt-2">
                                                    <label>Time Management,</label>
                                                    <label>Communication</label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='col-lg-6'>
                                <div className="panel panel-default">
                                    <div className="panel-heading text-center font-weight-bold">
                                        FUNCTIONAL TRAINING
                                    </div>
                                    <div className="panel-body">
                                        <div className='m-3'>
                                            <div className="form-group">
                                                <label>Suggest a Functional Training:</label>
                                                <select className="select" >
                                                    <option value={1}>Risk Analysis</option>
                                                    <option value={2}>Data Science</option>
                                                </select>
                                                <div className="selected_items mt-2">
                                                    <label>Risk Analysis,</label>
                                                    <label>Data Science</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12" style={{ marginTop: '30px', marginBottom: '20px' }}>
                            <div className='font-weight-bolder' style={{ marginBottom: '30px', textDecoration: 'underline' }}>COMMENTS</div>

                            <div className="form-group mb-5">
                                <div className='mb-3 font-weight-bold' style={{ marginBottom: '30px', textDecoration: 'underline' }}>SUPERVISOR'S COMMENT</div>
                                <textarea className="form-control mb-3 " defaultValue={""} />
                            </div>

                            <div className="form-group">
                                <div className='mb-3 font-weight-bold' style={{ marginBottom: '20px', textDecoration: 'underline' }}>STAFF'S COMMENT</div>
                                <div className='mb-3'>
                                    Own yo' ipsizzle pimpin' sizzle amizzle, consectetizzle bizzle elit. Nullam dawg velit, mammasay mammasa mamma oo sa volutpat, ma nizzle mah nizzle, gravida vel, arcu. Pellentesque shizznit tortizzle. Shiz erizzle. Fusce izzle shit dapibizzle turpis tempizzle dope. Maurizzle pellentesque nibh et sizzle. Things fo shizzle my nizzle tortor. Sheezy izzle rhoncizzle nisi. In hac habitasse platea dictumst. Uhuh ... yih! dapibizzle.
                                </div>
                            </div>

                        </div>


                        <div className="col-lg-4" style={{ marginTop: '50px' }}>
                            <div className='font-weight-bolder' style={{ marginBottom: '20px', textDecoration: 'underline' }}>RECOMMENDATION</div>

                            <div className="form-group ">
                                {/* <label>Suggest a Behavioural Training:</label> */}
                                <select className="select">
                                    <option value={1}>Maintain Status</option>
                                    <option value={2}>Promote</option>
                                    <option value={3}>Watch Performance</option>
                                    <option value={4}>Reassign </option>
                                    <option value={5}>Exit </option>
                                </select>
                            </div>

                        </div>



                    </div>
                </div>
                
                {/* Submit Appraisal Button */}
                <div className="form-group col-lg-12 col-md-12 col-sm-12" style={{ marginTop: '50px' }}>
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-12 m-b-10">
                            <a href="" className="btn btn-block btn-primary font-weight-700">SUBMIT</a>
                        </div>
                    </div>
                </div>











            </div>
            {/* /Page Content */}

        </div >

    );
}
export default Staff_Appraisal_Detail;

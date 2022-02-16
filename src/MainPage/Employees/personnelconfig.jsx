
import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Avatar_07 } from "../../Entryfile/imagepath"

import { Table } from 'antd';
import 'antd/dist/antd.css';
import { itemRender, onShowSizeChange } from "../paginationfunction"
import "../antdstyle.css"

const PersonnelConfiguration = () => {

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
                <title>Expense Management | Personnel Configuration</title>
                <meta name="description" content="Login page" />
            </Helmet>
            {/* Page Content */}

            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header col-lg-4">
                    <div className="row">
                        <h3 className="page-title m-b-30">Personnel Configuration</h3><br />
                    </div>

                    <div className="row">
                        <div className="">
                            <div className="">Select the preferred number of Approvers you want.</div><br />

                            <div className=" m-b-20">
                                <div className="m-b-5">Number of Approvers</div>
                                <select className="select">
                                    <option selected={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>
                                </select>
                            </div>

                            <div className="m-b-30">
                                <Link to="/app/employees/personnelSetup" className='btn btn-primary'>Submit</Link>
                            </div>
                        </div>
                    </div>


                </div>
                {/* /Page Header */}

            </div>
            {/* /Page Content */}

        </div >
    );
}

export default PersonnelConfiguration;

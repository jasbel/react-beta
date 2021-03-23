import React from "react";

import loader from '../../assets/images/base/loader.svg'

const Loader = ({ show }) => (
    <div className={`loader ${show ? "" : "loader--hide"}`}>
        <div className="loader__wrapper ">
            <div className="loader__index">
                <img src={loader} alt="loader"/>
            </div>
        </div>
    </div>
);

export default Loader;

import React from "react";
import { FiSun } from "react-icons/fi";
import Cities from "../Cities";

const Current = () => {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-12 col-lg-8 mb-3 p-0 pr-lg-3">
                    <div className="bg-card p-4">
                        <div className="row h-100">
                            <div className="col-sm-12 col-lg-4 title-sun d-flex justify-content-center align-content-center">
                                <img src={require("../../assets/sun.svg")}/>
                            </div>
                            <div className="col-sm-12 col-lg-8 d-flex flex-column justify-content-center mt-3 mt-lg-1">
                                <div>Today</div>
                                <div className="title-city">Buenos Aires, Argentina</div>
                                <div className="title-temperature">Temperature: <span className="font-weight-bolder"> 23º </span></div>
                                <div className="title-clouds">clear sky</div>
                            </div>

                        </div>
                    </div>
                </div>
                <Cities />
            </div>
        </div>
    );
};
export default Current;

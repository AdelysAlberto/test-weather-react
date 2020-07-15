import React from "react";

const Forecast = () => {
    return (
        <div className="container mt-1">
            <div className="row mt-3 mt-lg-0">
                <div className="col-6 col-md-3 mb-2">
                    <div className="bg-card d-flex flex-column justify-content-around align-items-center">
                        <div className="title-city">Saturday</div>
                        <div className="icon-weather"> <img src={require("../../assets/sun.svg")}/> </div>
                        <div className="title-city">22º</div>
                        <div className="title-clouds">clear sky</div>
                    </div>
                </div>
                <div className="col-6 col-md-3 mb-2">
                    <div className="bg-card d-flex flex-column justify-content-around align-items-center">
                        <div className="title-city">Saturday</div>
                        <div className="icon-weather"> <img src={require("../../assets/sun.svg")}/> </div>
                        <div className="title-city">22º</div>
                        <div className="title-clouds">clear sky</div>
                    </div>
                </div>
                <div className="col-6 col-md-3 mb-2">
                    <div className="bg-card d-flex flex-column justify-content-around align-items-center">
                        <div className="title-city">Saturday</div>
                        <div className="icon-weather"> <img src={require("../../assets/sun.svg")}/> </div>
                        <div className="title-city">22º</div>
                        <div className="title-clouds">clear sky</div>
                    </div>
                </div>
                <div className="col-6 col-md-3 mb-2">
                    <div className="bg-card d-flex flex-column justify-content-around align-items-center">
                        <div className="title-city">Saturday</div>
                        <div className="icon-weather"> <img src={require("../../assets/sun.svg")}/> </div>
                        <div className="title-city">22º</div>
                        <div className="title-clouds">clear sky</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Forecast;

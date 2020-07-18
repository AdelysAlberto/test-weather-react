import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";

import "../styles.scss";

import { kelvinToCelsius, setIconWeather } from "../../utils/functions";

const Forecast = () => {
    const forecast = useSelector(state => state.forecast.data);
    return (
        <div className="container mt-1">
            <div className="row mt-3 mt-lg-0">
                { forecast.weather && forecast.weather.map((weather, key) => {
                    return (
                        <div className="d-flex flex-row mb-2" key={key}>
                            <div className="bg-card forecast-card">
                                <div className="title-city">{ moment(weather.date).format("dddd") }</div>
                                <div className="icon-weather"> <img src={setIconWeather(weather.body.icon)}/> </div>
                                <div className="title-city">{ kelvinToCelsius(weather.body.temp) }</div>
                                <div className="title-clouds">{ weather.body.description }</div>
                            </div>
                        </div>
                    );
                }) }

            </div>
        </div>
    );
};
export default Forecast;

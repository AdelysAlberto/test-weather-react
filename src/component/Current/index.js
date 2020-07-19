import React, { useState, useEffect } from "react";
import { kelvinToCelsius, setIconWeather } from "../../utils/functions";
import { useSelector } from "react-redux";

import Cities from "../Cities";
import imageDefault from "../../assets/loading.gif";
import { countries as COUNTRY } from "../../utils/consts";

const Current = () => {
    const [ temp, setTemp ] = useState("");
    const [ imageWeather, setImageWeather ] = useState(imageDefault);
    const [ description, setDescription ] = useState("");
    const defaultCurrent = useSelector(state => state.current.data);

    useEffect(() => {
        loadData();
    }, [ defaultCurrent ]);

    // function to load data in component, apply transformation
    const loadData = () => {
        if (defaultCurrent.main) {
            const temperature = kelvinToCelsius(defaultCurrent.main.temp);
            const image = setIconWeather(defaultCurrent.weather[0].icon);
            setTemp(temperature);
            setImageWeather(image);
            setDescription(defaultCurrent.weather[0].description);
        }
    };

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-12 col-lg-8 mb-3 p-0 pr-lg-3">
                    <div className="bg-card p-4">
                        <div className="row h-100">
                            <div className="col-sm-12 col-lg-4 title-sun d-flex justify-content-center align-content-center">
                                <img alt="forecast" src={ imageWeather } />
                            </div>
                            <div className="col-sm-12 col-lg-8 d-flex flex-column justify-content-center mt-3 mt-lg-1">
                                <div>Today</div>
                                <div className="title-city">
                                    { defaultCurrent.name &&
                                        `${defaultCurrent.name}, ${COUNTRY[defaultCurrent.country]}`
                                    }
                                </div>
                                <div className="title-temperature"> Temperature:
                                    <span className="font-weight-bolder"> {temp} </span>
                                </div>
                                <div className="title-clouds">{ description }</div>
                            </div>

                        </div>
                    </div>
                </div>
                <Cities country={ COUNTRY[defaultCurrent.country] }/>
            </div>
        </div>
    );
};
export default Current;

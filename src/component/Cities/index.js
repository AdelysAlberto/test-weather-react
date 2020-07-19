import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { randomizedCities } from "../../utils/functions";
import { getCurrentWeatherAction } from "../../redux/actions/current-action";
import { getForecastWeatherAction } from "../../redux/actions/forecast-action";

const Cities = ({ country }) => {
    const [ randomCities, setRandomCities ] = useState([]);
    const dispatch = useDispatch();

    // useEffect to get randomized cities from Country select
    useEffect(() => {
        if (country) {
            const randomized = randomizedCities(country);
            setRandomCities(randomized);
        }
    }, [ country ]);

    // dispatches the Rdux actions
    const searchWeather = (city) => {
        dispatch(getCurrentWeatherAction(city));
        dispatch(getForecastWeatherAction(city));
    };

    return (
        <div className="col-md-12 col-lg-4 p-0">
            <div className="title-sub-cities bg-card p-3">
                <div className="font-weight-bolder"> Get Weather from </div>
                <div className="p-2 d-flex flex-column">
                    { randomCities && randomCities.map((city, key) => {
                        return (
                            <div key={key} className="d-flex flex-row justify-content-between mb-2">
                                <div> {city.name}, {country} </div>
                                <div className="searchme" onClick={() => searchWeather(city.name)}> search <AiOutlineSearch /> </div>
                            </div>
                        );
                    }) }
                </div>
            </div>
        </div>
    );
};
export default Cities;

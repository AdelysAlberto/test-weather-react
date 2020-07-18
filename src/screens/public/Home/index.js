import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../../../shared/Header";
import Search from "../../../shared/Search";
import Current from "../../../component/Current";
import Forecast from "../../../component/Forecast";

import { getLocationAction } from "../../../redux/actions/location-action";
import { getCurrentWeatherAction } from "../../../redux/actions/current-action";
import { getForecastWeatherAction } from "../../../redux/actions/forecast-action";

const Login = () => {
    const dispatch = useDispatch();

    dispatch(getLocationAction());
    dispatch(getCurrentWeatherAction());
    dispatch(getForecastWeatherAction());

    return (
        <div className="background container-fluid pb-4 ">
            <Header />
            <Search />
            <Current />
            <Forecast />
        </div>
    );
};

export default Login;

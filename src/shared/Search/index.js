import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentWeatherAction } from "../../redux/actions/current-action";
import { getForecastWeatherAction } from "../../redux/actions/forecast-action";

const Search = () => {
    const [ search, setSearch ] = useState("");
    const dispatch = useDispatch();
    const defaultCurrent = useSelector(state => state.current.data);

    const searchWeather = (event) => {
        if (event.key === "Enter" || event === "click") {
            dispatch(getCurrentWeatherAction(search));
            dispatch(getForecastWeatherAction(search));
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 p-0">
                    <div className=" w-100 d-flex">

                        <input className="form-control mr-2" type="text"
                            onKeyPress={(e) => searchWeather(e)}
                            defaultValue={defaultCurrent.name} onChange={(e) => setSearch(e.target.value)} />
                        <button type="submit" className="btnLogin w-25" onClick={() => searchWeather("click")}> Consultar </button>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default Search;

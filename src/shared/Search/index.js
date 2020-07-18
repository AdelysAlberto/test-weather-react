import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentWeatherAction } from "../../redux/actions/current-action";

const Search = () => {
    const [ search, setSearch ] = useState("");
    const dispatch = useDispatch();
    const defaultLocation = useSelector(state => state.location.data);

    const searchWeather = () => {
        dispatch(getCurrentWeatherAction(search));
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 p-0">
                    <div className=" w-100 d-flex">
                        <input className="form-control mr-2" type="text"
                            defaultValue={defaultLocation.city} onChange={(e) => setSearch(e.target.value)} />
                        <button type="submit" className="btnLogin w-25" onClick={() => searchWeather()}> Consultar </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Search;

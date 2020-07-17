import React, { useState, useEffect } from "react";

import Header from "../../../shared/Header";
import Search from "../../../shared/Search";
import Current from "../../../component/Current";
import Forecast from "../../../component/Forecast";
import apiRequest from "../../../api";
const Login = () => {
    const [ defaultLocation, setDefaultLocation ] = useState("");
    useEffect(() => {
        apiRequest.get({ url: [ "MY_LOCATION" ] }).then(result => setDefaultLocation(result.data.city));
    }, [ defaultLocation ]);
    return (
        <div className="background container-fluid pb-4 ">
            <Header />
            <Search defaultLocation={defaultLocation} />
            <Current />
            <Forecast />
        </div>
    );
};

export default Login;

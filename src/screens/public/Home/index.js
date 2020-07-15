import React, { useState } from "react";

import Header from "../../../shared/Header";
import Search from "../../../shared/Search";
import Current from "../../../component/Current";
import Forecast from "../../../component/Forecast";

const Login = () => {
    const [ showPassword, setShowPassword ] = useState(false);
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

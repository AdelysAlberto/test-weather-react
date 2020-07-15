import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Home from "./screens/public/Home";
import NotFound from "./screens/public/NotFound";

function App () {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="*" component={ NotFound } />
            </Switch>
        </Router>
    );
}
export default App;

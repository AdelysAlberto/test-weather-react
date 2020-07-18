import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Home from "./screens/public/Home";
import NotFound from "./screens/public/NotFound";

function App () {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="*" component={ NotFound } />
                </Switch>
            </Router>
        </Provider>
    );
}
export default App;

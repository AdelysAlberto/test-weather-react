import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./screens/public/Home";
import NotFound from "./screens/public/NotFound";

test("renders learn react link", () => {
    const { getById } = render(
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="*" component={ NotFound } />
                </Switch>
            </Router>
        </Provider>);
    const linkElement = getById("header");
    expect(linkElement).toBeInTheDocument();
});

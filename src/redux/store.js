import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [ thunk ];

// check if you have extension redux devtools
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    : compose;

const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middleware), devTools)
);

export default store;

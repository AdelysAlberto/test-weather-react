import { combineReducers } from "redux";

import current from "./current-reducer";
import location from "./location-reducer";
import forecast from "./forecast-reducer";

export default combineReducers({
    current,
    location,
    forecast
});

import api from "../../api";
import { LOCATION_BEGIN, LOCATION_SUCCESS, LOCATION_ERROR } from "../types/location-type";

export function getLocationAction (location = null) {
    return (dispatch) => {
        dispatch(locationWeatherBegin());
        api.get({ url: [ "MY_LOCATION" ], body: location })
            .then(res => {
                if (res.status === 200) {
                    dispatch(locationWeatherSuccess(res.data));
                } else {
                    dispatch(locationWeatherError());
                    return false;
                }
            })
            .catch((err) => {
                if (err.response.status === 400 || err.response.status === 401) {
                    dispatch(locationWeatherError(err.response.data.message));
                } else {
                    dispatch(locationWeatherError(err));
                }
            });
    };
}

export const locationWeatherBegin = () => ({ type: LOCATION_BEGIN });
export const locationWeatherSuccess = (data) => ({ type: LOCATION_SUCCESS, payload: data });
export const locationWeatherError = (error) => ({ type: LOCATION_ERROR, payload: error });

import api from "../../api";
import { FORECAST_BEGIN, FORECAST_SUCCESS, FORECAST_ERROR } from "../types/forecast-type";

export function getForecastWeatherAction (city = null) {
    return (dispatch) => {
        dispatch(forecastWeatherBegin());
        api.get({ url: [ "FORECAST" ], city })
            .then(res => {
                if (res.status === 200) {
                    dispatch(forecastWeatherSuccess(res.data));
                } else {
                    dispatch(forecastWeatherError());
                    return false;
                }
            })
            .catch((err) => {
                if (err.response.status === 400 || err.response.status === 401) {
                    dispatch(forecastWeatherError(err.response.data.message));
                } else {
                    dispatch(forecastWeatherError(err));
                }
            });
    };
}

export const forecastWeatherBegin = () => ({ type: FORECAST_BEGIN });
export const forecastWeatherSuccess = (data) => ({ type: FORECAST_SUCCESS, payload: data });
export const forecastWeatherError = (error) => ({ type: FORECAST_ERROR, payload: error });

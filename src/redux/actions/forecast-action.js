import api from "../../api";
import { FORECAST_BEGIN, FORECAST_SUCCESS, FORECAST_ERROR } from "../types/forecast-type";

export function getForecastWeatherAction (city = null) {
    return (dispatch) => {
        dispatch(forecastWeatherBegin());
        api.get({ url: [ "FORECAST" ], city })
            .then(res => {
                if (res.status === 200) {
                    // we need to clean the response, the forecast that arrives with today's date
                    const myDate = new Date();
                    const filtered = res.data.weather.filter(items => {
                        const date = new Date(items.date);
                        return myDate.getDate() !== date.getDate();
                    });
                    dispatch(forecastWeatherSuccess({ city: res.data.city, weather: filtered }));
                } else {
                    dispatch(forecastWeatherError());
                    return false;
                }
            })
            .catch((err) => {
                if (err) {
                    dispatch(forecastWeatherError(err));
                } else {
                    dispatch(forecastWeatherError(err));
                }
            });
    };
}

export const forecastWeatherBegin = () => ({ type: FORECAST_BEGIN });
export const forecastWeatherSuccess = (data) => ({ type: FORECAST_SUCCESS, payload: data });
export const forecastWeatherError = (error) => ({ type: FORECAST_ERROR, payload: error });

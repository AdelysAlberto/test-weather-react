import api from "../../api";
import { CURRENT_BEGIN, CURRENT_SUCCESS, CURRENT_ERROR } from "../types/current-type";

export function getCurrentWeatherAction (city) {
    return (dispatch) => {
        dispatch(currentWeatherBegin());
        api.get({ url: [ "CURRENT" ], city })
            .then(res => {
                if (res.status === 200) {
                    dispatch(currentWeatherSuccess(res.data));
                } else {
                    dispatch(currentWeatherError());
                    return false;
                }
            })
            .catch((err) => {
                if (err) {
                    dispatch(currentWeatherError(err));
                } else {
                    dispatch(currentWeatherError(err));
                }
            });
    };
}

export const currentWeatherBegin = () => ({ type: CURRENT_BEGIN });
export const currentWeatherSuccess = (data) => ({ type: CURRENT_SUCCESS, payload: data });
export const currentWeatherError = (error) => ({ type: CURRENT_ERROR, payload: error });

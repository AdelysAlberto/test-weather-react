import {
    FORECAST_BEGIN,
    FORECAST_SUCCESS,
    FORECAST_ERROR
} from "../types/forecast-type";

const initialState = {
    data: {},
    error: false,
    loading: false,
    success: false,
    info: null
};

export default function (state = initialState, action) {
    switch (action.type) {
    case FORECAST_BEGIN:
        return {
            ...state,
            error: false,
            success: false,
            info: null
        };
    case FORECAST_SUCCESS:
        return {
            ...state,
            data: action.payload,
            success: true,
            error: false,
            loading: false
        };
    case FORECAST_ERROR:
        return {
            ...state,
            error: true,
            loading: false,
            info: action.payload,
            data: {}
        };
    default:
        return state;
    }
}

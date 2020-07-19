import {
    LOCATION_BEGIN,
    LOCATION_SUCCESS,
    LOCATION_ERROR
} from "../types/location-type";

const initialState = {
    data: {},
    error: false,
    loading: false,
    success: false,
    info: null
};

export default function (state = initialState, action) {
    switch (action.type) {
    case LOCATION_BEGIN:
        return {
            ...state,
            error: false,
            success: false,
            info: null
        };
    case LOCATION_SUCCESS:
        return {
            ...state,
            data: action.payload,
            success: true,
            error: false,
            loading: false
        };
    case LOCATION_ERROR:
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

import {
    CURRENT_BEGIN,
    CURRENT_SUCCESS,
    CURRENT_ERROR
} from "../types/current-type";

const initialState = {
    data: {},
    error: false,
    loading: false,
    success: false,
    info: null
};

export default function (state = initialState, action) {
    switch (action.type) {
    case CURRENT_BEGIN:
        return {
            ...state,
            error: false,
            success: false,
            info: null
        };
    case CURRENT_SUCCESS:
        return {
            ...state,
            data: action.payload,
            success: true,
            error: false,
            loading: false
        };
    case CURRENT_ERROR:
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

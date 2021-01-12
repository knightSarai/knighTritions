import {
    SIGN_IN_FAILURE,
    SIGN_IN_SUCCESS,
    SIGN_OUT_FAILURE,
    SIGN_OUT_SUCCESS,
    SIGN_UP_FAILURE
} from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    err: null
}

const userReducer =  (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESS :
            return {
                ...state,
                currentUser: action.payload,
                err: null
            };
        case SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                err: null
            }
        case SIGN_IN_FAILURE :
        case SIGN_OUT_FAILURE:
        case SIGN_UP_FAILURE:
            return {
                ...state,
                err: action.payload
            };
        default:
            return state;
    }
}

export default userReducer;
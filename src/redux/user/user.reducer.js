import {
    GOOGLE_SIGN_IN_FAILURE,
    GOOGLE_SIGN_IN_SUCCESS, 
    EMAIL_SIGN_IN_FAILURE,
    EMAIL_SIGN_IN_SUCCESS
} from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    err: null
}

const userReducer =  (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GOOGLE_SIGN_IN_SUCCESS :
        case EMAIL_SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                err: null
            };
        case GOOGLE_SIGN_IN_FAILURE :
        case EMAIL_SIGN_IN_FAILURE:
            return {
                ...state,
                err: null
            };
        default:
            return state;
    }
}

export default userReducer;
import {
    SIGN_IN_FAILURE,
    SIGN_IN_SUCCESS
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
        case SIGN_IN_FAILURE :
            return {
                ...state,
                err: null
            };
        default:
            return state;
    }
}

export default userReducer;
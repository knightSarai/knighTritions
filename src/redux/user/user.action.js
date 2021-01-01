import {
    SET_CURRENT_USER,
    GOOGLE_SIGN_IN_FAILURE,
    GOOGLE_SIGN_IN_START,
    GOOGLE_SIGN_IN_SUCCESS, 
    EMAIL_SIGN_IN_FAILURE,
    EMAIL_SIGN_IN_START, 
    EMAIL_SIGN_IN_SUCCESS
} from './user.types';

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user,
});

export const googleSignInStart = () =>({
    type: GOOGLE_SIGN_IN_START
});

export const googleSignInSuccess = user => ({
    type: GOOGLE_SIGN_IN_SUCCESS,
    payload: user
});

export const googleSignInFailure = err => ({
    type: GOOGLE_SIGN_IN_FAILURE,
    payload: err
});

export const  emailSignInStart = (emailAndPassword) => ({
    type: EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const emailSignInSuccess = user => ({
    type: EMAIL_SIGN_IN_SUCCESS,
    payload: user
});

export const emailSignInFailure = err => ({
    type: EMAIL_SIGN_IN_FAILURE,
    payload: err
})
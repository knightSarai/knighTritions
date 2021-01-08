import {
    GOOGLE_SIGN_IN_START,
    EMAIL_SIGN_IN_START, 
    SIGN_IN_FAILURE,
    SIGN_IN_SUCCESS,
    CHECK_USER_SESSION
} from './user.types';

export const googleSignInStart = () =>({
    type: GOOGLE_SIGN_IN_START
});

export const signInSuccess = user => ({
    type: SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = err => ({
    type: SIGN_IN_FAILURE,
    payload: err
});

export const  emailSignInStart = (emailAndPassword) => ({
    type: EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const checkUserSession = () => ({
    type: CHECK_USER_SESSION,
})
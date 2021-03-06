import {
    GOOGLE_SIGN_IN_START,
    EMAIL_SIGN_IN_START, 
    SIGN_IN_FAILURE,
    SIGN_IN_SUCCESS,
    CHECK_USER_SESSION,
    SIGN_OUT_FAILURE,
    SIGN_OUT_START,
    SIGN_OUT_SUCCESS,
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE
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

export const SignOutStart = () =>({
    type: SIGN_OUT_START
});
export const SignOutSuccess = () =>({
    type: SIGN_OUT_SUCCESS
});

export const SignOutFailure = (err) =>({
    type: SIGN_OUT_FAILURE,
    payload: err
});

export const SignUpStart = (signupData) =>({
    type: SIGN_UP_START,
    payload: signupData
});

export const SignUpSuccess = ({user, additionalData}) =>({
    type: SIGN_UP_SUCCESS,
    payload: {user, additionalData}
});

export const SignUpFailure = (err) =>({
    type: SIGN_UP_FAILURE,
    payload: err
});
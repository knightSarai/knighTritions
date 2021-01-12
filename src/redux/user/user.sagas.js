import {
    all, 
    call, 
    put, 
    takeLatest
} from 'redux-saga/effects';

import {
    auth, 
    googleProvider, 
    createUserProfileDocument,
    getCurrentUser
} from '../../firebase/firebase.util';

import {
    GOOGLE_SIGN_IN_START, 
    EMAIL_SIGN_IN_START,
    CHECK_USER_SESSION, 
    SIGN_OUT_START,
    SIGN_UP_START,
    SIGN_UP_SUCCESS
} from './user.types';

import {
    signInSuccess,
    signInFailure,
    SignOutSuccess,
    SignOutFailure,
    SignUpSuccess,
    SignUpFailure
} from './user.action';

export function* getSnapShotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapShot = yield userRef.get();
        yield put(signInSuccess({id: userSnapShot.id, ...userSnapShot.data()}));
    } catch (err) {
        yield put(signInFailure(err));
    }
}

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapShotFromUserAuth(user);
    } catch (err) {
        yield put(signInFailure(err));
    }
}

export function* signInWithEmail({payload: {email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapShotFromUserAuth(user);
    } catch (err) {
        yield put(signInFailure(err));
    }
}

export function* isUserAuthenticated () {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapShotFromUserAuth(userAuth);
    } catch (err) {
        yield put(signInFailure(err));
    }
}

export function* signOut () {
    try {
        yield auth.signOut();
        yield put(SignOutSuccess());
    } catch (err) {
        yield put(SignOutFailure(err))
    }
}

export function* signUp ({payload: {email, password, displayName}}) {
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(SignUpSuccess({user, additionalData: {displayName}}))
    } catch (err) {
        yield put(SignUpFailure(err));
    }
}

export function* signInAfterSignUp({payload: {user, additionalData}}) {
    yield getSnapShotFromUserAuth(user, additionalData); 
}

/** Sagas Action Listener */
export function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession() {
    yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
    yield takeLatest(SIGN_OUT_START, signOut)
}

export function* onSignUpStart() {
    yield takeLatest(SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
    yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart), 
        call(onEmailSignInStart), 
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ]);
}
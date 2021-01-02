import {all, call, put, takeLatest} from 'redux-saga/effects';
import {auth, googleProvider, createUserProfileDocument} from '../../firebase/firebase.util';
import {
    GOOGLE_SIGN_IN_START, 
    EMAIL_SIGN_IN_START
} from './user.types';

import {
    signInSuccess,
    signInFailure,
} from './user.action';

export function* getSnapShotFromUserAuth(userAuth) {
    try {
        console.log("getSnapShotFromUserAuth");
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapShot = yield userRef.get();
        yield put(signInSuccess({id: userSnapShot.id, ...userSnapShot.data()}));

    } catch (err) {
        yield put(signInFailure(err));
    }
}

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapShotFromUserAuth(user)
    } catch (err) {
        yield put(signInFailure(err));
    }
}

export function* signInWithEmail({payload: {email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapShotFromUserAuth(user)
    } catch (err) {
        put(signInFailure(err))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart)])
}
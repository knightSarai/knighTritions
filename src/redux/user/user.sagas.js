import {all, call, put, takeLatest} from 'redux-saga/effects';
import {auth, googleProvider, createUserProfileDocument} from '../../firebase/firebase.util';
import {
    GOOGLE_SIGN_IN_START, 
    GOOGLE_SIGN_IN_SUCCESS, 
    GOOGLE_SIGN_IN_FAILURE
} from './user.types';

import {googleSignInSuccess, googleSignInFailure} from './user.action';

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapShot = yield userRef.get();
        yield put(googleSignInSuccess({id: userSnapShot.id, ...userSnapShot.data()}));

    } catch (err) {
        yield put(googleSignInFailure(err));
    }
}
export function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart)])
}
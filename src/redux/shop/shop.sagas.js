import {takeEvery} from 'redux-saga/effects';
import {FETCH_COLLECTIONS_START} from './shop.types';

function* fetchCollectionsAsync() {
    yield console.log("fired");
}

export function* fetchCollectionStart() {
    yield takeEvery(
        FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}
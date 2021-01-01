import {takeEvery, call, put} from 'redux-saga/effects';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.util';
import {
    FETCH_COLLECTIONS_START, 
} from './shop.types';
import {updateCollectionsSuccess, updateCollectionsFailure} from './shop.actions';

function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(updateCollectionsSuccess(collectionMap));
    } catch(err) {
        yield put(updateCollectionsFailure(err.message));
    }
    
}

export function* fetchCollectionStart() {
    yield takeEvery(
        FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}
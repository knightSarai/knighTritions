import {takeLatest, call, put} from 'redux-saga/effects';
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
        //put is the equivelant of dispatch
        yield put(updateCollectionsSuccess(collectionMap));
    } catch(err) {
        yield put(updateCollectionsFailure(err.message));
    }
    
}

export function* fetchCollectionStart() {
    yield takeLatest(
        FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}
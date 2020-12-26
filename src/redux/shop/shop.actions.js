import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.util';
import {
    FETCH_COLLECTIONS_SUCCESS, 
    FETCH_COLLECTIONS_START, 
    FETCH_COLLECTIONS_FAILURE
} from './shop.types';

export const updateCollectionsStart = () => ({
    type: FETCH_COLLECTIONS_START
});

export const updateCollectionsSuccess = collectionMap => ({
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
});

export const updateCollectionsFailure = message => ({
    type: FETCH_COLLECTIONS_FAILURE,
    payload: message
});


/**
    * We can use Promise pased instead of Observable patterns:
    *  collectionRef
    *      .get()
            .then(snapshot => {
               const collectionMap = convertCollectionsSnapshotToMap(snapshot);
               updateCollections(collectionMap);
               setLoading(false);
           )
           //* but here the only time that we get data is when we render the component
            //! this comment was in useEffect of shop page component
            //* redux thunk don't work with Obesrvables so I have to use prommis based fetch
            dispatch(updateCollectionsStart);
            collectionRef.onSnapshot( snapshot => {
                const collectionMap = convertCollectionsSnapshotToMap(snapshot);
                dispatch(collectionMap)
            }, error => dispatch(updateCollectionsFailure(error.message)));

*/
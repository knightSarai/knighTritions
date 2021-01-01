import {createStore, compose, applyMiddleware} from 'redux';
import reducer from './root.reducer';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {fetchCollectionStart} from './shop/shop.sagas'

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;

export const store = createStore(
    reducer, 
    composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(fetchCollectionStart);

export const persistor = persistStore(store);

export default store;

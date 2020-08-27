import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/reducer';
import { authUserWatcher } from './sagas';

const saga = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(logger, saga));

saga.run(authUserWatcher);

export default store;

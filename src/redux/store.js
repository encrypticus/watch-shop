import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/reducer';
import { authUserWatcher, signOutWatcher } from './sagas';

const saga = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(saga),
));

saga.run(authUserWatcher);

export default store;

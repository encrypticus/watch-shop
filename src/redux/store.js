import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/reducer';
import sagas from './sagas/sagas';

const saga = createSagaMiddleware();
const dev = process.env.NODE_ENV === 'development';
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = dev && devtools ? devtools : compose;

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(saga),
));

saga.run(sagas);

export default store;

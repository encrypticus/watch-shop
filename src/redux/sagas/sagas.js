import { call, all } from 'redux-saga/effects';
import { watchUserAuthActions } from './auth';

function* sagas() {
  yield all([call(watchUserAuthActions)]);
}

export default sagas;

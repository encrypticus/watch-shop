import { takeEvery, put, call } from 'redux-saga/effects';
import WatchesService from '#services/watches-service';
import { FETCH_AUTH_REQUEST, authRequestFetching, hasAuthError } from '#act/auth';

const watchesService = new WatchesService();

function* authUser(action) {
  const { payload: { email, password, method } } = action;

  try {
    yield put(authRequestFetching(true));

    yield put(hasAuthError({ status: false, message: '' }));

    const userData = yield call(watchesService.sign, email, password, method);

    yield console.log(userData);
  } catch ({ message }) {
    yield put(hasAuthError({ status: true, message }));
  } finally {
    yield put(authRequestFetching(false));
  }
}

export function* authUserWatcher() {
  yield takeEvery(FETCH_AUTH_REQUEST, authUser);
}

import { takeEvery, put, call } from 'redux-saga/effects';
import WatchesService from '#services/watches-service';
import {
  FETCH_AUTH_REQUEST,
  SIGN_OUT,
  authRequestFetching,
  hasAuthError,
  signIn,
  signUp,
  signOut,
} from '#act/auth';

const watchesService = new WatchesService();

function* authUser(action) {
  const { payload: { email, password, method } } = action;

  try {
    yield put(authRequestFetching(true));

    yield put(hasAuthError({ status: false, message: '' }));

    const userData = yield call(watchesService.sign, email, password, method);

    yield console.log(userData);

    switch (method) {
      case 'signIn':
        yield put(signIn());
        yield call(watchesService.localUserSignIn);
        break;
      case 'signUp':
        yield put(signUp());
        break;
      default:
        return false;
    }
  } catch ({ message }) {
    yield put(hasAuthError({ status: true, message }));
  } finally {
    yield put(authRequestFetching(false));
  }
}

function* signOutUser() {
  yield call(watchesService.localUserSignOut);
}

export function* authUserWatcher() {
  yield takeEvery(FETCH_AUTH_REQUEST, authUser);
}

export function* signOutWatcher() {
  yield takeEvery(SIGN_OUT, signOutUser);
}

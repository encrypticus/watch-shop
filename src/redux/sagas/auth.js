import {
  takeEvery, put, call, all,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import watchesService from '#services/watches-service';
import {
  FETCH_AUTH_REQUEST,
  SIGN_OUT,
  authRequestFetching,
  hasAuthError,
  signIn,
  signUp,
  signOut,
} from '#act/auth';

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
        yield call(watchesService.setLocalUserData, userData);
        yield toast.success('Вход выполнен!');
        break;
      case 'signUp':
        yield put(signUp());
        yield call(watchesService.localUserSignUp);
        yield call(watchesService.setLocalUserData, userData);
        yield toast.success('Регистрация успешна!');
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

function* watchAuthUser() {
  yield takeEvery(FETCH_AUTH_REQUEST, authUser);
}

function* watchSignOutUser() {
  yield takeEvery(SIGN_OUT, signOutUser);
}

export function* watchUserAuthActions() {
  yield all([call(watchAuthUser), call(watchSignOutUser)]);
}

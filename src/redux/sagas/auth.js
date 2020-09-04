import {
  takeEvery, put, call, all,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import watchesService from '#services/watches-service';
import * as actions from '#act/auth';
import { animateUserBar } from '#act/animations';

function* authUser(action) {
  const { payload: { email, password, method } } = action;

  try {
    yield put(actions.authRequestFetching(true));

    yield put(actions.hasAuthError({ status: false, message: '' }));

    const userData = yield call(watchesService.sign, email, password, method);

    switch (method) {
      case 'signIn':
        yield put(actions.signIn());
        yield put(animateUserBar(true));
        yield call(watchesService.localUserSignIn);
        yield call(watchesService.setLocalUserData, userData);
        yield toast.success('Вход выполнен!');
        break;
      case 'signUp':
        yield put(actions.signUp());
        yield call(watchesService.localUserSignUp);
        yield call(watchesService.setLocalUserData, userData);
        yield toast.success('Регистрация успешна!', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        break;
      default:
        return false;
    }
  } catch ({ message }) {
    yield put(actions.hasAuthError({ status: true, message }));
  } finally {
    yield put(actions.authRequestFetching(false));
  }
}

function* signOutUser() {
  yield call(watchesService.localUserSignOut);
  yield put(animateUserBar(false));
}

function* watchAuthUser() {
  yield takeEvery(actions.FETCH_AUTH_REQUEST, authUser);
}

function* watchSignOutUser() {
  yield takeEvery(actions.SIGN_OUT, signOutUser);
}

export default function* watchUserAuthActions() {
  yield all([call(watchAuthUser), call(watchSignOutUser)]);
}

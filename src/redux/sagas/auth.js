import {
  takeEvery, put, call, all,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import remoteDBService from '#services/remote-db-service';
import * as authActions from '#act/auth';
import * as catalogActions from '#act/catalog-cards';
import { animateUserBar } from '#act/animations';
import { cards } from '#const';

function* authUser(action) {
  const { payload: { email, password, method } } = action;

  try {
    yield put(authActions.authRequestFetching(true));

    yield put(authActions.hasAuthError({ status: false, message: '' }));

    const userData = yield call(remoteDBService.sign, email, password, method);

    switch (method) {
      case 'signIn':
        yield put(authActions.signIn());

        yield put(animateUserBar(true));

        yield call(remoteDBService.localUserSignIn);

        yield call(remoteDBService.setLocalUserData, userData);

        yield toast.success('Вход выполнен!');

        const productCatalog = yield call(remoteDBService.getProductCatalogFromDB);

        yield put(catalogActions.fillCatalog(productCatalog));

        break;

      case 'signUp':
        yield put(authActions.signUp());

        yield call(remoteDBService.localUserSignUp);

        yield call(remoteDBService.setLocalUserData, userData);

        yield call(remoteDBService.addProductCatalogToDB);

        yield toast.success('Регистрация успешна!');

        break;
      default:
        return false;
    }
  } catch ({ message }) {
    yield put(authActions.hasAuthError({ status: true, message }));
  } finally {
    yield put(authActions.authRequestFetching(false));
  }
}

function* signOutUser() {
  yield call(remoteDBService.localUserSignOut);
  yield put(animateUserBar(false));
  yield put(catalogActions.fillCatalog(cards));
}

function* watchAuthUser() {
  yield takeEvery(authActions.FETCH_AUTH_REQUEST, authUser);
}

function* watchSignOutUser() {
  yield takeEvery(authActions.SIGN_OUT, signOutUser);
}

export default function* watchUserAuthActions() {
  yield all([call(watchAuthUser), call(watchSignOutUser)]);
}

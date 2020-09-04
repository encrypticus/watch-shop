import { call, all } from 'redux-saga/effects';
import watchUserAuthActions from './auth';
import watchProductCart from './product-cart';

function* sagas() {
  yield all([call(watchUserAuthActions), call(watchProductCart)]);
}

export default sagas;

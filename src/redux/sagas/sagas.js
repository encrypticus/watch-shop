import { call, all } from 'redux-saga/effects';
import watchUserAuthActions from './auth';
import watchFetchingProductCart from './product-cart';

function* sagas() {
  yield all([call(watchUserAuthActions), call(watchFetchingProductCart)]);
}

export default sagas;

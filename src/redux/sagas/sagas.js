import { call, all } from 'redux-saga/effects';
import watchUserAuthActions from './auth';
import watchProductCart from './product-cart';
import watchCatalog from './product-catalog';
import watchFavoritesCart from './favorites-cart';

function* sagas() {
  yield all([call(watchUserAuthActions), call(watchProductCart), call(watchCatalog), call(watchFavoritesCart)]);
}

export default sagas;

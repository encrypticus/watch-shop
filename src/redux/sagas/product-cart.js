import {
  take, put, call, all,
} from 'redux-saga/effects';
import watchesService from '#services/watches-service';

import {
  FETCH_PRODUCT_CART_REQUEST,
  productCartRequestFetching,
  hasProductCartFetchingError,
  fillProductCart,
} from '#act/product-cart';

export default function* fetchProductCart() {
  while (true) {
    try {
      yield put(hasProductCartFetchingError({ status: false, message: '' }));

      yield take(FETCH_PRODUCT_CART_REQUEST);

      yield put(productCartRequestFetching(true));

      const products = yield call(watchesService.getProductCartFromDB);

      yield put(fillProductCart(products));
    } catch ({ message }) {
      yield put(hasProductCartFetchingError({ status: true, message }));
    } finally {
      yield put(productCartRequestFetching(false));
    }
  }
}

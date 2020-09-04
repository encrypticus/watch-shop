import {
  take, put, call, all,
} from 'redux-saga/effects';
import watchesService from '#services/watches-service';

import * as actions from '#act/product-cart';

function* fetchProductCart() {
  while (true) {
    try {
      yield put(actions.hasProductCartFetchingError({ status: false, message: '' }));

      yield take(actions.FETCH_PRODUCT_CART_REQUEST);

      yield put(actions.productCartRequestFetching(true));

      const products = yield call(watchesService.getProductCartFromDB);

      yield put(actions.fillProductCart(products));
    } catch ({ message }) {
      yield put(actions.hasProductCartFetchingError({ status: true, message }));
    } finally {
      yield put(actions.productCartRequestFetching(false));
    }
  }
}

function* addProductToCart() {
  while (true) {
    try {
      const { payload: product } = yield take(actions.ADD_PRODUCT_TO_CART_REQUEST);

      const productData = yield call(watchesService.addProductToCart, product);

      yield console.log(productData);
    } catch (error) {
      alert(error.message);
    }
  }
}

export default function* watchProductCart() {
  yield all([call(fetchProductCart), call(addProductToCart)]);
}

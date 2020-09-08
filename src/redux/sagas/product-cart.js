import {
  take, put, call, all, delay,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import remoteDBService from '#services/remote-db-service';

import * as cartActions from '#act/product-cart';
import * as catalogActions from '#act/catalog-cards';

function* fetchProductCart() {
  while (true) {
    try {
      yield put(cartActions.hasProductCartFetchingError({ status: false, message: '' }));

      yield take(cartActions.FETCH_PRODUCT_CART_REQUEST);

      yield put(cartActions.productCartRequestFetching(true));

      const products = yield call(remoteDBService.getProductCartFromDB);

      yield put(cartActions.fillProductCart(products));
    } catch ({ message }) {
      yield put(cartActions.hasProductCartFetchingError({ status: true, message }));
    } finally {
      yield put(cartActions.productCartRequestFetching(false));
    }
  }
}

function* addProductToCart() {
  let product;

  while (true) {
    try {
      const action = yield take(cartActions.ADD_PRODUCT_TO_CART_REQUEST);
      product = action.payload;

      yield put(cartActions.updateProductCartRequestFetching({ isFetching: true, product }));

      yield put(catalogActions.updateProductCartRequestFetching({ isFetching: true, product }));

      const productData = yield call(remoteDBService.addProductToCart, product);

      const inCart = yield call(remoteDBService.updateProductCatalog, product.index, productData.name, true);

      yield put(catalogActions.updateCatalog({ index: product.index, uniqueId: inCart.uniqueId, inCart: true }));

      const products = yield call(remoteDBService.getProductCartFromDB);

      yield put(cartActions.fillProductCart(products));
    } catch (error) {
      toast.error(error.message);
    } finally {
      yield put(cartActions.updateProductCartRequestFetching({ isFetching: false, product }));
      yield put(catalogActions.updateProductCartRequestFetching({ isFetching: false, product }));
    }
  }
}

function* removeProductFromCart() {
  let product;

  while (true) {
    try {
      const action = yield take(cartActions.REMOVE_PRODUCT_FROM_CART_REQUEST);
      product = action.payload;

      yield put(cartActions.updateProductCartRequestFetching({ isFetching: true, product }));

      yield put(catalogActions.updateProductCartRequestFetching({ isFetching: true, product }));

      yield call(remoteDBService.removeProductFromCart, product);

      yield call(remoteDBService.updateProductCatalog, product.index, '', false);

      yield put(catalogActions.updateCatalog({ index: product.index, uniqueId: '', inCart: false }));

      const products = yield call(remoteDBService.getProductCartFromDB);

      yield put(cartActions.hideCard(product));

      yield delay(500);

      yield put(cartActions.fillProductCart(products));
    } catch (error) {
      toast.error(error.message);
    } finally {
      yield put(cartActions.updateProductCartRequestFetching({ isFetching: true, product }));
      yield put(catalogActions.updateProductCartRequestFetching({ isFetching: false, product }));
    }
  }
}

export default function* watchProductCart() {
  yield all([call(fetchProductCart), call(addProductToCart), call(removeProductFromCart)]);
}

import {
  take, put, call, all,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import remoteDBService from '#services/remote-db-service';

import * as actions from '#act/product-cart';
import * as catalogActions from '#act/catalog-cards';

function* fetchProductCart() {
  while (true) {
    try {
      yield put(actions.hasProductCartFetchingError({ status: false, message: '' }));

      yield take(actions.FETCH_PRODUCT_CART_REQUEST);

      yield put(actions.productCartRequestFetching(true));

      const products = yield call(remoteDBService.getProductCartFromDB);

      yield put(actions.fillProductCart(products));
    } catch ({ message }) {
      yield put(actions.hasProductCartFetchingError({ status: true, message }));
    } finally {
      yield put(actions.productCartRequestFetching(false));
    }
  }
}

function* addProductToCart() {
  let product;

  while (true) {
    try {
      const action = yield take(actions.ADD_PRODUCT_TO_CART_REQUEST);
      product = action.payload;

      yield put(actions.addProductToCartRequestFetching(true));

      yield put(catalogActions.addProductToCartRequestFetching({ isFetching: true, product }));

      const productData = yield call(remoteDBService.addProductToCart, product);

      const inCart = yield call(remoteDBService.updateProductCatalog, product.index, productData.name, true);

      yield put(catalogActions.updateCatalog({ index: product.index, uniqueId: inCart.uniqueId, inCart: true }));
    } catch (error) {
      toast.error(error.message);
    } finally {
      yield put(actions.addProductToCartRequestFetching(false));
      yield put(catalogActions.addProductToCartRequestFetching({ isFetching: false, product }));
    }
  }
}

function* removeProductFromCart() {
  let product;

  while (true) {
    try {
      const action = yield take(actions.REMOVE_PRODUCT_FROM_CART_REQUEST);
      product = action.payload;

      yield put(actions.addProductToCartRequestFetching(true));

      yield put(catalogActions.addProductToCartRequestFetching({ isFetching: true, product }));

      yield call(remoteDBService.removeProductFromCart, product);

      yield call(remoteDBService.updateProductCatalog, product.index, '', false);

      yield put(catalogActions.updateCatalog({ index: product.index, uniqueId: '', inCart: false }));
    } catch (error) {
      toast.error(error.message);
    } finally {
      yield put(actions.addProductToCartRequestFetching(false));
      yield put(catalogActions.addProductToCartRequestFetching({ isFetching: false, product }));
    }
  }
}

export default function* watchProductCart() {
  yield all([call(fetchProductCart), call(addProductToCart), call(removeProductFromCart)]);
}

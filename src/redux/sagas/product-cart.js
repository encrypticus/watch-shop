import {
  take, takeEvery, put, call, all, delay,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import remoteDBService from '#services/remote-db-service';
import * as cartActions from '#act/product-cart';
import * as catalogActions from '#act/catalog-cards';
import * as favoritesActions from '#act/favorites-cart';

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
      yield put(cartActions.fillProductCart(null));
    } finally {
      yield put(cartActions.productCartRequestFetching(false));
    }
  }
}

function* addProductToCart(action) {
  let product;

  try {
    product = action.payload;

    yield put(cartActions.updateProductCartRequestFetching({ isFetching: true, product }));

    yield put(catalogActions.updateProductCartRequestFetching({ isFetching: true, product }));

    yield put(favoritesActions.updateProductInFavoritesRequestFetching({ isFetching: true, product }));

    const { name: uniqueId } = yield call(remoteDBService.addProductToCart, product);

    const updatedData = yield call(remoteDBService.updateProductCatalog, { product, uniqueId, inCart: true });

    yield put(catalogActions.updateCatalog({
      index: product.index,
      uniqueId: updatedData.uniqueId,
      inCart: true,
      productType: product.productType,
      cartType: product.cartType,
    }));

    const products = yield call(remoteDBService.getProductCartFromDB);

    yield put(cartActions.fillProductCart(products));
  } catch ({ message }) {
    const networkConnectionError = 'Failed to fetch';
    toast.error(message === networkConnectionError ? 'Ошибка сетевого соединения' : message);
  } finally {
    yield put(cartActions.updateProductCartRequestFetching({ isFetching: false, product }));
    yield put(catalogActions.updateProductCartRequestFetching({ isFetching: false, product }));
    yield put(favoritesActions.updateProductInFavoritesRequestFetching({ isFetching: false, product }));
  }
}

function* removeProductFromCart(action) {
  let product;

  try {
    product = action.payload;

    yield put(cartActions.updateProductCartRequestFetching({ isFetching: true, product }));

    yield put(catalogActions.updateProductCartRequestFetching({ isFetching: true, product }));

    yield put(favoritesActions.updateProductInFavoritesRequestFetching({ isFetching: true, product }));

    yield call(remoteDBService.removeProductFromCart, product);

    yield call(remoteDBService.updateProductCatalog, { product, uniqueId: '', inCart: false });

    yield put(catalogActions.updateCatalog({
      index: product.index,
      uniqueId: '',
      inCart: false,
      productType: product.productType,
      cartType: product.cartType,
    }));

    const products = yield call(remoteDBService.getProductCartFromDB);

    yield put(cartActions.hideCard(product));

    yield put(cartActions.removePriceFromTotalAmount(product.uniqueId));

    yield delay(500);

    yield put(cartActions.fillProductCart(products));
  } catch ({ message }) {
    const networkConnectionError = 'Failed to fetch';
    toast.error(message === networkConnectionError ? 'Ошибка сетевого соединения' : message);
  } finally {
    yield put(cartActions.updateProductCartRequestFetching({ isFetching: false, product }));
    yield put(catalogActions.updateProductCartRequestFetching({ isFetching: false, product }));
    yield put(favoritesActions.updateProductInFavoritesRequestFetching({ isFetching: false, product }));
  }
}

function* watchAddProductToCart() {
  yield takeEvery(cartActions.ADD_PRODUCT_TO_CART_REQUEST, addProductToCart);
}

function* watchRemoveProductFromCart() {
  yield takeEvery(cartActions.REMOVE_PRODUCT_FROM_CART_REQUEST, removeProductFromCart);
}

export default function* watchProductCart() {
  yield all([call(fetchProductCart), call(watchAddProductToCart), call(watchRemoveProductFromCart)]);
}

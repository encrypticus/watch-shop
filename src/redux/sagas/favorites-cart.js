import {
  take, takeEvery, put, call, all, delay,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import remoteDBService from '#services/remote-db-service';
import * as favoritesActions from '#act/favorites-cart';
import * as catalogActions from '#act/catalog-cards';

function* fetchFavoritesCart() {
  while (true) {
    try {
      yield put(favoritesActions.hasFavoritesCartFetchingError({ status: false, message: '' }));

      yield take(favoritesActions.FETCH_FAVORITES_CART_REQUEST);

      yield put(favoritesActions.favoritesCartRequestFetching(true));

      const products = yield call(remoteDBService.getFavoritesCartFromDB);

      yield put(favoritesActions.fillFavoritesCart(products));
    } catch ({ message }) {
      yield put(favoritesActions.hasFavoritesCartFetchingError({ status: true, message }));
      yield put(favoritesActions.fillFavoritesCart(null));
    } finally {
      yield put(favoritesActions.favoritesCartRequestFetching(false));
    }
  }
}

function* addProductToFavorites(action) {
  let product;

  try {
    product = action.payload;

    yield put(catalogActions.updateProductCartRequestFetching({ isFetching: true, product }));

    const { name: uniqueId } = yield call(remoteDBService.addProductToFavorites, product);

    const updatedData = yield call(remoteDBService.updateProductCatalog, { product, uniqueId, inCart: true });

    yield put(catalogActions.updateCatalog({
      index: product.index,
      uniqueId: updatedData.uniqueFavoritesId,
      inCart: true,
      productType: product.productType,
      cartType: product.cartType,
    }));

    const products = yield call(remoteDBService.getFavoritesCartFromDB);

    yield put(favoritesActions.fillFavoritesCart(products));
  } catch ({ message }) {
    const networkConnectionError = 'Failed to fetch';
    toast.error(message === networkConnectionError ? 'Ошибка сетевого соединения' : message);
  } finally {
    yield put(catalogActions.updateProductCartRequestFetching({ isFetching: false, product }));
  }
}

function* removeProductFromFavorites(action) {
  let product;

  try {
    product = action.payload;

    yield put(catalogActions.updateProductCartRequestFetching({ isFetching: true, product }));

    yield put(favoritesActions.updateProductInFavoritesRequestFetching({ isFetching: true, product }));

    yield call(remoteDBService.removeProductFromFavorites, product);

    yield call(remoteDBService.updateProductCatalog, { product, uniqueId: '', inCart: false });

    yield put(catalogActions.updateCatalog({
      index: product.index,
      uniqueId: '',
      inCart: false,
      productType: product.productType,
      cartType: product.cartType,
    }));

    const products = yield call(remoteDBService.getFavoritesCartFromDB);

    yield put(favoritesActions.hideCard(product));

    yield delay(500);

    yield put(favoritesActions.fillFavoritesCart(products));
  } catch ({ message }) {
    const networkConnectionError = 'Failed to fetch';
    toast.error(message === networkConnectionError ? 'Ошибка сетевого соединения' : message);
  } finally {
    yield put(catalogActions.updateProductCartRequestFetching({ isFetching: false, product }));
    yield put(favoritesActions.updateProductInFavoritesRequestFetching({ isFetching: true, product }));
  }
}

function* watchAddProductToFavorites() {
  yield takeEvery(favoritesActions.ADD_PRODUCT_TO_FAVORITES_REQUEST, addProductToFavorites);
}

function* watchRemoveProductFromFavorites() {
  yield takeEvery(favoritesActions.REMOVE_PRODUCT_FROM_FAVORITES_REQUEST, removeProductFromFavorites);
}

export default function* watchFavoritesCart() {
  yield all([call(fetchFavoritesCart), call(watchAddProductToFavorites), call(watchRemoveProductFromFavorites)]);
}

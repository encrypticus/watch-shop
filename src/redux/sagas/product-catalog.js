import {
  take, put, call, all,
} from 'redux-saga/effects';
import remoteDBService from '#services/watches-service';
import * as catalogActions from '#act/catalog-cards';

function* fetchCatalog() {
  while (true) {
    try {
      yield put(catalogActions.hasProductCatalogFetchingError({ status: false, message: '' }));

      yield take(catalogActions.GET_PRODUCT_CATALOG_FROM_DB_REQUEST);

      yield put(catalogActions.productCatalogRequestFetching(true));

      const catalog = yield call(remoteDBService.getProductCatalogFromDB);

      yield put(catalogActions.fillCatalog(catalog));
    } catch ({ message }) {
      yield put(catalogActions.hasProductCatalogFetchingError({ status: true, message }));
    } finally {
      yield put(catalogActions.productCatalogRequestFetching(false));
    }
  }
}

export default function* watchCatalog() {
  yield all([call(fetchCatalog)]);
}

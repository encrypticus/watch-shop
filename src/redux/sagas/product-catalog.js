import {
  take, put, call, all,
} from 'redux-saga/effects';
import remoteDBService from '#services/remote-db-service';
import * as catalogActions from '#act/catalog-cards';
import { endpoints } from '#const';

function* fetchCatalog() {
  while (true) {
    try {
      yield put(catalogActions.hasProductCatalogFetchingError({ status: false, message: '' }));

      yield take(catalogActions.GET_PRODUCT_CATALOG_FROM_DB_REQUEST);

      yield put(catalogActions.productCatalogRequestFetching(true));

      const watchCatalog = yield call(remoteDBService.getProductCatalogFromDB);

      const strapCatalog = yield call(remoteDBService.getProductCatalogFromDB, endpoints.strapCatalog);

      yield put(catalogActions.fillCatalog(watchCatalog));

      yield put(catalogActions.fillStrapCatalog(strapCatalog));
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

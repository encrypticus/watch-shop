export const SORT_CARDS_BY_VENDOR = 'SORT_CARDS_BY_VENDOR';
export const SORT_CARDS_BY_MECHANISM = 'SORT_CARDS_BY_MECHANISM';
export const SORT_CARDS_BY_MATERIAL = 'SORT_CARDS_BY_MATERIAL';
export const SORT_CARDS_BY_COLOR = 'SORT_CARDS_BY_COLOR';
export const SORT_CARDS_BY_PRICE = 'SORT_CARDS_BY_PRICE';
export const SORT_BY = 'SORT_BY';
export const UPDATE_PRODUCT_IN_CART_REQUEST_FETCHING = 'UPDATE_PRODUCT_IN_CART_REQUEST_FETCHING';
export const UPDATE_PRODUCT_IN_FAVORITES_REQUEST_FETCHING = 'UPDATE_PRODUCT_IN_CART_REQUEST_FETCHING';
export const FILL_CATALOG = 'FILL_CATALOG';
export const FILL_STRAP_CATALOG = 'FILL_STRAP_CATALOG';
export const GET_PRODUCT_CATALOG_FROM_DB_REQUEST = 'GET_PRODUCT_CATALOG_FROM_DB_REQUEST';
export const PRODUCT_CATALOG_REQUEST_FETCHING = 'PRODUCT_CATALOG_REQUEST_FETCHING';
export const HAS_PRODUCT_CATALOG_FETCHING_ERROR = 'HAS_PRODUCT_CATALOG_FETCHING_ERROR';
export const UPDATE_CATALOG = 'UPDATE_CATALOG';

export const sortBy = (data) => ({
  type: SORT_BY,
  payload: data,
});

export const sortByVendor = (data) => ({
  type: SORT_CARDS_BY_VENDOR,
  payload: data,
});

export const sortByMechanism = (data) => ({
  type: SORT_CARDS_BY_MECHANISM,
  payload: data,
});

export const sortByMaterial = (data) => ({
  type: SORT_CARDS_BY_MATERIAL,
  payload: data,
});

export const sortByColor = (data) => ({
  type: SORT_CARDS_BY_COLOR,
  payload: data,
});

export const sortByPrice = (data) => ({
  type: SORT_CARDS_BY_PRICE,
  payload: data,
});

export const updateProductCartRequestFetching = (fetching) => ({
  type: UPDATE_PRODUCT_IN_CART_REQUEST_FETCHING,
  payload: fetching,
});

export const updateFavoritesCartRequestFetching = (fetching) => ({
  type: UPDATE_PRODUCT_IN_FAVORITES_REQUEST_FETCHING,
  payload: fetching,
});

export const productCatalogRequestFetching = (fetching) => ({
  type: PRODUCT_CATALOG_REQUEST_FETCHING,
  payload: fetching,
});

export const fillCatalog = (catalog) => ({
  type: FILL_CATALOG,
  payload: catalog,
});

export const fillStrapCatalog = (catalog) => ({
  type: FILL_STRAP_CATALOG,
  payload: catalog,
});

export const hasProductCatalogFetchingError = (error) => ({
  type: HAS_PRODUCT_CATALOG_FETCHING_ERROR,
  payload: error,
});

export const getProductCatalogFromDB = () => ({
  type: GET_PRODUCT_CATALOG_FROM_DB_REQUEST,
});

export const updateCatalog = (card) => ({
  type: UPDATE_CATALOG,
  payload: card,
});

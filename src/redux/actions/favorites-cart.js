export const ADD_PRODUCT_TO_FAVORITES_REQUEST = 'ADD_PRODUCT_TO_FAVORITES_REQUEST';
export const REMOVE_PRODUCT_FROM_FAVORITES_REQUEST = 'REMOVE_PRODUCT_FROM_FAVORITES_REQUEST';
export const UPDATE_FAVORITES_CART_REQUEST_FETCHING = 'UPDATE_FAVORITES_CART_REQUEST_FETCHING';
export const UPDATE_PRODUCT_IN_FAVORITES_REQUEST_FETCHING = 'UPDATE_PRODUCT_IN_FAVORITES_REQUEST_FETCHING';
export const FILL_FAVORITES_CART = 'FILL_FAVORITES_CART';
export const FETCH_FAVORITES_CART_REQUEST = 'FETCH_FAVORITES_CART_REQUEST';
export const HAS_FAVORITES_CART_FETCHING_ERROR = 'HAS_FAVORITES_CART_FETCHING_ERROR';
export const FAVORITES_CART_REQUEST_FETCHING = 'FAVORITES_CART_REQUEST_FETCHING';
export const HIDE_CARD = 'HIDE_CARD';

export const addProductToFavoritesRequest = (product) => ({
  type: ADD_PRODUCT_TO_FAVORITES_REQUEST,
  payload: product,
});

export const removeProductFromFavoritesRequest = (product) => ({
  type: REMOVE_PRODUCT_FROM_FAVORITES_REQUEST,
  payload: product,
});

export const updateFavoritesCartRequestFetching = (fetching) => ({
  type: UPDATE_FAVORITES_CART_REQUEST_FETCHING,
  payload: fetching,
});

export const updateProductInFavoritesRequestFetching = (fetching) => ({
  type: UPDATE_PRODUCT_IN_FAVORITES_REQUEST_FETCHING,
  payload: fetching,
});

export const fillFavoritesCart = (products) => ({
  type: FILL_FAVORITES_CART,
  payload: products,
});

export const fetchFavoritesCart = () => ({
  type: FETCH_FAVORITES_CART_REQUEST,
});

export const hasFavoritesCartFetchingError = (error) => ({
  type: HAS_FAVORITES_CART_FETCHING_ERROR,
  payload: error,
});

export const favoritesCartRequestFetching = (fetching) => ({
  type: FAVORITES_CART_REQUEST_FETCHING,
  payload: fetching,
});

export const hideCard = (product) => ({
  type: HIDE_CARD,
  payload: product,
});

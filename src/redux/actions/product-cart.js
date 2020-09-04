export const FETCH_PRODUCT_CART_REQUEST = 'PRODUCT_CART_FETCHING_REQUEST';
export const PRODUCT_CART_REQUEST_FETCHING = 'PRODUCT_CART_REQUEST_FETCHING';
export const ADD_PRODUCT_TO_CART_REQUEST = 'ADD_PRODUCT_TO_CART_REQUEST';
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const ADD_PRODUCT_CART_REQUEST_FETCHING = 'ADD_PRODUCT_CART_REQUEST_FETCHING';
export const HAS_PRODUCT_CART_FETCHING_ERROR = 'HAS_PRODUCT_CART_FETCHING_ERROR';
export const FILL_PRODUCT_CART = 'FILL_PRODUCT_CART';

export const fetchProductCart = () => ({
  type: FETCH_PRODUCT_CART_REQUEST,
});

export const productCartRequestFetching = (fetching) => ({
  type: PRODUCT_CART_REQUEST_FETCHING,
  payload: fetching,
});

export const addProductToCart = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: product,
});

export const addProductToCartRequest = (product) => ({
  type: ADD_PRODUCT_TO_CART_REQUEST,
  payload: product,
});

export const addProductToCartRequestFetching = (fetching) => ({
  type: ADD_PRODUCT_CART_REQUEST_FETCHING,
  payload: fetching,
});

export const hasProductCartFetchingError = (error) => ({
  type: HAS_PRODUCT_CART_FETCHING_ERROR,
  payload: error,
});

export const fillProductCart = (products) => ({
  type: FILL_PRODUCT_CART,
  payload: products,
});

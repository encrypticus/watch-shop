export const FETCH_PRODUCT_CART_REQUEST = 'PRODUCT_CART_FETCHING_REQUEST';
export const PRODUCT_CART_REQUEST_FETCHING = 'PRODUCT_CART_REQUEST_FETCHING';
export const ADD_PRODUCT_TO_CART_REQUEST = 'ADD_PRODUCT_TO_CART_REQUEST';
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const UPDATE_PRODUCT_CART_REQUEST_FETCHING = 'UPDATE_PRODUCT_CART_REQUEST_FETCHING';
export const REMOVE_PRODUCT_FROM_CART_REQUEST = 'REMOVE_PRODUCT_FROM_CART_REQUEST';
export const HAS_PRODUCT_CART_FETCHING_ERROR = 'HAS_PRODUCT_CART_FETCHING_ERROR';
export const FILL_PRODUCT_CART = 'FILL_PRODUCT_CART';
export const HIDE_CARD = 'HIDE_CARD';
export const ADD_PRICE_IN_TOTAL_AMOUNT = 'ADD_PRICE_IN_TOTAL_AMOUNT';
export const REMOVE_PRICE_FROM_TOTAL_AMOUNT = 'REMOVE_PRICE_FROM_TOTAL_AMOUNT';
export const RESET_TOTAL_AMOUNT = 'RESET_TOTAL_AMOUNT';

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

export const updateProductCartRequestFetching = (fetching) => ({
  type: UPDATE_PRODUCT_CART_REQUEST_FETCHING,
  payload: fetching,
});

export const removeProductFromCartRequest = (product) => ({
  type: REMOVE_PRODUCT_FROM_CART_REQUEST,
  payload: product,
});

export const hasProductCartFetchingError = (error) => ({
  type: HAS_PRODUCT_CART_FETCHING_ERROR,
  payload: error,
});

export const fillProductCart = (products) => ({
  type: FILL_PRODUCT_CART,
  payload: products,
});

export const hideCard = (product) => ({
  type: HIDE_CARD,
  payload: product,
});

export const addPriceInTotalAmount = (totalAmount) => ({
  type: ADD_PRICE_IN_TOTAL_AMOUNT,
  payload: totalAmount,
});

export const removePriceFromTotalAmount = (id) => ({
  type: REMOVE_PRICE_FROM_TOTAL_AMOUNT,
  payload: id,
});

export const resetTotalAmount = () => ({
  type: RESET_TOTAL_AMOUNT,
});

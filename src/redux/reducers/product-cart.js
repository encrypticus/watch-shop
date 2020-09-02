import {
  PRODUCT_CART_REQUEST_FETCHING,
  FILL_PRODUCT_CART,
  HAS_PRODUCT_CART_FETCHING_ERROR,
} from '#act/product-cart';

const initialState = {
  products: null,
  isFetching: false,
  error: {
    status: false,
    message: '',
  },
};

const productCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_PRODUCT_CART: {
      return {
        ...state,
        products: action.payload,
      };
    }

    case PRODUCT_CART_REQUEST_FETCHING: {
      return {
        ...state,
        isFetching: action.payload,
      };
    }

    case HAS_PRODUCT_CART_FETCHING_ERROR: {
      return {
        ...state,
        error: {
          status: action.payload.status,
          message: action.payload.message,
        },
      };
    }

    default:
      return state;
  }
};

export default productCartReducer;

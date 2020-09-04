import {
  PRODUCT_CART_REQUEST_FETCHING,
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_CART_REQUEST_FETCHING,
  FILL_PRODUCT_CART,
  HAS_PRODUCT_CART_FETCHING_ERROR,
} from '#act/product-cart';

const initialState = {
  products: null,
  getProductCartIsFetching: false,
  addProductToCartRequestIsFetching: false,
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
        getProductCartIsFetching: action.payload,
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

    case ADD_PRODUCT_TO_CART: {
      return {
        ...state,
        products: {
          ...state.products,
          ...action.payload,
        },
      };
    }

    case ADD_PRODUCT_CART_REQUEST_FETCHING: {
      return {
        ...state,
        addProductToCartRequestIsFetching: action.payload,
      };
    }

    default:
      return state;
  }
};

export default productCartReducer;

import {
  PRODUCT_CART_REQUEST_FETCHING,
  ADD_PRODUCT_TO_CART,
  UPDATE_PRODUCT_CART_REQUEST_FETCHING,
  FILL_PRODUCT_CART,
  HAS_PRODUCT_CART_FETCHING_ERROR,
  HIDE_CARD,
  ADD_PRICE_IN_TOTAL_AMOUNT,
  REMOVE_PRICE_FROM_TOTAL_AMOUNT,
  RESET_TOTAL_AMOUNT,
} from '#act/product-cart';

const initialState = {
  products: null,
  getProductCartIsFetching: false,
  addProductToCartRequestIsFetching: false,
  totalAmount: {},
  error: {
    status: false,
    message: '',
  },
};

const productCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_PRODUCT_CART: {
      let products = action.payload;

      if (products) {
        const uniqueIds = Object.keys(products);

        products = uniqueIds.map((uniqueId) => ({
          ...products[uniqueId],
          uniqueId,
        }));
      }

      return {
        ...state,
        products,
      };
    }

    case PRODUCT_CART_REQUEST_FETCHING: {
      return {
        ...state,
        getProductCartIsFetching: action.payload,
      };
    }

    case HAS_PRODUCT_CART_FETCHING_ERROR: {
      const { payload: { status, message } } = action;
      const networkConnectionError = 'Failed to fetch';

      return {
        ...state,
        error: {
          status,
          message: message === networkConnectionError ? 'Ошибка сетевого соединения' : message,
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

    case UPDATE_PRODUCT_CART_REQUEST_FETCHING: {
      const { payload: { product: { id }, isFetching } } = action;
      let newCards = state.products;

      if (newCards) {
        newCards = state.products.map((card) => {
          const updatedCard = { ...card };

          if (updatedCard.id === id) {
            updatedCard.removeFromCartFetching = isFetching;
          }

          return updatedCard;
        });
      }

      return {
        ...state,
        products: newCards,
      };
    }

    case HIDE_CARD: {
      const { payload: { id } } = action;
      let newCards = state.products;

      if (newCards) {
        newCards = state.products.map((card) => {
          const updatedCard = { ...card };

          if (updatedCard.id === id) {
            updatedCard.visible = false;
          }

          return updatedCard;
        });
      }

      return {
        ...state,
        products: newCards,
      };
    }

    case ADD_PRICE_IN_TOTAL_AMOUNT: {
      const { payload: { uniqueId, newPrice } } = action;
      return {
        ...state,
        totalAmount: {
          ...state.totalAmount,
          [uniqueId]: newPrice,
        },
      };
    }

    case REMOVE_PRICE_FROM_TOTAL_AMOUNT: {
      const id = action.payload;
      const totalAmountClone = { ...state.totalAmount };

      Object.keys(totalAmountClone).forEach((price) => {
        if (price === id) delete totalAmountClone[price];
      });

      return {
        ...state,
        totalAmount: totalAmountClone,
      };
    }

    case RESET_TOTAL_AMOUNT: {
      return {
        ...state,
        totalAmount: {},
      };
    }

    default:
      return state;
  }
};

export default productCartReducer;

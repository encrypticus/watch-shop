import * as actions from '#act/favorites-cart';
import { cartTypes } from '#config/constants';

const initialState = {
  favorites: null,
  getFavoritesCartIsFetching: false,
  addProductToFavoritesRequestIsFetching: false,
  error: {
    status: false,
    message: '',
  },
};

const favoritesCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FAVORITES_CART_REQUEST_FETCHING: {
      return {
        ...state,
        getFavoritesCartIsFetching: action.payload,
      };
    }

    case actions.FILL_FAVORITES_CART: {
      let favorites = action.payload;

      if (favorites) {
        const uniqueIds = Object.keys(favorites);

        favorites = uniqueIds.map((uniqueFavoritesId) => ({
          ...favorites[uniqueFavoritesId],
          uniqueFavoritesId,
        }));
      }

      return {
        ...state,
        favorites,
      };
    }

    case actions.HAS_FAVORITES_CART_FETCHING_ERROR: {
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

    case actions.UPDATE_PRODUCT_IN_FAVORITES_REQUEST_FETCHING: {
      if (!state.favorites) {
        return state;
      }

      const { payload: { product: { id, cartType }, isFetching } } = action;
      const fetching = cartType === cartTypes.product ? 'addToCartFetching' : 'removeFromFavoritesFetching';

      const newFavorites = state.favorites.map((favorite) => {
        const updatedFavorite = { ...favorite };

        if (updatedFavorite.id === id) {
          updatedFavorite[fetching] = isFetching;
        }

        return updatedFavorite;
      });

      return {
        ...state,
        favorites: newFavorites,
      };
    }

    case actions.HIDE_CARD: {
      const { payload: { id, cartType } } = action;

      let newCards = state.favorites;

      if (newCards) {
        newCards = state.favorites.map((card) => {
          const updatedCard = { ...card };

          if (updatedCard.id === id && cartType === cartTypes.favorites) {
            updatedCard.favoritesVisible = false;
          }

          return updatedCard;
        });
      }

      return {
        ...state,
        favorites: newCards,
      };
    }

    default:
      return state;
  }
};

export default favoritesCartReducer;

import {
  SORT_CARDS_BY_COLOR,
  SORT_CARDS_BY_MATERIAL,
  SORT_CARDS_BY_MECHANISM,
  SORT_CARDS_BY_PRICE,
  SORT_CARDS_BY_VENDOR,
  UPDATE_PRODUCT_IN_CART_REQUEST_FETCHING,
  FILL_CATALOG,
  FILL_STRAP_CATALOG,
  HAS_PRODUCT_CATALOG_FETCHING_ERROR,
  PRODUCT_CATALOG_REQUEST_FETCHING,
  UPDATE_CATALOG,
} from '#act/catalog-cards';
import * as constants from '#const';
import { endpoints } from '#const';

const initialState = {
  watchCards: constants.cards,
  strapCards: constants.straps,
  price: {
    min: 10000,
    max: 100000,
  },
  checkboxes: {
    techne: true,
    rado: true,
    bvlgari: true,
    tissot: true,
    omega: true,
    montblanc: true,
    quartz: true,
    mechanic: true,
    metal: true,
    plastic: true,
    black: true,
    brown: true,
    green: true,
    red: true,
  },
  getProductCatalogIsFetching: false,
  error: {
    status: false,
    message: '',
  },
};

const catalogCardsReducer = (state = initialState, action) => {
  const data = action.payload;
  const checkboxes = { ...state.checkboxes };
  let key = '';

  switch (action.type) {
    case SORT_CARDS_BY_VENDOR: {
      const watchesByVendor = state.watchCards.map((card) => {
        const clonedCard = { ...card };

        if (card.vendor === data.id) {
          clonedCard.vendorChecked = data.checked;
        }

        return clonedCard;
      });

      key = data.id.toLowerCase();
      checkboxes[key] = data.checked;

      return {
        ...state,
        checkboxes,
        watchCards: watchesByVendor,
      };
    }

    case SORT_CARDS_BY_MECHANISM: {
      const watchesByMechanism = state.watchCards.map((card) => {
        const clonedCard = { ...card };

        if (card.mechanism === data.id) {
          clonedCard.mechanismChecked = data.checked;
        }

        return clonedCard;
      });

      key = data.id.toLowerCase();
      checkboxes[key] = data.checked;

      return {
        ...state,
        checkboxes,
        watchCards: watchesByMechanism,
      };
    }

    case SORT_CARDS_BY_MATERIAL: {
      const watchesByMaterial = state.watchCards.map((card) => {
        const clonedCard = { ...card };

        if (card.material === data.id) {
          clonedCard.materialChecked = data.checked;
        }

        return clonedCard;
      });

      key = data.id.toLowerCase();
      checkboxes[key] = data.checked;

      return {
        ...state,
        checkboxes,
        watchCards: watchesByMaterial,
      };
    }

    case SORT_CARDS_BY_COLOR: {
      const watchesByColor = state.watchCards.map((card) => {
        const clonedCard = { ...card };

        if (card.color === data.id) {
          clonedCard.colorChecked = data.checked;
        }

        return clonedCard;
      });

      key = data.id.toLowerCase();
      checkboxes[key] = data.checked;

      return {
        ...state,
        checkboxes,
        watchCards: watchesByColor,
      };
    }

    case SORT_CARDS_BY_PRICE: {
      const { min, max } = data;

      return {
        ...state,
        checkboxes,
        price: { min, max },
      };
    }

    case UPDATE_PRODUCT_IN_CART_REQUEST_FETCHING: {
      const { payload: { product: { id, productType }, isFetching } } = action;
      const cards = productType === endpoints.watchCatalog ? state.watchCards : state.strapCards;
      const cardType = productType === endpoints.watchCatalog ? 'watchCards' : 'strapCards';

      const newCards = cards.map((card) => {
        const updatedCard = { ...card };

        if (updatedCard.id === id) {
          updatedCard.addToCartFetching = isFetching;
        }

        return updatedCard;
      });

      return {
        ...state,
        [cardType]: newCards,
      };
    }

    case FILL_CATALOG: {
      return {
        ...state,
        watchCards: action.payload,
      };
    }

    case FILL_STRAP_CATALOG: {
      return {
        ...state,
        strapCards: action.payload,
      };
    }

    case PRODUCT_CATALOG_REQUEST_FETCHING: {
      return {
        ...state,
        getProductCatalogIsFetching: action.payload,
      };
    }

    case HAS_PRODUCT_CATALOG_FETCHING_ERROR: {
      return {
        ...state,
        error: {
          status: action.payload.status,
          message: action.payload.message,
        },
      };
    }

    case UPDATE_CATALOG: {
      const {
        payload: {
          index, inCart, uniqueId, productType,
        },
      } = action;

      const cards = productType === constants.endpoints.watchCatalog ? state.watchCards : state.strapCards;
      const cardType = productType === constants.endpoints.watchCatalog ? 'watchCards' : 'strapCards';

      const updatedCard = {
        ...cards[index],
        inCart,
        uniqueId,
      };

      const newState = { ...state };

      newState[cardType][index] = updatedCard;

      return {
        ...newState,
      };
    }

    default:
      return state;
  }
};

export default catalogCardsReducer;

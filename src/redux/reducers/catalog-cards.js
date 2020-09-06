import {
  SORT_CARDS_BY_COLOR,
  SORT_CARDS_BY_MATERIAL,
  SORT_CARDS_BY_MECHANISM,
  SORT_CARDS_BY_PRICE,
  SORT_CARDS_BY_VENDOR,
  UPDATE_PRODUCT_IN_CART_REQUEST_FETCHING,
  FILL_CATALOG,
  HAS_PRODUCT_CATALOG_FETCHING_ERROR, PRODUCT_CATALOG_REQUEST_FETCHING, UPDATE_CATALOG,
} from '#act/catalog-cards';

const initialState = {
  cards: [
    {
      id: '1',
      vendor: 'Techne',
      price: '12 700',
      src: './img/watch_1.png',
      mechanism: 'mechanic',
      material: 'metal',
      color: 'green',
      mechanismChecked: true,
      vendorChecked: true,
      materialChecked: true,
      colorChecked: true,
      addToCartFetching: false,
      inCart: false,
    },
    {
      id: '2',
      vendor: 'Rado',
      price: '13 900',
      src: './img/watch_2.png',
      mechanism: 'quartz',
      material: 'plastic',
      color: 'brown',
      mechanismChecked: true,
      vendorChecked: true,
      materialChecked: true,
      colorChecked: true,
      addToCartFetching: false,
      inCart: false,
    },
    {
      id: '3',
      vendor: 'Bvlgari',
      price: '18 700',
      src: './img/watch_3.png',
      mechanism: 'mechanic',
      material: 'metal',
      color: 'red',
      mechanismChecked: true,
      vendorChecked: true,
      materialChecked: true,
      colorChecked: true,
      addToCartFetching: false,
      inCart: false,
    },
    {
      id: '4',
      vendor: 'Tissot',
      price: '18 700',
      src: './img/watch_3.png',
      mechanism: 'quartz',
      material: 'plastic',
      color: 'red',
      mechanismChecked: true,
      vendorChecked: true,
      materialChecked: true,
      colorChecked: true,
      addToCartFetching: false,
      inCart: false,
    },
    {
      id: '5',
      vendor: 'Omega',
      price: '50 700',
      src: './img/watch_4.png',
      mechanism: 'mechanic',
      material: 'metal',
      color: 'black',
      mechanismChecked: true,
      vendorChecked: true,
      materialChecked: true,
      colorChecked: true,
      addToCartFetching: false,
      inCart: false,
    },
    {
      id: '6',
      vendor: 'Tissot',
      price: '79 300',
      src: './img/watch_5.png',
      mechanism: 'quartz',
      material: 'plastic',
      color: 'brown',
      mechanismChecked: true,
      vendorChecked: true,
      materialChecked: true,
      colorChecked: true,
      addToCartFetching: false,
      inCart: false,
    },
    {
      id: '7',
      vendor: 'Montblanc',
      price: '80 000',
      src: './img/watch_6.png',
      mechanism: 'mechanic',
      material: 'metal',
      color: 'brown',
      mechanismChecked: true,
      vendorChecked: true,
      materialChecked: true,
      colorChecked: true,
      addToCartFetching: false,
      inCart: false,
    },
    {
      id: '8',
      vendor: 'Techne',
      price: '100 000',
      src: './img/watch_7.png',
      mechanism: 'quartz',
      material: 'plastic',
      color: 'red',
      mechanismChecked: true,
      vendorChecked: true,
      materialChecked: true,
      colorChecked: true,
      addToCartFetching: false,
      inCart: false,
    },
    {
      id: '9',
      vendor: 'Rado',
      price: '33 200',
      src: './img/watch_8.png',
      mechanism: 'mechanic',
      material: 'metal',
      color: 'black',
      mechanismChecked: true,
      vendorChecked: true,
      materialChecked: true,
      colorChecked: true,
      addToCartFetching: false,
      inCart: false,
    },
    {
      id: '10',
      vendor: 'Bvlgari',
      price: '42 100',
      src: './img/watch_9.png',
      mechanism: 'quartz',
      material: 'plastic',
      color: 'black',
      mechanismChecked: true,
      vendorChecked: true,
      materialChecked: true,
      colorChecked: true,
      addToCartFetching: false,
      inCart: false,
    },
    {
      id: '11',
      vendor: 'Tissot',
      price: '50 000',
      src: './img/watch_10.png',
      mechanism: 'mechanic',
      material: 'metal',
      color: 'red',
      mechanismChecked: true,
      vendorChecked: true,
      materialChecked: true,
      colorChecked: true,
      addToCartFetching: false,
      inCart: false,
    },
    {
      id: '12',
      vendor: 'Omega',
      price: '53 300',
      src: './img/watch_11.png',
      mechanism: 'mechanic',
      material: 'plastic',
      color: 'black',
      mechanismChecked: true,
      vendorChecked: true,
      materialChecked: true,
      colorChecked: true,
      addToCartFetching: false,
      inCart: false,
    },
    {
      id: '13',
      vendor: 'Montblanc',
      price: '66 300',
      src: './img/watch_1.png',
      mechanism: 'mechanic',
      material: 'metal',
      color: 'green',
      mechanismChecked: true,
      vendorChecked: true,
      materialChecked: true,
      colorChecked: true,
      addToCartFetching: false,
      inCart: false,
    },
  ],
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
      const watchesByVendor = state.cards.map((card) => {
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
        cards: watchesByVendor,
      };
    }

    case SORT_CARDS_BY_MECHANISM: {
      const watchesByMechanism = state.cards.map((card) => {
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
        cards: watchesByMechanism,
      };
    }

    case SORT_CARDS_BY_MATERIAL: {
      const watchesByMaterial = state.cards.map((card) => {
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
        cards: watchesByMaterial,
      };
    }

    case SORT_CARDS_BY_COLOR: {
      const watchesByColor = state.cards.map((card) => {
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
        cards: watchesByColor,
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
      const { payload: { product: { id }, isFetching } } = action;

      const newCards = state.cards.map((card) => {
        const updatedCard = { ...card };

        if (updatedCard.id === id) {
          updatedCard.addToCartFetching = isFetching;
        }

        return updatedCard;
      });

      return {
        ...state,
        cards: newCards,
      };
    }

    case FILL_CATALOG: {
      return {
        ...state,
        cards: action.payload,
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
      const { payload: { index, inCart, uniqueId } } = action;

      const newCard = {
        ...state.cards[index],
        inCart,
        uniqueId,
      };

      const newState = { ...state };

      newState.cards[index] = newCard;

      return {
        ...newState,
      };
    }

    default:
      return state;
  }
};

export default catalogCardsReducer;

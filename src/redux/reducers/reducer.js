import { combineReducers } from 'redux';
import mainNavReducer from './main-nav';
import catalogCardsReducer from './catalog-cards';
import authReducer from './auth';
import animationReducer from './animations';
import productCartReducer from './product-cart';
import favoritesCartReducer from './favorites-cart';

const reducers = combineReducers({
  mainNavReducer,
  catalogCardsReducer,
  authReducer,
  animationReducer,
  productCartReducer,
  favoritesCartReducer,
});

export default reducers;

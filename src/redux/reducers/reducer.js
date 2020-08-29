import { combineReducers } from 'redux';
import mainNavReducer from './main-nav';
import catalogCardsReducer from './catalog-cards';
import authReducer from './auth';
import animationReducer from './animations';

const reducers = combineReducers({
  mainNavReducer,
  catalogCardsReducer,
  authReducer,
  animationReducer,
});

export default reducers;

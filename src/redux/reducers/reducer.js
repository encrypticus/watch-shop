import { combineReducers } from 'redux';
import mainNavReducer from './main-nav';
import catalogCardsReducer from './catalog-cards';

const reducers = combineReducers({
  mainNavReducer,
  catalogCardsReducer
});

export default reducers;

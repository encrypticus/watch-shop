import { combineReducers } from 'redux';
import mainNavReducer from './main-nav';
import catalogCardsReducer from './catalog-cards';
import authReducer from './auth';

const reducers = combineReducers({
  mainNavReducer,
  catalogCardsReducer,
  authReducer,
});

export default reducers;

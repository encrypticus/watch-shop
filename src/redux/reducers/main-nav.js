import { IS_MENU_OPEN } from '../actions/main-nav';

const initialState = {
  isOpen: false,
};

const mainNavReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_MENU_OPEN:
      return {
        ...state,
        isOpen: action.payload,
      };

    default:
      return state;
  }
};

export default mainNavReducer;

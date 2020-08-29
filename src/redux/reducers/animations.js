import { ANIMATE_USER_BAR } from '#act/animations';

const initialState = {
  animateUserBar: false,
};

const animationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ANIMATE_USER_BAR:
      return {
        ...state,
        animateUserBar: action.payload,
      };

    default:
      return state;
  }
};

export default animationReducer;

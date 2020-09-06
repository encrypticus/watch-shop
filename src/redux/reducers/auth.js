import {
  SIGN_IN, SIGN_OUT, SIGN_UP, AUTH_REQUEST_FETCHING, HAS_AUTH_ERROR,
} from '#act/auth';

const initialState = {
  isUserSignedIn: false,
  isUserRegistered: false,
  authFetching: false,
  error: {
    status: false,
    message: '',
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isUserSignedIn: true,
      };

    case SIGN_OUT: {
      return {
        ...state,
        isUserSignedIn: false,
      };
    }

    case SIGN_UP: {
      return {
        ...state,
        isUserRegistered: true,
      };
    }

    case AUTH_REQUEST_FETCHING:
      return {
        ...state,
        authFetching: action.payload,
      };

    case HAS_AUTH_ERROR:
      return {
        ...state,
        error: {
          status: action.payload.status,
          message: action.payload.message,
        },
      };

    default:
      return state;
  }
};

export default authReducer;

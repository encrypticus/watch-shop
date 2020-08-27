export const FETCH_AUTH_REQUEST = 'FETCH_AUTH_REQUEST';
export const AUTH_REQUEST_FETCHING = 'AUTH_REQUEST_FETCHING';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_OUT = 'SIGN_OUT';
export const HAS_AUTH_ERROR = 'HAS_AUTH_ERROR';

export const fetchAuth = (userData) => ({
  type: FETCH_AUTH_REQUEST,
  payload: userData,
});

export const authRequestFetching = (fetching) => ({
  type: AUTH_REQUEST_FETCHING,
  payload: fetching,
});

export const hasAuthError = (error) => ({
  type: HAS_AUTH_ERROR,
  payload: error,
});

export const signIn = () => ({
  type: SIGN_IN,
});

export const signUp = () => ({
  type: SIGN_UP,
});

export const signOut = () => ({
  type: SIGN_OUT,
});

class WatchesService {
  _getApiKey = () => 'AIzaSyCQHVNmMaqmBDaP2cgMMcHXJXK7ee9LpBw';

  _getErrorCodes = () => ({
    USER_IS_NOT_AUTHORIZED: 401,
  });

  _userIsNotAuthorized = (status) => status === this._getErrorCodes().USER_IS_NOT_AUTHORIZED;

  sign = async (email, password, type = 'signUp') => {
    const method = type === 'signUp' ? 'signUp' : 'signInWithPassword';

    const result = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:${method}?key=${this._getApiKey()}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });

    if (!result.ok) {
      const error = await result.json();
      throw new Error(error.error.message);
    }

    return await result.json();
  };

  getLocalUser = () => JSON.parse(localStorage.getItem('user') || '{}');

  localUserSignIn = () => {
    const localUser = this.getLocalUser();

    localUser.isUserSignedIn = true;
    localStorage.setItem('user', JSON.stringify(localUser));
  };

  localUserSignOut = () => {
    const localUser = this.getLocalUser();

    localUser.isUserSignedIn = false;
    localStorage.setItem('user', JSON.stringify(localUser));
  };

  isLocalUserSignedIn = () => this.getLocalUser().isUserSignedIn;

  localUserSignUp = () => {
    const localUser = this.getLocalUser();

    localUser.isUserRegistered = true;
    localStorage.setItem('user', JSON.stringify(localUser));
  };

  isLocalUserRegistered = () => this.getLocalUser().isUserRegistered;

  setLocalUserData = ({
    idToken, refreshToken, localId, email,
  }) => {
    const localUser = this.getLocalUser();

    localUser.idToken = idToken;
    localUser.refreshToken = refreshToken;
    localUser.localId = localId;
    localUser.email = email;
    localStorage.setItem('user', JSON.stringify(localUser));
  };

  refreshTokens = (newIdToken, newRefreshToken) => {
    const localUser = this.getLocalUser();

    localUser.idToken = newIdToken;
    localUser.refreshToken = newRefreshToken;
    localStorage.setItem('user', JSON.stringify(localUser));
  };

  getLocalId = () => this.getLocalUser().localId;

  getIdToken = () => this.getLocalUser().idToken;

  getRefreshToken = () => this.getLocalUser().refreshToken;

  getResponseFromServer = async () => await fetch(`https://watches-shop.firebaseio.com/users/${this.getLocalId()}/cart.json?auth=${this.getIdToken()}`);

  reAuthorizeUser = async () => {
    const response = await fetch(`https://securetoken.googleapis.com/v1/token?key=${this._getApiKey()}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        grant_type: 'refresh_token',
        refresh_token: this.getRefreshToken(),
      }),
    });

    return await response;
  };

  getProductCartFromDB = async () => {
    try {
      const response = await this.getResponseFromServer();

      if (this._userIsNotAuthorized(response.status)) {
        throw new Error('Пользователь не авторизован, идём в блок catch...');
      }

      return await response.json();
    } catch ({ message }) {
      const response = await this.reAuthorizeUser();

      const userData = await response.json();
      const { id_token: idToken, refresh_token: refreshToken } = userData;

      this.refreshTokens(idToken, refreshToken);

      const products = await this.getResponseFromServer();

      return await products.json();
    }
  };
}

const watchesService = new WatchesService();

export default watchesService;

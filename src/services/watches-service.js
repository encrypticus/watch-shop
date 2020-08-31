class WatchesService {
  _getApiKey = () => 'AIzaSyCQHVNmMaqmBDaP2cgMMcHXJXK7ee9LpBw';

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

  setLocalUserData = ({ idToken, localId, email }) => {
    const localUser = this.getLocalUser();

    localUser.idToken = idToken;
    localUser.localId = localId;
    localUser.email = email;
    localStorage.setItem('user', JSON.stringify(localUser));
  };

  getLocalId = () => this.getLocalUser().localId;

  getIdToken = () => this.getLocalUser().idToken;

  getProductCartFromDB = async () => {
    try {
      const products = await fetch(`https://watches-shop.firebaseio.com/users/${this.getLocalId()}/cart.json?auth=${this.getIdToken()}`);

      // if (!products.ok) {
      //   const error = await products.json();
      //   throw new Error(error.error);
      // }

      return await products.json();
    } catch (e) {
      alert(e);
    }
  };
}

const watchesService = new WatchesService();

export default watchesService;

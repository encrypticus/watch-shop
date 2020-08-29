class WatchesService {

  _getApiKey = () => {
    return 'AIzaSyCQHVNmMaqmBDaP2cgMMcHXJXK7ee9LpBw';
  };

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

  getLocalUser = () => {
    return JSON.parse(localStorage.getItem('user') || '{}') ;
  };

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

  isLocalUserSignedIn = () => {
    return this.getLocalUser().isUserSignedIn;
  };

  localUserSignUp = () => {
    const localUser = this.getLocalUser();

    localUser.isUserRegistered = true;
    localStorage.setItem('user', JSON.stringify(localUser));
    console.log(localUser);
  };

  isLocalUserRegistered = () => {
    return this.getLocalUser().isUserRegistered;
  };

  setLocalUserData = ({ idToken, localId, email }) => {
    const localUser = this.getLocalUser();

    localUser.idToken = idToken;
    localUser.localId = localId;
    localUser.email = email;
    localStorage.setItem('user', JSON.stringify(localUser));
  };

  getLocalId = () => {
    return this.getLocalUser().localId;
  };

  getIdToken = () => {
    return this.getLocalUser().idToken;
  }
}

const watchesService = new WatchesService();

export default watchesService;

class LocalStorageService {
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
}

const localStorageService = new LocalStorageService();

export default localStorageService;

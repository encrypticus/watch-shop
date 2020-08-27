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
}

export default WatchesService;

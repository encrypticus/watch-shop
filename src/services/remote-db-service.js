import cards from '#const';

import storage from './local-storage-service';

class RemoteDBService {
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

  getProductCartResponse = async () => await fetch(`https://watches-shop.firebaseio.com/users/${storage.getLocalId()}/cart.json?auth=${storage.getIdToken()}`);

  getProductCatalogResponse = async () => await fetch(`https://watches-shop.firebaseio.com/users/${storage.getLocalId()}/catalog.json?auth=${storage.getIdToken()}`);

  reAuthorizeUser = async () => {
    const response = await fetch(`https://securetoken.googleapis.com/v1/token?key=${this._getApiKey()}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        grant_type: 'refresh_token',
        refresh_token: storage.getRefreshToken(),
      }),
    });

    return await response;
  };

  getProductCartFromDB = async () => {
    try {
      const response = await this.getProductCartResponse();

      if (this._userIsNotAuthorized(response.status)) {
        throw new Error('Пользователь не авторизован, идём в блок catch...');
      }

      return await response.json();
    } catch ({ message }) {
      const response = await this.reAuthorizeUser();

      const userData = await response.json();
      const { id_token: idToken, refresh_token: refreshToken } = userData;

      storage.refreshTokens(idToken, refreshToken);

      const products = await this.getProductCartResponse();

      return await products.json();
    }
  };

  getProductCatalogFromDB = async () => {
    try {
      const response = await this.getProductCatalogResponse();

      if (this._userIsNotAuthorized(response.status)) {
        throw new Error('Пользователь не авторизован, идём в блок catch...');
      }

      return await response.json();
    } catch (error) {
      const response = await this.reAuthorizeUser();

      const userData = await response.json();
      const { id_token: idToken, refresh_token: refreshToken } = userData;

      storage.refreshTokens(idToken, refreshToken);

      const catalog = await this.getProductCatalogResponse();

      return await catalog.json();
    }
  };

  addProductCatalogToDB = async () => {
    const response = await fetch(`https://watches-shop.firebaseio.com/users/${storage.getLocalId()}/catalog.json?auth=${storage.getIdToken()}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(cards),
    });

    return await response;
  };

  addProductToCartRequest = async ({
    vendor, price, src, id, index,
  }) => {
    const response = await fetch(`https://watches-shop.firebaseio.com/users/${storage.getLocalId()}/cart.json?auth=${storage.getIdToken()}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        vendor,
        price,
        src,
        id,
        index,
        inCart: true,
        removeFromCartFetching: false,
      }),
    });

    return await response;
  };

  addProductToCart = async (product) => {
    try {
      const response = await this.addProductToCartRequest(product);

      if (this._userIsNotAuthorized(response.status)) {
        throw new Error('Пользователь не авторизован, идём в блок catch...');
      }

      return await response.json();
    } catch (error) {
      const response = await this.reAuthorizeUser();

      const userData = await response.json();
      const { id_token: idToken, refresh_token: refreshToken } = userData;

      storage.refreshTokens(idToken, refreshToken);

      const productData = await this.addProductToCartRequest(product);

      return await productData.json();
    }
  };

  removeProductFromCartRequest = async ({ uniqueId }) => {
    const response = await fetch(`https://watches-shop.firebaseio.com/users/${storage.getLocalId()}/cart/${uniqueId}.json?auth=${storage.getIdToken()}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });

    return await response;
  };

  removeProductFromCart = async (product) => {
    try {
      const response = await this.removeProductFromCartRequest(product);

      if (this._userIsNotAuthorized(response.status)) {
        throw new Error('Пользователь не авторизован, идём в блок catch...');
      }

      return await response.json();
    } catch (error) {
      const response = await this.reAuthorizeUser();

      const userData = await response.json();
      const { id_token: idToken, refresh_token: refreshToken } = userData;

      storage.refreshTokens(idToken, refreshToken);

      const productData = await this.removeProductFromCartRequest(product);

      return await productData.json();
    }
  };

  updateProductCatalog = async (index, uniqueId, inCart) => {
    const response = await fetch(`https://watches-shop.firebaseio.com/users/${storage.getLocalId()}/catalog/${index}.json?auth=${storage.getIdToken()}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        uniqueId,
        inCart,
      }),
    });

    return await response.json();
  };
}

const remoteDBService = new RemoteDBService();

export default remoteDBService;

import Cookies from 'js-cookie';

class ServiceToken {
  constructor() {
    this._TOKEN_KEY = 'access_token';
    this._REFRESH_TOKEN_KEY = 'refresh_token';
  }

  getToken() {
    return Cookies.get(this._TOKEN_KEY);
  }

  setToken(accessToken) {
    Cookies.set(this._TOKEN_KEY, accessToken, {
      expires: new Date(new Date().getTime() + 12 * 60 * 60 * 1000),
    });
  }

  removeToken() {
    Cookies.remove(this._TOKEN_KEY);
  }

  getRefreshToken() {
    return Cookies.get(this._REFRESH_TOKEN_KEY);
  }

  setRefreshToken(refreshToken) {
    Cookies.set(this._REFRESH_TOKEN_KEY, refreshToken, {
      expires: 15,
    });
  }

  removeRefreshToken() {
    Cookies.remove(this._REFRESH_TOKEN_KEY);
  }
}

export default new ServiceToken();

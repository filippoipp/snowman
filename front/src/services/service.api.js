import axios from 'axios';
import TokenService from './service.token';

class ApiService {
  constructor() {
    this.interceptor401 = null;
    axios.defaults.baseURL = process.env.VUE_APP_API_ROOT_URL;
  }

  setHeaderAuthorization() {
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${TokenService.getToken()}`;
  }

  removeHeaderAuthorization() {
    axios.defaults.headers.common = {};
  }

  unmount401Interceptor() {
    axios.interceptors.response.eject(this.interceptor401);
  }

  async customRequest(data) {
    this.removeHeaderAuthorization();
    const response = await axios(data);
    this.setHeaderAuthorization();
    return response;
  }
}

export default new ApiService();

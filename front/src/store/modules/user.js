import axios from 'axios'
import { setCurrentUser, getCurrentUser, setCurrentSearch, getCurrentSearch } from "../../utils";
import TokenService from '../../services/service.token';
import ApiService from '../../services/service.api';

export default {
  state: {
    currentUser: getCurrentUser(),
    loginError: null,
    processing: false,
    search: getCurrentSearch()
  },
  getters: {
    currentUser: state => state.currentUser,
    processing: state => state.processing,
    loginError: state => state.loginError,
    search: state => state.search
  },
  mutations: {
    setUser(state, payload) {
      state.currentUser = payload;
      state.processing = false;
      state.loginError = null;
    },
    setLogout(state) {
      state.currentUser = null;
      state.processing = false;
      state.loginError = null;
    },
    setProcessing(state, payload) {
      state.processing = payload;
      state.loginError = null;
    },
    setError(state, payload) {
      state.loginError = payload;
      state.currentUser = null;
      state.processing = false;
    },
    setSearch(state, payload) {
      state.search = payload
    },
    setForgotMailSuccess(state) {
      state.loginError = null;
      state.currentUser = null;
      state.processing = false;
    },
    setResetPasswordSuccess(state) {
      state.loginError = null;
      state.currentUser = null;
      state.processing = false;
    },
    clearError(state) {
      state.loginError = null;
    }
  },
  actions: {
    async login({ commit }, payload) {
      commit("clearError");
      commit("setProcessing", true);

      try {
        const user = await axios.post('/auth', {
          email: payload.email,
          password: payload.password
        })

        TokenService.setToken(user.data.token);

        ApiService.setHeaderAuthorization();

        const item = { token: user.data.token, user_id: user.data.user.id, name: user.data.user.name };
        await setCurrentUser(item);
        commit("setUser", item);
        console.log('chegou')
      } catch (err) {
        console.log(err)
        setCurrentUser(null);
        commit("setError", err.message);
        setTimeout(() => {
          commit("clearError");
        }, 3000);
      }
    },

    searchUsers({ commit }, payload) {
      setCurrentSearch(payload);
      commit("setSearch", payload);    
    },

    signOut({ commit }) {
      TokenService.removeToken();
      TokenService.removeRefreshToken();
      ApiService.removeHeaderAuthorization();
      ApiService.unmount401Interceptor();
      setCurrentUser(null);
      commit("setLogout");
    },
  }
};

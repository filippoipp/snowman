import AuthController from "../../controllers/authController";
import { setCurrentUser, getCurrentUser } from "../../utils";

export default {
  state: {
    currentUser: getCurrentUser(),
    loginError: null,
    processing: false,
  },
  getters: {
    currentUser: state => state.currentUser,
    processing: state => state.processing,
    loginError: state => state.loginError,
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

      const authController = new AuthController();

      try {
        const user = await authController.login(
          payload.email,
          payload.password
        );

        const item = { token: user.token, user_id: user.user.id, name: user.user.name };
        setCurrentUser(item);
        commit("setUser", item);
      } catch (err) {
        setCurrentUser(null);
        commit("setError", err.message);
        setTimeout(() => {
          commit("clearError");
        }, 3000);
      }
    },

    signOut({ commit }) {
      setCurrentUser(null);
      commit("setLogout");
    }
  }
};

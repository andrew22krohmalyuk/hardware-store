import Vue from 'vue';
import Vuex from 'vuex';
import * as API from '../utils/API';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    errors: {
      firstName: null,
      lastName: null,
      birthday: null,
      email: null,
      login: null,
      password: null,
      retypePassword: null,
    },
    app: {
      registerSuccess: null,
    },
    products: [],
  },
  getters: {
    getUser: state => state.user,
    getErrors: state => state.errors,
    getRegisterSuccess: state => state.app.registerSuccess,
  },
  actions: {
    setUserProp(context, payload) {
      context.commit('SET_USER_PROP', payload);
    },
    setErrorsProp(context, payload) {
      context.commit('SET_ERRORS_PROP', payload);
    },
    resetErrorsProp(context, payload) {
      context.commit('RESET_ERRORS_PROP', payload);
    },
    createRegister(context, payload) {
      API.createRegister(payload)
        .then((res) => {
          if (res.status === 200) {
            context.commit('SET_REGISTER_STATUS', { registerSuccess: true });
          } else {
            context.commit('SET_REGISTER_STATUS', { registerSuccess: false });
          }
        });
    },
  },
  mutations: {
    SET_USER_PROP(state, { key, value }) {
      state.user[key] = value;
    },
    SET_ERRORS_PROP(state, { key, value }) {
      state.errors[key] = value;
    },
    RESET_ERRORS_PROP(state, { key }) {
      state.errors[key] = false;
    },
    SET_REGISTER_STATUS(state, { registerSuccess }) {
      state.app.registerSuccess = registerSuccess;
    },
  },
  strict: true,
});

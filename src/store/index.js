import Vue from 'vue';
import Vuex from 'vuex';

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
  },
  getters: {
    getUser: state => state.user,
    getErrors: state => state.errors,
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
  },
  strict: true,
});

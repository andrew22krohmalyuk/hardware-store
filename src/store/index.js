import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    submitErrors: { isValid: true },
  },
  getters: {
    firstName: state => state.user.firstName,
    submitErrors: state => state.submitErrors,
  },
  mutations: {
    UPDATE_FORM(state, data) {
      const { key, value } = data;

      if (state.user[key]) {
        state.user[key] = value;
      }
    },
    UPDATE_ERRORS(state, data) {
      const { key, value } = data;

      if (state.submitErrors[key]) {
        state.submitErrors[key] = value;
      }
    },
  },
  actions: { },
  // strict: true,
});

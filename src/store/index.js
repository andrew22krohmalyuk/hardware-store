import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    errors: { isValid: false },
  },
  getters: {
    getUser: state => state.user,
    getErrors: state => state.errors,
  },
  actions: {
    setUserProp(context, payload) {
      context.commit('setUserProp', payload);
    },
  },
  mutations: {
    setUserProp(state, { key, value }) {
      state.user[key] = value;
    },
  },
  strict: true,
});

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
      addProductsSuccess: null,
    },
    products: [],
  },
  getters: {
    getUser: state => state.user,
    getErrors: state => state.errors,
    getRegisterSuccess: state => state.app.registerSuccess,
    getProductsItems: state => state.products,
    getProductsSuccess: state => state.app.addProductsSuccess,
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
    getProducts(context) {
      API.getProducts()
        .then((res) => {
          if (res.status === 200) {
            context.commit('GET_PRODUCTS_SUCCESS', { products: res.data });
          } else {
            context.commit('GET_PRODUCTS_FAILURE', { products: res.data });
          }
        });
    },
    addProducts(context, payload) {
      API.addProducts(payload)
        .then((res) => {
          if (res.status === 200) {
            context.commit('ADD_PRODUCTS_SUCCESS', { addProductsSuccess: true });
          } else {
            context.commit('ADD_PRODUCTS_FAILURE', { addProductsSuccess: false });
          }
        });
    },
    resetProductsSuccess(context) {
      context.commit('RESET_PRODUCTS_SUCCESS');
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
    GET_PRODUCTS_SUCCESS(state, { products }) {
      state.products = products;
    },
    ADD_PRODUCTS_SUCCESS(state, { addProductsSuccess }) {
      state.app.addProductsSuccess = addProductsSuccess;
    },
    RESET_PRODUCTS_SUCCESS(state) {
      state.app.addProductsSuccess = null;
    },
  },
  strict: true,
});

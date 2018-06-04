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
      editProductsSuccess: null,
    },
    products: [],
    cartItems: [],
  },
  getters: {
    getUser: state => state.user,
    getErrors: state => state.errors,
    getRegisterSuccess: state => state.app.registerSuccess,
    getProductsItems: state => state.products,
    getProductsSuccess: state => state.app.addProductsSuccess,
    getEditProductsSuccess: state => state.app.editProductsSuccess,
    getCartItems: state => state.cartItems,
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
            context.commit('ADD_PRODUCTS_SUCCESS', { addProductsSuccess: true, payload });
          } else {
            context.commit('ADD_PRODUCTS_FAILURE', { addProductsSuccess: false });
          }
        });
    },
    createEditProducts(context, payload) {
      // eslint-disable-next-line
      API.editProducts(payload, payload._id)
        .then((res) => {
          if (res.status === 200) {
            context.commit('EDIT_PRODUCTS_SUCCESS', { editProductsSuccess: true });
          } else {
            context.commit('EDIT_PRODUCTS_FAILURE', { editProductsSuccess: false });
          }
        });
    },
    deleteProducts(context, payload) {
      // eslint-disable-next-line
      API.deleteProducts(payload._id);
      // eslint-disable-next-line
      context.commit('DELETE_PRODUCTS_SUCCESS', payload._id);
    },
    resetProductsSuccess(context) {
      context.commit('RESET_PRODUCTS_SUCCESS');
    },
    buyAction(context, payload) {
      context.commit('BUY_PRODUCT', payload);
    },
    deleteAction(context, payload) {
      // eslint-disable-next-line
      context.commit('DELETE_PRODUCT', payload._id);
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
    ADD_PRODUCTS_SUCCESS(state, { addProductsSuccess, payload }) {
      state.app.addProductsSuccess = addProductsSuccess;
      state.products = [...state.products, payload];
    },
    DELETE_PRODUCTS_SUCCESS(state, id) {
      // eslint-disable-next-line
      state.products = state.products.filter(i => i._id !== id);
    },
    RESET_PRODUCTS_SUCCESS(state) {
      state.app.editProductsSuccess = null;
    },
    EDIT_PRODUCTS_SUCCESS(state) {
      state.app.editProductsSuccess = true;
    },
    BUY_PRODUCT(state, item) {
      state.cartItems = [...state.cartItems, item];
    },
    DELETE_PRODUCT(state, id) {
      // eslint-disable-next-line
      state.cartItems = state.cartItems.filter(i => i._id !== id);
    },
  },
  strict: true,
});

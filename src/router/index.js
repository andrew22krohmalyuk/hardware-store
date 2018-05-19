import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/pages/HomePage';
import CreateAccount from '@/pages/CreateAccount';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/create-account',
      name: 'CreateAccount',
      component: CreateAccount,
    },
  ],
});

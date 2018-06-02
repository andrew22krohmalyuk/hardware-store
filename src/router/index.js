import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/pages/HomePage';
import CreateAccount from '@/pages/CreateAccount';
import WelcomePage from '@/pages/WelcomePage';
import Products from '@/pages/Products';

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
    {
      path: '/welcome-page',
      name: 'WelcomePage',
      component: WelcomePage,
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
    },
  ],
});

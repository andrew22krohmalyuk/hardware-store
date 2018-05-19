<template>
  <div class="home">
    <app-head></app-head>
    <app-menu></app-menu>
    <div class="home__page">Home page!</div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';

export default {
  name: 'home-page',
  components: {
    'app-head': Header,
    'app-footer': Footer,
    'app-menu': Menu,
  },
};
</script>

<style lang="scss" scoped>
  @import "../styles/colors";

  .home {
    &__page {
      height: 600px;
      padding-left: 130px;
    }
  }
</style>

<template>
  <div class="home">
    <app-head></app-head>
    Home page!
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'home-page',
  components: {
    'app-head': Header,
    'app-footer': Footer,
  },
};
</script>

<style lang="scss" scoped>

</style>

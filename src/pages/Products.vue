<template>
    <div class="products">
      <app-head />
      Products Page
      <app-footer />
    </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'products-page',
  components: {
    'app-head': Header,
    'app-footer': Footer,
  },
};
</script>

<style scoped>

</style>

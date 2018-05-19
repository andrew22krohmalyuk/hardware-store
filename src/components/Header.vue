<template>
  <div class="header">
    <div class="header__logo-container">
      <img class="header__logo" src="../assets/axe.svg" alt="Logo">
    </div>
    <div class="header__title">Hardware store</div>
  </div>
</template>

<script>
export default {
  name: 'app-head',
};
</script>

<style lang="scss" scoped>
@import "../styles/colors";

  .header {
    display: flex;
    height: 80px;
    padding: 1rem 3rem;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 3px 30px 0 rgba(0,0,0,0.2);

    &__logo-container {
      width: 50px;
    }

    &__logo {
      width: 100%;
      height: auto;
    }

    &__title {
      font-size: 27px;
      color: $emerald;
      padding: .5rem;
    }
  }

</style>

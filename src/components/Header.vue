<template>
  <div class="header">
    <div class="header__title">Hardware store</div>
  </div>
</template>

<script>
export default {
  name: 'app-head',
};
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Pacifico');
  @import "../styles/colors";

  .header {
    display: flex;
    height: 80px;
    padding: 1rem 3rem;
    align-items: center;
    justify-content: center;
    box-shadow: 0 3px 30px 0 rgba(0,0,0,0.2);

    &__title {
      font-size: 37px;
      font-family: "Pacifico";
      color: $emerald;
      padding: .5rem;
    }
  }

</style>

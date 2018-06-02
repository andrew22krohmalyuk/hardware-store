<template>
    <div class="welcome-page">
      <div class="welcome-page__title">Welcome !</div>
      <div class="welcome-page__content">
        <div class="welcome-page__info-box">
          <div class="welcome-page__info-box-title">Registration completed successfully</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'welcome-page',
};
</script>

<style lang="scss" scoped>
  @import "../styles/colors";

  .welcome-page {
    &__title {
      text-align: center;
      padding-top: 50px;
      font-size: 42px;
      color: $emerald;
    }
    &__content {
      display: flex;
      padding: 50px 100px;
    }

    &__info-box {
      background: $emerald;
      color: $white;
      flex: 1;
      padding: 10px;
      border-radius: 5px;
      height: 250px;
      position: relative;
      box-shadow: 0 6px 35px -2px rgba(0, 0, 0, 0.3);
    }

    &__info-box-title {
      font-size: 21px;
    }
  }
</style>

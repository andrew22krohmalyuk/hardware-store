<template>
    <div class="footer">
      <div class="footer__block">
        <div class="footer__block-title">Address</div>
        <div class="footer__block-list">
          <div class="footer__block-item">632  Christie Way</div>
          <div class="footer__block-item">North Billerica</div>
          <div class="footer__block-item">Massachusetts</div>
        </div>
      </div>
      <div class="footer__block">
        <div class="footer__block-title">Contacts</div>
        <div class="footer__block-list">
          <div class="footer__block-item">Mail</div>
          <div class="footer__block-item">About Us</div>
          <div class="footer__block-item">Ours Stores</div>
        </div>
      </div>
      <div class="footer__block">
        <div class="footer__block-title">Media</div>
        <div class="footer__block-list">
          <div class="footer__block-item">News</div>
          <div class="footer__block-item">RSS</div>
          <div class="footer__block-item">NetWorks</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'app-footer',
};
</script>

<style lang="scss" scoped>
  @import "../styles/colors";

  .footer {
    display: flex;
    justify-content: space-around;
    padding: 1rem 3rem;
    color: $white-smoke;
    background: $night-rider;

    &__block {

    }

    &__block-title {
      font-size: 21px;
    }

    &__block-list {
      padding-top: 10px;
    }

    &__block-item {
      padding: 5px;
      padding-left: 0;
    }
  }

</style>

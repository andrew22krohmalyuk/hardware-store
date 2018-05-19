<template>
  <div class="home">
    <app-head></app-head>
    <app-menu></app-menu>
    <div class="home__page">
      <div class="home__title">Welcome to our store!</div>
      <div class="home__content">
        <div class="home__image-container">
          <img src="../assets/chainsaw.png" alt="Chainsaw" class="home__image">
        </div>
        <form class="home__login-form">
          <div class="home__login-form-input-wrapper">
            <div class="home__login-form-input-title">Email</div>
            <input type="text" class="home__login-form-input">
          </div>
          <div class="home__login-form-input-wrapper">
            <div class="home__login-form-input-title">Password</div>
            <input type="password" class="home__login-form-input">
          </div>
          <div class="home__login-form-button-wrapper">
            <button class="home__login-form-button">Submit</button>
          </div>
        </form>
        <div class="home__image-container home__image-container--delay">
          <img src="../assets/drill.png" alt="Drill" class="home__image home__image--delay">
        </div>
      </div>
    </div>
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

  $animation-duration: 2s;
  $animation-delay: 1s;

  .home {
    &__page {
      height: 600px;
    }

    &__title {
      text-align: center;
      font-size: 27px;
      padding-top: 3rem;
      color: $emerald;
    }

    &__content {
      display: flex;
      justify-content: space-around;
      padding: 0 3rem;
    }

    &__login-form {
      margin-top: 5rem;
    }

    &__login-form-input-title {
      font-size: 17px;
      color: $emerald;
      padding-bottom: 10px;
    }

    &__login-form-input-wrapper {
      margin-bottom: 10px;
    }

    &__login-form-input {
      padding: .7rem .7rem;
      font-size: 17px;
      display: block;
      min-width: 250px;
      border-radius: 3px;
      border: 0;
      color: $emerald;
      background: $white-smoke;
      outline: none;
    }

    &__login-form-button {
      background: $emerald;
      width: 100%;
      border: 0;
      border-radius: 3px;
      color: $white;
      font-size: 17px;
      padding: .7rem;
      cursor: pointer;
      margin-top: 10px;
      transition: background-color .3s;

      &:hover {
        background: $emerald - 15;
      }
    }

    &__image-container {
      align-self: center;
      width: 250px;
      position: relative;

      &:after {
        position: absolute;
        left: 50%;
        bottom: -120px;
        border-radius: 100%;
        content: "";
        background: $night-rider;
        filter: blur(3px);
        opacity: .2;
        width: 80%;
        height: 15px;
        transform: translateX(-50%);
        animation: shadow $animation-duration alternate infinite;
      }

      &--delay {
        &:after {
          animation-delay: $animation-delay;
        }
      }
    }

    &__image {
      display: inline-block;
      width: 100%;
      height: auto;
      animation: levitation $animation-duration alternate infinite;

      &--delay {
        animation-delay: $animation-delay;
      }
    }

    @keyframes levitation {
      0% {
          transform: translateY(0px);
      }

      100% {
        transform: translateY(25px);
      }
    }

    @keyframes shadow {
      0% {
        width: 80%;
      }

      100% {
        width: 70%;
      }
    }
  }
</style>

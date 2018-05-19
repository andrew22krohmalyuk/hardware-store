<template>
    <div class="create-account">
      <app-head />
      <app-menu />
      <div class="create-account__clock-wrapper">
        <app-clock displaySeconds="true" class="create-account__clock" />
      </div>
      <div class="create-account__content">
        <div class="create-account__title">Create account</div>
        <form @submit="createAccount" class="create-account__form">
          <div class="create-account__account__inputs-container">
            <div class="create-account__input-wrapper">
              <div class="create-account__input-title">First Name</div>
              <input v-model="firstName" type="text" class="create-account__input">
            </div>
            <div class="create-account__input-wrapper">
              <div class="create-account__input-title">Last Name</div>
              <input v-model="lastName" type="text" class="create-account__input">
            </div>
            <div class="create-account__input-wrapper">
              <div class="create-account__input-title">Birthday</div>
              <input
                v-model="birthday"
                type="text"
                placeholder="DD MM YYYY"
                class="create-account__input">
            </div>
            <div class="create-account__input-wrapper">
              <div class="create-account__input-title">Email</div>
              <input v-model="email" type="text" class="create-account__input">
            </div>
            <div class="create-account__input-wrapper">
              <div class="create-account__input-title">Login</div>
              <input v-model="login" type="text" class="create-account__input">
            </div>
            <div class="create-account__input-wrapper">
              <div class="create-account__input-title">Password</div>
              <input v-model="password" type="password" class="create-account__input">
            </div>
            <div class="create-account__input-wrapper">
              <div class="create-account__input-title">Repeat Password</div>
              <input v-model="retypePassword" type="password" class="create-account__input">
            </div>
            <div class="create-account__submit-button-container">
              <button class="create-account__submit-button">Submit</button>
            </div>
          </div>
        </form>
      </div>
      <app-footer />
    </div>
</template>

<script>
import Clock from 'vue-digital-clock';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';

export default {
  name: 'create-account',
  components: {
    'app-head': Header,
    'app-footer': Footer,
    'app-menu': Menu,
    'app-clock': Clock,
  },
  data() {
    return {
      errors: { },
      firstName: null,
      lastName: null,
      birthday: null,
      email: null,
      login: null,
      password: null,
      retypePassword: null,
    };
  },
  methods: {
    createAccount(e) {
      const {
        firstName,
        lastName,
        birthday,
        email,
        login,
        password,
        retypePassword,
      } = this;
      let { errors } = this;
      e.preventDefault();

      errors = { isValid: true };

      if (!firstName) {
        errors.firstName = 'Required';
        errors.isValid = false;
      }

      if (!lastName) {
        errors.lastName = 'Required';
        errors.isValid = false;
      }

      if (!birthday) {
        errors.birthday = 'Required';
        errors.isValid = false;
      }

      if (!email) {
        errors.email = 'Required';
        errors.isValid = false;
      }

      if (!login) {
        errors.login = 'Required';
        errors.isValid = false;
      }

      if (!password) {
        errors.password = 'Required';
        errors.isValid = false;
      }

      if (!retypePassword) {
        errors.retypePassword = 'Required';
        errors.isValid = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../styles/colors";

  .create-account {
    &__content {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-bottom: 4rem;
    }

    &__clock-wrapper {
      padding-top: 25px;
      padding-right: 5rem;
      text-align: right;
    }

    &__clock {
      color: $emerald;
      font-size: 32px;
    }

    &__title {
      text-align: center;
      font-size: 21px;
      color: $emerald;
    }

    &__form {
      padding-top: 50px;
    }

    &__input-title {
      color: $emerald;
      font-size: 17px;
    }

    &__input-wrapper {
      margin-bottom: 15px;
    }

    &__input {
      padding: .6rem .7rem;
      margin-top: 5px;
      font-size: 16px;
      display: block;
      min-width: 250px;
      border-radius: 3px;
      border: 0;
      color: $emerald;
      background: $white-smoke;
      outline: none;
    }

    &__submit-button {
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
  }
</style>

<template>
    <div class="create-account">
      <app-head />
      <app-menu />
      <div class="create-account__clock-wrapper">
        <app-clock displaySeconds="true" class="create-account__clock" />
      </div>
      <div class="create-account__content">
        <div class="create-account__title">Create account</div>
        <form class="create-account__form">
          <div class="create-account__account__inputs-container">
            <div class="create-account__input-wrapper">
              <div class="create-account__input-title">First Name</div>
              <input
                v-model="firstName"
                type="text" class="create-account__input"
              >
            </div>
            <div class="create-account__input-wrapper">
              <div class="create-account__input-title">Last Name</div>
              <input
                v-model="lastName"
                type="text" class="create-account__input"
              >
            </div>
            <div class="create-account__input-wrapper">
              <div class="create-account__input-title">Birthday</div>
              <input
                type="text"
                v-model="birthday"
                placeholder="DD MM YYYY"
                class="create-account__input">
            </div>
            <div class="create-account__input-wrapper">
              <div class="create-account__input-title">Email</div>
              <input
                v-model="email"
                type="text" class="create-account__input"
              >
            </div>
            <div class="create-account__input-wrapper">
              <div class="create-account__input-title">Login</div>
              <input
                v-model="login"
                type="text" class="create-account__input"
              >
            </div>
            <div class="create-account__input-wrapper">
              <div class="create-account__input-title">Password</div>
              <input
                type="password"
                v-model="password"
                class="create-account__input"
              >
            </div>
            <div class="create-account__input-wrapper">
              <div class="create-account__input-title">Repeat Password</div>
              <input
                v-model="retypePassword"
                type="password" class="create-account__input"
              >
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
import debounce from 'lodash/debounce';
import { mapGetters, mapActions } from 'vuex';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
// import { validatePassword } from '@/utils/validators';

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
      firstName: null,
      lastName: null,
      birthday: null,
      email: null,
      login: null,
      password: null,
      retypePassword: null,
      errors: null,
    };
  },
  computed: {
    ...mapGetters([
      'getUser',
      'getErrors',
    ]),
  },
  watch: {
    firstName(newVal) {
      this.debounceSetProperty({ key: 'firstName', value: newVal });
    },
    lastName(newVal) {
      this.debounceSetProperty({ key: 'lastName', value: newVal });
    },
    birthday(newVal) {
      this.debounceSetProperty({ key: 'birthday', value: newVal });
    },
    email(newVal) {
      this.debounceSetProperty({ key: 'email', value: newVal });
    },
    login(newVal) {
      this.debounceSetProperty({ key: 'login', value: newVal });
    },
    password(newVal) {
      this.debounceSetProperty({ key: 'password', value: newVal });
    },
    retypePassword(newVal) {
      this.debounceSetProperty({ key: 'retypePassword', value: newVal });
    },
  },
  methods: {
    ...mapActions([
      'setUserProp',
    ]),
  },
  created() {
    this.debounceSetProperty = debounce(this.setUserProp, 800);
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

<template>
    <div class="create-account">
      <app-head />
      <app-menu />
      <div class="create-account__clock-wrapper">
        <app-clock displaySeconds="true" class="create-account__clock" />
      </div>
      <div class="create-account__content">
        <div class="create-account__title">Create account</div>
        <form @submit="submit" class="create-account__form">
          <div class="create-account__account__inputs-container">
            <div class="create-account__input-wrapper">
              <div class="create-account__input-error-msg" v-if="getErrors.firstName">
                {{ getErrors.firstName }}
              </div>
              <div class="create-account__input-title">First Name</div>
              <input
                v-model="firstName"
                :class="{ ['create-account__input--error']: getErrors.firstName }"
                type="text" class="create-account__input"
              >
            </div>
            <div class="create-account__input-wrapper">
              <div class="create-account__input-error-msg" v-if="getErrors.lastName">
                {{ getErrors.lastName }}
              </div>
              <div class="create-account__input-title">Last Name</div>
              <input
                v-model="lastName"
                :class="{ ['create-account__input--error']: getErrors.lastName }"
                type="text" class="create-account__input"
              >
            </div>
            <div class="create-account__input-wrapper">
              <div class="create-account__input-error-msg" v-if="getErrors.birthday">
                {{ getErrors.birthday }}
              </div>
              <div class="create-account__input-title">Birthday</div>
              <input
                type="text"
                v-model="birthday"
                :class="{ ['create-account__input--error']: getErrors.birthday }"
                placeholder="DD MM YYYY"
                class="create-account__input">
            </div>
            <div class="create-account__input-wrapper">
              <div class="create-account__input-error-msg" v-if="getErrors.email">
                {{ getErrors.email }}
              </div>
              <div class="create-account__input-title">Email</div>
              <input
                v-model="email"
                :class="{ ['create-account__input--error']: getErrors.email }"
                type="text" class="create-account__input"
              >
            </div>
            <div class="create-account__input-wrapper">
              <div class="create-account__input-error-msg" v-if="getErrors.login">
                {{ getErrors.login }}
              </div>
              <div class="create-account__input-title">Login</div>
              <input
                v-model="login"
                :class="{ ['create-account__input--error']: getErrors.login }"
                type="text" class="create-account__input"
              >
            </div>
            <div class="create-account__input-wrapper">
              <div class="create-account__input-error-msg" v-if="getErrors.password">
                {{ getErrors.password }}
              </div>
              <div class="create-account__input-title">Password</div>
              <input
                type="password"
                v-model="password"
                :class="{ ['create-account__input--error']: getErrors.password }"
                class="create-account__input"
              >
            </div>
            <div class="create-account__input-wrapper">
              <div class="create-account__input-error-msg" v-if="getErrors.retypePassword">
                {{ getErrors.retypePassword }}
              </div>
              <div class="create-account__input-title">Repeat Password</div>
              <input
                v-model="retypePassword"
                :class="{ ['create-account__input--error']: getErrors.retypePassword }"
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
import { validatePassword } from '@/utils/validators';

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
      if (newVal) {
        this.resetErrorsProp({ key: 'firstName' });
        this.debounceSetProperty({ key: 'firstName', value: newVal });
      } else {
        this.setUserProp({ key: 'firstName', value: null });
        this.setErrorsProp({ key: 'firstName', value: 'Required' });
      }
    },
    lastName(newVal) {
      if (newVal) {
        this.resetErrorsProp({ key: 'lastName' });
        this.debounceSetProperty({ key: 'lastName', value: newVal });
      } else {
        this.setUserProp({ key: 'lastName', value: null });
        this.setErrorsProp({ key: 'lastName', value: 'Required' });
      }
    },
    birthday(newVal) {
      if (newVal) {
        this.resetErrorsProp({ key: 'birthday' });
        this.debounceSetProperty({ key: 'birthday', value: newVal });
      } else {
        this.setUserProp({ key: 'birthday', value: null });
        this.setErrorsProp({ key: 'birthday', value: 'Required' });
      }
    },
    email(newVal) {
      if (newVal) {
        this.resetErrorsProp({ key: 'email' });
        this.debounceSetProperty({ key: 'email', value: newVal });
      } else {
        this.setUserProp({ key: 'email', value: null });
        this.setErrorsProp({ key: 'email', value: 'Required' });
      }
    },
    login(newVal) {
      if (newVal) {
        this.resetErrorsProp({ key: 'login' });
        this.debounceSetProperty({ key: 'login', value: newVal });
        if (newVal.length < 6) {
          this.setUserProp({ key: 'login', value: null });
          this.setErrorsProp({ key: 'login', value: 'Must be greater than 6' });
        }
      } else {
        this.setUserProp({ key: 'login', value: null });
        this.setErrorsProp({ key: 'login', value: 'Required' });
      }
    },
    password(newVal) {
      if (newVal) {
        this.resetErrorsProp({ key: 'password' });
        this.debounceSetProperty({ key: 'password', value: newVal });

        if (!validatePassword(newVal)) {
          this.setErrorsProp({ key: 'password', value: 'Password incorrect' });
        }
      } else {
        this.setUserProp({ key: 'password', value: null });
        this.setErrorsProp({ key: 'password', value: 'Required' });
      }
    },
    retypePassword(newVal) {
      if (newVal) {
        this.resetErrorsProp({ key: 'retypePassword' });
        this.debounceSetProperty({ key: 'retypePassword', value: newVal });

        if (newVal !== this.getUser.password) {
          this.setErrorsProp({ key: 'retypePassword', value: 'Passwords do not match' });
        }
      } else {
        this.setUserProp({ key: 'retypePassword', value: null });
        this.setErrorsProp({ key: 'retypePassword', value: 'Required' });
      }
    },
  },
  methods: {
    ...mapActions([
      'setUserProp',
      'setErrorsProp',
      'resetErrorsProp',
    ]),
    submit() {
      // eslint-disable-next-line
      const isValidForm = Object.values(this.getErrors).every(item => !item) && Object.values(this.getUser).length === 7;

      if (isValidForm) {
        // TODO send post
      }
    },
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
      position: relative;
    }

    &__input-error-msg {
      color: $alizarin-dark;
      position: absolute;
      font-size: 12px;
      right: 0;
    }

    &__input {
      padding: .6rem .7rem;
      margin-top: 5px;
      font-size: 16px;
      display: block;
      min-width: 250px;
      border-radius: 3px;
      border: 1px solid $white-smoke;
      color: $emerald;
      background: $white-smoke;
      outline: none;

      &--error {
        border: 1px solid $alizarin;
      }
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

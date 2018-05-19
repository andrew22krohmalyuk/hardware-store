<template>
    <div class="menu">
      <div class="menu__wrapper">
        <div class="menu__burger" @click="toggle">
          <span class="menu__burger-line"></span>
          <span class="menu__burger-line"></span>
          <span class="menu__burger-line"></span>
        </div>
        <ul class="menu__list" :class="{ ['menu__list--active']: activeMenu }">
          <li class="menu__item">
            <router-link class="menu__link" to="/">Home</router-link>
          </li>
          <li class="menu__item">
            <router-link class="menu__link" to="/catalog">Catalog</router-link>
          </li>
          <li class="menu__item">
            <router-link class="menu__link" to="/contact-us">Contact Us</router-link>
          </li>
          <li class="menu__item">
            <router-link class="menu__link" to="/stores">Stores</router-link>
          </li>
          <li class="menu__item">
            <router-link class="menu__link" to="/help">Help</router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'app-menu',
  data() {
    return {
      activeMenu: false,
    };
  },
  methods: {
    toggle() {
      this.activeMenu = !this.activeMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../styles/colors";

  .menu {
    position: fixed;
    top: 30px;
    left: 5px;
    display: inline-block;

    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__list {
      background: $emerald;
      display: flex;
      overflow: hidden;
      flex-direction: column;
      transition: transform .2s ease-out;
      transform: translate(-110px ,0);

      &--active {
        transform: translate(0 ,0);
      }
    }

    &__item {

    }

    &__link {
      padding: 1rem;
      display: block;
      color: $white-smoke;
      text-decoration-line: none;
      transition: background-color .3s;

      &:hover {
        background: rgba(0, 0, 0, .1);
      }
    }

    &__burger {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      cursor: pointer;
      align-self: flex-start;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: $emerald;
      margin-bottom: 40px;
      margin-left: 30px;
      transition: background .2s ease-out;

      &:hover {
        background: $emerald - 15;
      }
    }

    &__burger-line {
      display: inline-block;
      width: 60%;
      height: 4px;
      background: $white;
      border-radius: 3px;

      &:not(:first-child) {
        margin-top: 4px;
      }
    }
  }

</style>

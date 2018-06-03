<template>
    <div class="products">
      <app-head />
      <div class="products__content">
        <div class="products__title">Products Page</div>
        <div class="products__items-wrapper">
          <div
            v-for="item in getProductsItems"
            :key="item._id"
            class="products__item-wrapper"
          >
            <div class="products__item-image-wrapper">
              <div class="products__item-price">
                {{ item.price }}
              </div>
              <div class="products__item-image-edit-wrapper">
                <img class="products__item-image-edit" src="@/assets/edit.svg" alt="">
              </div>
              <div class="products__item-image-save-wrapper">
                <img class="products__item-image-save" src="@/assets/check.svg" alt="">
              </div>
              <img :src="item.imageUrl" class="products__item-image" />
              <div class="products__item-title">
                {{ item.name }}
              </div>
            </div>
            <div class="products__item-description">
              {{ item.description }}
            </div>
            <div class="products__item-button-wrapper">
              <button class="products__item-button">Buy</button>
            </div>
          </div>
        </div>
      </div>
      <app-footer />
    </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'products-page',
  components: {
    'app-head': Header,
    'app-footer': Footer,
  },
  computed: {
    ...mapGetters([
      'getProductsItems',
    ]),
  },
  methods: {
    ...mapActions([
      'getProducts',
    ]),
  },
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
  @import "../styles/colors";

  .products {
    &__content {
      padding: 50px 10px;
    }

    &__items-wrapper {
      display: flex;
      flex-wrap: wrap;
      margin-top: 30px;
      justify-content: space-around;
    }

    &__item-wrapper {
      margin: 10px;
      border-radius: 5px;
      overflow: hidden;
      max-width: 320px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 3px 4px 10px 4px rgba(0,0,0,0.2);

      &:hover {
        .products__item-image-edit-wrapper {
          transform: translateY(0);
        }
      }
    }

    &__item-image-wrapper {
      position: relative;
    }

    &__item-image {
      width: 100%;
      height: auto;
      display: block;
    }

    &__item-image-edit-wrapper {
      position: absolute;
      width: 21px;
      top: 0px;
      right: 60px;
      cursor: pointer;
      padding: 7px;
      padding-top: 15px;
      background: rgba(0, 0, 0, .4);
      border-radius: 0 0 12px 12px;
      transition: transform .3s;
      transform: translateY(-100%);
    }

    &__item-image-edit {
      width: 100%;
      height: auto;
      display: block;
    }

    &__item-image-save-wrapper {
      position: absolute;
      width: 21px;
      top: 0px;
      right: 15px;
      cursor: pointer;
      padding: 7px;
      padding-top: 15px;
      background: rgba(0, 0, 0, .4);
      border-radius: 0 0 12px 12px;
      transition: transform .3s;
      transform: translateY(-100%);
    }

    &__item-image-save {
      width: 100%;
      height: auto;
      display: block;
    }

    &__item-title {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 5px 10px;
      font-size: 24px;
      color: $white;
      background: rgba(0, 0, 0, .3);
      text-align: right;
    }

    &__item-description {
      font-size: 14px;
      line-height: 1.3;
      padding: 15px 25px;
      color: $night-rider;
    }

    &__item-price {
      position: absolute;
      left: 5px;
      top: 5px;
      font-size: 17px;
      color: $white;
      background: $emerald;
      padding: 3px;
      border-radius: 3px;
    }

    &__item-button-wrapper {
      display: flex;
    }

    &__item-button {
      flex: 1;
      border: 0;
      padding: 15px;
      color: $white;
      outline: none;
      cursor: pointer;
      font-size: 21px;
      transition: background 4s;
      background: linear-gradient(90deg, $emerald, $emerald + 25);

      &:hover {
        background: linear-gradient(90deg, $emerald - 10, $emerald + 15);
      }
    }
  }
</style>

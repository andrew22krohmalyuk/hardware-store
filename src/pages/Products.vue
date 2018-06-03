<template>
    <div class="products">
      <app-head />
      <div class="products__content">
        <div @click="showModal" class="products__add-image-wrapper">
          <img class="products__add-image" src="@/assets/plus.svg" alt="Add Icon">
        </div>
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
      <div
        class="products__add-modal-wrapper"
        :class="{ ['products__add-modal-wrapper--active']: isActiveModal }"
      >
        <div
          class="products__add-modal"
          :class="{ ['products__add-modal--active']: isActiveModal }"
        >
          <div @click="closeModal" class="products__add-modal-close-wrapper">
            <img
              class="products__add-modal-close"
              src="@/assets/times.svg"
              alt="Close Icon"
            >
          </div>
          <div class="products__add-modal-inputs">
            <div class="products__add-modal-input-wrapper">
              <input
                v-model="newProduct.name"
                placeholder="Name"
                class="products__add-modal-input"
                type="text"
              >
            </div>
            <div class="products__add-modal-input-wrapper">
              <input
                v-model="newProduct.imageUrl"
                placeholder="Image Url"
                class="products__add-modal-input"
                type="text"
              >
            </div>
            <div class="products__add-modal-input-wrapper">
              <input
                v-model="newProduct.price"
                placeholder="Price"
                class="products__add-modal-input"
                type="text"
              >
            </div>
            <div class="products__add-modal-select-wrapper">
              <select
                v-model="newProduct.group"
                class="products__add-modal-select"
                name="group"
              >
                <option></option>
                <option value="Building Materials">Building Materials</option>
                <option value="Hand Tools">Hand Tools</option>
              </select>
            </div>
            <div class="products__add-modal-textarea-wrapper">
              <textarea
                v-model="newProduct.description"
                class="products__add-modal-textarea"
                placeholder="Description"
                name="description"
              ></textarea>
            </div>
            <div class="products__add-modal-button-wrapper">
              <button @click="submit" class="products__add-modal-button">Save</button>
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
  data() {
    return {
      isActiveModal: false,
      newProduct: {
        name: null,
        imageUrl: null,
        price: null,
        group: null,
        description: null,
      },
    };
  },
  components: {
    'app-head': Header,
    'app-footer': Footer,
  },
  computed: {
    ...mapGetters([
      'getProductsItems',
      'getProductsSuccess',
    ]),
  },
  methods: {
    ...mapActions([
      'getProducts',
      'addProducts',
      'resetProductsSuccess',
    ]),
    submit() {
      this.addProducts(this.newProduct);
    },
    showModal() {
      this.isActiveModal = true;
    },
    closeModal() {
      this.isActiveModal = false;
    },
  },
  watch: {
    getProductsSuccess(newVal) {
      if (newVal) {
        this.closeModal();

        setTimeout(() => {
          this.getProducts();
          this.resetProductsSuccess();
        }, 3000);
      }
    },
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
      padding: 50px 120px;
    }

    &__items-wrapper {
      display: flex;
      flex-wrap: wrap;
      margin-top: 30px;
      justify-content: space-around;
    }

    &__item-wrapper {
      margin: 10px;
      margin-bottom: 50px;
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

    &__add-image-wrapper {
      position: fixed;
      left: 30px;
      bottom: 250px;
      width: 30px;
      height: 30px;
      padding: 10px;
      background: $emerald;
      border-radius: 50%;
      cursor: pointer;
      z-index: 9;
      box-shadow: 10px 10px 27px -6px rgba(0,0,0,.2);
      transition: background .3s;

      &:hover {
        background: $emerald - 25;
      }
    }

    &__add-image {
      width: 100%;
      height: auto;
      transform: translateY(-2px);
    }

    &__add-modal-wrapper {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 9;
      background: rgba(0, 0, 0, .4);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity .3s;
      opacity: 0;
      visibility: hidden;

      &--active {
        opacity: 1;
        visibility: visible;
      }
    }

    &__add-modal {
      width: 450px;
      transition: transform .5s;
      transform: translateY(10px);

      &--active {
        transform: none;
      }
    }

    &__add-modal-close-wrapper {
      width: 15px;
      padding: 5px;
      cursor: pointer;
      margin-top: 5px;
      margin-right: 5px;
      align-self: flex-end;
    }

    &__add-modal-close {
      width: 100%;
      height: auto;
    }

    &__add-modal {
      background: $white;
      display: flex;
      flex-direction: column;
      border-radius: 3px;
    }

    &__add-modal-inputs {
      padding: 15px;
    }

    &__add-modal-input-wrapper {
      display: flex;
    }

    &__add-modal-input {
      flex: 1;
      padding: .6rem .7rem;
      margin-top: 10px;
      font-size: 16px;
      display: block;
      min-width: 250px;
      border-radius: 3px;
      border: 1px solid $white-smoke;
      color: $emerald;
      background: $white-smoke;
      outline: none;
    }

    &__add-modal-select-wrapper {

    }

    &__add-modal-select {
      outline: none;
      width: 100%;
      border: 0;
      color: $emerald;
      height: 39px;
      margin: 10px 0;
      font-size: 14px;
    }

    &__add-modal-textarea-wrapper {
      display: flex;
    }

    &__add-modal-textarea {
      flex: 1;
      border: 1px solid $white-smoke;
      color: $emerald;
      font-size: 16px;
      height: 100px;
      outline: none;
      border-radius: 3px;
      padding: 10px;
      background: $white-smoke;
    }

    &__add-modal-button-wrapper {
      display: flex;
      padding-top: 10px;
    }

    &__add-modal-button {
      padding: 10px;
      flex: 1;
      font-size: 21px;
      border: 0;
      outline: none;
      border-radius: 3px;
      color: $white;
      cursor: pointer;
      transition: background 4s;
      background: linear-gradient(90deg, $emerald, $emerald + 25);

      &:hover {
        background: linear-gradient(90deg, $emerald - 10, $emerald + 15);
      }
    }
  }
</style>

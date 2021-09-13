<template>
  <div id="product-card">
    <router-link
      class="image-wrapper"
      :to="pathTo"
    >
      <img :src="imageURL" :alt="name" />
      <span class="product-id">Item Id: {{productId}}</span>
    </router-link>
    <div class="info-wrapper">
      <router-link
        class="title"
        :to="pathTo"
      >
        {{name}}
      </router-link>
      <span class="product-price">${{filteredPrice}}</span>
      <span class="product-dimensions">{{dimensions}}</span>
    </div>
  </div>
</template>

<script>
import ProductMixin from '@/mixins/Products.mixin';

export default {
  name: 'ProductCard',
  mixins: [ProductMixin],
  props: {
    itemId: {
      type: Number,
      default: 1,
    },
    name: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    productId: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 0,
    },
    dimensions: {
      type: String,
      default: '',
    },
  },
  computed: {
    pathTo() {
      return `/products/${this.itemId}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars.scss';

#product-card {
  position: relative;
  width: 280px;
  background-color: #eee;
  margin: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 5px;
  overflow: hidden;

  .image-wrapper {
    background-color: #fff;
    width: 265px;
    height: 300px;

    @media(max-width: 768px) {
      width: 265px;
      height: 250px;
    }

    .product-id {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      color: #aaa;
      position: absolute;
      top: 15px;
      right: 18px;
    }
  }

  .info-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 265px;
    flex-grow: 1;

    .title {
      font-size: 16px;
      font-weight: 700;
      text-decoration: none;
      color: $colorSecondary;
      margin-top: 10px;
    }

    span {
      padding: 5px 0 0 0;
      font-size: 14px;
      font-weight: 600;
      text-align: left;
    }

    p {
      text-align: left;
      font-size: 12px;
      font-weight: 600;
      color: #aaa;
    }
  }
}

</style>

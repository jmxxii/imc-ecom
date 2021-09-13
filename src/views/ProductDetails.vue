<template>
  <div
    id="product-details"
    class="general-layout"
  >
    <div class="product-details-container">
      <rep-info-bar />
      <go-back-nav class="back-nav" />
      <hr class="divider">
      <div class="product-details-wrapper">
        <div class="product-details-image">
          <img :src="imageURL" alt="name">
        </div>
        <div class="product-details-info">
          <h3>{{ name }}</h3>
          <span class="item-id">ITEM ID: {{ itemId }}</span>
          <span class="price">${{ filteredPrice }}</span>
          <span class="dimensions">Size: {{ dimensions }}</span>
          <span class="about-info">About this item:</span>
          <p class="description">{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductMixin from '@/mixins/Products.mixin';
import RepInfoBar from '@/components/SalesRep/RepInfoBar.vue';
import GoBackNav from '@/components/navigation/GoBackNav.vue';

export default {
  name: 'ProductDetails',
  mixins: [ProductMixin],
  components: { GoBackNav, RepInfoBar },
  computed: {
    paramId() {
      return this.$route.params.id;
    },
    currentItem() {
      return this.item[0];
    },
    name() {
      /*
      This whole structure is optional.
      We could just check if the item exist and then render the content.
      But either way its a good option when we don't expect to have all the data.
      */
      return this.currentItem?.ItemName || '';
    },
    image() {
      return this.currentItem?.PhotoName || ''; // Substitution for place holder instead of empty string
    },
    price() {
      return this.currentItem?.BasePrice || 0;
    },
    itemId() {
      return this.currentItem?.ItemID || '';
    },
    dimensions() {
      return this.currentItem?.Dimensions || '';
    },
    description() {
      return this.currentItem?.Description || 'No Description';
    },
  },
  mounted() {
    this.getItem();
  },
};
</script>

<style lang="scss" scoped>

#product-details {
  align-items: flex-start;

  .product-details-container {
    background-color: #ddd;
    width: 100%;
    padding-bottom: 100px;

    .back-nav {
      margin-left: 25px;
      padding: 15px 0;
    }

    hr.divider {
      border-top: 2px solid #bbb;
      border-radius: 5px;
      width: 90%;
    }

    .product-details-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      @media(max-width: 600px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .product-details-image {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        width: 320px;
        max-width: 320px;
        height: 320px;
        margin: 25px;

        @media(max-width: 600px) {
          width: 340px;
          height: 340px;
        }
      }

      .product-details-info {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        padding: 0 25px;
        max-width: 320px;
        min-height: 320px;

        @media(max-width: 768px) {
          max-width: 250px;
        }

        h3 {
          margin-bottom: 0;
        }

        span {
          margin-bottom: 10px;
        }

        p {
          margin-top: 0;
          text-align: left;
          font-size: 14px;
        }

        .item-id {
          font-size: 14px;
          font-weight: 600;
          color: #7d7d7d;
        }

        .price {
          color: #B12704;
        }

        .about-info {
          font-weight: 600;
          font-size: 16px;
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>

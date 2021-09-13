<template>
  <div
    id="products"
    class="general-layout"
  >
    <div class="products-container">
      <rep-info-bar />
      <product-card
        v-for="product in products"
        :key="product.ProductID"
        :item-id="product.ProductID"
        :name="product.ItemName"
        :image="product.PhotoName"
        :product-id="product.ItemID"
        :price="product.BasePrice"
        :dimensions="product.Dimensions"
        :description="product.Description"
      />
      <!-- Typically would just bind for a cleaner code -->
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/Products/ProductCard.vue';
import RepInfoBar from '@/components/SalesRep/RepInfoBar.vue';
import ProductMixin from '@/mixins/Products.mixin';

export default {
  name: 'Products',
  mixins: [ProductMixin],
  components: { RepInfoBar, ProductCard },
  computed: {
  },
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>

#products {
  display: flex;
  justify-content: center;
  margin-bottom: 100px;

  .products-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}

</style>

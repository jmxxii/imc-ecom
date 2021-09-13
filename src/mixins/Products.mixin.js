import getData from '@/api/api';
import ResponsiveMixin from '@/mixins/Responsive.mixin';

export default {
  mixins: [ResponsiveMixin],
  data() {
    return {
      products: [],
      item: {},
    };
  },
  computed: {
    filteredPrice() {
      if (!this.price) return '$0.00';

      return this.price.toFixed(2);
    },
    imageURL() {
      if (!this.image) return '';

      if (this.isMobile) return `${this.image}?w=200&height=250`;

      return `${this.image}?w=250&height=300`;
    },
  },
  methods: {
    async getProducts() {
      this.products = await getData('/items');
    },
    async getItem() {
      this.item = await getData(`/items?ProductID=${this.paramId}`);
    },
  },
};

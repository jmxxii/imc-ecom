export default {
  inject: ['sizes'],
  computed: {
    isMobile() {
      return this.sizes.page.width <= 768;
    },
  },
};

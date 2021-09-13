<template>
  <nav-bar/>
  <router-view />
  <site-footer />
</template>

<script>
import NavBar from './components/navigation/NavBar.vue';
import SiteFooter from './components/navigation/Footer.vue';

export default {
  name: 'Root',
  components: {
    NavBar,
    SiteFooter,
  },
  provide() {
    const sizes = {};

    Object.defineProperty(sizes, 'page', {
      enumerable: true,
      get: () => this.pageSizer,
    });

    return { sizes };
  },
  data() {
    return {
      pageSizer: null,
    };
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      const { innerHeight: height, innerWidth: width } = window;
      this.pageSizer = { height, width };
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
@import "assets/styles/general.scss";
</style>

<template>
  <header
    id="nav"
    :class="{scrolled: scrollPosition > 5}"
  >
    <div class="nav-container">
      <a
        class="logo-container"
        href="/"
      >
          <img
            class="repzio-logo"
            :src="logoUri"
            alt="repzio-logo"
          />
      </a>
      <nav
        v-if="!isMobile"
        class="nav-links"
      >
        <v-button
          v-for="btn in navButtons"
          :key="btn.title"
          v-bind="btn"
        />
      </nav>

      <v-button
        v-else
        class="mobile-menu-btn"
        title="Menu"
        type="cta"
        :on-click="toggleMobileMenu"
      />

      <mobile-menu
        class="mobile"
        :nav-buttons="navButtons"
        :show-menu="showMobileMenu"
        @close="toggleMobileMenu"
      />
    </div>
  </header>
</template>

<script>
import { logo } from '../../../mock_env';
import { header } from '@/components/navigation/navigationButtons';
import VButton from '@/components/buttons/Button.vue';
import Responsive from '@/mixins/Responsive.mixin';
import MobileMenu from '@/components/navigation/MobileMenu.vue';

export default {
  name: 'NavBar',
  mixins: [Responsive],
  components: { MobileMenu, VButton },
  data() {
    return {
      isMobileMenuOpen: false,
      navButtons: header,
      scrollPosition: null,
      width: '?width=80',
    };
  },
  computed: {
    logoUri() {
      return logo + this.width;
    },
    showMobileMenu() {
      return this.isMobile && this.isMobileMenuOpen;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/vars.scss";

#nav {
  position: fixed;
  background-color: #fff;
  top: 0;
  margin: 0;
  padding: 10px;
  width: 100%;
  z-index: 998;

  .nav-container {
    display: flex;
    justify-content: space-between;

    .logo-container {
      width: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .nav-links {
      display: flex;
      align-items: center;
      margin: 0 25px;
      min-width: 300px;
    }

    .mobile-menu-btn {
      display: flex;
      align-items: center;
      margin: 0 25px;
      min-width: 50px;
    }
  }
}

.scrolled {
  box-shadow: 0 5px 10px rgba($colorSecondary, .8);
  transition: box-shadow 0.3s ease-in;
}

</style>

<template>
  <nav
    id="mobile-menu"
    :class="{active: showMenu}"
  >
    <ul class="mobile-menu-ul">
      <li
        v-for="btn in navButtons"
        :key="btn.title"
        class="mobile-menu-li"
        @click="closeMenu"
      >
        <v-button
          v-bind="btn"
        />
      </li>
    </ul>

    <!-- ICON BUTTON | This would be an icon with its dedicated component -->
    <button
      class="close-btn"
      @click="closeMenu"
    >
      X
    </button>
    <!-- END -->

  </nav>
</template>

<script>
import VButton from '@/components/buttons/Button.vue';

export default {
  name: 'MobileMenu',
  components: { VButton },
  props: {
    navButtons: {
      type: Array,
      default: () => ([]),
    },
    showMenu: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeMenu() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/vars.scss";

#mobile-menu {
  background-color: $colorPrimary;
  height: 100%;
  width: 300px;
  position: fixed;
  top: 0;
  right: -100%;
  opacity: 0;
  display: flex;
  justify-content: center;
  z-index: 999;
  transition: right 0.4s, opacity 0.5s;

  &.active {
    right: 0;
    opacity: 1;
  }

  .mobile-menu-ul {
    margin-top: 75px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    .mobile-menu-li {
      list-style: none;
      margin-bottom: 25px;
      width: fit-content;
    }
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    font-size: 24px;
    height: 35px;
    width: 35px;
    background-color: transparent;
    cursor: pointer;
  }
}

</style>

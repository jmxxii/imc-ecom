<template>
  <div
    v-if="isCallToAction"
    class="regular-btn"
  >
    <button
      class="btn"
      :class="{'light-btn': light, 'dark-btn': !light}"
      @click="onClick"
    >
      {{ title }}
    </button>
  </div>

  <router-link
    v-else-if="isRegular"
    class="regular-btn"
    :to="path"
  >
    <button
      class="btn"
      :class="{'light-btn': light, 'dark-btn': !light}"
    >
      {{ title }}
    </button>
  </router-link>

  <router-link
    v-else
    class="link-btn"
    :to="path"
    :target="target"
   >
    <span
      class="dark-link"
      :class="{'light-link': light}"
    >
      {{ title }}
    </span>
  </router-link>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'regular',
    },
    path: {
      type: String,
      default: '/',
    },
    target: {
      type: String,
      default: '_self',
    },
    light: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    isRegular() {
      return this.type === 'regular';
    },
    isCallToAction() {
      return this.type === 'cta';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.link-btn {
  color: $colorSecondary;
  text-decoration: none;
  padding: 5px;

  .dark-link {
    font-weight: 600;
  }

  .light-link {
    color: #fff;
  }

  &:hover {
    text-decoration: underline;
    text-decoration-color: $colorPrimary;
    text-decoration-thickness: 2px;
  }
}

.regular-btn {
  padding: 5px;

  .btn {
    padding: 10px 25px;
    border-radius: 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    font-weight: 600;
  }

  .dark-btn {
    background-color: $colorSecondary;
    color: #fff;
    border: #fff solid 1px;

    &:hover {
      background-color: transparent;
      color: $colorSecondary;
      border-color: $colorSecondary;
    }
  }

  .light-btn {
    background-color: transparent;
    border: $colorSecondary solid 1px;
    color: $colorSecondary;

    &:hover {
      background-color: $colorSecondary;
      color: #fff;
      border-color: #fff;
    }
  }
}

</style>

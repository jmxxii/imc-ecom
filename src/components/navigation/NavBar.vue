<template>
  <header id="nav">
    <div class="nav-container">
      <div class="logo-container">
        <img
          class="repzio-logo"
          :src="logoUri"
          alt="repzio-logo"
        />
      </div>

      <div class="nav-links">
        <p>nav links</p>
      </div>
    </div>
  </header>
</template>

<script>
import { logo } from '@/mock_env';

export default {
  name: 'NavBar',
  computed: {
    logoUri() {
      const paramConfig = '?width=100';

      return logo + paramConfig;
    },
  },
};
</script>

<style lang="scss" scoped>

#nav {
  background-color: #42b983;
  width: 100%;

  .nav-container {
    display: flex;
    justify-content: space-between;

    .logo-container {
      width: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

</style>

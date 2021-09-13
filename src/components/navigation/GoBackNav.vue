<template>
  <div id="go-back-nav">
    <span>﹤</span>
    <a @click="$router.back()">Back to products</a>
  </div>
</template>

<script>
export default {
  name: 'GoBackNav',
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/vars.scss";

#go-back-nav {
  display: flex;

  a {
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      text-decoration-color: $colorPrimary;
      text-decoration-thickness: 2px;
    }
  }
}
</style>

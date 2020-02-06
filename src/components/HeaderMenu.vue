<template>
  <div class="header-menu">
    <container>
      <router-link
        class="header-menu--link"
        to="/"
      >Home</router-link>
      &nbsp;
      <router-link
        class="header-menu--link"
        to="/about"
      >About</router-link>
    </container>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped lang="scss">
  .header-menu {
    height: $headerHeight;
    background-color: $clrMain;
    position: fixed;
    top: 0;
    width: 100%;

    .container {
      height: 100%;
      display: flex;
      flex-flow: row nowrap;
    }

    &--link {
      color: white;
      height: 100%;
      padding: 0 $gap;
      &:first-child {
        margin-left: -$gap;
      }
      &:hover {
        background-color: $clrLink;
      }
    }
  }
</style>

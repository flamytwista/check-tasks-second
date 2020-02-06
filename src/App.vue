<template>
  <div id="app">
    <container class="nav">
      <router-link to="/">Home</router-link>
      &nbsp;
      <router-link to="/about">About</router-link>
    </container>
    <router-view/>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss">
  @import "~@/assets/scss/variables";
  @import '~@/assets/scss/global';
  @import '~@/assets/scss/typo';

  #app {

  }
</style>

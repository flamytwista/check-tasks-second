<template>
  <div id="app">
    <header-menu/>
    <router-view/>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu.vue'

export default {
  components: { HeaderMenu }
}
</script>

<style lang="scss">
  @import "~@/assets/scss/variables";
  @import '~@/assets/scss/global';
  @import '~@/assets/scss/typo';

  #app {

  }
</style>

<template>
  <div id="app" class="app">
    <header-menu/>
    <div class="app__container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu.vue'

export default {
  components: { HeaderMenu }
}
</script>

<style lang="scss">
  @import "~@/my-own-library/assets/scss/variables.scss";
  @import '~@/my-own-library/assets/scss/global.scss';
  @import '~@/my-own-library/assets/scss/typo.scss';

  .app {
    &__container {
      padding: $gap 0;

      // Страховка на случай ширины потомков больше чем ширина страницы
      // С высотой работает нормально
      overflow: hidden;
    }
  }
</style>

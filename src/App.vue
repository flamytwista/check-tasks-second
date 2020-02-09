<template>
  <div id="app" class="app">
    <header-menu :items="menuItems" />
    <div class="app__container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import HeaderMenu from '@/my-own-library/components/HeaderMenu.vue'

export default {
  components: { HeaderMenu },
  data () {
    return {
      menuItems: [
        { to: { name: 'home' }, text: 'Home' },
        { to: { name: 'components' }, text: 'Components' },
      ]
    }
  }
}
</script>

<style lang="scss">
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

<template>
  <div class="header-menu">
    <container>
      <router-link
        v-for="(menuItem, index) in items"
        :key="index"
        class="header-menu__link"
        active-class="header-menu__link--active"
        exact
        :to=menuItem.to
      >
        {{menuItem.text}}
      </router-link>
    </container>
  </div>
</template>

<script>

export default {
  props: {
    items: {
      type: Array,
      default: () => [
        { to: { name: 'components' }, text: 'Components' },
      ]
    }
  },

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

    &__link {
      color: $clrLight;
      height: 100%;
      padding: 0 $gap;
      line-height: $headerHeight;
      text-decoration: none;
      transition: background-color $timeShort;
      &:first-child {
        margin-left: -$gap;
      }
      &--active,
      &:hover {
        background-color: $clrMainLink;
      }
    }
  }
</style>

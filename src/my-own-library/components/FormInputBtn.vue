<template>
  <component :is="rootComponent"
    class="btn"
    v-bind="$attrs"
  >
    <slot/>
  </component>
</template>

<script>

export default {

  computed: {
    rootComponent () {
      return this.isAnchor ? 'a'
        : this.isRouterLink ? 'router-link'
          : 'button'
    },
    isAnchor () {
      return this.$attrs.href
    },
    isRouterLink () {
      return this.$attrs.to
    }
  }
}
</script>

<style scoped lang="scss">
  .btn {
    $height: $gap * 2;

    display: block;
    width: fit-content;

    border-radius: $borderRadius;
    outline: none !important;
    text-decoration: none;
    color: white;
    background-color: clrFill();
    border: none;
    height: $height;
    line-height: $height;
    padding: 0 $gap * 2;
    cursor: pointer;
    transition: background-color $timeShort;
    &:hover {
      background-color: clrFill(accent);
    }
  }
  .btn--error {
    background-color: clrFill(small, error);
    &:hover {
      background-color: clrFill(accent, error);
    }
  }
  .btn--success {
    background-color: clrFill(small, success);
    &:hover {
      background-color: clrFill(accent, success);
    }
  }
  .btn--danger {
    background-color: clrFill(small, danger);
    &:hover {
      background-color: clrFill(accent, danger);
    }
  }
  .btn--small {
    $height: $gap * 1.5;
    padding: 0 $gap;
    height: $height;
    line-height: $height;
    font-size: $fsSmall;
  }
</style>

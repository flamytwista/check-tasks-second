<template>
<!--  :label="$attrs.label"-->
  <button
    class="btn"
    v-bind="$attrs"
  >
    <slot/>
  </button>
</template>

<script>

export default {

}
</script>

<style scoped lang="scss">
  .btn {
    border-radius: $borderRadius;
    outline: none !important;
    text-decoration: none;
    color: white;
    background-color: $clrMainAccent;
    border: none;
    height: $gap * 2;
    padding: 0 $gap * 2;
    cursor: pointer;
    transition: background-color $timeShort;
    &:hover {
      background-color: $clrMainLink;
    }
  }
</style>

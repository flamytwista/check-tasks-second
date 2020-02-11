<template>
  <input
    v-bind="$attrs"
    class="txt"
  />

</template>

<script>

export default {

}
</script>

<style scoped lang="scss">
  .txt {
    $height: $gap * 2;
    height: $height;
    line-height: $height;
    padding-left: $gap;
    padding-right: $gap;
    border: 1px solid clrBorder(lighter, main);
    border-radius: $borderRadius;
    width: 100%;
  }
</style>

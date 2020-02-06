<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 0 $gap;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: $bpSm2) {
    max-width: $bpSm2;
  }
  @media (min-width: $bpMd) {
    max-width: $bpMd;
  }
  @media (min-width: $bpMd) {
    padding: 0 $gap * 2;
    max-width: $bpMd;
  }
  @media (min-width: $bpLg) {
    padding: 0 $gap * 4;
    max-width: $bpLg;
  }
  @media (min-width: $bpXl) {
    padding: 0 $gap * 8;
    max-width: $bpXl;
  }
}
.container--no-padding-on-xs {
  padding-right: 0;
  padding-left: 0;
  @media (min-width: $bpSm) {
    padding-right: $gap;
    padding-left: $gap;
  }
}
.container--fluid {
  max-width: 100% !important;
}
</style>

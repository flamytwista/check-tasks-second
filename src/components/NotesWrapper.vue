<template>
  <div class="notes-wrapper">
    <note-card :key="n" v-for="n in 100" />
  </div>
</template>

<script>
import NoteCard from '@/components/NoteCard.vue'

export default {
  components: { NoteCard }
}

</script>

<style scoped lang="scss">

  .notes-wrapper {
    display: flex;
    flex-flow: row wrap;

    .note-card {
      margin-bottom: $gap;
      width: 100%;
      @media (min-width: $bpSm2) {
        @include flexItemWidthAndMargin(2, $gap);
      }
      @media (min-width: $bpLg) {
        @include flexItemWidthAndMargin(3, $gap);
      }

      @media (min-width: $bpXl) {
        @include flexItemWidthAndMargin(4, $gap);
      }

    }
  }
</style>

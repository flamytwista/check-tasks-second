<template>
  <div class="note-card">
    <h4 class="note-card__header">{{$faker().random.words() + $faker().random.words()}}</h4>
    <div :set="qty = $faker().random.number(5) + 1"></div>
    <div :set="qtyToDisplay = qty >= 3 ? 3 : qty"></div>
    <ul>
      <li :key="n" v-for="n in qtyToDisplay">
        <!--Для ограничения длины троеточием приходится отказаться от display: list-item. Поэтому &bullet;-->
        &bullet; {{$faker().random.words() + $faker().random.words()}}
      </li>
      <li v-if="qty > 3">...</li>
    </ul>
    <div class="note-card__pusher"></div>
    <div class="note-card__buttons">
      <btn
        :class="{'btn--small': areButtonsSmall}"
        :to="{name: 'noteEdit', params: { noteId: 123 }}"
      >
        Изменить
      </btn>
      <btn
        class="btn--error"
        :class="{'btn--small': areButtonsSmall}"
      >
        Удалить
      </btn>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    areButtonsSmall () {
      return !this.$screen.bpSm
    }
  }
}
</script>

<style scoped lang="scss">
  .note-card {
    padding: $gap;
    border: 1px solid clrBorder(lighter, main);
    border-radius: $borderRadius;
    background-color: white;
    display: flex;
    flex-flow: column nowrap;

    &__header {
      @include multiLineEllipsis(2, 37px);
      margin-bottom: 0;
    }

    ul > li {
      @include singleLineEllipsis();
      color: clrFont(gray, main);
      font-size: $fsSmall;
    }
    .note-card__pusher {
      flex: 1 0 auto;
    }
    .note-card__buttons {
      display: flex;
      justify-content: flex-end;
      .btn {
        &:last-child {
          margin-left: $gap;
        }
      }
      @media (min-width: $bpXl) {
        justify-content: space-between;
      }
    }
  }
</style>

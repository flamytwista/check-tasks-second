<template>
  <div class="note-card">
    <h4 class="note-card__header">{{$faker().random.words() + $faker().random.words()}}</h4>
    <div :set="qty = $faker().random.number(5) + 1"></div>
    <div :set="qtyToDisplay = qty >= 3 ? 3 : qty"></div>
    <ul>
      <li :key="n" v-for="n in qtyToDisplay">
        <small>
          <!--Для ограничения длины троеточием приходится отказаться от display: list-item. Поэтому &bullet;-->
          &bullet; {{$faker().random.words() + $faker().random.words()}}
        </small>
      </li>
      <li v-if="qty > 3">...</li>
    </ul>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped lang="scss">
  .note-card {
    padding: $gap;
    border: 1px solid clrBorder(lighter, main);
    border-radius: $borderRadius;
    background-color: white;

    &__header {
      @include multiLineEllipsis(2, 37px);
    }

    ul > li {
      @include singleLineEllipsis();
      //color: $clrFontGray;
      color: clrFont(gray, main);
    }
  }
</style>

<template>
  <div class="note-card">
    <h3>{{$faker().random.words() + $faker().random.words()}}</h3>
    <div :set="qty = $faker().random.number(5) + 1"></div>
    <div :set="qtyToDisplay = qty >= 3 ? 3 : qty"></div>
    <ul>
      <li :key="n" v-for="n in qtyToDisplay">
        <!--Для ограничения длины троеточием приходится отказаться от display: list-item. Поэтому &bullet;-->
        &bullet; {{$faker().random.words() + $faker().random.words()}}
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

    h3 {
      @include multiLineEllipsis(2, 44px);
    }

    ul > li {
      @include singleLineEllipsis();
    }
  }
</style>

<template>
  <container class="components">
    <h1>Список доступных компонентов</h1>
    <h2>Заголовок 2</h2>
    <h3>Заголовок 3</h3>
    <h4>Заголовок 4</h4>
    <h5>Заголовок 5</h5>
    <h6>Заголовок 6</h6>
    <h2>Кнопки</h2>
    <h3>Кнопки-Кнопки</h3>
    <div class="components__buttons">
      <btn>Кнопки</btn>
      <btn>Кнопки</btn>
    </div>
    <h3>Кнопки-Ссылки</h3>
    <div class="components__buttons">
      <btn href="http://ya.ru">Кнопки</btn>
      <btn href="ya.ru">Кнопки</btn>
    </div>
  </container>
</template>

<style lang="scss">
  .components {
    &__buttons {
      display: flex;
      flex-flow: row wrap;
      > * {
        margin-right: $gap * 2;
      }
    }
  }
</style>

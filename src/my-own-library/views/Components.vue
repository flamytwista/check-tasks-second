<template>
  <container class="components">
    <h1>Список доступных компонентов</h1>
    <h2>Заголовок 2</h2>
    <h3>Заголовок 3</h3>
    <h4>Заголовок 4</h4>
    <h5>Заголовок 5</h5>
    <h6>Заголовок 6</h6>
    <h2>Текст</h2>
    <p>Lorem ipsum dolor <a href="http://ya.ru">ya.ru</a> sit amet, consectetur adipisicing elit. Consectetur doloribus eum, laudantium natus nobis non rem. Corporis ipsum itaque officia quibusdam recusandae, sed sint? Dolor nobis non provident suscipit totam.</p>
    <h2>Кнопки</h2>
    <h3>Кнопки-Кнопки</h3>
    <div class="components__buttons">
      <btn>Main</btn>
      <btn class="btn--error">Error</btn>
      <btn class="btn--success">Success</btn>
    </div>
    <h3>Кнопки-Ссылки</h3>
    <div class="components__buttons">
      <btn href="https://stackoverflow.com/users/1638298/flamytwista" target="_blank">stackoverflow.com</btn>
    </div>
    <h3>Кнопки-RouterLink</h3>
    <div class="components__buttons">
      <btn :to="{name: 'home'}">На главную</btn>
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

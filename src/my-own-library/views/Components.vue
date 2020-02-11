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

    <h2>Формы</h2>

    <h3>Кнопки</h3>
    <h4>Кнопки-Кнопки</h4>
    <div class="components__buttons">
      <btn>Main</btn>
      <btn class="btn--success">Success</btn>
      <btn class="btn--danger">Danger</btn>
      <btn class="btn--error">Error</btn>
    </div>
    <div class="components__buttons">
      <btn class="btn--small">Small</btn>
    </div>
    <h4>Кнопки-Ссылки</h4>
    <div class="components__buttons">
      <btn href="https://stackoverflow.com/users/1638298/flamytwista" target="_blank">stackoverflow.com</btn>
    </div>
    <h4>Кнопки-RouterLink</h4>
    <div class="components__buttons">
      <btn :to="{name: 'home'}">На главную</btn>
    </div>

    <h3>Input Text</h3>
    <txt placeholder="placeholder for text"></txt>
    <br><br>
    <txt value="default value"></txt>

    <h3>Checkbox</h3>
    <check-box />
  </container>
</template>

<style lang="scss">
  .components {
    padding-bottom: 200px;
  }
  .components__buttons {
    display: flex;
    flex-flow: row wrap;
    margin-bottom: $gap;

    > * {
      margin-right: $gap;
      margin-bottom: $gap;
    }
  }
</style>

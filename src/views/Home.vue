<template>
  <container class="home">
    <h1>Заметки</h1>
    <btn
      class="home__add-btn"
      classZ="{'btn--small': areButtonsSmall}"
      :to="{name: 'home'}"
    >
      Создать
    </btn>
    <NotesWrapper/>
  </container>
</template>

<script>

import NotesWrapper from '@/components/NotesWrapper.vue'

export default {
  name: 'home',
  components: { NotesWrapper },
}
</script>
<style lang="scss" scoped>
  .home {
    .home__add-btn {
      margin-bottom: $gap * 2;
    }
  }
</style>

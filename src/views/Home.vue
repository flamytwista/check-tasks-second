<template>
  <container class="home">
    <h1>Заметки</h1>
    <NotesWrapper/>
  </container>
</template>

<script>

import NotesWrapper from '@/components/NotesWrapper.vue'

export default {
  name: 'home',
  components: { NotesWrapper }
}
</script>

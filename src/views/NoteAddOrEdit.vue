<template>
  <container class="note-edit">
    <h1>{{ title }}</h1>
  </container>
</template>

<script>

export default {
  computed: {
    /**
     * Редактируется-ли существующая заметка, или добавляется новая
     * @returns {boolean}
     */
    isEditing (){
      return this.$route.name === 'noteEdit'
    },
    title () {
      return (this.isEditing ? 'Редактирование' : 'Добавление') + ' заметки'
    }
  }

}
</script>

<style scoped lang="scss">
  .note-edit {
    zoom: 1;
  }
</style>

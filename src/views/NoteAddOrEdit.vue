<template>
  <container class="note-edit">
    <h1>{{ title }}</h1>
    <txt class="note-edit__input-title" placeholder="Заголовок"></txt>

    <btn class="note-edit__btn-add-task">
      Добавить Задачу
    </btn>
    <div class="clearfix"></div>
    <div class="note-edit__control-buttons">
      <btn class="">{{ actionTitle }}</btn>
      <btn class="btn--danger">Отменить</btn>
      <btn class="btn--error">Удалить</btn>
    </div>

  </container>
</template>

<script>

export default {
  computed: {
    /**
     * Редактируется-ли существующая заметка, или добавляется новая
     * @returns {boolean}
     */
    isEditing () {
      return this.$route.name === 'noteEdit'
    },
    title () {
      return (this.isEditing ? 'Редактирование' : 'Добавление') + ' заметки'
    },
    actionTitle () {
      return this.isEditing ? 'Изменить' : 'Добавить'
    }
  }

}
</script>

<style scoped lang="scss">
  .note-edit {
    .note-edit__input-title {
      margin-bottom: $gap;
    }
    .note-edit__btn-add-task {
      margin-bottom: $gap * 2;
      float: right;
    }

    .note-edit__control-buttons {
      display: flex;
      flex-flow: column wrap;
      justify-content: flex-end;
      align-items: flex-end;
      @media (min-width: $bpSm2) {
        flex-flow: row wrap;
      }
      > * {
        margin-left: $gap;
        margin-bottom: $gap;
      }
    }
  }
</style>

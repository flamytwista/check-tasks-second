<template>
  <label :for="`check-box-${_uid}`" class="check-box">
    <input
      class="check-box__input"
      type="checkbox"
      checked
      :id="`check-box-${_uid}`"
    />
    <span class="check-box__label">Default checkbox state</span>
  </label>
</template>

<script>

export default {
  mounted () {
    console.log(this)
    console.log(this.$el)
  }
}
</script>

<style scoped lang="scss">
  .check-box {
    outline: 1px solid darkred;
    cursor: pointer;
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    width: fit-content;
    height: $gap + 2px;

    .check-box__label {
      padding-left: $gap;
      user-select: none;

      .check-box__input {
        display: none;
      }

      &:before,
      &:after {
        display: block;
        width: $gap;
        height: $gap;
        position: absolute;
        top: 0;
        left: 0;
      }

      // Рамка для checkmark
      &:before {
        content: '';
        background-color: white;
        border: 1px solid clrBorder(lighter, main);
      }
      // Непосредственно checkmark
      &:after {
        color: clrFill(accent, main);
        content: '✔';
        opacity: 0;
        transition: opacity $timeShort;
        transform: translateX(3px) translateY(1px);
      }
    }

    // чекнутый checkmark
    .check-box__input:checked + .check-box__label::after {
      opacity: 1;
    }
  }
</style>

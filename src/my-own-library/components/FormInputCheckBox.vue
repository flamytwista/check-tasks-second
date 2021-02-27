<template>
  <label :for="`check-box-${_uid}`" class="check-box">
    <input
      class="check-box__input"
      type="checkbox"
      checked
      :id="`check-box-${_uid}`"
    />
    <span
      class="check-box__label"
      :class="{'check-box__label--with-text': label}"
    >
      {{ label }}
    </span>
  </label>
</template>

<script>

export default {
  props: {
    label: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped lang="scss">
  .check-box {
    display: block;
    cursor: pointer;
    position: relative;
    width: fit-content;
    height: $gap + 2px;

    .check-box__input {
      display: none;
      width: $gap;
      height: $gap;
    }

    .check-box__label {
      user-select: none;

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
        font-weight: bold;
      }
    }

    .check-box__label--with-text {
      padding-left: $gap * 1.5;
    }

    // чекнутый checkmark
    .check-box__input:checked + .check-box__label::after {
      opacity: 1;
    }
  }
</style>

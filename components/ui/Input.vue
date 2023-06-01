<template>
  <div class="template-input">
    <label v-if="label" :for="this.index">{{ label }}</label>
    <input
      :placeholder="this.placeholder"
      :class="['input', this.color]"
      :id="this.index"
      :name="this.index"
      :disabled="this.disabled"
      @click="clickOnInput()"
    />
  </div>
</template>

<script>
export default {
  methods: {
    clickOnInput() {
      this.$emit('click');
    },
  },
  props: {
    label: {
      type: String,
      default: 'default',
    },
    color: {
      type: String,
      default: '',
    },
    attr: {
      type: String,
      required: false,
      default: '',
    },
    index: {
      type: String,
      required: false,
      default: 'index',
    },
    placeholder: {
      type: String,
      required: false,
      default: 'index',
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
<style scoped>
.template-input {
  display: flex;
  flex-direction: column;
}
.input {
  max-width: 360px;
  font-family: 'Open Sans', sans-serif;

  padding: 0.5rem;
  border-radius: 0.25rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
  border: 1px solid #999999;
  /* outline: none; */
}
.input::placeholder {
  opacity: 0.9;
}
.input:disabled,
.input[disabled] {
  border: 1px solid #999999;
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: all;
}
.danger {
  background-color: var(--color-danger-background);
  color: var(--color-font);
  border-color: var(--color-danger);
}
.danger::placeholder {
  color: var(--color-danger);
}
</style>

<template>
  <div class="template-input">
    <label v-if="label" :for="this.index">{{ label }}</label>
    <input
      @input="this.changeInput"
      :placeholder="this.placeholder"
      :class="['input', this.color]"
      :id="this.index"
      :name="this.index"
      :disabled="this.disabled"
      :type="this.type"
      :value="value"
    />
    <span v-if="error" class="error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  methods: {
    changeInput: function (evt) {
      console.log(evt);
      // this.$emit('change');
      // console.log(input.value);
    },
  },

  props: {
    label: {
      type: String,
      default: 'default',
    },
    error: {
      type: String,
      default: '',
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
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    value: {
      required: false,
      default: '',
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
  margin-top: 0.4rem;
  max-width: 360px;
  font-family: 'Open Sans', sans-serif;
  outline: none;
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
.input:disabled.danger,
.input[disabled].danger {
  border: 1px solid #da0d0d;
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: all;
}
.error {
  margin-top: 0.5rem;
  color: #ff7171;
  font-size: 14px;
}
</style>

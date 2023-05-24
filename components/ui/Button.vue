<template>
  <button :class="'btn' + this.class">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'default',
    },
    class: {
      type: String,
      default: '',
    },
    attr: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>
<style scoped>
.btn {
  font-family: 'Inter', sans-serif;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
  border: 1px solid #999999;
  /* outline: none; */
}
.btn:hover {
  opacity: 0.8;
}
.btn:disabled,
.btn[disabled] {
  border: 1px solid #999999;
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: all;
}
.primary {
  background-color: var(--color-primary);
  color: white;
  border-color: none;
}
.danger {
  background-color: var(--color-danger-background);
  color: var(--color-danger);
  border-color: var(--color-danger);
}
</style>

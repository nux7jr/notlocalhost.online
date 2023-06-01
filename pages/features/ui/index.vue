<template>
  <div class="page">
    <section class="main-ui">
      <div class="template-ui--button">
        <h1>Buttons</h1>
        <Button label="Button" @click="bar()"></Button>
        <Button label="Button" color="primary"></Button>
        <Button label="Button" color="danger"></Button>
        |||
        <Button label="Button" disabled></Button>
        <Button label="Button" color="primary" disabled></Button>
        <Button label="Button" color="danger" disabled></Button>
      </div>
      <hr />
      <div class="template-ui">
        <h1>Inputs</h1>
        <Input color="" placeholder="Something" label="label" error="" />
        <Input color="danger" placeholder="Something" label="label" />
        |||
        <Input
          color=""
          placeholder="Disable"
          label="label"
          error=""
          disabled="true"
        />
        <Input
          color="danger"
          placeholder="Disable"
          label="label"
          disabled="true"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Input from '@/components/ui/Input.vue';
import Button from '@/components/ui/Button.vue';

export default {
  auth: false,
  name: 'ui',
  components: { Button, Input },
  methods: {
    bar() {
      console.log('bar');
    },
  },
};
</script>
<style scoped>
hr {
  margin: 1rem auto;
}
.template-ui {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}
</style>

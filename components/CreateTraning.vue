<template>
  <div class="create">
    <h2 class="create__heading">create traning</h2>
    <div class="create__header">
      <Input label="title" name="title" error="keklorem"></Input>
      <Button label="Add more exercise"></Button>
    </div>
    <hr />
    <div class="exercise">
      <div class="exercise__item">
        <Input label="name" name="name"></Input>
      </div>
      <div class="exercise__item">
        <Button ref="munis" label="-"></Button>
        <Input
          label="pods"
          :value="pods"
          @change="change()"
          name="pods"
          type="number"
        ></Input>
        {{ pods }}
        <Button ref="pluse" label="+"></Button>
      </div>
      <div class="exercise__item">
        <Button label="-"></Button>
        <Input label="weight" name="weight" type="number"></Input>
        <Button label="+"></Button>
      </div>
      <div class="exercise__item">
        <Button label="-"></Button>
        <Input label="timer" name="timer" type="number"></Input>
        <Button label="+"></Button>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '@/components/ui/Input.vue';
import Button from '@/components/ui/Button.vue';
export default {
  name: 'CreateTraning',
  data() {
    return {
      pods: 6,
    };
  },
  components: {
    Input,
    Button,
  },
  mounted() {
    this.pluse();
    this.munis();
  },
  methods: {
    change(value) {
      console.log('change');
    },
    pluse() {
      this.$refs.pluse.$el.addEventListener('click', (evt) => {
        this.pods++;
        console.log(evt);
      });
    },
    munis() {
      this.$refs.munis.$el.addEventListener('click', (evt) => {
        this.pods--;
      });
    },
  },
};
</script>

<style>
.exercise,
.exercise__item {
  display: flex;
  align-items: flex-end;
  gap: 1.2rem;
}
.create__header {
  display: flex;
  gap: 1.2rem;
  align-items: flex-end;
}
.exercise {
  justify-content: space-between;
}
.exercise__item {
  gap: 0.5rem;
}
</style>

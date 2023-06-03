<template>
  <section class="training">
    <div class="training__option">
      <Button @click="tabs = 'main'" label="My training"></Button>
      <Button @click="tabs = 'create'" label="Create training"></Button>
      <Button @click="tabs = 'edit'" label="change tab"></Button>
    </div>

    <div v-switch="tabs">
      <h1 v-case="'main'">Your traning</h1>
      <div v-case="'create'">
        <CreateTraning />
      </div>
      <h3 v-case="'edit'">edit traning</h3>
    </div>

    <button v-tooltip="'You have new messages.'">wtf</button>
    <!-- <div v-if="!isCreatedActive == 'raining-show'" class="training-show">
      <h1 class="training-create__heading">training-create</h1>
      <label for="title">management title</label>
      <input type="text" name="title" id="title" placeholder="title" />
      <hr />
    </div>
    <div v-else class="training-create">some link to management</div> -->
  </section>
</template>

<script>
import Button from '@/components/ui/Button.vue';
import CreateTraning from '@/components/CreateTraning.vue';
export default {
  auth: false,
  name: 'traning',

  data() {
    return {
      tabs: 'main',
    };
  },
  components: { Button, CreateTraning },
  methods: {},
};
</script>

<style>
/* .hid {
  display: none;
} */
</style>

<template>
  <section class="training">
    <div class="training__option">
      <Button @click="isCreatedActive = true" label="My training"></Button>
      <Button @click="isCreatedActive = false" label="Create training"></Button>
    </div>
    <div v-if="!isCreatedActive" class="training-show">
      <h1 class="training-create__heading">training-create</h1>
      <label for="title">management title</label>
      <input type="text" name="title" id="title" placeholder="title" />
      <hr />
    </div>
    <div v-else class="training-create">some link to management</div>
  </section>
</template>

<script>
import Button from '@/components/ui/Button.vue';
export default {
  auth: false,
  name: 'traning',
  data() {
    return {
      isCreatedActive: true,
    };
  },
  components: { Button },
  methods: {},
};
</script>

<style></style>

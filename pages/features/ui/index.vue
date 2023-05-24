<template>
  <div class="page">
    <mainHeader />
    <section class="main-ui">
      <h1>Buttons</h1>
      <!-- <Button :label="$t('Button')" class=""> что-то </Button> -->
      <Button label="Button" class=""></Button>

      <Button label="Button" class="primary"></Button>
      <Button label="Button" class="danger"></Button>
      |||
      <Button label="Button" class="" disabled></Button>
      <Button label="Button" class="primary" disabled></Button>
      <Button label="Button" class="danger" disabled></Button>
    </section>
    <mainFooter />
  </div>
</template>

<script>
import Button from '@/components/ui/Button.vue';
import mainHeader from '@/components/include/mainHeader.vue';
import mainFooter from '@/components/include/mainFooter.vue';

export default {
  auth: false,
  name: 'ui',
  components: { mainHeader, mainFooter, Button },
};
</script>

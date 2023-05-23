<template>
  <div class="page">
    <mainHeader />
    ABOUT
    <mainFooter />
  </div>
</template>

<script>
import mainHeader from '@/components/include/mainHeader.vue';
import mainFooter from '@/components/include/mainFooter.vue';

export default {
  auth: false,
  name: 'About',
  components: { mainHeader, mainFooter },
};
</script>

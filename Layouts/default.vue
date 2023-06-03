<template>
  <div>
    <mainHeader />
    <transition name="layout">
      <Nuxt />
    </transition>
    <mainFooter />
  </div>
</template>
<script>
import mainHeader from '@/components/include/mainHeader.vue';
import mainFooter from '@/components/include/mainFooter.vue';

export default {
  components: {
    mainHeader,
    mainFooter,
  },
};
</script>

<template>
  <div class="page">
    <mainHeader />
    <!-- {{ $t('My name is Mike') }} -->
    фичи
    <mainFooter />
  </div>
</template>

<script>
import mainHeader from '@/components/include/mainHeader.vue';
import mainFooter from '@/components/include/mainFooter.vue';

export default {
  auth: false,
  name: 'Features',
  components: { mainHeader, mainFooter },
};
</script>

<template>
  <div class="page">
    <mainHeader />
    <!-- {{ $t('My name is Mike') }} -->
    content
    <mainFooter />
  </div>
</template>

<script>
import mainHeader from '@/components/include/mainHeader.vue';
import mainFooter from '@/components/include/mainFooter.vue';

export default {
  auth: false,
  name: 'Translator',
  components: { mainHeader, mainFooter },
};
</script>

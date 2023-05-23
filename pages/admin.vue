<template>
  <div class="page">
    <mainHeader />
    <!-- {{ $t('My name is Mike') }} -->
    create post!
    <mainFooter />
  </div>
</template>

<script>
import mainHeader from '@/components/include/mainHeader.vue';
import mainFooter from '@/components/include/mainFooter.vue';

export default {
  name: 'Admin',
  components: { mainHeader, mainFooter },
};
</script>

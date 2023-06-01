<template>
  <div class="page">
    <h1>Фичи</h1>

    <Nuxt-link class="nav__item" :to="localePath('/features/translator')">{{
      $t('translator')
    }}</Nuxt-link>
    <Nuxt-link class="nav__item" :to="localePath('/features/todo')">{{
      $t('todo')
    }}</Nuxt-link>
    <!-- <Nuxt-link class="nav__item" :to="localePath('/features/ui')">{{
      $t('ui')
    }}</Nuxt-link> -->
  </div>
</template>

<script>
export default {
  auth: false,
  name: 'Features',
};
</script>

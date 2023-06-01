<template>
  <section class="error">
    <h1 v-if="error.statusCode === 404">Страница не найдена</h1>
    <h1 v-else>Произошла ошибка</h1>
    <nuxt-link to="/">Вернуться на главную</nuxt-link>
    <pre>{{ error }}</pre>
  </section>
</template>

<script>
export default {
  props: ['error'],
};
</script>

<template>
  <nav>
    <Nuxt-link class="nav__item" :to="localePath('/')">{{
      $t('home')
    }}</Nuxt-link>
    <Nuxt-link class="nav__item" :to="localePath('about')">{{
      $t('about')
    }}</Nuxt-link>
    <Nuxt-link class="nav__item" :to="localePath('settings')">{{
      $t('settings')
    }}</Nuxt-link>
    <Nuxt-link class="nav__item" :to="localePath('translator')">{{
      $t('translator')
    }}</Nuxt-link>
    <Nuxt-link class="nav__item" :to="localePath('features')">{{
      $t('features')
    }}</Nuxt-link>
    <Nuxt-link class="nav__item" :to="localePath('blog')">{{
      $t('blog')
    }}</Nuxt-link>
    <Nuxt-link class="nav__item" :to="localePath('todo')">{{
      $t('todo')
    }}</Nuxt-link>
    <button class="nav__item" @click="toggleTheme()">
      {{ $t('theme') }}
    </button>
    <nuxt-link class="nav__item" :to="switchLocalePath('ru')">
      russain</nuxt-link
    >
    <nuxt-link class="nav__item" :to="switchLocalePath('en')"
      >english</nuxt-link
    >
  </nav>
</template>
<script>
export default {
  name: 'Navigation',
  methods: {
    toggleTheme() {
      let newTheme;
      if (document.body.classList.contains('theme-dark')) {
        document.body.classList.replace('theme-dark', 'theme-light');
        newTheme = 'light';
      } else {
        document.body.classList.replace('theme-light', 'theme-dark');
        newTheme = 'dark';
      }
      const now = new Date();
      const time = now.getTime();
      const expireTime = time + 1000 * 36000;
      now.setTime(expireTime);
      document.cookie =
        `theme=${newTheme};expires=` + now.toUTCString() + ';path=/';
    },
  },
};
</script>

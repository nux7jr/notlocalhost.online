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
    <Nuxt-link class="nav__item" :to="localePath('/features/translator')">{{
      $t('translator')
    }}</Nuxt-link>
    <Nuxt-link class="nav__item" :to="localePath('features')">{{
      $t('features')
    }}</Nuxt-link>
    <Nuxt-link class="nav__item" :to="localePath('blog')">{{
      $t('blog')
    }}</Nuxt-link>
    <Nuxt-link class="nav__item" :to="localePath('/features/todo')">{{
      $t('todo')
    }}</Nuxt-link>
    <nuxt-link class="nav__item" :to="switchLocalePath('ru')">
      russain</nuxt-link
    >
    <nuxt-link class="nav__item" :to="switchLocalePath('en')"
      >english</nuxt-link
    >
    <Button :label="$t('theme')" class="primary" @click="toggleTheme()">
    </Button>
  </nav>
</template>
<script>
import Button from '@/components/ui/Button.vue';
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
  components: {
    Button,
  },
};
</script>
<style scoped>
nav {
  display: flex;
  height: 3rem;
}
.nav__item {
  color: var(--color-font);
  font-size: 1rem;
  padding: 1rem 0.75rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
  cursor: pointer;
}
.nav__item:visited {
  color: var(--color-font);
}
</style>

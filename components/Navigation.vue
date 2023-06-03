<template>
  <nav>
    <Nuxt-link class="" :to="localePath('/')">
      <img class="nav__logo" src="/images/logo/logo.svg" alt="logo" />
    </Nuxt-link>
    <ul class="nav__list">
      <h2 class="sr-only">
        {{ $t('Site Navigation') }}
      </h2>
      <li class="nav__item">
        <button class="nav__button">
          {{ $t('General') }}
          <svg
            data-v-3154cec8=""
            class="toggleMenu"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-new=""
            aria-hidden="true"
            style="width: 1em; height: 1em"
          >
            <polygon
              data-v-3154cec8=""
              fill="currentColor"
              points="8 10.98 3.51 6.49 4.49 5.51 8 9.02 11.51 5.51 12.49 6.49 8 10.98"
            ></polygon>
          </svg>
        </button>
        <ul class="dropdown">
          <li class="dropdown__list">
            <Nuxt-link class="nav__link" :to="localePath('/')">{{
              $t('home')
            }}</Nuxt-link>
          </li>
          <li>
            <Nuxt-link class="nav__link" :to="localePath('/about')">{{
              $t('about')
            }}</Nuxt-link>
          </li>
        </ul>
      </li>
      <li class="nav__item">
        <button class="nav__button">
          {{ $t('More') }}
          <svg
            data-v-3154cec8=""
            class="toggleMenu"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-new=""
            aria-hidden="true"
            style="width: 1em; height: 1em"
          >
            <polygon
              data-v-3154cec8=""
              fill="currentColor"
              points="8 10.98 3.51 6.49 4.49 5.51 8 9.02 11.51 5.51 12.49 6.49 8 10.98"
            ></polygon>
          </svg>
        </button>
        <ul class="dropdown">
          <li>
            <Nuxt-link class="nav__link" :to="localePath('/settings')">{{
              $t('settings')
            }}</Nuxt-link>
          </li>
        </ul>
      </li>

      <li class="nav__item">
        <button class="nav__button">
          {{ $t('Features') }}
          <svg
            data-v-3154cec8=""
            class="toggleMenu"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-new=""
            aria-hidden="true"
            style="width: 1em; height: 1em"
          >
            <polygon
              data-v-3154cec8=""
              fill="currentColor"
              points="8 10.98 3.51 6.49 4.49 5.51 8 9.02 11.51 5.51 12.49 6.49 8 10.98"
            ></polygon>
          </svg>
        </button>
        <ul class="dropdown">
          <li>
            <Nuxt-link class="nav__link" :to="localePath('/features/todo')">{{
              $t('todo')
            }}</Nuxt-link>
          </li>
          <li>
            <Nuxt-link
              class="nav__link"
              :to="localePath('/features/translator')"
              >{{ $t('translator') }}</Nuxt-link
            >
          </li>
          <li>
            <Nuxt-link class="nav__link" :to="localePath('/features/ui')">{{
              $t('ui')
            }}</Nuxt-link>
          </li>
          <li>
            <Nuxt-link
              class="nav__link"
              :to="localePath('/features/training')"
              >{{ $t('training') }}</Nuxt-link
            >
          </li>
        </ul>
      </li>
      <li class="nav__item">
        <button class="nav__button">
          {{ $t('Lang') }}
          <svg
            data-v-3154cec8=""
            class="toggleMenu"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-new=""
            aria-hidden="true"
            style="width: 1em; height: 1em"
          >
            <polygon
              data-v-3154cec8=""
              fill="currentColor"
              points="8 10.98 3.51 6.49 4.49 5.51 8 9.02 11.51 5.51 12.49 6.49 8 10.98"
            ></polygon>
          </svg>
        </button>
        <ul class="dropdown">
          <li class="nav__link">
            <nuxt-link :to="switchLocalePath('ru')">Russain</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
          </li>
        </ul>
      </li>
      <li class="nav__li">
        <Nuxt-link class="nav__link" :to="localePath('/blog')">{{
          $t('Blog')
        }}</Nuxt-link>
      </li>
      <li class="nav__li">
        <Button :label="$t('Theme')" color="primary" @click="toggleTheme()">
        </Button>
      </li>
    </ul>
  </nav>
</template>
<script>
import Button from '@/components/ui/Button.vue';
export default {
  name: 'Navigation',
  mounted() {
    this.initNav();
  },
  methods: {
    initNav() {
      document.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('nav__button')) {
          this.closeDropDown();
          evt.target.classList.toggle('nav__button-active');
          evt.target.children[0].classList.toggle('toggleMenu--active');
          evt.target.nextElementSibling.classList.toggle('dropdown-active');
        } else {
          this.closeDropDown();
        }
      });
    },
    closeDropDown(evt) {
      const allDropDownMenus = document.querySelectorAll('.dropdown');
      const allDropDownIcons = document.querySelectorAll('.toggleMenu');
      allDropDownMenus.forEach((elem) => {
        if (elem.classList.contains('dropdown-active')) {
          elem.classList.remove('dropdown-active');
        }
      });
      allDropDownIcons.forEach((elem) => {
        elem.classList.remove('toggleMenu--active');
      });
    },
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
  justify-content: space-between;
  align-content: center;

  height: 3.3rem;
  padding: 0.5rem;
}
.nav__button {
  cursor: pointer;
  font-size: 16px;
  transition: 0.2s;
  display: flex;
  align-content: center;
  gap: 10px;
}

.toggleMenu {
  transition: 0.2s;

  pointer-events: none;
}
.toggleMenu--active {
  transform: rotate(90deg);
}
.nav__button:hover {
  text-decoration: underline;
  text-underline-offset: 7px;
}
.nav__li {
  display: flex;
  align-items: center;
}
.nav__logo {
  height: 48px;
  border-radius: 7px;
  background-color: rgba(255, 255, 255, 0.466);
}
.nav__list {
  display: flex;
  gap: 20px;
  list-style: none;
}
.dropdown {
  display: none;
  list-style: none;

  position: absolute;
  z-index: 1;

  margin-top: 10px;

  flex-direction: column;
  gap: 0.7rem;
}
.dropdown a {
  color: var(--color-font);
  width: 100%;
  display: block;
}
.dropdown-active {
  display: flex;
}
.nav__item {
  display: block;
  color: var(--color-font);
  font-size: 1rem;
  padding: 1rem 0.75rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
  cursor: pointer;
}
.nav__link,
.nuxt-link-active {
  color: var(--color-font);
}
.nav__link a {
  color: var(--color-font);
}
.nav__link a:visited {
  color: var(--color-font);
}
.nuxt-link-exact-active {
  text-decoration: underline;
  text-underline-offset: 7px;
}
.nav__item:visited {
  color: var(--color-font);
}
</style>

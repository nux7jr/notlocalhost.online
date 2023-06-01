<template>
  <div class="page">
    <!-- <mainHeader /> -->
    <section class="slogan">
      <div class="slogan__wrapper">
        <div class="slogan__info">
          <h1 class="slogan__heading">{{ $t('Hey there') }}</h1>
          <p class="slogan__name">
            {{ $t('My name is Mike') }}
          </p>
          <p class="slogan__text">{{ $t('And Im a Frontend Developer') }}</p>
        </div>
        <div class="slogan__img">
          <img
            src="https://placehold.co/600x400/EEE/31343C"
            alt="profile image"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  auth: false,
  name: 'indexPage',
};
</script>
<style></style>

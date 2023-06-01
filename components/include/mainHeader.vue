<template>
  <header>
    <Navigation />
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  position: sticky;
  top: 0;
  z-index: 1;
  /* background-color: rgba(222, 219, 215, 0.414); */
}
header::after {
  position: absolute;
  content: '';
  inset: 0px;
  border-radius: 8px;
  /* backdrop-filter: blur(32px); */
  backdrop-filter: blur(2px);
  pointer-events: none;
  z-index: -1;
  transition-timing-function: ease;
  transition-duration: 0.3s;
  transition-property: background-color;
}
</style>

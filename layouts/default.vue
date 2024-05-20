<script setup>
const props = defineProps(['page']);
</script>

<template>
  <div class="wrapper gradbg" :class="props.page">
    <Header :class="props.page" />
    <div class="inner-wrapper">
      <slot />
    </div>
    <Footer />
    <div class="cover"></div>
  </div>
</template>

<style scoped>
.change {
  position: fixed;
  left: 0;
  top: 0;
}
</style>

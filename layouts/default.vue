<script setup>
const props = defineProps(['page']);
</script>

<template>
  <div class="wrapper gradbg" :class="props.page">
    <Header />
    <div class="inner-wrapper">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>

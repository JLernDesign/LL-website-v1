<script setup>
const props = defineProps(['title', 'desc']);
</script>

<template>
  <div class="bucket body-sm scroll-reveal">
    <div class="row">
      <h3>{{ props.title }}</h3>
    </div>
    <div class="row">
      <p>{{ props.desc }}</p>
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-weight: 400;
  color: var(--pink);
  padding: 10px 0;
}
</style>

<script setup>
const props = defineProps(['text', 'color']);
</script>

<template>
  <h2 :class="`bg-${props.color}`">{{ props.text }}</h2>
</template>

<style scoped>
h2 {
  font-size: 20px;
  font-weight: 700;
  padding: 22px 12px;
  color: #fff;
  text-transform: uppercase;
  display: inline-block;
  max-width: 150px;
}
</style>

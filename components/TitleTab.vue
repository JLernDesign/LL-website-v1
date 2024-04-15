<script setup>
const props = defineProps(['text', 'color', 'txt', 'size']);
</script>

<template>
  <h2 :class="`bg-${props.color} ${props.txt} ${props.size}`">
    {{ props.text }}
  </h2>
</template>

<style scoped>
h2 {
  font-size: 20px;
  font-weight: 700;
  padding: 22px 20px;
  text-transform: uppercase;
  display: inline-block;
  color: #000;
  &.lt {
    color: #fff;
  }
  &.sm {
    padding: 22px 12px;
    max-width: 150px;
  }
}
</style>

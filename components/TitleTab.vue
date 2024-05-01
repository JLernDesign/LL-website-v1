<script setup>
const props = defineProps(['text', 'color', 'txt', 'size']);
</script>

<template>
  <h2 :class="`pl bg-${props.color} ${props.txt} ${props.size}`">
    {{ props.text }}
  </h2>
</template>

<style scoped>
h2 {
  font-size: 20px;
  font-weight: 700;
  padding-top: 22px;
  padding-bottom: 22px;
  padding-right: 15px;
  text-transform: uppercase;
  display: inline-block;
  color: #000;
  &:not(.sm) {
    padding-left: 15px;
  }
  &.lt {
    color: #fff;
  }
}
@media (min-width: 1401px) {
  h2.sm {
    padding-top: 22px;
    padding-bottom: 22px;
    padding-right: 12px;
    max-width: 150px;
  }
}
@media (max-width: 1400px) {
  h2.sm {
    max-width: none;
    padding-right: 50px;
  }
}
@media (max-width: 1200px) {
  h2.sm {
    padding-right: 25px;
  }
}
@media (max-width: 1024px) {
  h2 {
    font-size: 18px;
  }
}
@media (max-width: 768px) {
  h2.sm {
    padding-top: 15px;
    padding-bottom: 15px;
  }
}
</style>

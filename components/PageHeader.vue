<script setup>
const props = defineProps(['title', 'color']);
</script>

<template>
  <header :class="`tier bg-${props.color}`">
    <Pattern theme="lt" />
    <h1>{{ props.title }}</h1>
  </header>
</template>

<style scoped>
header {
  display: grid;
  align-items: end;
}
h1 {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  font-size: 100px;
  font-weight: 300;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: -0.25em;
}
.pattern {
  height: 100%;
}
</style>

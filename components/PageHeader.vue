<script setup>
const props = defineProps(['title', 'color', 'size']);

const route = useRoute();
useHead({
  title: 'Lindsey Lerner PsyD | ' + props.title,
});
</script>

<template>
  <header :class="`tier bg-${props.color}`">
    <Pattern theme="lt" />
    <h1 :class="props.size">{{ props.title }}</h1>
  </header>
</template>

<style scoped>
header {
  display: grid;
  align-items: end;
  margin-bottom: 65px;
  padding: 0 var(--side-margin);
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
  &.wide {
    max-width: 1400px;
  }
}
.pattern {
  height: 100%;
}
@media (max-width: 1200px) {
  h1 {
    font-size: 70px;
  }
}
</style>

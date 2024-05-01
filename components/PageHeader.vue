<script setup>
const props = defineProps(['title', 'color', 'size']);

const route = useRoute();
useHead({
  title: 'Lindsey Lerner PsyD | ' + props.title,
});
</script>

<template>
  <header :class="`tier bg-${props.color} ${props.size == 'wide' && 'hpad'}`">
    <Pattern theme="lt" :fade="`${props.color == 'green' && 'true'}`" />
    <div class="page-grid" :class="props.size">
      <div></div>
      <h1>{{ props.title }}</h1>
      <div></div>
    </div>
  </header>
</template>

<style scoped>
header {
  display: grid;
  align-items: end;
  height: 200px;
  position: relative;
  overflow: hidden;
  transition: var(--ease-out);
}
h1 {
  width: 100%;
  font-size: 100px;
  font-weight: 300;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: -0.25em;
}
.pattern {
  height: 100%;
}
@media (max-width: 1300px) {
  header {
    height: 160px;
  }
  h1 {
    font-size: 70px;
  }
}
@media (max-width: 1024px) {
  header {
    height: 125px;
  }
  h1 {
    font-size: 60px;
  }
}
@media (max-width: 768px) {
  header {
    height: 100px;
  }
  h1 {
    font-size: 50px;
  }
}
</style>

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
  /* padding: 0 var(--side-margin); */
}
h1 {
  width: 100%;
  /*   max-width: 900px;
  margin: 0 auto; */
  font-size: 100px;
  font-weight: 300;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: -0.25em;
}
.pattern {
  height: 100%;
}
@media (max-width: 1200px) {
  h1 {
    font-size: 70px;
  }
}
@media (max-width: 1024px) {
  h1 {
    font-size: 60px;
  }
}
@media (max-width: 768px) {
  h1 {
    font-size: 50px;
  }
}
</style>

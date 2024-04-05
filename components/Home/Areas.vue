<script setup>
const areas = [
  { title: 'Trauma/PTSD', desc: 'text here' },
  { title: 'Eating Disorders', desc: 'text here' },
  { title: 'Gender and Sexuality', desc: 'text here' },
  { title: 'Existential Issues', desc: 'text here' },
  { title: 'Addiction/Co-Dependency', desc: 'text here' },
  { title: 'Relationship Issues', desc: 'text here' },
  { title: 'Chronic Pain', desc: 'text here' },
];
</script>

<template>
  <div class="home-areas">
    <ul class="tags">
      <li v-for="area in areas">{{ area.title }}</li>
    </ul>
  </div>
</template>

<style scoped></style>

<script setup></script>

<template>
  <div class="home-areas">
    <ul class="tags">
      <li v-for="area in areas">{{ area.title }}</li>
    </ul>
  </div>
</template>

<style scoped></style>

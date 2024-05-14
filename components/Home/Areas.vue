<script setup></script>

<template>
  <div class="home-areas">
    <ul class="tags">
      <li v-for="area in areas">
        <NuxtLink to="/expertise">{{ area.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>

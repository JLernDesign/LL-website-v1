<script setup>
// Dato CMS Query
const QUERY = /* GraphQL */ `
  query {
    specialty {
      specialtyAreas {
        title
      }
    }
  }
`;
const { data, error } = await useGraphqlQuery({ query: QUERY });
const page_data = toRaw(data.value);
</script>

<template>
  <div class="home-areas">
    <ul class="tags">
      <li v-for="area in page_data.specialty.specialtyAreas">
        <NuxtLink to="/expertise">{{ area.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>

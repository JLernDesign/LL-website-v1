<script setup>
// Dato CMS
/* const QUERY = `
  query {
    expertise {
      areasOfExpertise {
        title, description
      } 
    }
  }
`;
const { data, error } = await useGraphqlQuery({ query: QUERY });
const areas_data = toRaw(data.value.expertise.areasOfExpertise);
areas_data.forEach((area) => {
  console.log(area.title);
}); */
</script>

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

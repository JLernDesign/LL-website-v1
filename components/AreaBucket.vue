<script setup>
const props = defineProps(['title', 'desc']);
</script>

<template>
  <div class="bucket body-sm">
    <div class="row">
      <h3>{{ props.title }}</h3>
    </div>
    <div class="row">
      <p>{{ props.desc }}</p>
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-size: 22px;
  font-weight: 400;
  color: var(--pink);
  text-transform: uppercase;
  padding: 10px 0;
}
.bucket {
  border: 1px solid var(--ltgray);
  border-radius: 20px;
  .row {
    padding: 20px 25px;
    + .row {
      border-top: 1px solid var(--ltgray);
    }
  }
}
</style>

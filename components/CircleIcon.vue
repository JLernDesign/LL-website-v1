<script setup>
const props = defineProps(['color', 'icon']);
</script>

<template>
  <div :class="`circle-icon bg-${props.color}`">
    <img :src="`icons/${props.icon}.svg`" alt="" />
  </div>
</template>

<style scoped>
.circle-icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 30px;
  padding: 15px;
}
</style>

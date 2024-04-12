<script setup>
const props = defineProps(['theme']);
</script>

<template>
  <div class="pattern" :class="props.theme"></div>
</template>

<style scoped>
.pattern {
  position: absolute;
  left: 0;
  top: 0px;
  width: 100%;
  height: 248px;
  &.dk {
    background-image: url(../public/icon-pattern-dk.svg);
  }
  &.lt {
    background-image: url(../public/icon-pattern-lt.svg);
  }
}
</style>

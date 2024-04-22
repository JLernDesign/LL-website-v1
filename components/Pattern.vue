<script setup>
const props = defineProps(['theme', 'fade']);
</script>

<template>
  <div
    :class="`pattern ${props.theme} ${props.fade == 'true' ? 'fade' : ''}`"
  ></div>
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
  &.fade {
    opacity: 0.7;
  }
}
</style>

<script setup>
const props = defineProps(['page']);
</script>

<template>
  <div class="wrapper gradbg" :class="props.page">
    <Header :class="props.page" />
    <!--     <div class="alert">Website Under Construction. Check Back Soon!</div>
 -->
    <div class="inner-wrapper">
      <slot />
    </div>
    <Footer />
    <div class="cover"></div>
  </div>
</template>

<style scoped>
.alert {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  padding: 15px;
  background-color: var(--pink);
  color: #fff;
  font-weight: 700;
  z-index: 20;
}
@media (max-width: 1200px) {
  .alert {
    left: 0px;
    transform: none;
    font-size: 18px;
  }
}
@media (max-width: 600px) {
  .alert {
    width: 100%;
    text-align: center;
    font-size: 16px;
  }
}
.change {
  position: fixed;
  left: 0;
  top: 0;
}
</style>

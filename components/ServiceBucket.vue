<script setup>
const props = defineProps(['title', 'desc', 'color', 'icon']);
</script>

<template>
  <div class="bucket body-md scroll-reveal">
    <div class="row title" :style="`background-color:${props.color}`">
      <h3 v-html="props.title"></h3>
    </div>
    <div class="row desc">
      <p v-html="props.desc"></p>
      <div class="bucket-icon">
        <img :src="props.icon" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  min-height: 90px;
  align-content: center;
}
h3 {
  font-weight: 700;
  color: #fff;
}
.bucket {
  .row {
    &.desc {
      padding-bottom: 100px;
    }
  }
}
.bucket-icon {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 75px;
  height: 75px;
  border-radius: 20px 0 0 0;
  border-top: 1px solid var(--ltgray);
  border-left: 1px solid var(--ltgray);
  padding: 15px;
}
</style>

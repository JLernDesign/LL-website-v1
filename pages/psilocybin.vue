<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  // setup section register with scroll
  registerSection('.q-wrap');

  // setup menu pin
  pinMenu('.side-menu');

  // call resize listener
  addEventListener('resize', updateSize);
});
onUnmounted(() => {
  ScrollTrigger.killAll();
  addEventListener('resize', updateSize);
});

// browser size event
const updateSize = () => {
  ScrollTrigger.refresh();
};
</script>

<template>
  <div>
    <PageHeader title="Psilocybin" color="green" />
    <section class="section-wrapper">
      <div class="page-grid">
        <SideMenu class="start-pin" />

        <div class="content-wrapper pt pb">
          <div class="max-sm body-md">
            <img
              src="@/assets/img/mushrooms@2x.jpg"
              class="header-img"
              alt=""
            />
            <div
              class="q-wrap"
              v-for="(item, key) in psilocybin"
              :data-id="key"
            >
              <h2>{{ item.title }}</h2>
              <span v-html="item.desc"></span>
            </div>
          </div>
        </div>

        <div class="sidebar">
          <div class="inner bg-palegreen">
            <CircleIcon color="green" icon="stars" />
            <div class="side-body body-sm" v-html="side_psilocybin"></div>
          </div>
        </div>
      </div>
      <div class="end-pin"></div>
    </section>
  </div>
</template>

<style scoped>
.circle-icon {
  padding: 25px;
}
.header-img {
  margin-bottom: var(--top-margin);
}
.q-wrap {
  h2 {
    margin-bottom: 25px;
  }
  + .q-wrap {
    margin-top: 70px;
  }
}
</style>

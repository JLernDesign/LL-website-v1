<script setup>
// imports
import gsap from 'gsap';
const route = useRoute();

// initial states
const page_title = useState('page_title', () => 'index');
const page_type = useState('page_type', () => 'home');
const site_data = useState('site_data', () => '');

// init global meta data if entry point is a tier page
if (route.path != '/') {
  initSiteMeta();
}

// open site after initial load
onMounted(() => {
  openPage(route.fullPath, route.name);
});
</script>

<template>
  <div>
    <NuxtLayout :page="page_type">
      <NuxtPage
        :transition="{
          name: 'custom',
          mode: 'out-in',
          css: false,
          onBeforeLeave: () => {
            freezePage('.wrapper');
          },
          onLeave: (el, done) => {
            gsap.fromTo(
              '.cover',
              { xPercent: -100 },
              {
                duration: 0.5,
                xPercent: 0,
                ease: 'power3.inOut',
                onComplete: done,
              }
            );
          },
          onEnter: () => {
            openPage(route.fullPath, route.name);
          },
        }"
      />
    </NuxtLayout>
  </div>
</template>

<style scoped></style>

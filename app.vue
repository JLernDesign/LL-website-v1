<script setup>
import gsap from 'gsap';
const pageType = ref('home');
const path = ref('/');
const route = useRoute();

const setPageType = () => {
  if (route.fullPath != '/') {
    pageType.value = 'tier';
  } else {
    pageType.value = 'home';
  }
  //console.log(pageType.value);
  path.value = route.path;
};
setPageType();

const openPage = () => {
  setPageType();
  gsap.fromTo(
    '.cover',
    { xPercent: 0 },
    { duration: 0.5, xPercent: 100, ease: 'power3.inOut' }
  );
};

onMounted(() => {
  openPage();
});

// watch for new route
watch(path, () => {
  //console.log('new route ready');
  gsap.set('.inner-wrapper', { scrollTop: 0 });
});
</script>

<template>
  <div>
    <NuxtLayout :page="pageType">
      <NuxtPage
        :transition="{
          name: 'custom',
          mode: 'out-in',
          css: false,

          onLeave: (el, done) => {
            gsap.fromTo(
              '.cover',
              { xPercent: -100 },
              {
                duration: 0.5,
                xPercent: 0,
                ease: 'power3.out',
                onComplete: done,
              }
            );
          },
          onEnter: (el, done) => {
            openPage();
          },
        }"
      />
    </NuxtLayout>
  </div>
</template>

<style scoped></style>

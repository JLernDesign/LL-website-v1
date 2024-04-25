<script setup>
import gsap from 'gsap';
const route = useRoute();

const page_title = useState('page-title', () => 'index');
const page_type = useState('page-type', () => 'home');

// get data from API
const site_data = useState('site_data', () => '');
const get_url =
  'https://allure.instawp.xyz/wp-json/wp/v2/pages?acf_format=standard ';
const { data: alldata, pending } = await useFetch(get_url, {
  onRequest() {
    console.time();
  },
  onResponse() {
    console.timeEnd();
    console.log('data ready');
  },
});
site_data.value = toRaw(alldata.value);

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
          onEnter: (el, done) => {
            openPage(route.fullPath, route.name);
          },
        }"
      />
    </NuxtLayout>
  </div>
</template>

<style scoped></style>

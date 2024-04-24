<script setup>
import gsap from 'gsap';
const pageType = ref('home');
const path = ref('/');
const route = useRoute();

/* const page_name = ref('');
page_name.value = route.name; */

// global state for page name
const page_title = useState('title', () => route.name);

// get data from API
const site_data = useState('site_data', () => '');
const get_url = 'https://allure.instawp.xyz/wp-json/wp/v2/pages';
const { data: alldata, pending } = await useFetch(get_url, {
  onResponse() {
    console.log('request');
  },
});
site_data.value = toRaw(alldata.value);

// figure out if home or tier page
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

// open page animation
const openPage = () => {
  setPageType();
  gsap.fromTo(
    '.cover',
    { xPercent: 0 },
    { duration: 0.5, xPercent: 100, ease: 'power3.inOut' }
  );
  unfreezePage();
  //page_name.value = route.name;
  page_title.value = route.name;
};

// freeze/unfreeze page on transition
let wrapper;
onMounted(() => {
  wrapper = document.querySelector('.wrapper');
});

const freezePage = () => {
  const scrollY = window.scrollY;
  wrapper.classList.add('change');
  gsap.set('.wrapper', { top: -scrollY });
};
const unfreezePage = () => {
  wrapper.classList.remove('change');
  wrapper.style.top = '';
};

onMounted(() => {
  openPage();
});

// watch for new route
/* watch(path, () => {
  //console.log('new route ready');
  gsap.set('.inner-wrapper', { scrollTop: 0 });
}); */
</script>

<template>
  <div>
    <NuxtLayout :page="pageType">
      <NuxtPage
        :transition="{
          name: 'custom',
          mode: 'out-in',
          css: false,
          onBeforeLeave: () => {
            freezePage();
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
            openPage();
          },
        }"
      />
    </NuxtLayout>
  </div>
</template>

<style scoped></style>

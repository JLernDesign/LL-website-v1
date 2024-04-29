<script setup>
const pages = [
  { title: 'About', icon: 'look', url: '/about' },
  { title: 'Expertise', icon: 'collect', url: '/expertise' },
  { title: 'Services', icon: 'sit', url: '/services' },
  { title: 'Psilocybin', icon: 'hallucinate', url: '/psilocybin' },
];
const props = defineProps(['class', 'curpage']);
const showMenu = true;

let gradbg;
onMounted(() => {
  gradbg = document.querySelector('.header-grad');
  updateBG();
});
const updateBG = () => {
  gradbg.style.height = document.body.scrollHeight + 'px';
};
//defineExpose({ updateBG });

// watch for page change to adjust header
const title = useState('page_title');
watch(
  () => title.value,
  () => {
    //console.log('change to: ' + title.value);
    updateBG();
  }
);

// set resize listener to update bg gradient
useEventListener(window, 'resize', updateBG);
</script>

<template>
  <div class="logo-main">
    <NuxtLink to="/"
      ><p><strong>Lindsey</strong> Lerner</p></NuxtLink
    >
  </div>
  <header class="main" v-if="showMenu">
    <div class="gradbg header-grad"></div>
    <nav>
      <ul>
        <li v-for="page in pages">
          <NuxtLink :to="page.url">
            <div class="icon-wrap">
              <img :src="`icons/${page.icon}.svg`" alt="" />
            </div>

            <p class="small-caps">{{ page.title }}</p>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
  <Contact :class="props.class" />
</template>

<style scoped>
header.main {
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  height: 180px;
  border-radius: 0 0 100px 100px;
  overflow: hidden;
  z-index: 20;
  align-content: center;
  a {
    text-decoration: none;
  }
}
.gradbg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  min-height: 900px;
  z-index: 0;
}
nav,
ul {
  width: 765px;
}
ul {
  position: relative;
  z-index: 1;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  gap: 55px;
  padding: 0 100px;
  text-align: center;
  .icon-wrap {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid white;
    margin: 0 auto 15px;
    padding: 18px;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
    display: grid;
    place-content: center;
  }
  p {
    color: #fff;
  }
}
.logo-main {
  position: absolute;
  left: 50px;
  top: 30px;
  font-size: 40px;
  font-weight: 100;
  text-transform: uppercase;
  z-index: 11;
  opacity: 0;
  strong {
    font-weight: 400;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
}
/* @media (max-width: 1500px) {
  .logo-main {
    font-size: 25px;
  }
  header.main {
    transform: translateX(-50%) scale(0.7);
    transform-origin: center top;
  }
  .wrapper.tier {
    padding-top: 70px;
  }
}
*/
@media (max-width: 1024px) {
  header.main nav {
    display: none;
  }
  .logo-main {
    font-size: 30px;
    top: 12px;
    left: 35px;
  }
}
</style>

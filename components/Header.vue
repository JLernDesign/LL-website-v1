<script setup>
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

// watch for page change to adjust header
const title = useState('page_title');
watch(
  () => title.value,
  () => {
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
    <Nav type="desktop" />
  </header>
  <Contact :class="props.class" />
  <Menu />
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
.logo-main {
  position: absolute;
  left: 50px;
  top: 30px;
  font-size: 40px;
  font-weight: 100;
  text-transform: uppercase;
  z-index: 11;
  opacity: 0;
  visibility: hidden;
  strong {
    font-weight: 400;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
}
@media (max-width: 1500px) {
  .logo-main {
    font-size: 35px;
    line-height: 0.9;
    top: 20px;
    strong {
      display: block;
    }
  }
}
@media (max-width: 1300px) {
  header.main {
    height: 130px;
    border-radius: 0 0 50px 50px;
  }
  .logo-main {
    left: 35px;
  }
}
@media (max-width: 1024px) {
  header.main nav {
    display: none;
  }
  .logo-main {
    font-size: 30px;
    top: 12px;
  }
}
@media (max-width: 768px) {
  .logo-main {
    left: 25px;
  }
}
</style>

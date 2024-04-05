<script setup>
const pages = [
  { title: 'About', icon: 'look' },
  { title: 'Expertise', icon: 'collect' },
  { title: 'Services', icon: 'sit' },
  { title: 'Psilocybin', icon: 'hallucinate' },
];
const showMenu = false;
</script>

<template>
  <header class="main" v-if="showMenu">
    <div class="gradbg"></div>

    <nav>
      <li v-for="page in pages">
        <NuxtLink to="/">
          <div class="icon-wrap">
            <img :src="`icons/${page.icon}.svg`" alt="" />
          </div>

          <p class="small-caps">{{ page.title }}</p>
        </NuxtLink>
      </li>
    </nav>
  </header>
  <Contact />
</template>

<style scoped>
header.main {
  position: fixed;
  top: 0;
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
nav {
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
    margin-bottom: 15px;
    padding: 18px;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
    display: grid;
    place-content: center;
  }
  p {
    color: #fff;
  }
}
</style>

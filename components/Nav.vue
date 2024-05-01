<script setup>
const props = defineProps(['type']);

// filter links for desktop
let pageList = pages;
if (props.type == 'desktop') {
  pageList = pages.filter((page) => page.desktop);
}
</script>

<template>
  <nav :class="type">
    <ul class="anim-resize">
      <li v-for="page in pageList">
        <NuxtLink :to="page.url">
          <div class="icon-wrap anim-resize">
            <img :src="`icons/${page.icon}.svg`" alt="" />
          </div>

          <p class="small-caps">{{ page.title }}</p>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
a {
  text-decoration: none;
}
ul {
  width: 100%;
  position: relative;
  z-index: 1;
  display: grid;
  grid-auto-columns: minmax(100px, 1fr);
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

@media (max-width: 1300px) {
  nav.desktop {
    ul {
      gap: 20px;
      padding: 0 45px;

      .icon-wrap {
        width: 70px;
        height: 70px;
        padding: 14px;
        margin-bottom: 10px;
        border-width: 1px;
      }
    }
  }
}
</style>

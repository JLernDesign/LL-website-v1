<script setup>
const setSection = (e) => {
  jumpTo(e);

  // toggle sections
  const id = e.target.dataset.id;
  const menu = document.querySelector('.side-menu');
  const items = menu.querySelectorAll('li');
  items.forEach((item) => {
    item.classList.remove('on');
    if (item.dataset.id == id) {
      item.classList.add('on');
    }
  });
};
</script>

<template>
  <div class="side-menu pt">
    <nav>
      <ul>
        <li
          v-for="(item, key) in psilocybin"
          @click="setSection"
          :data-id="key"
          :class="key == 0 && 'on'"
        >
          <span>{{ item.title }}</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.side-menu {
  padding-right: 35px;
}
nav {
  max-width: 355px;
}
li {
  position: relative;
  border-bottom: 1px solid var(--ltgray);
  cursor: pointer;
  &.on {
    span:before {
      transform: scaleX(1);
    }
  }
}
span {
  font-size: 17px;
  font-weight: 400;
  line-height: 1.3;
  color: #000;
  padding: 15px 20px;
  display: inline-block;
  position: relative;
  pointer-events: none;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    transform-origin: left top;
    background-color: var(--palegreen);
    transition: var(--ease-in-out);
    z-index: -1;
  }
}
@media (max-width: 1024px) {
  .side-menu {
    display: none;
  }
}
</style>

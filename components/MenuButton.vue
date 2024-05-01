<script setup></script>

<template>
  <div class="menu-btn">
    <div class="menu-line top"></div>
    <div class="menu-line mid"></div>
    <div class="menu-line bot"></div>
  </div>
</template>

<style scoped>
.menu-btn {
  position: absolute;
  right: 15px;
  top: 15px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  transition: var(--linear);
  &.on {
    background-color: rgba(0, 0, 0, 0.7);
  }
}
.menu-line {
  width: 50%;
  height: 2px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -25%;
  transition: var(--ease-out);
  &:nth-child(1) {
    transform: translateY(-8px);
  }
  &:nth-child(3) {
    transform: translateY(8px);
  }
}
@media (min-width: 768px) {
  .menu-btn {
    right: 25px;
  }
}
</style>

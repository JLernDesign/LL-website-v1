<script setup></script>

<template>
  <footer class="main">
    <p>
      © Copyright 2024 |
      <NuxtLink to="privacy">Privacy Policy</NuxtLink>
    </p>
    <p>Design: <a href="http://jlern.com" target="_blank">JLern Design</a></p>
  </footer>
</template>

<style scoped>
footer {
  position: absolute;
  width: 100%;
  left: 0px;
  bottom: 0px;
  height: var(--side-margin-fr);
  padding: 0 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 16px;
    color: white;
  }
  a {
    color: white;
  }
}
</style>

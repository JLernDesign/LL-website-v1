<script setup></script>

<template>
  <footer class="main hpad">
    <p>
      © Copyright 2024
      <!-- <span class="line-spacer">|</span> <NuxtLink to="privacy">Privacy Policy</NuxtLink> -->
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 16px;
    font-weight: 400;
    color: white;
    + p {
      margin-top: 0;
    }
  }
  a {
    color: white;
    text-decoration: underline;
  }
}
.line-spacer {
  padding: 0 10px;
}
@media (max-width: 1200px) {
  footer {
    justify-content: center;
    > * {
      display: inline-block;
      + * {
        margin-left: 10px;
      }
    }
  }
}
@media (max-width: 768px) {
  footer p {
    font-size: 13px;
  }
}
</style>

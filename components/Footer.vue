<script setup></script>

<template>
  <footer class="main hpad">
    <p>
      © Copyright 2024
      <span class="line-spacer">|</span>
      <a href="mailto:Lindseynelsonpsyd@gmail.com"
        >Lindseynelsonpsyd@gmail.com</a
      >
      <span class="line-spacer">|</span>(971) 266-0647
    </p>
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
        margin-left: 20px;
      }
    }
  }
}
@media (max-width: 768px) {
  footer {
    p {
      font-size: 13px;
    }
  }
}
@media (max-width: 650px) {
  footer {
    position: relative;
    display: block;
    height: auto;
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: center;
    .line-spacer {
      display: block;
      visibility: hidden;
      height: 5px;
      overflow: hidden;
    }
  }
}
</style>

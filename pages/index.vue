<script setup></script>

<template>
  <div class="content-wrapper">
    <div class="row two-col">
      <div class="col lt">
        <div class="logo">
          <img src="@/assets/img/logo.svg" alt="" />
        </div>
      </div>
      <div class="col rt">
        <h2>
          Coming to therapy to take the first steps towards healing is one of
          the bravest things a person can do.
        </h2>
        <p>
          I believe that all beings naturally gravitate towards their most
          actualized selves, and that the therapy room is a space to validate
          and nurture that process. I view my role in this as an honor and have
          a deep reverence and respect for individuals that I serve.
        </p>
      </div>
    </div>
    <HomeAreas />
  </div>
</template>

<style scoped>
.content-wrapper {
  padding-top: 300px;
  padding-bottom: 25px;
}
.logo {
  max-width: 600px;
}
h2 {
  font-weight: 300;
  font-size: 35px;
  + p {
    margin-top: 30px;
  }
}
</style>

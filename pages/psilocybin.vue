<script setup></script>

<template>
  <div>
    <PageHeader title="Psilocybin" color="green" />
    <section class="section-wrapper vis">
      <div class="page-grid">
        <div class="about-photo"></div>

        <div class="content-wrapper pt pb">
          <div class="max-sm body-md">
            <img
              src="@/assets/img/mushrooms@2x.jpg"
              class="header-img"
              alt=""
            />
            <div class="q-wrap" v-for="item in psilocybin">
              <h2>{{ item.title }}</h2>
              <span v-html="item.desc"></span>
            </div>
          </div>
        </div>

        <div class="sidebar">
          <div class="inner bg-palegreen">
            <CircleIcon color="green" icon="stars" />
            <div class="side-body body-sm" v-html="side_psilocybin"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.circle-icon {
  padding: 25px;
}
.header-img {
  margin-bottom: 50px;
}
.q-wrap {
  h2 {
    margin-bottom: 25px;
  }
  + .q-wrap {
    margin-top: 70px;
  }
}
</style>

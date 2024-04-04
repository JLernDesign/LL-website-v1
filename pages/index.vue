<script setup></script>

<template>
  <div class="home-wrapper">
    <section class="home-hero content-wrapper vis">
      <div class="row two-col has-line">
        <div class="col lt">
          <div class="txt-grp">
            <div class="logo">
              <img src="@/assets/img/logo.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="col rt a-rt">
          <div class="txt-grp">
            <div class="callout">
              <div>
                <img
                  src="@/assets/img/lindsey-home@2x.jpg"
                  alt=""
                  class="circle-crop bd-yellow"
                />
              </div>
              <h2>
                Coming to therapy to take the first steps towards healing is one
                of the bravest things a person can do.
              </h2>
            </div>

            <p>
              I believe that all beings naturally gravitate towards their most
              actualized selves, and that the therapy room is a space to
              validate and nurture that process. I view my role in this as an
              honor and have a deep reverence and respect for individuals that I
              serve.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="content-wrapper">
      <HomeAreas />
    </section>
  </div>
</template>

<style scoped>
.home-hero {
  max-width: 1660px;
}
.home-wrapper {
  padding-top: 180px;
  padding-bottom: 50px;
  display: grid;
  align-content: center;
  min-height: calc(100vh - 70px);
}
.logo {
  max-width: 600px;
}
h2 {
  font-weight: 300;
  font-size: 35px;
}
.callout + * {
  margin-top: 30px;
}
.col.lt {
  display: grid;
  place-content: center;
  .txt-grp {
    max-width: 730px;
    padding-right: 50px;
  }
}
.col.rt .txt-grp {
  max-width: 735px;
  padding-left: 50px;
  p {
    max-width: 600px;
  }
}
.callout {
  display: grid;
  grid-template-columns: 150px 1fr;
  align-items: center;
  img {
    max-width: 132px;
    margin-top: -7px;
  }
}
</style>

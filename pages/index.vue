<script setup>
const route = useRoute();
useHead({
  title: 'Lindsey Lerner PsyD',
});
</script>

<template>
  <div>
    <Pattern theme="dk" />
    <div class="home-wrapper">
      <section class="home-hero section-wrapper vis">
        <div class="row two-col has-line">
          <div class="col lt">
            <div class="txt-grp">
              <div class="logo">
                <img src="@/assets/img/logo.svg" alt="Lindsey Lerner PsyD" />
              </div>
            </div>
          </div>
          <div class="col rt a-rt">
            <div class="txt-grp">
              <div class="callout">
                <div>
                  <img
                    src="@/assets/img/lindsey-home@2x.jpg"
                    alt="Lindsey Lerner"
                    class="circle-crop bd-yellow"
                  />
                </div>
                <h2>
                  Coming to therapy to take the first steps towards healing is
                  one of the bravest things a person can do.
                </h2>
              </div>

              <p>
                I believe that all beings naturally gravitate towards their most
                actualized selves, and that the therapy room is a space to
                validate and nurture that process. I view my role in this as an
                honor and have a deep reverence and respect for individuals that
                I serve.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="section-wrapper areas">
        <HomeAreas />
      </section>
    </div>
  </div>
</template>

<style scoped>
.home-hero {
  max-width: 1660px;
}
.home-wrapper {
  padding-top: 280px;
  padding-bottom: 50px;
  display: grid;
  align-content: center;
  min-height: calc(100vh - 70px);
}
.logo {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
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
.areas {
  margin-top: 100px;
}
@media (max-width: 1200px) {
  .home-wrapper {
    padding-top: 120px;
    align-content: start;
  }
  .logo {
    max-width: 400px;
  }
  .areas {
    margin-top: 25px;
  }
  .row.two-col .col.lt {
    padding: 0;
    display: block;
  }
  .callout + * {
    margin-top: 15px;
  }
}
@media (max-width: 768px) {
  h2 {
    font-size: 22px;
  }
}
@media (min-width: 1200px) and (max-height: 980px) {
  .home-wrapper {
    padding-top: 200px;
  }
  .pattern {
    top: -60px;
  }
  .areas {
    margin-top: 50px;
  }
}
@media (max-width: 550px) {
  .home-wrapper {
    padding-bottom: 25px;
  }
  .callout {
    display: block;
    img {
      margin-bottom: 20px;
    }
    + * {
      margin-top: 20px;
    }
  }
  .pattern {
    top: -100px;
    background-size: 40% auto;
  }
}
</style>

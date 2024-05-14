<script setup>
const route = useRoute();
useHead({
  title: 'Lindsey Lerner PsyD',
});

// pull page from global site data by id
const page_data = setupPageData(56);
</script>

<template>
  <div>
    <Pattern theme="dk" />
    <div class="home-wrapper">
      <section class="home-hero section-wrapper hpad vis">
        <div class="row two-col has-line">
          <div class="col lt">
            <div class="txt-grp">
              <div class="logo">
                <img src="@/assets/img/logo.svg" alt="Lindsey Lerner PsyD" />
              </div>
            </div>
          </div>
          <div class="col rt a-rt">
            <div class="txt-grp body-lg">
              <div class="callout">
                <div>
                  <img
                    src="@/assets/img/lindsey-home@2x.jpg"
                    alt="Lindsey Lerner"
                    class="circle-crop bd-yellow"
                  />
                </div>
                <h2>
                  {{ home[0].headline }}
                  <!--                   {{ page_data && page_data.acf.home_headline }}
 -->
                </h2>
              </div>

              <p>
                {{ home[0].intro }}
                <!--                 {{ page_data && page_data.acf.home_intro }}
 -->
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="section-wrapper hpad areas">
        <HomeAreas />
      </section>
    </div>
  </div>
</template>

<style scoped>
.home-wrapper {
  width: 100%;
  max-width: 1660px;
  margin: 0 auto;
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
.body-lg p {
  font-size: 25px;
  line-height: 1.4;
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

@media (min-width: 1200px) and (max-width: 1450px) {
  .row.two-col {
    grid-template-columns: 1fr 1.5fr;
  }
}

@media (max-width: 1400px) {
  h2 {
    font-size: 28px;
  }
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
  .callout {
    align-items: end;
  }
  .callout + * {
    margin-top: 15px;
  }
  .body-lg p {
    font-size: 23px;
    line-height: 1.4;
  }
}

@media (max-width: 1024px) {
  .home-wrapper {
    padding-top: 50px;
  }
}

@media (max-width: 768px) {
  h2 {
    font-size: 22px;
  }
  .body-lg p {
    font-size: 18px;
  }
  .logo {
    max-width: 300px;
  }
  .callout {
    grid-template-columns: 100px 1fr;
    img {
      max-width: 80px;
      margin-top: -7px;
    }
  }
  .pattern {
    top: -100px;
    background-size: 140px auto;
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
      display: none;
    }
    + * {
      margin-top: 20px;
    }
  }
}
</style>

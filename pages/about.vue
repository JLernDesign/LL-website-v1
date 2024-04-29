<script setup>
// pull page from global site data by id
const page_data = setupPageData(65);

//v-html="page_data && page_data.acf.about_body"
//v-html="page_data && page_data.acf.about_background"
</script>

<template>
  <div>
    <PageHeader title="About" color="yellow" />
    <section class="section-wrapper vis">
      <div class="page-grid">
        <div class="about-photo">
          <img src="@/assets/img/lindsey-about@2x.jpg" alt="" />
          <!--           <img :src="page_data && page_data.acf.about_photo" alt="" />
  
 -->
        </div>

        <div class="content-wrapper vpad pr mob">
          <div class="max-sm body-md txt-cols" v-html="about"></div>
          <div class="quote-wrap">
            <blockquote>
              “Compassion is not a relationship between the healer and the
              wounded. It's a relationship between equals. Only when we know our
              own darkness well can we be present with the darkness of others.
              Compassion becomes real when we recognize our shared humanity.”
            </blockquote>
            <cite><span>- Pema Chodron</span></cite>
          </div>
        </div>

        <div class="sidebar">
          <div class="inner bg-paleyellow">
            <CircleIcon color="yellow" icon="look" />
            <div class="side-body body-sm" v-html="creds"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-photo {
  margin-top: -70px;
  padding-right: 9%;
  img {
    border: 10px solid #fff;
  }
}
.quote-wrap {
  margin-top: 50px;
  blockquote,
  cite {
    font-size: 36px;
    font-weight: 300;
    line-height: 1.38;
    font-style: normal;
  }
  blockquote {
    margin: 0;
    padding: 0;
    display: inline;
    background-color: var(--yellow);
    box-shadow:
      10px 0 0 var(--yellow),
      -10px 0 0 var(--yellow);
  }
  cite {
    display: block;
    margin-top: 10px;
    span {
      display: inline-block;
      background-color: var(--paleyellow);
      box-shadow:
        10px 0 0 var(--paleyellow),
        -10px 0 0 var(--paleyellow);
    }
  }
}

@media (max-width: 1024px) {
  .about-photo {
    display: none;
  }
  .quote-wrap {
    margin-top: 25px;
    blockquote,
    cite {
      font-size: 24px;
    }
  }
}
</style>

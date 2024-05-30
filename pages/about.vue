<script setup>
const page_ref = 'about';

// Dato CMS Query
const QUERY = /* GraphQL */ `
  query {
    ${page_ref} {
      pageHeader {
        title
        slug
      }
      photo {
        url
        alt
      }
      body
      credentials
      quoteText
      byline
    }
  }
`;

const { data, error } = await useGraphqlQuery({ query: QUERY });
const page_data = toRaw(data.value);

// set page meta
queryPageMeta(
  page_data[page_ref].pageHeader.title,
  page_data[page_ref].pageHeader.slug
);

const mobile = ref(false);
const setMobile = () => {
  if (window.innerWidth > 1024) {
    mobile.value = false;
  } else {
    mobile.value = true;
  }
};
setMobile();
useEventListener(window, 'resize', setMobile);
</script>

<template>
  <div>
    <PageHeader :title="page_data[page_ref].pageHeader.title" color="yellow" />
    <section class="section-wrapper vis">
      <div class="page-grid">
        <div class="about-photo">
          <img
            :src="page_data.about.photo.url"
            :alt="page_data.about.photo.alt"
          />
        </div>

        <div class="content-wrapper vpad pr mob">
          <img
            :src="page_data.about.photo.url"
            :alt="page_data.about.photo.alt"
            class="mobile-photo"
            v-if="mobile"
          />

          <div
            class="max-sm body-md txt-cols"
            v-html="page_data.about.body"
          ></div>

          <div class="quote-wrap" v-if="page_data.about.quoteText">
            <blockquote>“{{ page_data.about.quoteText }}”</blockquote>
            <cite
              ><span v-if="page_data.about.byline"
                >- {{ page_data.about.byline }}</span
              ></cite
            >
          </div>
        </div>

        <div class="sidebar">
          <div class="inner bg-paleyellow">
            <CircleIcon color="yellow" icon="learn" />
            <div
              class="side-body body-sm"
              v-html="page_data.about.credentials"
            ></div>
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
.mobile-photo {
  float: left;
  width: 50%;
  max-width: 300px;
  margin: 0 25px 10px 0;
  border-right: 8px solid var(--yellow);
  border-bottom: 8px solid var(--yellow);
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
@media (max-width: 450px) {
  .mobile-photo {
    float: none;
    width: 100%;
    max-width: none;
    margin-bottom: 20px;
  }
}
</style>

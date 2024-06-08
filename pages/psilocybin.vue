<script setup>
const page_ref = 'psilocybin';
import { Image as DatocmsImage } from 'vue-datocms';

// imports
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

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
        responsiveImage(imgixParams: { auto: format }) {
          src
          width
          height
          alt
          bgColor
        }
      }
      qas {
        question
        answer
      }
      sideCallout
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

onMounted(() => {
  // setup section register with scroll
  registerSection('.q-wrap');

  // setup menu pin
  pinMenu('.side-menu', 1024);

  // call resize listener
  addEventListener('resize', updateSize);
});

onUnmounted(() => {
  ScrollTrigger.killAll();
  addEventListener('resize', updateSize);
});

// browser size event
const updateSize = () => {
  ScrollTrigger.refresh();
};
</script>

<template>
  <div>
    <PageHeader :title="page_data[page_ref].pageHeader.title" color="green" />
    <section class="section-wrapper">
      <div class="page-grid">
        <SideMenu class="start-pin" :items="page_data[page_ref].qas" />

        <div class="content-wrapper vpad pr mob">
          <div class="max-sm body-md">
            <DatocmsImage
              :data="page_data[page_ref].photo.responsiveImage"
              class="header-img"
            />
            <!--             <img
              :src="page_data[page_ref].photo.url"
              class="header-img"
              :alt="page_data[page_ref].photo.alt"
            /> -->
            <div
              class="q-wrap"
              v-for="(item, key) in page_data[page_ref].qas"
              :data-id="key"
            >
              <h2>{{ item.question }}</h2>
              <span v-html="item.answer"></span>
            </div>
          </div>
        </div>

        <div class="sidebar">
          <div class="inner bg-palegreen">
            <CircleIcon color="green" icon="stars" />
            <div
              class="side-body body-sm"
              v-html="page_data[page_ref].sideCallout"
            ></div>
          </div>
        </div>
      </div>
      <div class="end-pin"></div>
    </section>
  </div>
</template>

<style scoped>
.circle-icon {
  padding: 25px;
}
.header-img {
  margin-bottom: var(--top-margin);
}
.q-wrap {
  h2 {
    margin-bottom: 25px;
  }
  + .q-wrap {
    margin-top: 70px;
  }
}

@media (max-width: 1024px) {
  .q-wrap {
    h2 {
      margin-bottom: 15px;
    }
    + .q-wrap {
      margin-top: 40px;
    }
  }
  .header-img {
    margin-bottom: var(--top-marginM);
  }
}
</style>

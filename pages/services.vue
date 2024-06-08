<script setup>
const page_ref = 'servicesPage';

// Dato CMS Query
const QUERY = /* GraphQL */ `
  query {
    servicesPage {
      pageHeader {
        title
        slug
      }
      services {
        title
        description
        icon {
          url
        }
        color {
          hex
        }
      }
      pricingTitle
      pricingDesc
      insuranceTitle
      insuranceCarriers {
        carrier
      }
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
</script>

<template>
  <div>
    <PageHeader
      :title="page_data[page_ref].pageHeader.title"
      color="yellow"
      size="wide"
    />
    <section class="section-wrapper hpad vpad">
      <div class="content-wrapper">
        <div class="grid three-col">
          <ServiceBucket
            v-for="service in page_data[page_ref].services"
            :title="service.title"
            :desc="service.description"
            :color="service.color.hex"
            :icon="service.icon.url"
          />
        </div>
      </div>
    </section>
    <section class="section-wrapper bg-paleyellow hpad vpad">
      <div class="content-wrapper body-lg">
        <div class="row two-col boost">
          <div class="col lt p-rt scroll-reveal">
            <TitleTab
              :text="page_data[page_ref].pricingTitle"
              color="yellow"
              txt=""
              size=""
            />
            <div v-html="page_data[page_ref].pricingDesc"></div>
          </div>
          <div class="col rt scroll-reveal">
            <TitleTab
              :text="page_data[page_ref].insuranceTitle"
              color="yellow"
              txt=""
              size=""
            />
            <ul class="item-list">
              <li v-for="item in page_data[page_ref].insuranceCarriers">
                {{ item.carrier }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>

<script setup>
const page_ref = 'expertise';

// Dato CMS Query
const QUERY = /* GraphQL */ `
  query {
    ${page_ref} {
      pageHeader {
        title
        slug
      }
    }
    specialty {
      title
      specialtyAreas {
        title
        description
      }
    }
    modality {
      title
      modalityAreas {
        title
      }
      footnote
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
    <div class="row-wrapper">
      <TitleTab
        :text="page_data.specialty.title"
        color="pink"
        txt="lt"
        size="sm"
      />
      <section class="section-wrapper hpad">
        <div class="grid three-col">
          <AreaBucket
            v-for="area in page_data.specialty.specialtyAreas"
            :title="area.title"
            :desc="area.description"
          />
        </div>
      </section>
    </div>
    <div class="row-wrapper">
      <TitleTab
        :text="page_data.modality.title"
        color="blue"
        txt="lt"
        size="sm"
      />
      <section class="section-wrapper hpad pb">
        <ul class="tags nolink">
          <li v-for="mod in page_data.modality.modalityAreas">
            {{ mod.title }}
          </li>
        </ul>
        <div class="note body-sm" v-if="page_data.modality.footnote">
          <p>{{ page_data.modality.footnote }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.row-wrapper {
  h2 {
    margin-top: var(--top-margin);
    + * {
      margin-top: 0;
    }
  }
}
.tags li {
  color: var(--blue);
  font-size: 28px;
}
.note {
  margin-top: 20px;
}
@media (min-width: 1401px) {
  .row-wrapper .section-wrapper {
    padding-top: var(--top-margin);
  }
  header {
    padding: 0 165px;
  }
}
@media (max-width: 1400px) {
  .row-wrapper .section-wrapper {
    padding-top: var(--top-marginM);
  }
}
@media (max-width: 1200px) {
  .tags li {
    font-size: 22px;
  }
}
@media (max-width: 1024px) {
  .row-wrapper {
    h2 {
      margin-top: var(--top-marginM);
      + * {
        margin-top: 0;
      }
    }
    .section-wrapper {
      padding-top: 25px;
    }
  }
}
</style>

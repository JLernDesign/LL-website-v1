<script setup>
// pull page from global site data by id
const page_data = setupPageData(76);
</script>

<template>
  <div>
    <PageHeader title="Expertise" color="yellow" size="wide" />
    <div class="row-wrapper">
      <TitleTab text="Specialties" color="pink" txt="lt" size="sm" />
      <section class="section-wrapper hpad">
        <div class="grid three-col">
          <AreaBucket
            v-for="area in areas"
            :title="area.title"
            :desc="area.desc"
          />
        </div>
      </section>
    </div>
    <div class="row-wrapper">
      <TitleTab text="Modalities" color="blue" txt="lt" size="sm" />
      <section class="section-wrapper hpad pb">
        <ul class="tags">
          <li v-for="mod in modalities">{{ mod }}</li>
        </ul>
        <div class="note body-sm">
          <p>
            * this service is not covered by insurance and not part of the
            Insight Haven Group
          </p>
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

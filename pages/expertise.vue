<script setup></script>

<template>
  <div>
    <PageHeader title="Expertise" color="yellow" size="wide" />
    <div class="row-wrapper">
      <TitleTab text="Specialties" color="pink" />
      <div class="content-wrapper">
        <div class="grid three-col">
          <AreaBucket
            v-for="area in areas"
            :title="area.title"
            :desc="area.desc"
          />
        </div>
      </div>
    </div>
    <div class="row-wrapper">
      <TitleTab text="Modalities" color="blue" />
      <div class="content-wrapper">
        <ul class="tags">
          <li v-for="mod in modalities">{{ mod }}</li>
        </ul>
        <div class="note body-sm">
          <p>
            * this service is not covered by insurance and not part of the
            Insight Haven Group
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  padding: 0 165px;
}
.row-wrapper {
  display: grid;
  grid-template-columns: 165px 1fr 165px;
  align-items: start;
  + .row-wrapper {
    margin-top: 65px;
  }
}
.tags li {
  color: var(--blue);
  font-size: 28px;
}
.note {
  margin-top: 20px;
}
</style>

<script setup>
// pull page from global site data by id
const page_data = setupPageData(78);
</script>

<template>
  <div>
    <PageHeader title="Services" color="yellow" size="wide" />
    <section class="section-wrapper hpad vpad">
      <div class="content-wrapper">
        <div class="grid three-col">
          <ServiceBucket
            v-for="service in services"
            :title="service.title"
            :desc="service.desc"
            :color="service.color"
            :icon="service.icon"
          />
        </div>
      </div>
    </section>
    <section class="section-wrapper bg-paleyellow hpad vpad">
      <div class="content-wrapper body-lg">
        <div class="row two-col">
          <div class="col lt p-rt">
            <TitleTab text="Costs of Therapy" color="yellow" txt="" size="" />
            <p>
              Intakes are $300 and individual therapy is $250 per session.
              Sliding scale options are available, with 1 pro-bono spot
              available to those unable to pay. I am in-network with several
              insurance companies, and can provide a super bill as an out of
              network provider. I am also able to apply for pre-authorization
              for individuals with OHP insurance.
            </p>
          </div>
          <div class="col rt">
            <TitleTab
              text="Accepted Insurance carriers"
              color="yellow"
              txt=""
              size=""
            />
            <ul class="item-list">
              <li v-for="item in insurance">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>

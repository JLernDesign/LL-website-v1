<script setup></script>

<template>
  <section class="section-wrapper pb">
    <div class="content-wrapper pt hpad max-sm body-md">
      <header class="pt">
        <h1>Get in Touch</h1>
        <p>
          Introduce yourself! I would be happy to answer any questions you may
          have and schedule a free phone consultation. Please complete a form
          below and I will be in touch with you shortly.
        </p>
      </header>
    </div>

    <div class="forms content-wrapper hpad pt">
      <div class="row two-col gap">
        <ContactForm
          title="Individual Psychotherapy"
          color="pink"
          icon="chair-pink"
          sendto="lindseynelsonpsyd@gmail.com"
          id="6"
        />
        <ContactForm
          title="Psilocybin Facilitation"
          color="green"
          icon="stars-green"
          sendto="goodtripdeathdoula@gmail.com"
          id="54"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
header {
  text-align: center;
}
h1 {
  font-size: 60px;
  font-weight: 300;
  color: var(--pink);
  + p {
    margin-top: 10px;
  }
}
.content-wrapper.max-sm {
  max-width: 920px;
}
@media (max-width: 1200px) {
  h1 {
    font-size: 50px;
  }
  .bucket {
    max-width: 750px;
    width: 100%;
    margin: 0 auto;
  }
}
@media (max-width: 1024px) {
  header {
    padding-top: 0;
  }
}
@media (max-width: 768px) {
  h1 {
    font-size: 40px;
  }
}
</style>

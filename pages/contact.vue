<script setup></script>

<template>
  <section class="section-wrapper pb">
    <div class="content-wrapper pt max-sm body-md">
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
        />
        <ContactForm
          title="Psilocybin Facilitation"
          color="green"
          icon="stars-green"
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
</style>

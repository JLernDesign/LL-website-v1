<script setup></script>

<template>
  <div class="contact-btn">
    <NuxtLink class="block" to="/contact"
      ><span class="txt">Get in Touch</span>
      <img src="../public/icons/arrow-circle.svg" alt="" class="btn-arr" />
    </NuxtLink>
  </div>
</template>

<style scoped>
.contact-btn {
  position: absolute;
  right: 0;
  top: 50px;
  z-index: 12;
  transition: var(--ease-out);
  &.tier {
    transform: translateY(-28px);
  }
  > a {
    padding: 15px 25px;
    background-color: var(--pink);
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    display: grid;
    grid-template-columns: 1fr 35px;
    align-content: center;
    &:hover {
      background-color: var(--dkpink);
    }
  }
  .txt {
    align-self: center;
  }
}
.contact-details {
  position: absolute;
  right: 0;
  top: 58px;
  /* top: 0px; */
  padding: 15px 25px;
  background-color: white;
  border: 1px solid var(--ltgray);
  text-align: right;
  a + p {
    margin-top: 10px;
  }
}
@media (max-width: 1300px) {
  .contact-btn {
    width: auto;
    > a {
      font-size: 16px;
      padding: 10px 15px;
    }
    .btn-arr {
      margin-left: 10px;
    }
    &.tier {
      transform: translateY(-25px);
    }
  }
}
@media (max-width: 1024px) {
  .contact-btn {
    display: none;
  }
}
</style>

<script setup></script>

<template>
  <div class="contact-btn">
    <!--     <a class="block" href="mailto:Lindseynelsonpsyd@gmail.com"
      ><span class="txt">Get in Touch</span>
      <img src="/public/icons/arrow-circle.svg" alt="" class="arr" />
    </a> -->
    <div class="contact-details">
      <a href="mailto:Lindseynelsonpsyd@gmail.com"
        >Lindseynelsonpsyd@gmail.com</a
      >
      <p>(971) 266-0647</p>
    </div>
  </div>
</template>

<style scoped>
.contact-btn {
  width: 200px;
  position: absolute;
  right: 0;
  top: 50px;
  top: 0px;
  z-index: 12;
  transition: all 0.3s ease-out;
  > a {
    padding: 15px 25px;
    background-color: var(--pink);
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    display: grid;
    grid-template-columns: 1fr 28px;
    align-content: center;
    &:hover {
      background-color: var(--dkpink);
    }
  }
  .txt {
    align-self: center;
  }
  .arr {
    width: 28px;
    display: inline-block;
    margin-left: 15px;
  }
}
.contact-details {
  position: absolute;
  right: 0;
  top: 58px;
  top: 0px;
  padding: 15px 25px;
  background-color: white;
  border: 1px solid var(--ltgray);
  text-align: right;
  a + p {
    margin-top: 10px;
  }
}
@media (max-width: 1024px) {
  .contact-details > a {
    /* display: none; */
    + p {
      margin-top: 0;
    }
  }
  .contact-btn {
    top: 0;
  }
  .contact-btn > a {
    font-size: 15px !important;
  }
  p {
    font-size: 15px;
  }
}
@media (max-width: 1200px) {
  .contact-btn {
    left: 0;
    right: auto;
    top: 54px;
    width: auto;
  }
  .contact-details {
    position: relative;
    right: auto;
    left: 0px;
    text-align: left;
    a {
      margin-bottom: 5px;
    }
  }
}
</style>

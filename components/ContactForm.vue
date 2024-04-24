<script setup>
const props = defineProps(['title', 'color', 'icon', 'id']);

const formData = ref({
  firstname: '',
  lastname: '',
  email: '',
  msg: '',
});

// contact form 7

const cf7 =
  'https://allure.instawp.xyz/wp-json/contact-form-7/v1/contact-forms/' +
  props.id +
  '/feedback';

const submitFormCF7 = async (e) => {
  e.target.classList.add('sending');

  // grab all form fields in FormData object
  const formData = new FormData(e.target);
  formData.append('_wpcf7_unit_tag', props.id);

  const response = await $fetch(cf7, {
    method: 'POST',
    body: formData,
  })
    // handle error
    .catch((e) => {
      console.log(e);
    });

  // on success
  if (response) {
    console.log(response);
    e.target.classList.remove('sending');
    e.target.classList.add('sent');
    e.target.reset();

    // remove thank you if click on form
    const fields = e.target.querySelectorAll('input, textarea');
    fields.forEach((field) => {
      field.addEventListener('click', removeSent);
    });
  }
};

const submitForm = (e) => {
  if (validate(e)) {
    submitFormCF7(e);
  }
};

const validate = (e) => {
  let errs = 0;
  const fields = e.target.querySelectorAll('[data-req="req"]');

  // search for empty fields
  fields.forEach((field) => {
    if (field.value == '') {
      field.classList.add('error');
      errs++;

      // add listener to remove error class
      field.addEventListener('focus', removeErr);
    }
  });

  // has errors
  if (errs > 0) {
    return false;
  }

  // submit form
  return true;
};

const removeErr = (e) => {
  e.target.classList.remove('error');
  e.target.removeEventListener('focus', removeErr);
};

const removeSent = () => {
  const forms = document.querySelectorAll('form');
  forms.forEach((form) => {
    form.classList.remove('sent');
    form.removeEventListener('click', removeSent);
  });
};
</script>

<template>
  <div :class="`bucket body-md ${props.color}`">
    <div class="row title flex-jst">
      <h3 :class="props.color">{{ props.title }}</h3>
      <img :src="`/icons/${props.icon}.svg`" alt="" class="icon" />
    </div>
    <div class="row form">
      <form
        ref="myform"
        id="myform"
        class="trans-all"
        @submit.prevent="submitForm"
      >
        <div class="row two-col nopad">
          <input
            v-model="formData.firstname"
            type="text"
            name="firstname"
            placeholder="First Name"
            data-req="req"
          />
          <input
            v-model="formData.lastname"
            type="text"
            name="lastname"
            placeholder="Last Name"
            data-req="req"
          />
        </div>
        <input
          v-model="formData.email"
          type="email"
          name="youremail"
          placeholder="Email"
          data-req="req"
        />
        <textarea
          v-model="formData.msg"
          name="message"
          placeholder="Message"
        ></textarea>

        <div class="col a-rt">
          <div class="thanks trans-all">
            <p>Your message has been sent. Thank you!</p>
          </div>
          <button type="submit">
            <span :class="`txt ${props.color}`">Submit</span>
            <span :class="`circ-arr bg-${props.color}`"
              ><img src="/icons/arrow.svg" class="arr"
            /></span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.bucket {
  max-width: 672px;
  .icon {
    height: 100%;
    width: auto;
  }
  .row.title {
    height: 88px;
  }
}
.form {
  background-color: #f5f5f5;

  input,
  textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400;
    width: 100%;
    color: var(--dkgray);
  }
  input {
    background-color: #fff;
    line-height: 58px;
    padding: 0 20px;
  }
  textarea {
    border: none;
    padding: 20px;
    height: 140px;
  }
  form > * + * {
    margin-top: 12px;
  }
  .two-col {
    gap: 12px;
  }
  button {
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 5px;
    > * {
      display: inline-block;
      vertical-align: middle;
    }
  }
  [data-req='req'] {
    border: 1px solid #fff;
    transition: border 0.3s linear;
  }
  .error {
    border-color: var(--pink);
  }

  form {
    &.sending {
      opacity: 0.5;
      pointer-events: none;
    }
    &.sent {
      .thanks {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  .thanks {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    display: grid;
    place-content: center;
    padding-right: 150px;
    opacity: 0;
    visibility: hidden;
    p {
      font-weight: 400;
      font-size: 0.9em;
      line-height: 1.2;
    }
  }
}

.bucket.pink ::placeholder {
  color: var(--pink);
}
.bucket.green ::placeholder {
  color: var(--green);
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 1000px #fff inset;
  -webkit-text-fill-color: var(--dkgray);
}
</style>

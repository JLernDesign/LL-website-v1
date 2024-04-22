<script setup>
const props = defineProps(['title', 'color', 'icon']);
import emailjs from '@emailjs/browser';

const formData = ref({
  firstname: '',
  lastname: '',
  email: '',
  msg: '',
});

const url =
  'https://allure.instawp.xyz/wp-json/contact-form-7/v1/contact-forms/6/feedback';
const hs =
  'https://api.hsforms.com/submissions/v3/integration/submit/45946477/977c5136-feeb-426c-a1ef-786a6748f172';
const myform = ref(null);
const handleSubmit = (e) => {
  console.log(
    'submit form ' + formData.value.firstname + ' ' + formData.value.lastname
  );
  submitForm();
  // submit to email with emailjs
  /*   emailjs
    .sendForm('service_jq9o9mi', 'template_5ygg4e2', myform.value, {
      publicKey: 'aAS6i6QpWtcnZpRII',
    })
    .then(
      () => {
        console.log('form sent');
        e.target.reset();
      },
      (error) => {
        console.log(error);
      }
    ); */
};

const submitForm = async () => {
  try {
    const data = await $fetch(hs, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {
        fields: [
          {
            objectTypeId: '0-1',
            name: 'firstname',
            value: formData.value.firstname,
          },
          {
            objectTypeId: '0-1',
            name: 'lastname',
            value: formData.value.lastname,
          },
          {
            objectTypeId: '0-1',
            name: 'email',
            value: formData.value.email,
          },
          {
            objectTypeId: '0-1',
            name: 'message',
            value: formData.value.msg,
          },
        ],
      },
    });
    console.log(data.inlineMessage);
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <div :class="`bucket body-md ${props.color}`">
    <div class="row title flex-jst">
      <h3 :class="props.color">{{ props.title }}</h3>
      <img :src="`/icons/${props.icon}.svg`" alt="" class="icon" />
    </div>
    <div class="row form">
      <form ref="myform" @submit.prevent="handleSubmit">
        <div class="row two-col nopad">
          <input
            v-model="formData.firstname"
            type="text"
            name="first_name"
            placeholder="First Name"
          />
          <input
            v-model="formData.lastname"
            type="text"
            name="last_name"
            placeholder="Last Name"
          />
        </div>
        <input
          v-model="formData.email"
          type="email"
          name="email"
          placeholder="Email"
        />
        <textarea
          v-model="formData.msg"
          name="message"
          placeholder="Message"
        ></textarea>

        <div class="col a-rt">
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
}

.bucket.pink ::placeholder {
  color: var(--pink);
}
.bucket.green ::placeholder {
  color: var(--green);
}

.bucket.pink {
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px #fff inset;
    -webkit-text-fill-color: var(--pink);
  }
}
.bucket.green {
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px #fff inset;
    -webkit-text-fill-color: var(--green);
  }
}
</style>

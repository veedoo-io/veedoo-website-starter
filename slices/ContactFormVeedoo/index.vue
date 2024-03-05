<template>
  <section
    class="shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10)]"
    :class="getContainerClasses()"
    :style="{
      marginTop: `${marginTop} `,
      marginBottom: `${marginBottom} `,
    }"
  >
    <!--<iframe
      src="https://veedoo.fibery.io/@public/forms/jQnOre1W"
      style="width: 100%; height: 1400px"
      frameborder="0"
    ></iframe>-->
    <PrismicImage
      class="w-[60px] h-[60px] object-cover"
      :field="slice.primary.image"
    />
    <div class="my-10 text-center">
      <PrismicRichText
        :field="slice.primary.form_title"
        class="font-medium mb-2"
      />
      <PrismicRichText class="font-medium" :field="slice.primary.description" />
    </div>
    <form
      novalidate
      v-on:submit.prevent="onSubmit()"
      class="flex-1 flex flex-col w-full max-w-[400px]"
    >
      <div class="flex flex-col mb-4">
        <label class="mb-2">{{
          slice.primary.name_title ?? "Your name"
        }}</label>
        <input
          v-model="name"
          required=""
          :class="getInputClasses()"
          :placeholder="slice.primary.name_placeholder ?? 'Name'"
        />
        <div class="text-sm mt-1" v-if="v$.name?.$error">
          <p class="font-medium text-red-600">Name is required.</p>
        </div>
      </div>
      <div class="flex flex-col mb-4">
        <label class="mb-2">{{
          slice.primary.surname_label ?? "Your surname"
        }}</label>
        <input
          v-model="surname"
          :class="getInputClasses()"
          :placeholder="slice.primary.surname_placeholder ?? 'Name'"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="mb-2">{{
          slice.primary.email_title ?? "Your Email"
        }}</label>
        <input
          v-model="email"
          type="email"
          required=""
          :class="getInputClasses()"
          :placeholder="slice.primary.email_placeholder"
        />
        <div class="text-sm mt-1" v-if="v$.email?.$error">
          <p class="font-medium text-red-600">Enter valid email.</p>
        </div>
      </div>
      <div class="flex flex-col mb-4">
        <label class="mb-2">{{
          slice.primary.phone_number_label ?? "Your phone number"
        }}</label>
        <input
          v-model="phone"
          type="phone"
          required=""
          :class="getInputClasses()"
          :placeholder="
            slice.primary.phone_number_placeholder ?? '+XXXXXXXXXXXX'
          "
        />
        <div class="text-sm mt-1" v-if="v$.phone?.$error">
          <p class="font-medium text-red-600">Enter valid phone.</p>
        </div>
      </div>
      <div class="flex-1 flex-col mb-4">
        <label class="mb-2">{{
          slice.primary.message_title ?? "Message"
        }}</label>
        <textarea
          required=""
          class="flex-1"
          v-model="message"
          :class="getInputClasses()"
          :placeholder="slice.primary.message_placeholder ?? 'Message'"
        />
        <div class="text-sm mt-1" v-if="v$.message?.$error">
          <p class="font-medium text-red-600">Message is required.</p>
        </div>
      </div>
      <PrismicRichText :field="slice.primary.agreement_text" />
      <button
        type="submit"
        ref="submitButton"
        :class="[getButtonClasses(), { 'flex !bg-green-500': messageSent }]"
      >
        <span v-if="messageSent"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </span>
        <template v-if="messageSent"> Sent </template>
        <template v-else-if="sendingMessage && !messageSent">
          Sending...
        </template>
        <template v-else-if="!sendingMessage && !messageSent">
          {{ slice.primary.button_text ?? "Send" }}
        </template>
      </button>
    </form>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import tailwindMatcher from "hex2tailwind";
import { mapGetters } from "vuex";
import { required, email, helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const phoneValid = helpers.regex(
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
);

export default {
  name: "ContactFormVeedoo",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    let getContainerClasses = function () {
      let classes =
        "w-full my-4 max-w-[872px] h-full flex flex-col items-center  rounded-xl mx-auto px-5 lg:px-[236px] py-[50px] ";

      if (this.slice.primary.background_color) {
        let colorName = tailwindMatcher(this.slice.primary.background_color);
        classes = classes + ` bg-${colorName} `;
      } else {
        classes = classes + `  `;
      }

      if (this.slice.primary.text_color) {
        let colorName = tailwindMatcher(this.slice.primary.text_color);
        classes = classes + ` text-${colorName} `;
      } else {
        let colorName = tailwindMatcher("#353C47");
        classes = classes + ` text-${colorName} `;
      }

      return classes;
    };

    let getInputClasses = function () {
      let classes = ` w-full border min-h-[44px] rounded px-6 py-2.5  ${tailwindMatcher(
        "#B3B3B3"
      )} `;

      return classes;
    };

    let getButtonClasses = function () {
      let classes =
        "w-fit self-end	px-4 mt-4 rounded py-2.5 font-medium active:scale-110";

      if (this.slice.primary.button_background_color) {
        let colorName = tailwindMatcher(
          this.slice.primary.button_background_color
        );
        classes = classes + ` bg-${colorName} `;
      } else {
        let colorName = tailwindMatcher("#F2776B");
        classes = classes + ` bg-${colorName} `;
      }

      if (this.slice.primary.text_background_color) {
        let colorName = tailwindMatcher(
          this.slice.primary.text_background_color
        );
        classes = classes + ` text-${colorName} `;
      } else {
        let colorName = tailwindMatcher("#FFFFFF");
        classes = classes + ` text-${colorName} `;
      }

      return classes;
    };
    let marginTop =
      this.slice.primary.margin_top && this.slice.primary.margin_top >= 0
        ? this.slice.primary.margin_top + "px"
        : "0px";

    let marginBottom =
      this.slice.primary.margin_bottom && this.slice.primary.margin_bottom >= 0
        ? this.slice.primary.margin_bottom + "px"
        : "0px";

    return {
      getContainerClasses,
      getInputClasses,
      getButtonClasses,
      email: null,
      name: "",
      surname: "",
      message: "",
      phone: "",
      marginTop,
      marginBottom,
      sendingMessage: false,
      messageSent: false,
    };
  },

  validations() {
    return {
      name: {
        required,
        $autoDirty: true,
        $lazy: true,
      },
      email: {
        required,
        email,
        $autoDirty: true,
        $lazy: true,
      },
      message: {
        required,
        $autoDirty: true,
        $lazy: true,
      },
      phone: {
        phoneValid,
        $autoDirty: true,
        $lazy: true,
      },
    };
  },

  methods: {
    async onSubmit() {
      const isFormCorrect = await this.v$.$validate();
      // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
      if (!isFormCorrect) return;

      let defaultMailTo = this.getSettings.data.default_email_mailto;
      let formMailTo = this.slice.primary.mailto_email;
      this.sendingMessage = true;

      try {
        let request = await fetch(
          "https://veedoo-website-starter-api.vercel.app/api/sendEmail",
          {
            method: "POST",
            body: JSON.stringify({
              email: formMailTo ?? defaultMailTo,
              type: "htmlEmail",
              name: window?.location?.href ?? "Unknown",
              subject: "Contact Form Message",
              HTMLPart: `<div><h1>New Message from ${
                window ? window.location?.href : ""
              } Website </h1><h3>Name:${this.name}</h3><h3>Email:${
                this.email
              }</h3><h3>Message:${this.message}</h3></div>`,
            }),
          }
        );

        /*   const response = await fetch("/proxy/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: this.name,
            lastName: this.surname,
            phone: this.phone,
            email: this.email,
            message: this.message,
          }),
        });*/
        //const res = await response.json();

        let addToFibery = await fetch(
          "https://veedoo-website-starter-api.vercel.app/api/addWebsiteMessageTofibery",
          {
            method: "POST",
            body: JSON.stringify({
              name: this.name + " " + this.surname,
              phone: this.phone,
              email: this.email,
              message: this.message,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        //console.log('request', request);
        let result = await request.json();
        //console.log('result', result);
        if (result.status) {
          this.messageSent = true;
          (this.email = ""),
            (this.name = ""),
            (this.surname = ""),
            (this.message = ""),
            (this.phone = ""),
            // Remove the animation class after a few seconds (adjust the time as needed)
            setTimeout(() => {
              this.sendingMessage = false;
              this.messageSent = false;
            }, 3000); // 3000 milliseconds (3 seconds) in this example
        } else {
          this.sendingMessage = false;
          this.messageSent = false;
        }
      } catch (error) {}
    },
  },

  computed: { ...mapGetters(["getSettings"]) },
};
</script>

<style scoped>
</style>

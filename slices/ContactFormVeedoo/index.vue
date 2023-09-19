<template>
  <section
    class="shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10)]"
    :class="getContainerClasses()"
    :style="{
      marginTop: `${marginTop} `,
      marginBottom: `${marginBottom} `,
    }"
  >
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
      v-on:submit.prevent="onSubmit()"
      class="flex-1 flex flex-col w-full max-w-[400px]"
    >
      <div class="flex flex-col mb-4">
        <label class="mb-2">{{
          slice.primary.name_title ?? "Your name"
        }}</label>
        <input
          v-model="name"
          required
          :class="getInputClasses()"
          :placeholder="slice.primary.name_placeholder ?? 'Name'"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="mb-2">{{
          slice.primary.email_title ?? "Your Email"
        }}</label>
        <input
          v-model="email"
          type="email"
          required
          :class="getInputClasses()"
          :placeholder="slice.primary.email_placeholder ?? 'Joe@mail.com'"
        />
      </div>
      <div class="flex-1 flex-col mb-4">
        <label class="mb-2">{{
          slice.primary.message_title ?? "Message"
        }}</label>
        <textarea
          required
          class="flex-1"
          v-model="message"
          :class="getInputClasses()"
          :placeholder="slice.primary.message_placeholder ?? 'Message'"
        />
      </div>
      <button type="submit" :class="getButtonClasses()">
        {{ slice.primary.button_text ?? "Send" }}
      </button>
    </form>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import tailwindMatcher from "hex2tailwind";
import { mapGetters } from "vuex";

export default {
  name: "ContactFormVeedoo",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),

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
      name: "",
      email: "",
      message: "",
      marginTop,
      marginBottom,
    };
  },
  methods: {
    async onSubmit() {
      let defaultMailTo = this.getSettings.data.default_email_mailto;
      let formMailTo = this.slice.primary.mailto_email;

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

        //console.log('request', request);
        let result = await request.json();
        //console.log('result', result);
        if (result.status) {
          alert("Email Sent");
        } else {
          alert("there was an error sending your email try again later");
        }
      } catch (error) {
        alert("there was an error sending your email try again later");
        console.log("there was an error sending your email");
        console.log(error);
      } finally {
        this.name = "";
        this.email = "";
        this.message = "";
      }
    },
  },

  computed: { ...mapGetters(["getSettings"]) },
};
</script>

<style scoped>
</style>

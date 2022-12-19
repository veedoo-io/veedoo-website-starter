<template>
  <section :class="getContainerClasses()" :style="{
          filter:
            'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
        }">
    <PrismicImage class="mb-10" :field="slice.primary.image" />
    <h3 :class="getTitleClasses()">{{ slice.primary.form_title }}</h3>
    <PrismicRichText
      :class="getDescriptionClasses()"
      :field="slice.primary.description"
    />
    <form v-on:submit.prevent="onSubmit()" :class="getFormClasses()">
      <div :class="getInputContainerClasses()">
        <label :class="getLabelClsses()">{{
          slice.primary.name_title ?? 'Your name'
        }}</label>
        <input
          v-model="name"
          required
          :class="getInputClasses()"
          :placeholder="slice.primary.name_placeholder ?? 'Name'"
        />
      </div>
      <div :class="getInputContainerClasses()">
        <label :class="getLabelClsses()">{{
          slice.primary.email_title ?? 'Your Email'
        }}</label>
        <input
          v-model="email"
          type="email"
          required
          :class="getInputClasses()"
          :placeholder="slice.primary.email_placeholder ?? 'Joe@mail.com'"
        />
      </div>
      <div class="flex-1" :class="getInputContainerClasses()">
        <label :class="getLabelClsses()">{{
          slice.primary.message_title ?? 'Message'
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
        {{ slice.primary.button_text ?? 'Send' }}
      </button>
    </form>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';
import tailwindMatcher from '~/assets/js/util/hexToName';
import { mapGetters } from 'vuex';

export default {
  name: 'ContactFormVeedoo',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),

  data() {
    let getContainerClasses = function () {
      let classes =
        'w-full my-4 max-w-[872px] min-h-screen flex flex-col items-center  rounded-xl mx-auto px-5 lg:px-[236px] py-[50px] ';

      if (this.slice.primary.background_color) {
        let colorName = tailwindMatcher(this.slice.primary.background_color);
        classes = classes + ` bg-${colorName} `;
      } else {
        classes = classes + ` bg-white `;
      }

      if (this.slice.primary.text_color) {
        let colorName = tailwindMatcher(this.slice.primary.text_color);
        classes = classes + ` text-${colorName} `;
      } else {
        let colorName = tailwindMatcher('#353C47');
        classes = classes + ` text-${colorName} `;
      }

      return classes;
    };

    let getTitleClasses = function () {
      let classes = 'text-[40px] font-medium mb-2	';

      return classes;
    };

    let getDescriptionClasses = function () {
      let classes = 'text-[23px] font-medium	';

      return classes;
    };

    let getFormClasses = function () {
      let classes = 'flex-1 flex flex-col mt-10 w-full max-w-[400px] ';

      return classes;
    };

    let getInputContainerClasses = function () {
      let classes = 'flex flex-col mb-4';
      return classes;
    };

    let getLabelClsses = function () {
      let classes = 'mb-2';

      return classes;
    };

    let getInputClasses = function () {
      let classes = ` w-full border min-h-[44px] rounded px-6 py-2.5  ${tailwindMatcher(
        '#B3B3B3'
      )} `;

      return classes;
    };

    let getButtonClasses = function () {
      let classes =
        'w-fit self-end	px-4 mt-4 rounded py-2.5 font-medium active:scale-110';

      if (this.slice.primary.button_background_color) {
        let colorName = tailwindMatcher(
          this.slice.primary.button_background_color
        );
        classes = classes + ` bg-${colorName} `;
      } else {
        let colorName = tailwindMatcher('#F2776B');
        classes = classes + ` bg-${colorName} `;
      }

      if (this.slice.primary.text_background_color) {
        let colorName = tailwindMatcher(
          this.slice.primary.text_background_color
        );
        classes = classes + ` text-${colorName} `;
      } else {
        let colorName = tailwindMatcher('#FFFFFF');
        classes = classes + ` text-${colorName} `;
      }

      return classes;
    };

    return {
      getContainerClasses,
      getTitleClasses,
      getDescriptionClasses,
      getFormClasses,
      getInputContainerClasses,
      getInputClasses,
      getLabelClsses,
      getButtonClasses,
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    async onSubmit() {
      let defaultMailTo = this.getSettings.data.default_email_mailto;
      let formMailTo = this.slice.primary.mailto_email;

      try {
        let request = await fetch(
          'https://veedoo-website-starter-api.vercel.app/api/sendEmail',
          {
            method: 'POST',
            body: JSON.stringify({
              email: formMailTo ?? defaultMailTo,
              type: 'htmlEmail',
              name: window?.location?.href ?? 'Unknown',
              subject: 'Contact Form Message',
              HTMLPart: `<div><h1>New Message from ${
                window ? window.location?.href : ''
              } Website </h1><h3>Name:${this.name}</h3><h3>Email:${
                this.email
              }</h3><h3>Message:${this.message}</h3></div>`,
            }),
          }
        );

        console.log('request', request);
        let result = await request.json();
        console.log('result', result);
        if (result.status) {
          alert('Email Sent');
        } else {
          alert('there was an error sending your email try again later');
        }
      } catch (error) {
        alert('there was an error sending your email try again later');
        console.log('there was an error sending your email');
        console.log(error);
      } finally {
        this.name = '';
        this.email = '';
        this.message = '';
      }
    },
  },

  computed: { ...mapGetters(['getSettings']) },
};
</script>

<style scoped></style>

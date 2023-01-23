<template>
  <section
    class="w-full h-fit my-2.5 p-5 md:p-10 xl:p-40 flex flex-col gap-10"
    :style="
      backgroundImageUrl
        ? {
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            backgroundImage: 'url(' + backgroundImageUrl + ')',
          }
        : {}
    "
  >
    <PrismicRichText
      class="font-medium text-[47px]"
      :field="slice.primary.title"
    />
    <PrismicRichText
      class="max-w-[586px] text-[19px]"
      :field="slice.primary.description"
    />
    <PrismicLink
      :field="slice.primary.button_url"
      class="
        text-center
        w-fit
        h-fit
        py-4
        px-8
        text-[16px]
        font-medium
        rounded-[5px]
      "
      :style="`color: ${slice.primary.button_text_color};background-color: ${slice.primary.button_background_color}`"
      >{{ slice.primary.call_to_action }}</PrismicLink
    >
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';

export default {
  name: 'CtaWithBackgroundImage',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  data() {
    let textColor = this.slice.primary.text_color
      ? this.slice.primary.text_color
      : '#353C47';

    let buttonTextColor = this.slice.primary.button_text_color
      ? this.slice.primary.button_text_color
      : '#FFFFFF';

    let buttonBackgroundColor = this.slice.primary.button_text_color
      ? this.slice.primary.button_text_color
      : '#F2776B';

    let backgroundImageUrl =
      this.slice.primary.background_image &&
      this.slice.primary.background_image.url
        ? this.slice.primary.background_image.url
        : false;

    //console.log('backgroundImageUrl ', backgroundImageUrl);

    return {
      textColor,
      buttonTextColor,
      buttonBackgroundColor,
      backgroundImageUrl,
    };
  },
};
</script>

<style scoped></style>

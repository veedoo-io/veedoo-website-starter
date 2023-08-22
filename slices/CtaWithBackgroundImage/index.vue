<template>
  <section
    class="w-full h-fit my-2.5 py-40 xl:px-40 md:px-16 px-6 gap-10 bg-image"
    :style="
      backgroundImageUrl
        ? {
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundImage: 'url(' + backgroundImageUrl + ')',
          }
        : {}
    "
  >
    <div class="" :class="getContainerClasses()">
      <PrismicRichText
        class="font-medium text-[47px]"
        :field="slice.primary.title"
        :style="`color: ${titleColor}`"
      />
      <PrismicRichText
        class="max-w-[586px] text-[19px]"
        :field="slice.primary.description"
        :style="`color: ${textColor}`"
      />
      <PrismicLink
        target="_blank"
        :field="slice.primary.button_url"
        class="text-center w-fit h-fit py-4 px-8 text-[16px] font-medium rounded-[5px] mt-[40px] inline-block hover:ease-linear hover:duration-500"
        :style="`color: ${buttonTextColor}; background-color: ${buttonBackgroundColor};`"
        >{{ slice.primary.call_to_action }}</PrismicLink
      >
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "CtaWithBackgroundImage",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  data() {
    let getContainerClasses = function () {
      let classes = "md:w-5/6 lg:w-2/3 w-11/12 flex flex-col";

      switch (this.slice.primary.text_alignment) {
        case "center":
          classes = classes + " justify-center items-center mx-auto w-5/6";
          break;
        default:
          classes = classes + " justify-start";
      }

      return classes;
    };
    let textColor = this.slice.primary.text_color
      ? this.slice.primary.text_color
      : "#353C47";

    let buttonTextColor = this.slice.primary.button_text_color
      ? this.slice.primary.button_text_color
      : "#FFFFFF";

    let buttonBackgroundColor = this.slice.primary.button_background_color
      ? this.slice.primary.button_background_color
      : "#F2776B";

    let backgroundImageUrl =
      this.slice.primary.background_image &&
      this.slice.primary.background_image.url
        ? this.slice.primary.background_image.url
        : false;

    let titleColor = this.slice.primary.title_color
      ? this.slice.primary.title_color
      : "#353C47";

    return {
      textColor,
      buttonTextColor,
      buttonBackgroundColor,
      backgroundImageUrl,
      titleColor,
      getContainerClasses,
    };
  },
};
</script>

<style scoped>
</style>

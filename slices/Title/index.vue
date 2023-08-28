<template>
  <section
    :style="`padding:${marginTop} ${marginRight} ${marginBottom} ${marginLeft};
      color:${slice.primary.text_color ? slice.primary.text_color : '#353C47'};
      background-color:${
        slice.primary.background_color
          ? slice.primary.background_color
          : 'transparent'
      };
      `"
  >
    <div
      :class="`flex items-center ${
        slice.primary.center_text ? 'justify-center' : 'px-[24px]'
      }`"
    >
      <PrismicRichText
        :field="slice.primary.title"
        :style="
          slice.primary.center_text
            ? {
                textAlign: 'center',
              }
            : {}
        "
      />
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "Title",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  image: {
    type: String,
    default: () => "",
  },
  imageAlt: {
    type: String,
    default: () => "",
  },
  data() {
    let marginTop =
      this.slice.primary.margin_top && this.slice.primary.margin_top >= 0
        ? this.slice.primary.margin_top + "px"
        : "0px";

    let marginBottom =
      this.slice.primary.margin_bottom && this.slice.primary.margin_bottom >= 0
        ? this.slice.primary.margin_bottom + "px"
        : "0px";

    let marginLeft =
      this.slice.primary.margin_left && this.slice.primary.margin_left >= 0
        ? this.slice.primary.margin_left + "px"
        : "0px";

    let marginRight =
      this.slice.primary.margin_right && this.slice.primary.margin_right >= 0
        ? this.slice.primary.margin_right + "px"
        : "0px";

    return {
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
    };
  },
};
</script>

<style scoped>
</style>

<template>
  <section
    class="w-full h-fit flex max-md:flex-col gap-[72px]"
    :style="`padding:${marginTop} 0px ${marginBottom} 0px; background-color:${backgroundColor}; color:${textColor}`"
  >
    <PrismicRichText
      :field="slice.primary.first_column_rich_text"
      class="md:w-1/2 w-full"
    />
    <PrismicRichText
      :field="slice.primary.second_column_rich_text"
      class="md:w-1/2 w-full"
    />
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "TwoColumnTextBlock",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  data() {
    let marginTop =
      this.slice.primary.margin_top && this.slice.primary.margin_top >= 0
        ? this.slice.primary.margin_top + "px"
        : "0px";

    let marginBottom =
      this.slice.primary.margin_bottom && this.slice.primary.margin_bottom >= 0
        ? this.slice.primary.margin_bottom + "px"
        : "0px";

    let textColor = this.slice.primary.text_color
      ? this.slice.primary.text_color
      : "#353C47";

    let backgroundColor = this.slice.primary.background_color
      ? this.slice.primary.background_color
      : "transparent";

    return {
      backgroundColor,
      textColor,
      marginBottom,
      marginTop,
    };
  },
};
</script>

<style scoped></style>

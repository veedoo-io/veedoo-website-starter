<template>
  <section
    :class="`w-full h-fit my-2.5 flex ${aligment}`"
    :style="`background-color:${backgroundColor}; padding:${marginTop} 24px ${marginBottom} 24px; `"
  >
    <PrismicImage
      class="w-[219px] object-cover h-[219px]"
      :style="`border-radius:${rounded}`"
      :field="slice.primary.image"
    />
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "Image",
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

    let backgroundColor = this.slice.primary.background_color
      ? this.slice.primary.background_color
      : "transparent";

    let rounded = "0px";
    switch (this.slice.primary.rounded) {
      case "radius 5":
        rounded = "5px";
        break;
      case "radius 20":
        rounded = "10px";
        break;
      case "circle":
        rounded = "9999px";
        break;
      default:
    }

    let aligment = "justify-start";
    switch (this.slice.primary.alignment) {
      case "center":
        aligment = "justify-center";
        break;
      case "right":
        aligment = "justify-end";
        break;
    }

    return {
      backgroundColor,
      marginTop,
      marginBottom,
      rounded,
      aligment,
    };
  },
};
</script>

<style scoped></style>

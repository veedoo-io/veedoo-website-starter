<template>
  <section
    :class="`w-full h-fit flex ${aligment}`"
    :style="`background-color:${backgroundColor}; padding:${marginTop} 0px ${marginBottom} 0px; `"
  >
    <PrismicImage
      class="lg:w-[60%] w-full object-cover max-h-[525px]"
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
      case "5":
        rounded = "5px";
        break;
      case "10":
        rounded = "10px";
        break;
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

<style scoped>
img {
  width: 760px;
}
@media screen and (max-width: 768px) {
  img {
    width: 100%;
  }
}
</style>

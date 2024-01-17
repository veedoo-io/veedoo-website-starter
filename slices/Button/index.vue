<template>
  <section class="section" :style="`padding:${marginTop} 24px ${marginBottom}`">
    <PrismicLink
      target="_blank"
      :class="getButtonClass()"
      :field="slice.primary.link"
      :style="`background-color: ${slice.primary.button_color}`"
      class="py-4 px-8 rounded-[5px] block"
    >
      <span
        :style="`color: ${slice.primary.button_text_color}`"
        class="text-[16px] leading-6 font-medium"
        >{{ slice.primary.button_text }}</span
      >
    </PrismicLink>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import tailwindMatcher from "hex2tailwind";

export default {
  name: "Button",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  data() {
    let getButtonClass = function () {
      let classNames = "py-4 px-8 w-fit rounded block";

      switch (this.slice.primary.alignment) {
        case "right":
          classNames = classNames + " ml-auto";
          break;
        case "center":
          classNames = classNames + " mx-auto";
          break;
        case "left":
          classNames = classNames + " mr-auto";
          break;
        default:
          classNames = classNames + " mr-auto";
      }

      if (
        this.slice.primary?.button_color &&
        this.slice.primary?.button_color != ""
      ) {
        let colorName = tailwindMatcher(this.slice.primary?.button_color);

        classNames = classNames + ` bg-${colorName} `;
      } else {
        classNames = classNames + " bg-[#F25849]";
      }

      if (
        this.slice.primary?.button_text_color &&
        this.slice.primary?.button_text_color != ""
      ) {
        let colorName = tailwindMatcher(this.slice.primary?.button_text_color);

        classNames = classNames + ` text-${colorName} `;
      } else {
        classNames = classNames + " text-white ";
      }

      return classNames;
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
      getButtonClass,
      marginTop,
      marginBottom,
    };
  },
};
</script>

<style scoped>
</style>

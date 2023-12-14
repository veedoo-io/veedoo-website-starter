<template>
  <section
    class="w-full h-fit px-[10px] py-[72px] md:px-[100px] flex flex-wrap gap-6 gap-y-6 justify-around"
    :style="`background-color: ${backgroundColor}`"
  >
    <div
      class="w-[98%] lg:w-[48%] flex flex-col md:flex-row lg:flex-col 2xl:flex-row gap-10 items-center"
      v-for="(item, i) in slice.items"
      :key="`slice-item-${i}`"
    >
      <PrismicImage
        class="w-[195px] h-[99px] object-contain"
        :field="item.logo"
      />
      <div class="flex flex-col max-sm:items-center max-sm:justify-center">
        <PrismicRichText
          class="text-[14px] mb-2 max-sm:text-center rich-text"
          :field="item.description"
          :style="`color: ${textColor}`"
        />
        <PrismicLink class="underline text-[#2060b7]/60" :field="item.link">{{
          item.link_text
        }}</PrismicLink>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "PartnerLogoGridWithDescriptionText",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  data() {
    let backgroundColor = this.slice.primary.background_color
      ? this.slice.primary.background_color
      : "transparent";
    let textColor = this.slice.primary.text_color
      ? this.slice.primary.text_color
      : "rgba(0, 0, 0, 0.6)";
    return {
      backgroundColor,
      textColor,
    };
  },
};
</script>

<style scoped></style>

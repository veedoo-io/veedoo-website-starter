<template>
  <section
    class="w-full h-fit my-2.5 px-[10px] lg:px-[60px] xl:px-[120px] py-[72px] flex flex-wrap gap-6 gap-y-6 justify-around"
    :style="`background-color: ${backgroundColor}`"
  >
    <div
      class="flex-[0_0_98%] lg:flex-[0_0_48%] flex max-sm:flex-col max-sm:items-center max-lg:justify-center gap-10 items-center"
      v-for="(item, i) in slice.items"
      :key="`slice-item-${i}`"
    >
      <PrismicImage class="w-[195px] h-fit" :field="item.logo" />
      <div
        class="flex flex-col max-w-[320px] max-sm:items-center max-sm:justify-center"
      >
        <PrismicRichText
          class="text-[14px] text-black/60 mb-2 max-sm:text-center rich-text"
          :field="item.description"
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
    return {
      backgroundColor,
    };
  },
};
</script>

<style scoped></style>

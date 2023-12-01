<template>
  <section
    :class="`section w-full flex items-center gap-10 lg:flex-row flex-col ${
      slice.variation == 'imageLeft' ? 'lg:flex-row-reverse' : 'lg:flex-row'
    }`"
    :style="[
      { padding: `${marginTop} 24px ${marginBottom} 24px` },
      { backgroundColor: `${slice.primary.background_color}` },
    ]"
  >
    <div class="lg:w-1/2 w-full">
      <PrismicRichText
        :field="slice.primary.title"
        class="title mb-6"
        :style="`color: ${slice.primary.text_color}`"
      />
      <PrismicRichText
        :field="slice.primary.description"
        :style="`color: ${slice.primary.text_color}`"
        class="mb-10"
      />
      <PrismicLink
        :field="slice.primary.button_link"
        :style="`background-color: ${slice.primary.button_color}`"
        class="py-4 px-8 rounded-[5px]"
      >
        <span
          :style="`color: ${slice.primary.button_text_color}`"
          class="text-[16px] leading-6 font-medium"
          >{{ slice.primary.button_text }}</span
        >
      </PrismicLink>
    </div>
    <div class="lg:w-1/2 w-full">
      <PrismicImage
        :field="slice.primary.image"
        class="object-cover rounded-[10px] lg:max-h-[640px] w-full max-h-[384px]"
      />
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "CtaTextBlockImageBlock",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  computed: {
    marginBottom() {
      return `${this.slice.primary.margin_bottom}px`;
    },
    marginTop() {
      return `${this.slice.primary.margin_top}px`;
    },
  },
};
</script>

<style scoped>
</style>

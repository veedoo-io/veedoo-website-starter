<template>
  <section
    class="section"
    :style="{ padding: `${marginTop} 24px ${marginBottom} 24px` }"
  >
    <div
      class="mt-[78px] grid md:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-14 w-full"
    >
      <div
        v-for="(item, i) in slice.items"
        :key="`slice-item-${i}`"
        class="h-full flex"
      >
        <div class="flex">
          <PrismicImage
            v-if="Object.keys(item.icon).length"
            class="h-[48px] w-[48px] mb-6 object-cover"
            :field="item.icon"
          />
          <div
            class="p-6"
            :style="{ background: `${slice.primary.background_color}` }"
          >
            <PrismicRichText
              :field="item.number"
              class="mb-2"
              :style="`color: ${slice.primary.text_color}`"
            />
            <PrismicRichText
              :field="item.description"
              :style="{ color: `${slice.primary.text_color}` }"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "Statistics",
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
.card {
  box-sizing: inherit;
}
</style>

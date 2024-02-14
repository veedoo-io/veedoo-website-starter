<template>
  <section
    class="section"
    :style="{ padding: `${marginTop} 24px ${marginBottom} 24px` }"
  >
    <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-14 w-full">
      <div
        v-for="(item, i) in slice.items"
        :key="`slice-item-${i}`"
        class="h-full flex"
      >
        <div class="flex">
          <PrismicLink :field="item.link">
            <PrismicImage
              target="_blank"
              v-if="Object.keys(item.image).length"
              class="h-[80px] md:w-[212px] w-full mb-6 object-contain"
              :field="item.image"
            />
          </PrismicLink>
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

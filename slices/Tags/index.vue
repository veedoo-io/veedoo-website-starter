<template>
  <section
    class="relative w-full h-full flex flex-col justify-center py-4 lg:py-[64px]"
  >
    <div v-if="slice?.items?.length > 0" class="flex gap-[32px] flex-wrap">
      <div v-for="(item, i) in slice.items" class="" :key="`slice-item-${i}`">
        <Tag
          :title="item.tag_label"
          :image="item.tag_image.url"
          :imageAlt="item.tag_image.alt"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "Tags",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),

  data() {
    return {};
  },
};
</script>

<style scoped>
.title {
  font-family: "Poppins", sans-serif;
}
</style>

<template>
  <section class="relative w-full h-fit overflow-hidden py-[64px] px-[96px]">
    <h2 class="title text-[40px] font-medium mb-[64px]">
      {{ slice.primary.title }}
    </h2>

    <div class="flex gap-[32px] flex-wrap">
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
import { getSliceComponentProps } from '@prismicio/vue/components';

export default {
  name: 'Tags',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),

  data() {
    return {};
  },
};
</script>

<style scoped>
.title {
  font-family: 'Poppins', sans-serif;
}
</style>

<template>
  <section
    :class="getContainerClasses()"
    :style="`margin:${marginTop} ${marginRight} ${marginBottom} ${marginLeft}`"
  >
    <div
      v-if="slice?.items?.length > 0"
      v-for="(item, i) in slice.items"
      :key="`slice-item-${i}`"
    >
      <Tag
        :title="item.tag_label"
        :image="item.tag_image?.url"
        :imageAlt="item.tag_image?.alt"
      />
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';

export default {
  name: 'AtomTags',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),

  data() {
    let marginTop =
      this.slice.primary.margin_top && this.slice.primary.margin_top >= 0
        ? this.slice.primary.margin_top + 'px'
        : '0px';

    let marginBottom =
      this.slice.primary.margin_bottom && this.slice.primary.margin_bottom >= 0
        ? this.slice.primary.margin_bottom + 'px'
        : '0px';

    let marginLeft =
      this.slice.primary.margin_left && this.slice.primary.margin_left >= 0
        ? this.slice.primary.margin_left + 'px'
        : '0px';

    let marginRight =
      this.slice.primary.margin_right && this.slice.primary.margin_right >= 0
        ? this.slice.primary.margin_right + 'px'
        : '0px';

    let getContainerClasses = function () {
      let classes = 'flex gap-[32px] flex-wrap';

      return classes;
    };

    return {
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      getContainerClasses,
    };
  },
};
</script>

<style scoped></style>

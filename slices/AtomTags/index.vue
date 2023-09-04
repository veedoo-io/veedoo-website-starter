<template>
  <section
    :class="getContainerClasses()"
    :style="`padding:${marginTop} 24px ${marginBottom} 24px`"
  >
    <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
      <Tag
        :title="item.tag_label"
        :image="item.tag_image?.url"
        :imageAlt="item.tag_image?.alt"
      />
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "AtomTags",
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

    let getContainerClasses = function () {
      let classes = "flex gap-[32px] flex-wrap";

      return classes;
    };

    return {
      marginTop,
      marginBottom,
      getContainerClasses,
    };
  },
};
</script>



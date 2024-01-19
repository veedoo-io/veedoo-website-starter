<template>
  <section
    class="section"
    :style="`padding:${marginTop} 24px  ${marginBottom};`"
  >
    <div
      v-for="(item, i) in slice.items"
      :key="`slice-item-${i}`"
      class="flex my-6 md:flex-row flex-col"
    >
      <div class="xl:w-[20%] md:w-[30%] w-full md:my-0 my-5">
        <Tag
          :title="item.tag_label"
          :image="item.tag_image?.url"
          :imageAlt="item.tag_image?.alt"
          :style="`background-color:${item.tag_color} ; color: ${item.tag_label_color}`"
          :class="`
          ${
            slice.variation == 'noShadowTag'
              ? 'shadow-none'
              : 'shadow-[0_5px_10px_0px_#D4D4D4]'
          }
         `"
        />
      </div>
      <div class="xl:w-[80%] md:w-[70%] w-full md:pl-10">
        <PrismicRichText
          :field="item.text"
          :style="`color: ${item.text_color}`"
          class=""
        />
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "TextWithTag",
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

    return {
      marginTop,
      marginBottom,
    };
  },
};
</script>

<style scoped>
</style>

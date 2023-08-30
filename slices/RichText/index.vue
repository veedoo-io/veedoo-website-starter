<template>
  <section
    :class="`w-full h-fit flex items-center ${
      slice.primary.center_text ? 'justify-center' : ''
    }`"
    :style="`padding:${marginTop} 24px ${marginBottom} 24px; color:${slice.primary.text_color};background-color:${slice.primary.background_color} ;`"
  >
    <PrismicRichText
      :field="slice.primary.rich_text"
      :class="`w-fit h-fit flex flex-col gap-2.5 rich-text`"
      :serializer="richTextSerializer"
    />
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import tailwindMatcher from "hex2tailwind";

export default {
  name: "RichText",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  data() {
    let getContainerClasses = function () {
      let classes = "w-full ";

      if (this.slice.primary.text_color) {
        let colorName = tailwindMatcher(this.slice.primary.text_color);
        classes = classes + ` text-${colorName} `;
      }

      if (this.slice.primary.background_color) {
        let colorName = tailwindMatcher(this.slice.primary.background_color);
        classes = classes + ` bg-${colorName} `;
      }

      return classes;
    };

    let marginTop =
      this.slice.primary.margin_top && this.slice.primary.margin_top >= 0
        ? this.slice.primary.margin_top + "px"
        : "0px";

    let marginBottom =
      this.slice.primary.margin_bottom && this.slice.primary.margin_bottom >= 0
        ? this.slice.primary.margin_bottom + "px"
        : "0px";

    const richTextSerializer = {
      hyperlink: ({ node, children }) => {
        const target = node.data.target
          ? `target="${node.data.target}" rel="noopener"`
          : "";
        const url = linkResolver(node.data);
        return `<a ${target} data-test href="${url}">${children}</a>`;
      },
    };

    return {
      getContainerClasses,
      marginTop,
      marginBottom,
      richTextSerializer,
    };
  },
};
</script>

<style scoped>
li {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
</style>

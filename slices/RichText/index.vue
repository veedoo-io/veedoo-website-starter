<template>
  <section
    :class="`w-full h-fit  ${
      slice.primary.center_text ? 'justify-center' : ''
    }`"
    :style="`padding:${marginTop} 24px ${marginBottom}; color:${slice.primary.text_color};background-color:${slice.primary.background_color} ;`"
  >
    <PrismicRichText
      :field="slice.primary.rich_text"
      :class="` h-fit w-full rich-text rich-text-width`"
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
::v-deep img {
  width: 760px;
  margin: 0 auto;
  object-fit: cover;
  height: 490px;
  border-radius: 10px;
}
::v-deep .block-img {
  width: 760px;
  margin: 0 auto;
  text-align: center;
}

@media screen and (max-width: 768px) {
  ::v-deep img {
    width: 90%;
    margin: 0 24px;
  }
  ::v-deep .block-img {
    width: 100%;
  }
}

::v-deep div[data-oembed-type="video"] {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-height: 525px;
}

::v-deep iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 56.25%;
}

li {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
</style>

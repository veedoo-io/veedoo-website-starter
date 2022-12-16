<template>
  <section
    class="w-full max-w-[1000px]"
    :style="`margin:${marginTop} ${marginRight} ${marginBottom} ${marginLeft}`"
  >
    <VeedooText
      :text="slice.primary.text"
      :htmlTag="slice.primary.htmltag ? slice.primary.htmltag:'p'"
      :startIcon="slice.primary.startimage?.url"
      :endIcon="slice.primary.end_image?.url"
      :url="slice.primary.url"
      :classes="getTextClasses()"
      :textSize="textSize"
    />
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';
import tailwindMatcher from '~/assets/js/util/hexToName';

export default {
  name: 'RichText',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),

  data() {
    console.log('slice ', this.slice);

    let getContainerClasses = function () {};

    let getTextClasses = function () {
      let classes = ' ';

      if (this.slice.primary.background_color) {
        let colorName = tailwindMatcher(this.slice.primary.background_color);
        classes = classes + ` bg-${colorName} `;
      }

      if (this.slice.primary.text_color) {
        let colorName = tailwindMatcher(this.slice.primary.text_color);
        classes = classes + ` text-${colorName} `;
      }

      return classes;
    };

    let textSize =
      this.slice.primary.text_size && this.slice.primary.text_size >= 12
        ? this.slice.primary.text_size + 'px'
        : '16px';

    let marginTop =
      this.slice.primary.margin_top && this.slice.primary.margin_top >= 12
        ? this.slice.primary.margin_top + 'px'
        : '0px';

    let marginBottom =
      this.slice.primary.margin_bottom && this.slice.primary.margin_bottom >= 12
        ? this.slice.primary.margin_bottom + 'px'
        : '0px';

    let marginLeft =
      this.slice.primary.margin_left && this.slice.primary.margin_left >= 12
        ? this.slice.primary.margin_left + 'px'
        : '0px';

    let marginRight =
      this.slice.primary.margin_right && this.slice.primary.margin_right >= 12
        ? this.slice.primary.margin_right + 'px'
        : '0px';

    return {
      getTextClasses,
      getContainerClasses,
      textSize,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
    };
  },
};
</script>

<style scoped></style>

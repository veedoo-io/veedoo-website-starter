<template>
  <section
    :class="`w-full h-fit flex items-center ${
      slice.primary.center_text ? 'justify-center' : ''
    }`"
    :style="`margin:${marginTop} ${marginRight} ${marginBottom} ${marginLeft}; color:${slice.primary.text_color};background-color:${slice.primary.background_color} ;`"
  >
    <PrismicRichText
      :style="
        slice.primary.center_text
          ? {
              textAlign: 'center',
            }
          : {}
      "
      :field="slice.primary.rich_text"
      :class="`richText w-fit h-fit flex flex-col  gap-2.5  `"
    />
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';
import tailwindMatcher from 'hex2tailwind';

export default {
  name: 'RichText',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  data() {
    let getContainerClasses = function () {
      let classes = 'w-full ';

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

    return {
      getContainerClasses,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
    };
  },
};
</script>

<style scoped></style>

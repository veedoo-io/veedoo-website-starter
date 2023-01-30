<template>
  <section
    :class="getContainerClasses()"
    :style="`margin:${marginTop} ${marginRight} ${marginBottom} ${marginLeft}`"
  >
    <VeedooText
      :text="slice.primary.text"
      :htmlTag="slice.primary.htmltag ? slice.primary.htmltag : 'p'"
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
import tailwindMatcher from 'hex2tailwind';

export default {
  name: 'RichText',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),

  data() {
    //console.log('slice_type ', this.slice);

    let getContainerClasses = function () {
      let classes = '';

      if (!(this.slice.primary.slice_type == 'free Mode')) {
        classes =
          classes + 'w-full min-h-screen flex justify-center items-center ';
      } else {
        classes = classes + ' w-full max-w-[1000px] ';
      }

      return classes;
    };

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

      switch (this.slice.primary.font_weight) {
        case 'medium':
          classes = classes + ` font-medium		`;
          break;
        case 'semibold':
          classes = classes + ` font-semibold			`;
          break;
        case 'bold':
          classes = classes + ` font-bold		`;
          break;

        default:
          classes = classes + ` font-normal	`;
          break;
      }

      return classes;
    };

    let textSize =
      this.slice.primary.text_size && this.slice.primary.text_size >= 12
        ? this.slice.primary.text_size + 'px'
        : '16px';

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

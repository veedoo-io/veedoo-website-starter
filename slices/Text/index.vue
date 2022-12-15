<template>
  <section class="">
    <VeedooText
      :text="slice.primary.text"
      :htmlTag="slice.primary.htmltag"
      :startIcon="slice.primary.startimage?.url"
      :endIcon="slice.primary.end_image?.url"
      :url="slice.primary.url"
      :class="getTextClasses()"
      :textSize="textSize"
    />
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';
import tailwindMatcher from '~/assets/js/util/hexToName';

export default {
  name: 'Text',
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

    return {
      getTextClasses,
      getContainerClasses,
      textSize,
    };
  },
};
</script>

<style scoped></style>

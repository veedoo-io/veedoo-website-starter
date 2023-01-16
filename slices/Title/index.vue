<template>
  <section
    :class="getContainerClasses()"
    :style="`margin:${marginTop} ${marginRight} ${marginBottom} ${marginLeft};
      color:${slice.primary.text_color ? slice.primary.text_color : '#353C47'};
      background-color:${
        slice.primary.background_color
          ? slice.primary.background_color
          : 'transparent'
      };
      `"
  >
    <PrismicRichText
      :style="`font-size:${textSize}`"
      :field="slice.primary.title"
    />
    <PrismicImage class="h-fit" :field="slice.primary.image" />
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';

export default {
  name: 'Title',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  data() {
    let getContainerClasses = function () {
      let classes = 'w-full h-fit flex items-center gap-[20px] ';

      switch (this.slice.primary.text_alignment) {
        case 'center':
          classes = classes + ' justify-center';
          break;
        case 'right':
          classes = classes + ' justify-end';
          break;
        default:
          classes = classes + ' justify-start';
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

    let textSize =
      this.slice.primary.text_size && this.slice.primary.text_size > 8
        ? this.slice.primary.text_size + 'px'
        : '57px';

    return {
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      getContainerClasses,
      textSize,
    };
  },
};
</script>

<style scoped></style>

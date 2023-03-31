<template>
  <section
    class="w-full h-fit flex max-md:flex-col gap-[72px]"
    :style="`padding:${marginTop} ${marginRight} ${marginBottom} ${marginLeft}; background-color:${backgroundColor}; font-size:${textSize};color:${textColor}`"
  >
    <PrismicRichText :field="slice.primary.first_column_rich_text" />
    <PrismicRichText :field="slice.primary.second_column_rich_text" />
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';

export default {
  name: 'TwoColumnTextBlock',
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

    let textSize =
      this.slice.primary.text_size && this.slice.primary.text_size > 8
        ? this.slice.primary.text_size + 'px'
        : '19px';

    let textColor = this.slice.primary.text_color
      ? this.slice.primary.text_color
      : '#353C47';

    let backgroundColor = this.slice.primary.background_color
      ? this.slice.primary.background_color
      : 'transparent';

    return {
      backgroundColor,
      textColor,
      textSize,
      marginRight,
      marginLeft,
      marginBottom,
      marginTop,
    };
  },
};
</script>

<style scoped></style>

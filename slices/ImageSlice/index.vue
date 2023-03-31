<template>
  <section
    :class="`w-full h-fit my-2.5 flex ${aligment}`"
    :style="`background-color:${backgroundColor}; padding:${marginTop} ${marginRight} ${marginBottom} ${marginLeft}; `"
  >
    <PrismicImage
      class="w-full"
      :style="`border-radius:${rounded};width:${width}; height:${height} `"
      :field="slice.primary.image"
    />
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';

export default {
  name: 'Image',
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

    let backgroundColor = this.slice.primary.background_color
      ? this.slice.primary.background_color
      : 'transparent';

    let rounded = '0px';
    switch (this.slice.primary.rounded) {
      case 'radius 5':
        rounded = '5px';
        break;
      case 'radius 20':
        rounded = '10px';
        break;
      case 'circle':
        rounded = '9999px';
        break;
      default:
    }

    let width =
      this.slice.primary.wdith && this.slice.primary.wdith > 0
        ? this.slice.primary.wdith + 'px'
        : '100%';

    let height =
      this.slice.primary.wdith && this.slice.primary.height > 0
        ? this.slice.primary.height + 'px'
        : '100%';

    let aligment = 'justify-start';
    switch (this.slice.primary.alignment) {
      case 'center':
        aligment = 'justify-center';
        break;
      case 'right':
        aligment = 'justify-end';
        break;
    }

    return {
      backgroundColor,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      rounded,
      width,
      height,
      aligment,
    };
  },
};
</script>

<style scoped></style>

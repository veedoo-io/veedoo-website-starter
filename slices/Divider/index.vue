<template>
  <div
    :class="getContainerClasses()"
    :style="`margin:${marginTop} ${marginRight} ${marginBottom} ${marginLeft};border-color:${colorName}; border-bottom-width:${borderWidth}px`"
  ></div>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';
import tailwindMatcher from '~/assets/js/util/hexToName';

export default {
  name: 'Divider',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  data() {
    let getContainerClasses = function () {
      let classes = 'w-full h-px  border-b   ';

      if (this.slice.primary.rounded) {
        classes = classes + ' rounded ';
      }

      switch (this.slice.primary.type) {
        case 'solid':
          classes = classes + ' border-solid ';
          break;
        case 'dashed':
          classes = classes + ' border-dashed	';
          break;
        case 'dotted':
          classes = classes + ' border-dotted	';
          break;
        case 'double':
          classes = classes + ' border-double	';
          break;
        default:
          classes = classes + ' border-solid	';
      }

      return classes;
    };

    let colorName = this.slice.primary.color
      ? this.slice.primary.color
      : '#48525F';

    let borderWidth =
      this.slice.primary.divider_height && this.slice.primary.divider_height > 0
        ? this.slice.primary.divider_height
        : 1;

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
      borderWidth,
      colorName,
    };
  },
};
</script>

<style scoped></style>

<template>
  <section
    class="w-full h-fit flex flex-col"
    :style="`margin:${marginTop} ${marginRight} ${marginBottom} ${marginLeft};`"
  >
    <div class="w-full h-fit font-medium">
      <PrismicRichText
        :style="`font-size:${textSize};color:${textColor}; `"
        :field="slice.primary.title"
      />
      <div class="w-full h-fit mt-5 flex items-center justify-between">
        <p
          class="text-[14px]"
          :style="`color:${textColor}; `"
          v-if="slice.primary.date"
        >
          {{
            new Date(slice.primary.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          }}
        </p>
        <div>
          <p>social Icons</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';

export default {
  name: 'TitleWithDateAndShareIcons',
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
        : '40px';

    let textColor = this.slice.primary.text_color
      ? this.slice.primary.text_color
      : '#353C47';

    return {
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      textSize,
      textColor,
    };
  },
};
</script>

<style scoped></style>

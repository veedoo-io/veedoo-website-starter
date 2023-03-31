<template>
  <section
    class="w-full my-2.5"
    :style="`background-color:${backgroundColor}; padding:${marginTop} ${marginRight} ${marginBottom} ${marginLeft};`"
  >
    <div
      :class="`flex

        ${
          slice.variation == 'vertical'
            ? ' justify-between  flex-wrap'
            : ' gap-[46px] max-[980px]:justify-center flex-col sm:flex-row sm:flex-wrap'
        }


        mx-auto
        max-w-[1000px]


        `"
    >
      <div
        :class="`
          rounded-[5px]
          flex p-6 gap-6
          ${
            slice.variation == 'vertical'
              ? 'flex-[0_0_100%] max-sm:mx-auto sm:flex-[0_0_50%] md:flex-[0_0_33%] my-2.5 flex-col  max-w-[220px]'
              : 'max-w-[452px] flex-[0_0_50%] max-[980px]:flex-[0_0_100%]  '
          } `"
        v-for="(item, i) in slice.items"
        :key="`blurb-item-${i}`"
        :style="{
          backgroundColor: item?.blurb_background_color
            ? item?.blurb_background_color
            : '#FFFFFF',
          filter:
            'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
        }"
      >
        <PrismicImage :field="item.image" class="rounded" />
        <div class="flex flex-col gap-2">
          <PrismicRichText
            :style="`color: ${
              item?.title_color ? item?.title_color : '#000000'
            }`"
            :field="item.title"
            :class="`text-[24px] ${
              slice.variation == 'vertical' ? 'text-center' : ''
            } `"
          />
          <PrismicRichText
            :style="`color: ${
              item?.description_color
                ? item.description_color
                : 'rgba(0, 0, 0, 0.6)'
            }`"
            :field="item.description"
            :class="`text-[14px] ${
              slice.variation == 'vertical' ? 'text-center' : ''
            } `"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';

export default {
  name: 'Blurb',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  data() {
    //console.log('slice ', this.slice);

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

    return {
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      backgroundColor,
    };
  },
};
</script>

<style scoped></style>

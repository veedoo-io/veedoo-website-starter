<template>
  <section
    :style="`padding:${marginTop} ${marginRight} ${marginBottom} ${marginLeft};`"
    :class="getContainerClass()"
  >
    <div v-if="slice.primary?.image?.url">
      <PrismicImage
        class="h-[250px] object-contain"
        :field="slice.primary?.image"
      />
    </div>
    <PrismicRichText :class="getTitleClasses()" :field="slice.primary?.title" />
    <PrismicRichText
      class="flex items-center gap-2.5 flex-wrap"
      :field="slice.primary?.description"
    />
    <PrismicLink :class="getButtonClass()" :field="slice.primary?.button_url">{{
      slice.primary?.button_text
    }}</PrismicLink>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';
import tailwindMatcher from 'hex2tailwind';

export default {
  name: 'Testimonial',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  data() {
    //console.log('slice ', this.slice);

    let getContainerClass = function () {
      let classNames =
        'flex flex-col w-full h-full justify-center gap-[40px] overflow-hidden  ';

      if (
        this.slice.primary?.backgroundcolor &&
        this.slice.primary?.backgroundcolor != ''
      ) {
        let colorName = tailwindMatcher(this.slice.primary?.backgroundcolor);

        classNames = classNames + ` bg-${colorName} `;
      } else {
        classNames = classNames + '  ';
      }

      return classNames;
    };

    let getButtonClass = function () {
      let classNames = 'py-4 px-8 w-fit h-fit rounded ';
      if (
        this.slice.primary?.button_color &&
        this.slice.primary?.button_color != ''
      ) {
        let colorName = tailwindMatcher(this.slice.primary?.button_color);

        classNames = classNames + ` bg-${colorName} `;
      } else {
        classNames = classNames + ' bg-[#2F80ED]';
      }

      //console.log('textcolor', this.slice.primary.button_text_color);
      if (
        this.slice.primary?.button_text_color &&
        this.slice.primary?.button_text_color != ''
      ) {
        let colorName = tailwindMatcher(this.slice.primary?.button_text_color);

        classNames = classNames + ` text-${colorName} `;
      } else {
        classNames = classNames + ' text-white ';
      }

      return classNames;
    };

    let getTitleClasses = function () {
      let colorName = tailwindMatcher('#353C47');

      let classes = 'text-[28px] lg:text-[45px] ' + ` text-${colorName} `;

      return classes;
    };

    let getDescriptionClasses = function () {
      let colorName = tailwindMatcher('#48525F');

      let classes = 'text-[18px] lg:text-[20px] ' + ` text-${colorName} `;

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

    //console.log('cta slice ', this.slice);

    return {
      getContainerClass,
      getButtonClass,
      getTitleClasses,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
    };
  },
};
</script>

<style scoped></style>

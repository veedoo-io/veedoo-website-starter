<template>
  <section :class="getContainerClass()">
    <PrismicImage
        class="h-[250px] object-contain"
        :field="slice.primary.image"
      />
    <PrismicRichText :field="slice.primary.title" />
    <PrismicRichText :field="slice.primary.description" />
    <PrismicLink :class="getButtonClass()" :field="slice.primary.button_url">{{
      slice.primary.button_text
    }}</PrismicLink>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';

export default {
  name: 'Testimonial',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  data() {
    let getContainerClass = function () {
      let classNames =
        'flex flex-col w-full h-fit gap-[40px] overflow-hidden p-4 md:p-8 lg:p-16 xl:p-40 ';

      if (
        this.slice.primary.backgroundcolor &&
        this.slice.primary.backgroundcolor != ''
      ) {
        classNames =
          classNames + ` bg-[${this.slice.primary.backgroundcolor}] `;
      } else {
        classNames = classNames + ' bg-white ';
      }

      return classNames;
    };

    let getButtonClass = function () {
      let classNames = 'py-4 px-8 w-fit h-fit rounded ';
      if (
        this.slice.primary.button_color &&
        this.slice.primary.button_color != ''
      ) {
        classNames = classNames + ` bg-[${this.slice.primary.button_color}] `;
      } else {
        classNames = classNames + ' bg-[#2F80ED]';
      }

      if (
        this.slice.primary.button_text_color &&
        this.slice.primary.button_text_color != ''
      ) {
        classNames =
          classNames + ` text-[${this.slice.primary.button_text_color}] `;
      } else {
        classNames = classNames + ' text-white ';
      }

      return classNames;
    };

    return {
      getContainerClass,
      getButtonClass,
    };
  },
};
</script>

<style scoped></style>

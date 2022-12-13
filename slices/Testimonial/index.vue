<template>
  <section :class="getContainerClasses()">
    <PrismicRichText :class="getTitleClasses()" :field="slice.primary.title" />
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';

export default {
  name: 'Testimonial',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),

  data() {
    let getContainerClasses = function () {
      let classNames = 'section bg-red-300 py-[94px] px-[96px] ';

      return classNames;
    };

    let getTitleClasses = function () {
      let classNames = 'font-medium	flex justify-center items-center mb-10 ';

      if (this?.slice?.primary?.title_color) {
        classNames = classNames + ` text-[${this.slice.primary.title_color}]`;
      } else {
        classNames = classNames + ` text-[#353C47]`;
      }

      return classNames;
    };

    return {
      getContainerClasses,
      getTitleClasses,
    };
  },
};
</script>

<style scoped></style>

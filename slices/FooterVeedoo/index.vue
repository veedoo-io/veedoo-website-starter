<template>
  <section :class="getContainerClasses()">
    <PrismicImage class="h-10" :field="slice.primary.footer_logo" />
    <PrismicRichText
      :class="getFooterTextClasses()"
      :field="slice.primary.footer_text"
    />
    <div class="flex gap-2">
      <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
        <PrismicImage class="h-8" :field="item.footer_flag" />
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';
import tailwindMatcher from '~/assets/js/util/hexToName';

export default {
  name: 'FooterVeedoo',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),

  data() {
    let getContainerClasses = function () {
      let classes =
        'flex flex-col gap-4 justify-center items-center py-8 text-center ';

      if (this?.slice?.primary?.background_color) {
        let colorName = tailwindMatcher(this?.slice?.primary?.background_color);
        classes = classes + ` bg-${colorName} `;
      } else {
        classes = classes + ` bg-[#F2F2F2] `;
      }
      return classes;
    };

    let getFooterTextClasses = function () {
      let classes = 'text-sm	';

      if (this?.slice?.primary?.text_color) {
        let colorName = tailwindMatcher(this?.slice?.primary?.text_color);
        classes = classes + ` text-${colorName} `;
      } else {
        classes = classes + ` text-[#777E85] `;
      }

      return classes;
    };

    return {
      getContainerClasses,
      getFooterTextClasses,
    };
  },
};
</script>

<style scoped></style>

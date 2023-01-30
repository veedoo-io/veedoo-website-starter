<template>
  <section :class="getContainerClasses()">
    <h2 :class="getTitleClasses()">{{ slice.primary.title }}</h2>
    <PrismicRichText
      :class="getDescriptionClasses()"
      :field="slice.primary.description"
    />
    <div
      class="mt-[78px] flex gap-x-[2%] gap-y-[25px] flex-wrap w-full justify-around md:justify-start"
    >
      <div
        class="flex-[0_0_98%] md:flex-[0_0_48%] lg:flex-[0_0_23%]"
        v-for="(item, i) in slice.items"
        :key="`slice-item-${i}`"
      >
        <PrismicImage class="h-[100px] mb-6" :field="item.feature_image" />
        <h6 :class="getItemTitleClasses()">{{ item.feature_title }}</h6>
        <PrismicRichText
          :class="getItemDescriptionClasses()"
          :field="item.feature_description"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';
import tailwindMatcher from 'hex2tailwind';

export default {
  name: 'AlternateGrid',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  data() {
    let getContainerClasses = function () {
      let classes = 'w-full min-h-screen flex flex-col justify-center	';

      if (this.slice.primary.background_color) {
        let colorName = tailwindMatcher(this.slice.primary.background_color);
        classes = classes + ` bg-${colorName}  `;
      }

      return classes;
    };

    let getTitleClasses = function () {
      let classes = 'w-full font-medium text-[32px]	lg:text-[50px] mb-5';

      if (this.slice.primary.text_color) {
        let colorName = tailwindMatcher(this.slice.primary.text_color);
        classes = classes + ` text-${colorName}  `;
      } else {
        let colorName = tailwindMatcher('#353C47');
        classes = classes + ` text-${colorName}  `;
      }

      return classes;
    };

    let getDescriptionClasses = function () {
      let classes = 'w-full  text-[18px]	lg:text-[20px]';

      if (this.slice.primary.secondary_text_color) {
        let colorName = tailwindMatcher(
          this.slice.primary.secondary_text_color
        );
        classes = classes + ` text-${colorName}  `;
      } else {
        let colorName = tailwindMatcher('#48525F');
        classes = classes + ` text-${colorName}  `;
      }

      return classes;
    };

    let getItemTitleClasses = function () {
      let classes = 'mb-6 font-medium	text-[20px] lg:text-[23px]  ';

      if (this.slice.primary.text_color) {
        let colorName = tailwindMatcher(this.slice.primary.text_color);
        classes = classes + ` text-${colorName}  `;
      } else {
        let colorName = tailwindMatcher('#353C47');
        classes = classes + ` text-${colorName}  `;
      }

      return classes;
    };

    let getItemDescriptionClasses = function () {
      let classes = 'text-[16px]	 ';

      if (this.slice.primary.secondary_text_color) {
        let colorName = tailwindMatcher(
          this.slice.primary.secondary_text_color
        );
        classes = classes + ` text-${colorName}  `;
      } else {
        let colorName = tailwindMatcher('#48525F');
        classes = classes + ` text-${colorName}  `;
      }

      return classes;
    };

    return {
      getContainerClasses,
      getTitleClasses,
      getDescriptionClasses,
      getItemTitleClasses,
      getItemDescriptionClasses,
    };
  },
};
</script>

<style scoped></style>

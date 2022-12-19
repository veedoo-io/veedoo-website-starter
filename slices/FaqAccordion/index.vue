<template>
  <section :class="getContainerClasses()">
    <div :class="getChildContainerClasses()" :style="{ maxWidth: width }">
      <h2 :class="getTitleClasses()">{{ slice.primary.title }}</h2>
      <PrismicRichText
        :class="getDescriptionClasses()"
        :field="slice.primary.description"
      />
      <div class="flex-1 flex flex-col gap-6 mt-[54px] w-full">
        <div
          v-if="slice.items?.length > 0"
          v-for="(item, i) in slice.items"
          :key="`slice-item-${i}`"
          :class="getItemClasses()"
          @click="toggleFaq(i)"
          :style="`background-color: ${
            item.background_color ? item.background_color : '#FFFFFF'
          }; filter:'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))' `"

        >
          <div class="flex justify-between w-full">
            <PrismicRichText
              :style="`color: ${item.text_color ? item.text_color : '#353C47'}`"
              :field="item.question"
            />
            <svg
              v-if="selectedIndexes != i"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="w-6 h-6"
              width="24px"
              height="24px"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="w-6 h-6"
              width="24px"
              height="24px"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
          <div v-if="selectedIndexes == i" class="mt-6">
            <PrismicRichText
              :style="`color: ${
                item.answer_text_color ? item.answer_text_color : '#48525F'
              }`"
              :field="item.answer"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';
import tailwindMatcher from '~/assets/js/util/hexToName';

export default {
  name: 'FaqAccordion',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),

  data() {
    let getContainerClasses = function () {
      let classes = 'w-full min-h-screen  flex flex-col justify-center';

      if (this.slice.primary.background_color) {
        let colorName = tailwindMatcher(this.slice.primary.background_color);
        classes = classes + ` bg-${colorName} `;
      }

      return classes;
    };

    let getChildContainerClasses = function () {
      let classes =
        'mx-auto w-full  flex flex-col justify-center text-center items-center';

      return classes;
    };

    let getTitleClasses = function () {
      let classes = 'font-bold	text-[32px] md:text-[43px] mb-10';

      if (this.slice.primary.primary_text_color) {
        let colorName = tailwindMatcher(this.slice.primary.primary_text_color);
        classes = classes` text-${colorName} `;
      } else {
        let colorName = tailwindMatcher('#000000');
        classes = classes + ` text-${colorName} `;
      }

      return classes;
    };

    let getDescriptionClasses = function () {
      let classes = 'mx-[33px] text-[22px] text-center ';

      if (this.slice.primary.secondary_text_color) {
        let colorName = tailwindMatcher(
          this.slice.primary.secondary_text_color
        );
        classes = classes` text-${colorName} `;
      } else {
        let colorName = tailwindMatcher('#000000');
        classes = classes + ` text-${colorName} `;
      }

      return classes;
    };

    let width = this.slice.primary.max_width
      ? this.slice.primary.max_width + 'px'
      : 'unset';

    let getItemClasses = function () {
      let classes =
        ' flex flex-col  justify-between rounded-lg text-start p-6 bg-white ';

      return classes;
    };

    //console.log('faq ', this.slice);

    return {
      getContainerClasses,
      getTitleClasses,
      getDescriptionClasses,
      getChildContainerClasses,
      getItemClasses,
      width,
      selectedIndexes: -1,
    };
  },
  methods: {
    toggleFaq: function (i) {
      if (this.selectedIndexes == i) {
        this.selectedIndexes = -1;
      } else {
        this.selectedIndexes = i;
      }
    },
  },
};
</script>

<style scoped></style>

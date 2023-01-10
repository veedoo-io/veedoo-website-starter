<template>
  <section :class="getSectionContainer()">
    <PrismicImage :field="slice.primary.image" />
    <div :class="getContentContainer()" :style="{ maxWidth: width }">
      <PrismicRichText
        :class="getTitleClasses()"
        :field="slice.primary.title"
      />
      <div :class="getQuestionContainer()">
        <div
          v-for="(item, i) in slice.items"
          :class="getQuestionItemContainer()"
          :key="`slice-item-${i}`"
          @click="toggleFaq(i)"
          :style="`${
            item.background_color
              ? 'background-color:' + item.background_color + '; '
              : ''
          }
          `"
        >
          <div
            class="flex w-full justify-between"
            :style="`${
              item.question_text_color
                ? 'color:' + item.question_text_color + '; '
                : ''
            }`"
          >
            <PrismicRichText :field="item.question" />
            <div>
              <svg
                v-if="selectedIndexes != i"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </div>
          </div>
          <PrismicRichText
          :style="`${
                item.answer_text_color
                  ? 'color:' + item.answer_text_color + '; '
                  : ''
              }`"
            v-if="selectedIndexes == i"
            class="mt-6"
            :field="item.answer"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';
import tailwindMatcher from '~/assets/js/util/hexToName';

export default {
  name: 'FaqAccordion2',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),

  data() {
    let getSectionContainer = function () {
      let classes =
        'w-full min-h-screen  flex max-md:flex-col justify-center items-center gap-4 lg:gap-16	';

      if (this.slice.primary.background_color) {
        let colorName = tailwindMatcher(this.slice.primary.background_color);
        classes = classes + ` bg-${colorName} `;
      }

      return classes;
    };

    let getTitleClasses = function () {
      let classes = 'text-[43px] italic font-semibold	 ';

      if (this.slice.primary.title_color) {
        let colorName = tailwindMatcher(this.slice.primary.title_color);
        classes = classes + ` text-${colorName} `;
      }

      return classes;
    };

    let getQuestionContainer = function () {
      let classes = 'mt-10 flex flex-col gap-6';

      return classes;
    };

    let getQuestionItemContainer = function () {
      let classes = 'bg-white rounded-xl p-6 ';

      return classes;
    };

    let getContentContainer = function () {
      let classes = 'flex flex-col ';

      return classes;
    };

    let width = this.slice.primary.max_width
      ? this.slice.primary.max_width + 'px'
      : '435px';

    return {
      getSectionContainer,
      getTitleClasses,
      getQuestionContainer,
      getQuestionItemContainer,
      getContentContainer,
      selectedIndexes: -1,
      width,
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

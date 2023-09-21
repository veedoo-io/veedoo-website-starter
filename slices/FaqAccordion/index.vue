<template>
  <section :class="getContainerClasses()">
    <div :class="getWidth()">
      <PrismicRichText :field="slice.primary.title" getDescriptionClasses() />
      <PrismicRichText
        class="w-full"
        :class="getDescriptionClasses()"
        :field="slice.primary.description"
        v-if="slice.primary.description"
      />
      <div :class="getQuestionsContainer()" class="w-full">
        <div v-if="slice.primary.image" :class="getImageContainer()">
          <PrismicImage :field="slice.primary.image" class="w-full" />
        </div>
        <div
          class="flex-1 flex flex-col gap-6 w-full"
          v-if="slice.items?.length > 0"
        >
          <div
            v-for="(item, i) in slice.items"
            :key="`slice-item-${i}`"
            class="flex flex-col justify-between rounded-lg text-start p-6 bg-white"
            @click="toggleFaq(i)"
            :style="`background-color: ${
              slice.primary.question_background
                ? slice.primary.question_background
                : '#FFFFFF'
            }; filter:drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1)) `"
          >
            <div class="flex justify-between w-full">
              <PrismicRichText
                :style="`color: ${
                  slice.primary.question_text_color
                    ? slice.primary.question_text_color
                    : '#353C47'
                }`"
                :field="item.question"
                v-if="item.question"
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
            <div
              v-if="selectedIndexes == i"
              class="mt-6 flex items-center gap-6"
            >
              <PrismicImage
                v-if="slice.variation == 'withAnswerImage' && item.image"
                :field="item.image"
                class="max-w-[120px]"
              />
              <PrismicRichText
                :style="`color: ${
                  slice.primary.answer_text_color
                    ? slice.primary.answer_text_color
                    : '#48525F'
                }`"
                :field="item.answer"
                v-if="item.answer"
                class="flex-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import tailwindMatcher from "hex2tailwind";

export default {
  name: "FaqAccordion",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),

  data() {
    let getContainerClasses = function () {
      let classes = "w-full h-full py-10 flex flex-col justify-center";

      if (this.slice.primary.background_color) {
        let colorName = tailwindMatcher(this.slice.primary.background_color);
        classes = classes + ` bg-${colorName} `;
      }

      return classes;
    };

    let getTitleClasses = function () {
      let classes = "font-bold mb-10";
      if (this.slice.primary.primary_text_color) {
        let colorName = tailwindMatcher(this.slice.primary.primary_text_color);
        classes = classes + ` text-${colorName} `;
      } else {
        let colorName = tailwindMatcher("#000000");
        classes = classes + ` text-${colorName} `;
      }
      return classes;
    };

    let getDescriptionClasses = function () {
      let classes = " text-center ";

      if (this.slice.primary.secondary_text_color) {
        let colorName = tailwindMatcher(
          this.slice.primary.secondary_text_color
        );
        classes = classes + ` text-${colorName} `;
      } else {
        let colorName = tailwindMatcher("#000000");
        classes = classes + ` text-${colorName} `;
      }

      return classes;
    };

    let getQuestionsContainer = function () {
      let classes =
        "flex flex-col lg:flex-row items-center justify-center gap-10 w-full mt-[54px]";

      if (this.slice.variation == "withImage") {
        classes =
          "flex flex-col lg:flex-row items-center justify-start gap-10 w-full mt-[54px]";
      }

      return classes;
    };

    let getWidth = function () {
      let classes =
        "mx-auto lg:w-[45%] md:w-[65%] w-full flex flex-col justify-center text-center items-center px-6";

      if (this.slice.variation == "withImage") {
        classes =
          "mx-auto md:w-[65%] w-full flex flex-col justify-center text-center items-center px-6";
      }

      return classes;
    };

    let getImageContainer = function () {
      let classes = "hidden";
      if (this.slice.variation == "withImage") {
        classes = "mx-auto flex flex-1 justify-end";
      }
      return classes;
    };

    return {
      getTitleClasses,
      getWidth,
      getContainerClasses,
      getDescriptionClasses,
      getImageContainer,
      getQuestionsContainer,
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

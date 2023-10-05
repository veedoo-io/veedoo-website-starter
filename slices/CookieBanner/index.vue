<template>
  <section class="section" :class="getContainerClasses()">
    <div class="py-4 px-16">
      <div class="flex">
        <PrismicRichText
          :field="slice.primary.title"
          class="title"
          :style="`
      color:${slice.primary.text_color ? slice.primary.text_color : '#353C47'};
      `"
        />
        <PrismicImage
          :field="slice.primary.image"
          class="w-[30px] h-[30px] ml-[6px]"
        />
      </div>
      <div class="flex flex-wrap mt-2 items-center">
        <PrismicRichText
          :field="slice.primary.description"
          :style="`
      color:${slice.primary.text_color ? slice.primary.text_color : '#353C47'};
      `"
        />
        <button
          class="lg:ml-10 py-2 px-4 rounded md:mt-0 mt-10 ml-0"
          :style="`color:${
            slice.primary.button_text_color
              ? slice.primary.button_text_color
              : '#353C47'
          };
      background:${
        slice.primary.button_color ? slice.primary.button_color : '#F2776B'
      };
      `"
        >
          <span>{{ slice.primary.button_text }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import tailwindMatcher from "hex2tailwind";

export default {
  name: "CookieBanner",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  data() {
    let getContainerClasses = function () {
      let classes = "";

      if (this?.slice?.primary?.background_color) {
        let colorName = tailwindMatcher(this?.slice?.primary?.background_color);
        classes = classes + ` bg-${colorName} `;
      } else {
        classes = classes + ` bg-[#F2F2F2] `;
      }
      return classes;
    };
    return {
      getContainerClasses,
    };
  },
};
</script>

<style scoped>
</style>

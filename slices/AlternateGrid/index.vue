<template>
  <section
    :class="getContainerClasses()"
    :style="`paddingTop:${marginTop};paddingBottom:${marginBottom}`"
  >
    <PrismicRichText :field="slice.primary.title" :class="getTitleClasses()" />
    <PrismicRichText
      :class="getDescriptionClasses()"
      :field="slice.primary.description"
      class="flex flex-wrap items-center gap-2.5"
    />
    <div
      class="mt-[78px] grid md:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-14 w-full"
    >
      <div
        class="flex-[0_0_98%] md:flex-[0_0_48%] lg:flex-[0_0_23%]"
        v-for="(item, i) in slice.items"
        :key="`slice-item-${i}`"
      >
        <PrismicImage
          class="h-[80px] w-[80px] mb-6 object-cover"
          :field="item.feature_image"
        />
        <PrismicRichText
          :field="item.feature_title"
          :class="getItemTitleClasses()"
        />
        <PrismicRichText
          :class="getItemDescriptionClasses()"
          :field="item.feature_description"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import tailwindMatcher from "hex2tailwind";

export default {
  name: "AlternateGrid",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  data() {
    //// console.log('slice props ', this.slice);
    let getContainerClasses = function () {
      let classes = "w-full h-full flex flex-col justify-center	";

      if (this.slice.primary.background_color) {
        let colorName = tailwindMatcher(this.slice.primary.background_color);
        classes = classes + ` bg-${colorName}  `;
      }

      return classes;
    };

    let getTitleClasses = function () {
      let classes = "w-full font-medium mb-5";

      if (this.slice.primary.text_color) {
        let colorName = tailwindMatcher(this.slice.primary.text_color);
        classes = classes + ` text-${colorName}  `;
      } else {
        let colorName = tailwindMatcher("#353C47");
        classes = classes + ` text-${colorName}  `;
      }

      return classes;
    };

    let getDescriptionClasses = function () {
      let classes = "w-full  text-[18px]	lg:text-[20px]";

      if (this.slice.primary.secondary_text_color) {
        let colorName = tailwindMatcher(
          this.slice.primary.secondary_text_color
        );
        classes = classes + ` text-${colorName}  `;
      } else {
        let colorName = tailwindMatcher("#48525F");
        classes = classes + ` text-${colorName}  `;
      }

      return classes;
    };

    let getItemTitleClasses = function () {
      let classes = "mb-6 font-medium	text-[20px] lg:text-[23px]  ";

      if (this.slice.primary.text_color) {
        let colorName = tailwindMatcher(this.slice.primary.text_color);
        classes = classes + ` text-${colorName}  `;
      } else {
        let colorName = tailwindMatcher("#353C47");
        classes = classes + ` text-${colorName}  `;
      }

      return classes;
    };

    let getItemDescriptionClasses = function () {
      let classes = "";

      if (this.slice.primary.secondary_text_color) {
        let colorName = tailwindMatcher(
          this.slice.primary.secondary_text_color
        );
        classes = classes + ` text-${colorName}  `;
      } else {
        let colorName = tailwindMatcher("#48525F");
        classes = classes + ` text-${colorName}  `;
      }

      return classes;
    };

    let marginTop =
      this.slice.primary.margin_top && this.slice.primary.margin_top >= 0
        ? this.slice.primary.margin_top + "px"
        : "0px";

    let marginBottom =
      this.slice.primary.margin_bottom && this.slice.primary.margin_bottom >= 0
        ? this.slice.primary.margin_bottom + "px"
        : "0px";

    return {
      getContainerClasses,
      getTitleClasses,
      getDescriptionClasses,
      getItemTitleClasses,
      getItemDescriptionClasses,
      marginTop,
      marginBottom,
    };
  },
};
</script>

<style scoped></style>

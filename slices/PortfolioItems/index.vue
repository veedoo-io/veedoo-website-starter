<template>
  <section
    v-if="slice.items?.length > 0"
    :class="getContaienrClasses()"
    :style="`padding:${marginTop} 24px ${marginBottom}`"
  >
    <div
      v-for="(item, i) in slice.items"
      :key="`slice-item-${i}`"
      class="group"
      :class="getItemClassess()"
      :style="`background-color: ${
        item.background_color ? item.background_color : '#FFFFFF'
      }; color: ${
        item.text_color ? item.text_color : '#353C47'
      }; filter:drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1)) `"
    >
      <PrismicLink class="w-full h-full" :field="item.url" target="_blank">
        <PrismicImage
          class="w-full group-hover:invisible rounded-2xl h-[400px] object-cover"
          :field="item.image"
        />
        <div :class="getItemContextClasses()">
          <PrismicRichText
            :style="`color: ${item.text_color}`"
            class="text-[19px]"
            :field="item.description"
          />
          <div class="flex w-full gap-2.5 items-center mt-6 font-medium">
            {{ item.url_label ?? "Visit website" }}
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 11.3306V16.3306C15 16.7727 14.8244 17.1966 14.5118 17.5092C14.1993 17.8217 13.7754 17.9973 13.3333 17.9973H4.16667C3.72464 17.9973 3.30072 17.8217 2.98816 17.5092C2.67559 17.1966 2.5 16.7727 2.5 16.3306V7.16398C2.5 6.72195 2.67559 6.29803 2.98816 5.98547C3.30072 5.67291 3.72464 5.49731 4.16667 5.49731H9.16667"
                stroke="#353C47"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.5 2.99731H17.5V7.99731"
                stroke="#353C47"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.33333 12.164L17.5 2.99731"
                stroke="#353C47"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </PrismicLink>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import tailwindMatcher from "hex2tailwind";

export default {
  name: "PortfolioItems",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  data() {
    // console.log(this.slice);
    let getContaienrClasses = function () {
      // console.log;
      let classes = "w-full py-10 w-full gap-6 grid lg:grid-cols-2 grid-cols-1";

      if (this.slice.primary.background_color) {
        let colorName = tailwindMatcher(this.slice.primary.background_color);
        classes = classes + ` bg-${colorName} `;
      }

      return classes;
    };

    let getItemClassess = function () {
      let classes =
        "relative flex-[0_0_100%] lg:flex-[0_0_48%]  min-h-[220px] w-full h-full rounded-2xl overflow-hidden  ";

      return classes;
    };

    let getItemContextClasses = function () {
      let classes =
        "absolute top-0 left-0 hidden group-hover:flex w-full h-full bg-transparent flex flex-col justify-center py-[16px] px-[16px] lg:px-[70px]";
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
      getContaienrClasses,
      getItemClassess,
      getItemContextClasses,
      marginTop,
      marginBottom,
    };
  },
};
</script>

<style scoped></style>

<template>
  <section
    class="w-full"
    :style="`background-color:${backgroundColor}; padding:${marginTop} 24px ${marginBottom} 24px;`"
  >
    <div
      class="flex gap-[46px] md:justify-center flex-wrap md:flex-row flex-col content-center mx-auto"
    >
      <div
        :class="`
          rounded-[5px]
          flex p-6 gap-6 w-full md:w-[47%]
          ${
            slice.variation == 'vertical'
              ? 'my-2.5 flex-col lg:w-[47%] xl:w-[30%]'
              : 'flex-col md:flex-row lg:flex-col xl:flex-row  lg:w-2/6'
          }
         `"
        v-for="(item, i) in slice.items"
        :key="`blurb-item-${i}`"
        :style="{
          backgroundColor: item?.blurb_background_color
            ? item?.blurb_background_color
            : '#FFFFFF',
          filter:
            'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
        }"
      >
        <PrismicImage
          v-if="Object.keys(item.image).length"
          :field="item.image"
          class="object-cover"
          :class="` ${
            slice.variation == 'vertical'
              ? '  w-[60px] h-[60px] mx-auto'
              : ' w-[120px] h-[120px] '
          }`"
        />
        <div class="flex flex-col gap-2">
          <PrismicRichText
            :style="`color: ${
              item?.title_color ? item?.title_color : '#000000'
            }`"
            :field="item.title"
            :class="`text-[24px] ${
              slice.variation == 'vertical' ? 'text-center' : ''
            } `"
          />
          <PrismicRichText
            :style="`color: ${
              item?.description_color
                ? item.description_color
                : 'rgba(0, 0, 0, 0.6)'
            }`"
            :field="item.description"
            :class="`text-[14px] rich-text ${
              slice.variation == 'vertical' ? 'text-center' : ''
            } `"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "Blurb",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  data() {
    //console.log('slice ', this.slice);

    let marginTop =
      this.slice.primary.margin_top && this.slice.primary.margin_top >= 0
        ? this.slice.primary.margin_top + "px"
        : "0px";

    let marginBottom =
      this.slice.primary.margin_bottom && this.slice.primary.margin_bottom >= 0
        ? this.slice.primary.margin_bottom + "px"
        : "0px";

    let backgroundColor = this.slice.primary.background_color
      ? this.slice.primary.background_color
      : "transparent";

    return {
      marginTop,
      marginBottom,
      backgroundColor,
    };
  },
};
</script>

<style scoped>
::v-deep h6 {
  font-size: 24px;
}
::v-deep h5 {
  font-size: 24px;
}
::v-deep h4 {
  font-size: 24px;
}
::v-deep h3 {
  font-size: 24px;
}
::v-deep h2 {
  font-size: 24px;
}
::v-deep p {
  font-size: 16px;
}
</style>

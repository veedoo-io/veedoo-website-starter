<template>
  <section
    class="w-full flex md:flex-row flex-col py-10 gap-4 flex-wrap"
    :style="{
      backgroundColor: containerBackgroundColor,
    }"
  >
    <div
      class="flex flex-col mb-6 w-full md:flex-[0_0_48%] flex-[0_0_98%]"
      v-for="(item, i) in slice.items"
      :key="`slice-item-${i}`"
    >
      <PrismicRichText
        :style="{
          color: textColor,
        }"
        :field="item.title"
      />
      <PrismicRichText
        class="text-justify my-[24px] rich-text"
        :style="{
          color: textColor,
        }"
        :field="item.description"
      />
    </div>
    <div class="md:flex-[0_0_48%] flex-[0_0_98%]">
      <PrismicRichText
        class="rich-text"
        :style="{
          color: textColor,
        }"
        :field="slice.primary.social_media_title"
      />
      <div class="flex gap-2 mt-[27px]">
        <PrismicLink
          :field="slice.primary.instagram_link"
          v-if="Object.keys(slice.primary.instagram).length"
        >
          <PrismicImage
            class="w-[36px] h-[36px]"
            :field="slice.primary.instagram"
          />
        </PrismicLink>
        <PrismicLink :field="slice.primary.facebook_link">
          <PrismicImage
            class="w-[36px] h-[36px]"
            :field="slice.primary.facebook"
            v-if="Object.keys(slice.primary.facebook).length"
          />
        </PrismicLink>
        <PrismicLink
          :field="slice.primary.twitter_link"
          v-if="Object.keys(slice.primary.twitter).length"
        >
          <PrismicImage
            :field="slice.primary.twitter"
            class="w-[36px] h-[36px]"
          />
        </PrismicLink>
        <PrismicLink
          :field="slice.primary.linkedin_link"
          v-if="Object.keys(slice.primary.linkedin).length"
        >
          <PrismicImage
            :field="slice.primary.linkedin"
            class="w-[36px] h-[36px]"
          />
        </PrismicLink>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "ContactInfo",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  data() {
    //console.log(this.slice);
    let getContainerClasses = function () {
      let classes = "w-full  flex flex-col py-10";

      return classes;
    };

    let containerBackgroundColor = this.slice.primary.background_color
      ? this.slice.primary.background_color
      : "transparent";

    let textColor = this.slice.primary.text_color
      ? this.slice.primary.text_color
      : "#353C47";

    return {
      getContainerClasses,
      containerBackgroundColor,
      textColor,
    };
  },
};
</script>

<style scoped>
</style>

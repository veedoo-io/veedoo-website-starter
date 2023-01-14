<template>
  <section
    :class="getContainerClasses()"
    :style="{
      backgroundColor: containerBackgroundColor,
      alignItems: slice.primary.center ? 'center' : 'start',
    }"
  >
    <div
      class="flex gap-4 items-center text-[57px] max-w-[800px] font-bold mb-6"
    >
      <PrismicRichText
        :style="{
          color: textColor,
        }"
        :field="slice.primary.title"
      />
      <PrismicImage
        class="w-[56px] h-[56px]"
        :field="slice.primary.title_image"
      />
    </div>
    <PrismicRichText
      class="text-[19px] max-w-[800px] text-justify mb-[67px]"
      :style="{
        color: textColor,
        textAlign: slice.primary.center ? 'center' : 'left',
      }"
      :field="slice.primary.description"
    />
    <div
      class="flex gap-4 items-center text-[33px] max-w-[800px] font-bold mb-6"
    >
      <PrismicRichText
        :style="{
          color: textColor,
        }"
        :field="slice.primary.email_title"
      />
      <PrismicImage
        class="w-[48px] h-[48px]"
        :field="slice.primary.email_title_image"
      />
    </div>
    <PrismicRichText
      class="text-[23px] max-w-[800px] text-justify mb-[59px] font-medium"
      :style="{
        color: textColor,
      }"
      :field="slice.primary.email_content"
    />
    <div
      class="flex gap-4 items-center text-[33px] max-w-[800px] font-bold mb-6"
    >
      <PrismicRichText
        :style="{
          color: textColor,
        }"
        :field="slice.primary.social_media_title"
      />
      <PrismicImage
        class="w-[48px] h-[48px]"
        :field="slice.primary.social_media_title_image"
      />
    </div>
    <div class="flex gap-[13.5px]">
      <div
        v-for="(item, i) in slice.items"
        class="w-fit h-fit"
        :key="`slice-item-${i}`"
      >
        <PrismicLink class="w-fit h-fit" :field="item.social_media_url"
          ><PrismicImage
            class="w-[36px] h-[36px]"
            :field="item.social_media_image"
        /></PrismicLink>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';

export default {
  name: 'ContactInfo',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  data() {
    let getContainerClasses = function () {
      let classes = 'w-full min-h-screen flex flex-col py-10';

      return classes;
    };

    let containerBackgroundColor = this.slice.primary.background_color
      ? this.slice.primary.background_color
      : 'transparent';

    let textColor = this.slice.primary.text_color
      ? this.slice.primary.text_color
      : '#353C47';

    return {
      getContainerClasses,
      containerBackgroundColor,
      textColor,
    };
  },
};
</script>

<style scoped></style>

<template>
  <section
    class="w-full flex md:flex-row flex-col py-10 px-4 gap-4 flex-wrap"
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
        class="text-justify my-[24px]"
        :style="{
          color: textColor,
        }"
        :field="item.description"
      />
    </div>
    <div class="md:flex-[0_0_48%] flex-[0_0_98%]">
      <PrismicRichText
        :style="{
          color: textColor,
        }"
        :field="slice.primary.social_media_title"
      />
      <div class="flex gap-2 mt-[27px]">
        <PrismicLink :field="slice.primary.instagram_link">
          <PrismicImage
            class="w-[36px] h-[36px]"
            :field="slice.primary.instagram"
          />
        </PrismicLink>
        <PrismicLink :field="slice.primary.facebook_link">
          <PrismicImage
            class="w-[36px] h-[36px]"
            :field="slice.primary.facebook"
          />
        </PrismicLink>
        <PrismicLink
          :field="slice.primary.twitter_link"
          v-if="slice.primary.twitter"
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
    <!--
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
        v-if="slice.primary?.title_image?.url"
      />
    </div>
    <PrismicRichText
      class="text-[19px] max-w-[800px] text-justify mb-[67px]"
      :style="{
        color: textColor,
        textAlign: slice.primary?.center ? 'center' : 'left',
      }"
      :field="slice.primary.description"
    />
    <div class="w-full flex flex-col lg:flex-row gap-6">
      <div class="flex-1">
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
            v-if="slice.primary?.email_title_image?.url"
          />
        </div>
        <PrismicRichText
          class="text-[23px] max-w-[800px] text-justify mb-[59px] font-medium"
          :style="{
            color: textColor,
          }"
          :field="slice.primary.email_content"
        />
      </div>
      <div class="flex-1">
        <div
          class="flex gap-4 items-center text-[33px] max-w-[800px] font-bold mb-6"
        >
          <p
            :style="{
              color: textColor,
            }"
            v-if="slice.primary.second_section_title"
          >
            {{ slice.primary.second_section_title }}
          </p>
          <PrismicImage
            class="w-[48px] h-[48px]"
            :field="slice.primary.second_section_title_image"
            v-if="slice.primary?.second_section_title_image?.url"
          />
        </div>
        <PrismicRichText
          class="text-[23px] max-w-[800px] text-justify mb-[59px] font-medium"
          :style="{
            color: textColor,
          }"
          :field="slice.primary.second_section_content"
        />
      </div>
    </div>
    <div class="w-full flex flex-col lg:flex-row gap-6">
      <div class="flex-1">
        <div
          class="flex gap-4 items-center text-[33px] max-w-[800px] font-bold mb-6"
        >
          <p
            :style="{
              color: textColor,
            }"
            v-if="slice.primary.third_section_title"
          >
            {{ slice.primary.third_section_title }}
          </p>
          <PrismicImage
            class="w-[48px] h-[48px]"
            :field="slice.primary.third_section_title_image"
            v-if="slice.primary?.third_section_title_image?.url"
          />
        </div>
        <PrismicRichText
          class="text-[23px] max-w-[800px] text-justify mb-[59px] font-medium"
          :style="{
            color: textColor,
          }"
          :field="slice.primary.third_section_content"
        />
      </div>
      <div class="flex-1">
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
            v-if="slice.primary?.social_media_title_image?.url"
          />
        </div>
        <div class="flex gap-[13.5px]">
          <div
            v-for="(item, i) in slice.items"
            class="w-fit h-fit"
            :key="`slice-item-${i}`"
          >
            <PrismicLink
              v-if="item.social_media_image?.url"
              class="w-fit h-fit"
              :field="item.social_media_url"
              ><PrismicImage
                class="w-[36px] h-[36px] object-contain"
                :field="item.social_media_image"
            /></PrismicLink>
          </div>
        </div>
      </div>
    </div>-->
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

<template>
  <section
    :class="`w-full h-fit flex ${
      slice.variation == 'horizontal' ? 'lg:flex-row' : 'flex-col'
    }  items-center justify-center  py-[72px] gap-10 flex-col`"
    :style="{
      backgroundColor: slice.primary.background_color
        ? slice.primary.background_color
        : 'transparent',
    }"
  >
    <div
      :class="`flex flex-col gap-6  justify-center ${
        slice.variation == 'horizontal'
          ? 'lg:justify-start lg:text-left text-center'
          : 'text-center  justify-center'
      } `"
    >
      <PrismicRichText
        :style="{
          color: slice.primary.text_color
            ? slice.primary.text_color
            : '#000000',
        }"
        :field="slice.primary.title"
        class="font-medium text-[33px] md:text-[40px]"
      />
      <PrismicRichText
        :style="{
          color: slice.primary.description_text_color
            ? slice.primary.description_text_color
            : '#000000',
        }"
        :field="slice.primary.description"
        :class="`max-w-[586px] text-[19px] flex flex-col ${
          slice.variation == 'horizontal' ? '' : 'text-center'
        }  items-center justify-center`"
      />
    </div>
    <div class="relative overflow-hidden max-w-[760px] max-h-[428px] w-full">
      <no-ssr>
        <youtube
          class="max-w-full w-full"
          style="padding-bottom: 56.25%"
          v-if="videoURL"
          player-width="100%"
          :video-id="videoURL"
        />
      </no-ssr>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import { getIdFromURL } from "vue-youtube-embed";

export default {
  name: "YoutubeVideo",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  data() {
    return {};
  },

  computed: {
    videoURL() {
      return getIdFromURL(this.slice.primary.video_id);
    },
  },
};
</script>

<style scoped>
.section {
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
.title {
  margin-bottom: 2em;
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

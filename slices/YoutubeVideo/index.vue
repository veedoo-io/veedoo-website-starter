<template>
  <section
    :class="`w-full h-fit flex ${
      slice.variation == 'horizontal' ? 'flex-row' : 'flex-col'
    }  items-center justify-center  py-[72px] gap-10`"
    :style="{
      backgroundColor: slice.primary.background_color
        ? slice.primary.background_color
        : 'transparent',
    }"
  >
    <div
      :class="`flex flex-col gap-6  justify-center ${
        slice.variation == 'horizontal'
          ? 'justify-start text-left'
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
    <youtube
      v-if="slice.primary.video_id"
      class="w-full bg-grenn-300 flex-1 max-w-[640px]"
      player-width="100%"
      :video-id="slice.primary.video_id"
    />
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';

export default {
  name: 'YoutubeVideo',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  data() {
    return {};
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
</style>

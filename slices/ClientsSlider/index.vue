<template>
  <section class="w-full min-h-scree">
    <div>
      <h2>{{ slice.primary.title }}</h2>
      <PrismicImage :field="slice.primary.title_image" />
    </div>
    <PrismicRichText :field="slice.primary.description" />
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';

export default {
  name: 'ClientsSlider',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
};
</script>

<style scoped></style>

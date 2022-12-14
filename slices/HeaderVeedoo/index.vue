<template>
  <section class="section">
    <h1>HeaderVeedoo</h1>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';

export default {
  name: 'HeaderVeedoo',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
};
</script>

<style scoped></style>

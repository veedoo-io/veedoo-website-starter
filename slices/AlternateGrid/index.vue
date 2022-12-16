<template>
  <section :class="getContainerClasses()">
    <h2>{{ slice.primary.title }}</h2>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';

export default {
  name: 'AlternateGrid',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  data() {
    let getContainerClasses = function () {
      let classes = 'w-full min-h-screen	';

      return classes;
    };
    return {
      getContainerClasses,
    };
  },
};
</script>

<style scoped></style>

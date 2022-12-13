<template>
  <SliceZone :slices="page.data.slices" :components="components" />
</template>

<script>
import { components } from '~/slices';

export default {
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getByUID('page', params.uid);

    if (document) {
      console.log('document ', document);
      return { page: document };
    } else {
      console.log('document not found');
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
  data() {
    return {
      components,
    };
  },
};
</script>

<template>
  <SliceZone :slices="page.data.slices" :components="components" />
</template>

<script>
import { components } from '~/slices';

export default {
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getSingle('home_page');

    if (document) {
      //console.log('document ', document);
      return { status: true, page: document };
    } else {
      //console.log('document not found');
      error({
        status: false,
        statusCode: 404,
        message: 'Page not found',
      });
    }
  },
  data() {
    return {
      components,
    };
  },
};
</script>

<template>
  <SliceZone :slices="page.data.slices" :components="components" />
</template>

<script>
import { components } from '~/slices';

export default {
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getByUID('page', params.uid);

    if (document) {
      //console.log('document ', document);
      return { page: document };
    } else {
      //console.log('document not found');
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
  data() {
    return {
      components,
    };
  },
  head() {
    return {
      title: this.document?.data?.meta_title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.document?.data?.meta_description,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.document?.data?.meta_title,
        },
        {
          property: 'og:description',
          content: this.document?.data?.meta_description,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.document?.data?.meta_image?.url,
        },
      ],
    };
  },
};
</script>

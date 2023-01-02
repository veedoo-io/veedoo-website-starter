<template>
  <SliceZone :slices="page?.data?.slices" :components="components" />
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
  head() {
    console.log('document title ', this.page?.data?.meta_title);
    return {
      title: this.page?.data?.meta_title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page?.data?.meta_description,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.page?.data?.meta_title,
        },
        {
          property: 'og:description',
          content: this.page?.data?.meta_description,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.page?.data?.meta_image?.url,
        },
      ],
    };
  },
};
</script>

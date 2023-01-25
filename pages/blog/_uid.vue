<template>
  <SliceZone :slices="page.data.slices" :components="components" />
</template>

<script>
import { components } from '~/slices';

export default {
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getByUID('blog_post', params.uid);

    if (document) {
      //console.log('document ', document);
      return { status: true, page: document };
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
  head({ $prismic }) {
    let title = this.page?.data?.title
      ? $prismic.asText(this.page?.data?.title)
      : null;

    return {
      title: title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page?.data?.description,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: this.page?.data?.description,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.page?.data?.image?.url,
        },
      ],
    };
  },
};
</script>

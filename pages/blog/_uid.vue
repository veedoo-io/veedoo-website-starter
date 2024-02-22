<template>
  <SliceZone :slices="page.data.slices" :components="components" />
</template>

<script>
import { components } from "~/slices";

export default {
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getByUID("blog_post", params.uid);

    if (document) {
      //console.log('document ', document);
      return { status: true, page: document };
    } else {
      //console.log('document not found');
      error({ statusCode: 404, message: "Page not found" });
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

    let baseurl = process.client ? window.location.href : " ";
    return {
      title: title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page?.data?.meta_description,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.page?.data?.meta_title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.page?.data?.meta_description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.page?.data?.meta_image?.url + "&fm=jpg&w=1200&h=630",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: baseurl,
        },
      ],
    };
  },
};
</script>

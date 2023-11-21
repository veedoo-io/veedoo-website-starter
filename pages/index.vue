<template>
  <SliceZone :slices="page?.data?.slices" :components="components" />
</template>

<script>
import { components } from "~/slices";

export default {
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getSingle("home_page");

    if (document) {
      //console.log('document ', document);
      return { status: true, page: document };
    } else {
      //console.log('document not found');
      error({
        status: false,
        statusCode: 404,
        message: "Page not found",
      });
    }
  },
  data() {
    return {
      components,
    };
  },
  head() {
    //console.log('document title ', this.page?.data?.meta_title);
    let obj = {};
    let meta = [];
    if (this.page?.data?.meta_title) {
      obj.title = this.page?.data?.meta_title;
      meta.push({
        hid: "og:title",
        property: "og:title",
        content: this.page?.data?.meta_title,
      });
    }

    if (this.page?.data?.meta_description) {
      meta.push({
        hid: "description",
        name: "description",
        content: this.page?.data?.meta_description,
      });
      meta.push({
        hid: "og:description",
        property: "og:description",
        content: this.page?.data?.meta_description,
      });
    }
    if (this.page?.data?.meta_image?.url) {
      meta.push({
        hid: "og:image",
        property: "og:image",
        content: this.page?.data?.meta_image?.url + "&fm=jpg&w=1200&h=630",
      });
    }
    obj.meta = meta;

    return obj;
  },
};
</script>

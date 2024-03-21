<template>
  <main
    class="fixflex flex-col min-h-screen"
    :style="
      getSettings?.data?.default_background_color
        ? { backgroundColor: getSettings?.data?.default_background_color }
        : { backgroundColor: 'white' }
    "
  >
    <Header />
    <div
      class="pt-20 first-letter:w-full xl:px-8 md-8 xl:w-[75%] lg:w-[80%] w-full flex-1 pb-9 mx-auto"
    >
      <nuxt />
    </div>
    <Footer />
  </main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getSettings"]),
  },
  /* beforeMount() {
    this.injectScript();
  },
  methods: {
    async injectScript() {
      const response = await this.$prismic.api.getSingle("website_settings");

      const { hotjar, facebook_pixel } = response.data;
      const items = [hotjar, facebook_pixel];

      items.forEach((element) => {
        const plainText = element;

        var tempContainer = document.createElement("div");
        tempContainer.innerHTML = plainText;

        var headElement =
          document.head || document.getElementsByTagName("head")[0];

        var childNodes = tempContainer.childNodes;
        for (var i = 0; i < childNodes.length; i++) {
          headElement.appendChild(childNodes[i].cloneNode(true));
        }
      });
      console.log(response);
    },
  },*/
};
</script>

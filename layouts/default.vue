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
      class="pt-20 first-letter:w-full xl:px-8 md-8 xl:w-[75%] lg:w-[80%] w-full px-[24px] flex-1 pb-9 mx-auto"
    >
      <nuxt />
    </div>
    <!--
    <Cookies />-->
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
};
</script>

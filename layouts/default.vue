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
      class="pt-20 first-letter:w-full px-4 sm:px-4 lg:px-8 xl:px-[104px] flex-1 pb-9"
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

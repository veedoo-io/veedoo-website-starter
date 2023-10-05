<template>
  <div>
    <div v-if="getCookies" class="fixed z-50 bottom-0 left-0 w-full">
      <SliceZone
        :slices="getCookies?.data?.slices?.slice(0, 1)"
        :components="components"
      />
    </div>
    <di v-else>
      <p>You need to add Cookies to prismic</p>
    </di>
  </div>
</template>

<script>
import { components } from "~/slices";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      components,
    };
  },
  computed: {
    ...mapGetters(["getCookies"]),
  },
};
</script>
<style scoped>
</style>

<template>
  <div>
    <div v-if="getHeader">
      <SliceZone
        :slices="getHeader?.data?.slices?.slice(0, 1)"
        :components="components"
      />
    </div>
    <di v-else>
      <p>You need to add a Header to prismic</p>
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
    ...mapGetters(["getHeader"]),
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>

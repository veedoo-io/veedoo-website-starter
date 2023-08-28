<template>
  <div>
    <div v-if="getFooter">
      <SliceZone
        :slices="getFooter?.data?.slices?.slice(0, 1)"
        :components="components"
      />
    </div>
    <di v-else>
      <p>You need to add a Footer to prismic</p>
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
    ...mapGetters(["getFooter"]),
  },
};
</script>
<style scoped>
</style>

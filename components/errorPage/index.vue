<template>
  <div>
    <div v-if="getErrorPage">
      <SliceZone
        :slices="getErrorPage?.data?.slices?.slice(0, 1)"
        :components="components"
      />
    </div>
    <di v-else>
      <p>You need to add a Error Page to prismic</p>
    </di>
  </div>
</template>

<script>
import { components } from '~/slices';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      components,
    };
  },
  computed: {
    ...mapGetters(['getErrorPage']),
  },
};
</script>

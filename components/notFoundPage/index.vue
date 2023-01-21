<template>
  <div>
    <div v-if="getNotFoundPage">
      <SliceZone
        :slices="getNotFoundPage?.data?.slices?.slice(0, 1)"
        :components="components"
      />
    </div>
    <di v-else>
      <p>You need to add a Not Found Page to prismic</p>
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
    ...mapGetters(['getNotFoundPage']),
  },
};
</script>

<template>
  <div
    class="
      text-3xl
      bg-red-100
      font-bold
      w-screen
      h-screen
      flex flex-col
      justify-center
      items-center
    "
  >
    <h1>Hello world!</h1>
    <p>Copy this and start a new project</p>
  </div>
</template>

<script>
import tailwindMatcher from '~/assets/js/util/hexToName';

export default {
  name: 'IndexPage',
  data() {
    console.log('color', tailwindMatcher('#E2EEFF'));

    return {};
  },
};
</script>

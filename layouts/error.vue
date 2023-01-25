<template>
  <div>
    <div v-if="error.statusCode === 404">
      <notFoundPage />
    </div>
    <div v-else>
      <errorPage :errorCode="error.statusCode" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error', // you can set a custom layout for the error page
};
</script>

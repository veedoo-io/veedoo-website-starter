<template>
  <transition-group name="fade" mode="out-in" tag="ul">
    <li v-for="(item, i) in items" :key="`slice-item-${i}`">
      <Tag
        :title="item.tag_label"
        :image="item.tag_image?.url"
        :imageAlt="item.tag_image?.alt"
      />
    </li>
  </transition-group>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>


<style >
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

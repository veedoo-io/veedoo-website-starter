<template>
  <div
    class="
      bg-white
      shadow-[0_5px_10px_0px_#D4D4D4]
      w-fit
      h-fit
      py-2
      px-5
      flex
      gap-[10px]
      justify-start
      items-center
      rounded-[10px]
      hover:scale-125
      font-medium
      text-lg
      md:text-xl
      lg:text-2xl
      text-[#48525F]
    "
    :class="{
      [extraClass]: true,
    }"
  >
    <img v-if="image" class="w-8 h-[30px]" :src="image" :alt="imageAlt" />
    <h6 class="label">{{ title }}</h6>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: () => 'tag',
    },
    image: {
      type: String,
      default: () => '',
    },
    imageAlt: {
      type: String,
      default: () => '',
    },
    extraClass: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.label {
  font-family: 'Poppins', sans-serif;
}
</style>

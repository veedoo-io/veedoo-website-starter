<template>
  <div :class="getContainerClass">
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
    bgColor: {
      type: String,
      default: () => 'bg-white',
    },
    textColor: {
      type: String,
      default: () => 'text-[#48525F]',
    },
  },
  data() {
    let conatinerClass = `shadow-[0_5px_10px_0px_#D4D4D4] ${this.bgColor} ${this.textColor}  w-fit h-fit py-2 px-5 flex gap-[10px] justify-start items-center rounded-[10px] hover:scale-125 font-medium text-lg md:text-xl lg:text-2xl`;

    return {
      conatinerClass,
    };
  },
  computed: {
    getContainerClass: function () {
      let conatinerClass = `shadow-[0_5px_10px_0px_#D4D4D4] ${this.bgColor} ${this.textColor}  w-fit h-fit py-2 px-5 flex gap-[10px] justify-start items-center rounded-[10px] hover:scale-125 font-medium text-lg md:text-xl lg:text-2xl`;

      return conatinerClass;
    },
  },
};
</script>
<style scoped>
.label {
  font-family: 'Poppins', sans-serif;
}
</style>

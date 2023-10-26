<template>
  <section
    :class="getContainerClasses()"
    :style="`padding:${marginTop} 24px  ${marginBottom};`"
  >
    <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
      <Tag
        :title="item.tag_label"
        :image="item.tag_image?.url"
        :imageAlt="item.tag_image?.alt"
        class="tag-animate"
      />
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "AtomTags",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),

  data() {
    let marginTop =
      this.slice.primary.margin_top && this.slice.primary.margin_top >= 0
        ? this.slice.primary.margin_top + "px"
        : "0px";

    let marginBottom =
      this.slice.primary.margin_bottom && this.slice.primary.margin_bottom >= 0
        ? this.slice.primary.margin_bottom + "px"
        : "0px";

    let getContainerClasses = function () {
      let classes = "flex gap-[32px] flex-wrap";

      return classes;
    };

    return {
      marginTop,
      marginBottom,
      getContainerClasses,
    };
  },
  mounted() {
    // Add scroll event listener to the window object
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeDestroy() {
    // Remove the scroll event listener when the component is destroyed
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      const tags = document.querySelectorAll(".tag-animate");

      tags.forEach((tag, index) => {
        const tagRect = tag.getBoundingClientRect();
        if (tagRect.top < window.innerHeight) {
          tag.classList.add("show");
        } else {
          tag.classList.remove("show");
        }
      });
    },
  },
};
</script>

<style scoped>
.tag-animate {
  opacity: 0;
  transform: translateY(20px); /* Adjust the initial position as needed */
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.tag-animate.show {
  opacity: 1;
  transform: translateY(0);
}
</style>


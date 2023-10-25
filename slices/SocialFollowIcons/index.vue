<template>
  <section
    :class="`w-full h-fit flex ${aligment} gap-[9px] items-center`"
    :style="`background-color:${backgroundColor}; padding-top:${marginTop}; padding-bottom: ${marginBottom};`"
  >
    <div
      class=""
      v-for="(item, i) in slice.items"
      :key="`socialFollow-item-${i}`"
      :style="`background-color: ${item.background_color}`"
    >
      <PrismicLink
        class="square"
        :field="item.social_url"
        :style="`background-color:${slice.primary.social_icon_background}; border-radius:${slice.primary.radius}px`"
      >
        <PrismicImage
          class="w-[38px] h-[38px]"
          :field="item.social_icon_image"
          v-if="Object.keys(item.social_icon_image).length"
        />
      </PrismicLink>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SocialFollowIcons",
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

    let marginLeft =
      this.slice.primary.margin_left && this.slice.primary.margin_left >= 0
        ? this.slice.primary.margin_left + "px"
        : "0px";

    let marginRight =
      this.slice.primary.margin_right && this.slice.primary.margin_right >= 0
        ? this.slice.primary.margin_right + "px"
        : "0px";

    let backgroundColor = this.slice.primary.background_color
      ? this.slice.primary.background_color
      : "transparent";

    let aligment = "justify-start";
    switch (this.slice.primary.alignment) {
      case "center":
        aligment = "justify-center";
        break;
      case "right":
        aligment = "justify-end";
        break;
    }

    return {
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      backgroundColor,
      aligment,
    };
  },
};
</script>

<style scoped>
.section {
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
.title {
  margin-bottom: 2em;
}
a {
  display: block;
  padding: 10px;
}
</style>

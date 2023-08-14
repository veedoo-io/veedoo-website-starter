<template>
  <section
    :class="getContainerClasses()"
    :style="`padding:${marginTop} ${marginRight} ${marginBottom} ${marginLeft};
      color:${slice.primary.text_color ? slice.primary.text_color : '#353C47'};
      background-color:${
        slice.primary.background_color
          ? slice.primary.background_color
          : 'transparent'
      };
      `"
  >
    <div class="flex items-center">
      <PrismicRichText :field="slice.primary.title" />
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "Title",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  image: {
    type: String,
    default: () => "",
  },
  imageAlt: {
    type: String,
    default: () => "",
  },
  data() {
    let getContainerClasses = function () {
      let classes = "flex items-center gap-[20px] ";

      switch (this.slice.primary.text_alignment) {
        case "center":
          classes = classes + " justify-center";
          break;
        default:
          classes = classes + " justify-start";
      }

      return classes;
    };

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

    return {
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      getContainerClasses,
    };
  },
};
</script>

<style scoped>
::v-deep img {
  width: 46px;
  height: 46px;
  margin-left: 8px; /* Adjust margin as needed */
  vertical-align: middle;
}

/*
::v-deep h3::after {
  content: url(slice.primary.image);
}*/
</style>

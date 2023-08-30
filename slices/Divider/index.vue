<template>
  <div
    :class="getContainerClasses()"
    :style="`padding:${marginTop} 24px ${marginBottom} 24px; border-color:${colorName}; border-bottom-width:${borderWidth}px`"
  ></div>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import tailwindMatcher from "hex2tailwind";

export default {
  name: "Divider",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  data() {
    let getContainerClasses = function () {
      let classes = "h-px border-b";

      switch (this.slice.primary.type) {
        case "solid":
          classes = classes + " border-solid ";
          break;
        case "dashed":
          classes = classes + " border-dashed	";
          break;
        case "dotted":
          classes = classes + " border-dotted	";
          break;
        case "double":
          classes = classes + " border-double	";
          break;
        default:
          classes = classes + " border-solid	";
      }

      return classes;
    };

    let colorName = this.slice.primary.color
      ? this.slice.primary.color
      : "#48525F";

    let borderWidth =
      this.slice.primary.divider_height && this.slice.primary.divider_height > 0
        ? this.slice.primary.divider_height
        : 1;

    let marginTop =
      this.slice.primary.margin_top && this.slice.primary.margin_top >= 0
        ? this.slice.primary.margin_top + "px"
        : "0px";

    let marginBottom =
      this.slice.primary.margin_bottom && this.slice.primary.margin_bottom >= 0
        ? this.slice.primary.margin_bottom + "px"
        : "0px";
    //console.log(dividerWidth);
    return {
      getContainerClasses,
      marginTop,
      marginBottom,
      borderWidth,
      colorName,
    };
  },
};
</script>

<style scoped></style>

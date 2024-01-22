<template>
  <section
    :class="getContainerClasses()"
    :style="`padding:${marginTop} 24px ${marginBottom}`"
  >
    <PrismicRichText
      :field="slice.primary.intro_text"
      v-if="slice.primary.intro_text"
      :class="getIntroClasses()"
    />
    <h1
      v-if="slice.primary.title"
      :class="getTitleClasses()"
      :style="getTitleStyle"
      class="md:text-[40px] lg:text-[60px] hidden md:block leading-10 tracking-wide"
    >
      {{ slice.primary.title }}
    </h1>
    <h1
      class="text-[40px] md:hidden block leading-10 tracking-wide text-[#353C47] font-bold"
    >
      {{ slice.primary.title }}
    </h1>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import tailwindMatcher from "hex2tailwind";

export default {
  name: "HeroVeedoo",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  data() {
    let getContainerClasses = function () {
      let classes = "w-full py-10 flex flex-col justify-center ";

      if (this.slice.primary.background_color) {
        let colorName = tailwindMatcher(this.slice.primary.background_color);
        classes = classes + ` bg-${colorName} `;
      }

      return classes;
    };

    let getIntroClasses = function () {
      let classes = "mb-2.5 ";

      if (this.slice.primary.intro_text_color) {
        let colorName = tailwindMatcher(this.slice.primary.intro_text_color);
        classes = classes + ` text-${colorName} `;
      } else {
        let colorName = tailwindMatcher("#353C47");
        classes = classes + ` text-${colorName} `;
      }

      return classes;
    };

    let getTitleClasses = function () {
      let classes =
        "b-page__home-title text-[40px] w-full sm:text-[60px] xl:text-[102px] text-[#353C47]";

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

    return {
      getContainerClasses,
      getIntroClasses,
      getTitleClasses,
      mousePosX: 0,
      marginTop,
      marginBottom,
    };
  },
  mounted() {
    document.addEventListener("mousemove", (event) => {
      this.mousePosX = event.clientX;
    });
  },
  computed: {
    getTitleStyle() {
      let width = 200;
      if (process.client) {
        width = window.innerWidth;
      }

      let px = (this.mousePosX / width) * 700;

      let styles = `background-position-x: ${-700 + px}px`;

      return styles;
    },
  },
};
</script>

<style scoped>
.b-page__home-title {
  font-weight: 600;
  line-height: 0.9;
  text-transform: uppercase;
  letter-spacing: 5.1px;
  color: transparent;
  background-position: -700px 0;
  background-image: url("~/assets/images/font_bg.svg");

  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-stroke: 3px #353c47;
  margin-top: 10px;
  transform: translate3d(0, 0, 0);
  font-family: "Poppins", sans-serif;
}
</style>

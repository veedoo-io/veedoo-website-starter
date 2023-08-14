<template>
  <section :class="getContainerClasses()">
    <PrismicRichText :class="getTitleClasses()" :field="slice.primary.title" />
    <agile
      v-if="slice?.items?.length > 0"
      @after-change="(e) => (currentSlide = e.currentSlide)"
      class="w-full mt-7"
      ref="carousel"
      :options="mySliderOption"
    >
      <div
        v-for="(item, i) in slice.items"
        :key="`slice-item-${i}`"
        class="slide bg-transparent px-12 h-full"
      >
        <div
          class="rounded w-full h-full bg-white flex p-6 flex-col justify-between gap-6 max-w-[326px] mx-auto shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10)]"
        >
          <div class="flex gap-4">
            <PrismicImage
              class="w-[56px] h-[56px] rounded-full object-cover"
              :field="item.picture"
            />

            <div class="flex flex-col h-full w-full justify-between">
              <h6 :class="getFullNameClasses()">
                {{ item.full_name }}
              </h6>
              <p class="text-[#777E85] text-[14px]">{{ item.job_position }}</p>
            </div>
          </div>
          <PrismicRichText
            :class="getTestimonialClasses()"
            :field="item.testimonial"
          />
        </div>
      </div>
    </agile>
    <div
      class="w-fit mx-auto mt-10 flex items-center max-w-screen justify-between gap-5"
    >
      <div
        class="bg-white w-8 h-8 active:scale-125 rounded flex justify-center items-center cursor-pointer"
        :style="{
          filter:
            'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
        }"
        @click="$refs.carousel.goToPrev()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-6 h-6 text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      <div class="flex gap-1 items-center">
        <div
          :class="`w-4 h-4 rounded-full ${
            currentSlide == i ? 'bg-[#CBD1D6]' : 'bg-[#F2F2F2]'
          } `"
          v-for="(item, i) in slice.items"
          @click="$refs.carousel.goTo(i)"
          :key="`slice-item-${i}`"
        ></div>
      </div>
      <div
        class="bg-white w-8 h-8 active:scale-125 rounded flex justify-center items-center cursor-pointer"
        :style="{
          filter:
            'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
        }"
        @click="$refs.carousel.goToNext()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-6 h-6 text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import tailwindMatcher from "hex2tailwind";

export default {
  name: "Testimonial",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),

  data() {
    let getContainerClasses = function () {
      let classNames =
        "w-full min-h-screen flex flex-col  justify-center items-center ";

      if (this.slice.primary.slice_background_color) {
        let colorName = tailwindMatcher(
          this.slice.primary.slice_background_color
        );
        classNames = classNames + ` bg-${colorName} `;
      }

      return classNames;
    };

    let getTitleClasses = function () {
      let classNames =
        "font-medium	flex justify-center items-center mb-10 text-[32px] text-[47px] ";

      if (this?.slice?.primary?.title_color) {
        let colorName = tailwindMatcher(this.slice.primary.title_color);

        classNames = classNames + ` text-${colorName} `;
      } else {
        classNames = classNames + ` text-[#353C47]`;
      }

      return classNames;
    };

    let getFullNameClasses = function () {
      let classes = "font-medium text-[23px] ";

      if (this?.slice?.primary?.title_color) {
        let colorName = tailwindMatcher(this.slice.primary.title_color);

        classes = classes + ` text-${colorName} `;
      } else {
        let colorName = tailwindMatcher("#353C47");

        classes = classes + ` text-${colorName}`;
      }

      return classes;
    };

    let getTestimonialClasses = function () {
      let classes = "flex-1 text-[16px] text-[#48525F]";

      return classes;
    };

    let numberOfSlides = this.slice?.items?.length ?? 0;
    let mySliderOption = {
      navButtons: false,
      slidesToShow: 1,
      dots: false,
      autoplay: false,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: numberOfSlides > 2 ? 2 : numberOfSlides,
          },
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: numberOfSlides > 3 ? 3 : numberOfSlides,
          },
        },
      ],
    };

    //console.log('Testimonial', this.slice);

    return {
      getContainerClasses,
      getTitleClasses,
      getFullNameClasses,
      getTestimonialClasses,
      mySliderOption,
      currentSlide: 0,
    };
  },
};
</script>

<style scoped>
.slide {
  display: flex !important;
  justify-content: center !important;
}
</style>

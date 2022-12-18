<template>
  <section :class="getContainerClasses()">
    <div :class="getTitleClasses()">
      <h2>{{ slice.primary.title }}</h2>
      <PrismicImage :field="slice.primary.title_image" />
    </div>
    <PrismicRichText
      :class="getDescriptionClasses()"
      :field="slice.primary.description"
    />
    <agile
      v-if="slice?.items?.length > 0"
      @after-change="(e) => (currentSlide = e.currentSlide)"
      class="mt-7 mx-2"
      ref="carousel"
      :options="mySliderOption"
    >
      <div
        v-for="(item, i) in slice.items"
        :key="`slice-item-${i}`"
        class="
          slide
          bg-white
          drop-shadow-lg
          rounded-lg
          h-[161px]
          flex
          items-center
          justify-center
          lg:mr-2
        "
        :style="{ display: 'flex', width: '90%' }"
      >
        <PrismicLink :field="item.url">
          <PrismicImage :field="item.logo" />
        </PrismicLink>
      </div>
    </agile>
    <div
      class="
        w-fit
        mx-auto
        mt-5
        flex
        items-center
        max-w-screen
        justify-between
        gap-5
      "
    >
      <div
        class="
          bg-white
          w-8
          h-8
          drop-shadow-lg
          active:scale-125
          rounded
          flex
          justify-center
          items-center
        "
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
        class="
          bg-white
          w-8
          h-8
          drop-shadow-lg
          active:scale-125
          rounded
          flex
          justify-center
          items-center
        "
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
import { getSliceComponentProps } from '@prismicio/vue/components';
import tailwindMatcher from '~/assets/js/util/hexToName';

export default {
  name: 'ClientsSlider',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),

  data() {
    let getContainerClasses = function () {
      let classes = 'flex flex-col justify-center marker:w-full min-h-screen ';

      if (this.slice.primary.background_color) {
        let colorName = tailwindMatcher(this.slice.primary.background_color);
        classes = classes + ` bg-${colorName}`;
      }

      return classes;
    };

    let getTitleClasses = function () {
      let classes =
        'flex gap-4 items-center mb-4 text-[32px] font-medium	 lg:text-[48px] ';

      if (this.slice.primary.primary_text_color) {
        let colorName = tailwindMatcher(this.slice.primary.primary_text_color);
        classes = classes + ` text-${colorName}`;
      } else {
        let colorName = tailwindMatcher('#353C47');
        classes = classes + ` text-${colorName}`;
      }

      return classes;
    };

    let getDescriptionClasses = function () {
      let classes = 'lg:mb-[72px] text-[20px]';

      if (this.slice.primary.description_text_color) {
        let colorName = tailwindMatcher(
          this.slice.primary.description_text_color
        );
        classes = classes + ` text-${colorName}`;
      } else {
        let colorName = tailwindMatcher('#48525F');
        classes = classes + ` text-${colorName}`;
      }

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
          breakpoint: 768,
          settings: {
            slidesToShow: numberOfSlides > 2 ? 2 : numberOfSlides,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: numberOfSlides > 3 ? 3 : numberOfSlides,
          },
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: numberOfSlides > 4 ? 4 : numberOfSlides,
          },
        },
      ],
    };

    // console.log('currentSlider', this.slice);

    return {
      mySliderOption,
      getContainerClasses,
      getTitleClasses,
      getDescriptionClasses,
      currentSlide: 0,
    };
  },
};
</script>

<style scoped></style>

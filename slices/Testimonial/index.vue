<template>
  <section :class="getContainerClasses()">
    <PrismicRichText :class="getTitleClasses()" :field="slice.primary.title" />
    <div>
      <div class="flex items-center w-full justify-evenly gap-2 md:gap-5">
        <div
          class="bg-white w-8 h-8 active:scale-125 rounded flex justify-center items-center cursor-pointer"
          :style="{
            filter:
              'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
          }"
          @click="$refs.carousel.goToPrev()"
        >
          <svg
            class="errow"
            width="60"
            height="61"
            viewBox="0 0 60 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_dd_101_2640)">
              <g clip-path="url(#clip0_101_2640)">
                <path
                  d="M37.5 15.1836L22.5 30.1836L37.5 45.1836"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_dd_101_2640"
                x="-6"
                y="-1.81641"
                width="72"
                height="72"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="3" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_101_2640"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_101_2640"
                  result="effect2_dropShadow_101_2640"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_101_2640"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_101_2640">
                <rect y="0.183594" width="60" height="60" rx="4" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <agile
          v-if="slice?.items?.length > 0"
          @after-change="(e) => (currentSlide = e.currentSlide)"
          class="max-w-[250px] md:max-w-[600px] lg:max-w-[820px] xl:max-w-[950px] mt-7"
          ref="carousel"
          :options="mySliderOption"
        >
          <div
            v-for="(item, i) in slice.items"
            :key="`slice-item-${i}`"
            class="slide bg-transparent h-full"
          >
            <div
              class="rounded w-full h-full bg-white flex p-6 flex-col justify-between gap-6 max-w-[326px] mx-[25px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10)]"
            >
              <div class="flex">
                <div
                  class="rounded-full w-[56px] h-[56px] overflow-hidden bg-cover bg-center bg-no-repeat mr-[15px]"
                  v-if="Object.keys(item.picture).length"
                  :style="`background-image: url(${item.picture.url})`"
                >
                  <!--<PrismicImage
                    class="rounded-full object-cover w-full h-full"
                    :field="item.picture"
                  />-->
                </div>
                <div class="flex flex-col justify-between">
                  <h6 :class="getFullNameClasses()">
                    {{ item.full_name }}
                  </h6>
                  <p class="text-[#777E85] text-[14px]">
                    {{ item.job_position }}
                  </p>
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
          class="bg-white w-8 h-8 active:scale-125 rounded flex justify-center items-center cursor-pointer"
          :style="{
            filter:
              'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
          }"
          @click="$refs.carousel.goToNext()"
        >
          <svg
            class="errow"
            width="60"
            height="61"
            viewBox="0 0 60 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_dd_101_2641)">
              <g clip-path="url(#clip0_101_2641)">
                <path
                  d="M22.5 45.1836L37.5 30.1836L22.5 15.1836"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_dd_101_2641"
                x="-6"
                y="-1.81641"
                width="72"
                height="72"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="3" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_101_2641"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_101_2641"
                  result="effect2_dropShadow_101_2641"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_101_2641"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_101_2641">
                <rect y="0.183594" width="60" height="60" rx="4" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
    <div
      class="w-fit mx-auto mt-10 flex items-center max-w-screen justify-between gap-5"
    >
      <div class="flex gap-1 items-center mx-auto">
        <div
          :class="`w-4 h-4 rounded-full ${
            currentSlide == i ? 'bg-[#CBD1D6]' : 'bg-[#F2F2F2]'
          } `"
          v-for="(item, i) in slice.items"
          @click="$refs.carousel.goTo(i)"
          :key="`slice-item-${i}`"
        ></div>
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

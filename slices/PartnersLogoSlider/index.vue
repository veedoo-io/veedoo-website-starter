<template>
  <section class="relative w-full h-fit overflow-hidden">
    <button
      class="
        absolute
        h-[60px]
        z-10
        right-[calc(50%_-_80px)]
        md:right-[16px]
        lg:right-[32px]
        bottom-[72px]
        md:top-[calc(50%_-_30px)]
        hover:scale-125
        active:scale-75
      "
      :class="getSliderButtonClass()"
    >
      <div class="" @click="$refs.carousel.goToNext()">
        <svg
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
    </button>
    <button
      class="
        absolute
        h-[60px]
        z-10
        left-[calc(50%_-_80px)]
        md:left-[16px]
        lg:left-[32px]
        bottom-[72px]
        md:top-[calc(50%_-_30px)]
        hover:scale-125
        active:scale-75
      "
      :class="getSliderButtonClass()"
    >
      <div class="" @click="$refs.carousel.goToPrev()">
        <svg
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
    </button>

    <agile
      class="
        pt-[72px]
        pb-[172px]
        md:pb-[72px]
        px-auto
        md:px-[72px]
        bg-white
        w-full
      "
      ref="carousel"
      :options="myOption"
    >
      <div
        v-for="(item, i) in slice.items"
        :key="`slice-item-${i}`"
        class="slide my-6"
      >
        <a
          :href="item?.on_click_url?.url"
          target="_blank"
          :class="{
            [getSlideClass()]: true,
            ['cursor-pointer']: item?.on_click_url?.url,
          }"
        >
          <PrismicImage
            :class="getSlideImageClass()"
            :field="item.partner_logo"
          />
        </a>
      </div>
    </agile>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';

export default {
  name: 'PartnersLogoSlider',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),

  data() {
    //console.log('slice ', this.slice.items);
    let numberOfSlides = this.slice?.items?.length ?? 0;

    //console.log('this.slice?.items', this.slice?.items);
    let myOption = {
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
        {
          breakpoint: 1536,
          settings: {
            slidesToShow: numberOfSlides > 5 ? 5 : numberOfSlides,
          },
        },
      ],
    };

    let getSlideClass = function () {
      let classNames =
        'w-[250px] h-[83px] bg-white mx-auto  flex justify-center items-center';

      if (this.slice.variation == 'partnersLogoSlider2') {
        classNames =
          'w-[250px] h-[111px] rounded bg-white shadow-[0_5px_10px_0px_#D4D4D4] mx-auto flex justify-center items-center';
      }

      return classNames;
    };

    let getSlideImageClass = function () {
      let classNames = 'object-cover';

      if (this.slice.variation == 'partnersLogoSlider2') {
        classNames = 'w-[194px] h-[83px] object-fill';
      }

      return classNames;
    };

    let getSliderButtonClass = function () {
      let classNames = '';

      if (this.slice.variation == 'partnersLogoSlider2') {
        classNames = 'bg-white shadow-[0_5px_10px_0px_#D4D4D4]';
      }

      return classNames;
    };

    return {
      myOption,
      getSlideClass,
      getSliderButtonClass,
      getSlideImageClass,
    };
  },
};
</script>

<style scoped>
.agile {
  width: 100%;
}
</style>

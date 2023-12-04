<template>
  <section
    class="section"
    :style="{ padding: `${marginTop} 24px ${marginBottom} 24px` }"
  >
    <PrismicRichText
      :field="slice.primary.title"
      class="text-center"
      :style="`color: ${slice.primary.text_color}`"
    />
    <PrismicRichText
      :field="slice.primary.description"
      class="text-center"
      :style="`color: ${slice.primary.text_color}`"
    />
    <agile
      class="pt-[72px] pb-[50px] md:pb-[72px] px-auto md:px-[72px] bg-white w-full"
      ref="carousel"
      :options="myOption"
    >
      <div
        v-for="(item, i) in slice.items"
        :key="`slice-item-${i}`"
        class="slide my-6"
      >
        <PrismicImage
          class="object-cover block w-full max-h-[571px] rounded-[10px]"
          :class="
            slice.variation == 'verticalImage'
              ? 'max-w-[446px] mx-auto'
              : 'w-full'
          "
          :field="item.photo"
        />
      </div>
    </agile>
    <div class="flex">
      <button
        @click="$refs.carousel.goToPrev()"
        class="bg-white flex items-center justify-center mx-auto p-3 rounded shadow-[0_5px_10px_0px_#D4D4D4] h-[32px] w-[32px] z-10 hover:scale-125 active:scale-75"
      >
        <div>
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
      </button>
      <button
        @click="$refs.carousel.goToNext()"
        class="flex items-center justify-center mx-auto h-[32px] w-[32px] z-10 hover:scale-125 active:scale-75 bg-white p-3 rounded shadow-[0_5px_10px_0px_#D4D4D4]"
      >
        <div>
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
      </button>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "GallerySlider",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  computed: {
    marginBottom() {
      return `${this.slice.primary.margin_bottom}px`;
    },
    marginTop() {
      return `${this.slice.primary.margin_top}px`;
    },
  },
  data() {
    // Manually calculate the maximum number of dots to show (3 or the number of slides, whichever is smaller)
    let maxDotsToShow = Math.min(3, this.slice?.items?.length || 0);

    //console.log('this.slice?.items', this.slice?.items);
    let myOption = {
      navButtons: false,
      slidesToShow: 1,
      dots: true, // Set the dots option to the calculated maximum
      autoplay: true,
      infinite: true,
    };

    return {
      myOption,
      maxDotsToShow,
    };
  },
};
</script>

<style scoped>
::v-deep .agile__dot {
  background-color: #f2f2f2;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin: 0 5px;
}

::v-deep .agile__dot--current {
  background-color: #cbd1d6;
}

::v-deep .agile {
  width: 100%;
  padding-top: 24px;
  padding-bottom: 24px;
}

.errow {
  width: 32px;
  height: 32px;
}
</style>

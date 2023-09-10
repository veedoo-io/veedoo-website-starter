<template>
  <section
    class="w-full min-h-screen bg-red-300 flex flex-col items-center"
    :style="`background-color:${backgroundColor}`"
  >
    <PrismicRichText
      :style="`color:${textColor}`"
      :field="slice.primary.subtitle"
      class="pt-10 text-[18px] mb-10 font-bold"
    />
    <PrismicRichText
      :style="`color:${textColor}`"
      :field="slice.primary.title"
      class="font-bold text-[43px] mb-10"
    />
    <PrismicRichText
      :style="`color:${textColor}`"
      :field="slice.primary.description"
      class="max-w-[586px] text-[22px] text-center"
    />
    <div class="flex-1 w-full h-full pt-10">
      <div
        v-if="loading && !error"
        class="w-full h-full flex justify-center items-center"
      >
        <div
          class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"
          :style="{ borderTopColor: '#353C47' }"
        ></div>
      </div>
      <div
        v-if="!loading && error"
        class="w-full h-full py-10 flex justify-center items-center"
      >
        <p :style="{ color: '#353C47' }">
          There was an error gettting posts from prismic...
        </p>
      </div>
      <div
        v-if="!loading && !error && posts.length == 0"
        class="w-full h-full py-10 flex justify-center items-center"
      >
        <p :style="{ color: '#353C47' }">We found no blog posts...</p>
      </div>
      <div
        v-if="!loading && !error && posts.length > 0"
        class="w-full h-full flex gap-x-[30px] justify-center items-center relative"
      >
        <div
          class="max-md:hidden absolute bg-white shadow-[0_5px_10px_0px_#D4D4D4] left-0 h-[60px] z-40"
          @click="$refs.carousel.goToPrev()"
        >
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
        <div
          class="max-md:hidden absolute right-0 bg-white shadow-[0_5px_10px_0px_#D4D4D4] h-[60px] z-40"
          @click="$refs.carousel.goToNext()"
        >
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
        <div class="w-full h-full md:px-[50px] flex flex-col">
          <agile class="w-full h-full" ref="carousel" :options="myOption">
            <div
              v-for="(item, i) in posts"
              :key="`posts-item-${i}`"
              class="slide my-2 h-full justify-center px-[20px] rounded overflow-hidden py-10"
            >
              <PrismicLink
                :field="item"
                class="w-full h-full bg-white flex flex-col items-center overflow-hidden rounded-[10px] shadow-[0_5px_10px_0px_#D4D4D4]"
              >
                <PrismicImage
                  class="text-[#353C47] ease-in duration-500 hover:cursor-pointer hover:scale-110 w-full h-fit"
                  :field="item.data.image"
                />
                <div class="px-10 pt-10">
                  <PrismicRichText
                    class="text-[28px] font-medium w-fit"
                    :style="`color: ${slice.primary.primary_color}`"
                    :field="item.data.title"
                  />
                  <span class="text-[13px]">{{
                    item?.data?.description?.length > 145
                      ? item?.data?.description.substring(0, 145) + "..."
                      : item?.data?.description
                  }}</span>
                </div>
              </PrismicLink>
            </div>
          </agile>

          <div class="flex md:hidden justify-center items-center w-full gap-10">
            <div
              class="bg-white shadow-[0_5px_10px_0px_#D4D4D4] left-0 h-[60px] z-40"
              @click="$refs.carousel.goToPrev()"
            >
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
                    <rect
                      y="0.183594"
                      width="60"
                      height="60"
                      rx="4"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div
              class="right-0 bg-white shadow-[0_5px_10px_0px_#D4D4D4] h-[60px] z-40"
              @click="$refs.carousel.goToNext()"
            >
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
                    <rect
                      y="0.183594"
                      width="60"
                      height="60"
                      rx="4"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "PostCarousel",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  data() {
    let textColor = this.slice.primary.text_color
      ? this.slice.primary.text_color
      : "#353C47";

    let backgroundColor = this.slice.primary.background_color
      ? this.slice.primary.background_color
      : "transparent";

    let myOption = {
      navButtons: false,
      slidesToShow: 1,
      dots: false,
      autoplay: false,
      infinite: true,
    };

    return {
      textColor,
      backgroundColor,
      posts: [],
      error: false,
      loading: true,
      myOption,
    };
  },
  async fetch() {
    try {
      let request = await this.$prismic.api.query(
        this.$prismic.predicates.at("document.type", "blog_post"),
        {
          pageSize: 1000,
          orderings: "[document.first_publication_date desc]",
          fetchLinks: [
            "author.uid",
            "author.picture",
            "author.full_name",
            "author.job",
            "author.description",
            "author.facebook_url",
            "author.instagram_url",
            "author.twitter_url",
            "author.linkedin_url",
            "tag.uid",
            "tag.tag",
            "tag_2.uid",
            "tag_2.tag",
            "tag_3.uid",
            "tag_3.tag",
            "category.uid",
            "category.title",
            "category.description",
          ],
        }
      );
      let posts = request?.results ?? [];
      this.posts = posts;
      let numberOfSlides = posts.length;
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
              slidesToShow: numberOfSlides > 3 ? 3 : numberOfSlides,
            },
          },
          {
            breakpoint: 1536,
            settings: {
              slidesToShow: numberOfSlides > 4 ? 4 : numberOfSlides,
            },
          },
        ],
      };
      this.myOption = myOption;

      //console.log('this.posts ', this.posts);
    } catch (error) {
      this.error = true;
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped></style>

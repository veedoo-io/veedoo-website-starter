<template>
  <section
    class="w-full mx-auto max-w-[700px] h-fit min-h-[376px] flex flex-col justify-center"
  >
    <div
      v-if="loading && !error"
      class="w-full h-fit flex justify-center items-center"
    >
      <div
        class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"
        :style="{ borderTopColor: '#353C47' }"
      ></div>
    </div>
    <div
      v-if="!loading && error"
      class="w-full h-fit py-10 flex justify-center items-center"
    >
      <p :style="{ color: '#353C47' }">
        There was an error gettting posts from prismic...
      </p>
    </div>
    <div
      v-if="!loading && !error && posts.length == 0"
      class="w-full h-fit py-10 flex justify-center items-center"
    >
      <p :style="{ color: '#353C47' }">We found no blog posts...</p>
    </div>
    <div
      v-if="!loading && !error && posts.length > 0"
      class="w-full h-full flex gap-x-[30px] justify-center items-center relative"
    >
      <div
        class="absolute left-0 h-[60px] z-40 cursor-pointer"
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

      <agile class="w-full" ref="carousel" :options="myOption">
        <div
          v-for="(item, i) in posts"
          :key="`posts-item-${i}`"
          class="slide my-6 justify-center px-[60px]"
        >
          <div class="w-full h-full flex flex-col items-center">
            <PrismicRichText
              class="text-[28px] font-medium w-fit"
              :style="{ color: primaryColor }"
              :field="item.data.title"
            />
            <div
              class="flex gap-x-[16px] text-[14px] mb-[32px]"
              :style="{ color: secondaryColor }"
            >
              <p v-if="item?.data?.author?.data?.full_name">
                by {{ item?.data?.author?.data?.full_name }}
              </p>
              <p v-if="item?.first_publication_date">
                {{
                  new Date(item?.first_publication_date).toLocaleDateString(
                    "en-US",
                    { year: "numeric", month: "long", day: "numeric" }
                  )
                }}
              </p>
              <p v-if="item?.data?.category?.data?.title">
                {{ item?.data?.category?.data?.title }}
              </p>
            </div>
            <p
              class="max-w-[500px] text-[16px] text-center mb-[32px]"
              :style="{ color: primaryColor }"
            >
              {{ item.data.description }}
            </p>
            <PrismicLink
              :field="item"
              class="w-fit min-w-[129px] text-center rounded-[4px] py-2.5 px-5"
              :style="{ backgroundColor: buttonColor, color: buttonTextColor }"
            >
              {{ ReadMoreText }}
            </PrismicLink>
          </div>
        </div>
      </agile>
      <div
        class="absolute right-0 h-[60px] z-40 cursor-pointer"
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
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "PostSlider",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  data() {
    let primaryColor = this.slice.primary.primary_color
      ? this.slice.primary.primary_color
      : "#353C47";

    let secondaryColor = this.slice.primary.secondary_color
      ? this.slice.primary.secondary_color
      : "#F2776B";

    let ReadMoreText = this.slice.primary.read_more_text
      ? this.slice.primary.read_more_text
      : "Read more";

    let buttonColor = this.slice.primary.button_color
      ? this.slice.primary.button_color
      : "#F2776B";

    let buttonTextColor = this.slice.primary.button_text_color
      ? this.slice.primary.button_text_color
      : "#F1F1F1";

    let myOption = {
      navButtons: false,
      slidesToShow: 1,
      dots: false,
      autoplay: false,
      infinite: true,
    };

    return {
      primaryColor,
      secondaryColor,
      ReadMoreText,
      posts: [],
      visiblePost: 0,
      error: false,
      loading: true,
      myOption,
      buttonColor,
      buttonTextColor,
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
            "post_category.uid",
            "post_category.title",
            "post_category.description",
            "author.uid",
            "author.picture",
            "author.full_name",
            "author.job",
            "author.description",
            "author.facebook_url",
            "author.instagram_url",
            "author.twitter_url",
            "author.linkedin_url",
            "post_tag.uid",
            "post_tag.tag",
          ],
        }
      );

      let posts = request?.results ?? [];
      this.posts = posts;
    } catch (error) {
      // console.log("error ", error);
      this.error = true;
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped></style>

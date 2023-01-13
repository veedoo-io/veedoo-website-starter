<template>
  <section
    class="w-full h-fit flex flex-col justify-center"
    :style="{
      backgroundColor: backgroundColor,
    }"
  >
    <div
      v-if="loading && !error"
      class="w-full h-fit py-10 flex justify-center items-center"
    >
      <div
        class="
          loader
          ease-linear
          rounded-full
          border-4 border-t-4 border-gray-200
          h-12
          w-12
          mb-4
        "
        :style="{ borderTopColor: textColor }"
      ></div>
    </div>
    <div
      v-if="!loading && error"
      class="w-full h-fit py-10 flex justify-center items-center"
    >
      <p :style="{ color: textColor }">
        There was an error gettting posts from prismic...
      </p>
    </div>
    <div
      v-if="!loading && !error && posts.length == 0"
      class="w-full h-fit py-10 flex justify-center items-center"
    >
      <p :style="{ color: textColor }">We found no blog posts...</p>
    </div>
    <div
      v-if="!loading && !error && posts.length > 0"
      class="w-full h-fit py-10 flex flex-col justify-center items-center"
    >
      <div
        class="
          w-full
          max-sm:bg-red-300
          py-10
          flex flex-wrap
          gap-x-[72px] gap-y-[72px]
        "
      >
        <div
          class="
            max-sm:flex-[0_0_99%]
            md:flex-[0_0_45%]
            lg:flex-[0_0_30%]
            max-sm:w-[80vw]
            mx-auto
            bg-white
            rounded-xl
            shadow-xl
            flex flex-col
          "
          v-for="(item, i) in posts?.slice(
            page * numberOfItemPerPage,
            page * numberOfItemPerPage + numberOfItemPerPage
          )"
          :key="`post-item-${i}`"
        >
          <PrismicLink class="w-full" :field="item">
            <PrismicImage
              class="text-[#353C47] w-full h-[273px]"
              :field="item.data.image"
            />
            <div class="p-2 flex-1">
              <PrismicRichText
                class="text-[19px]"
                :style="{ color: textColor }"
                :field="item.data.title"
              />
              <span
                class="text-[13px]"
                :style="{ color: secondaryTextColor }"
                >{{
                  item?.data?.description?.length > 145
                    ? item?.data?.description.substring(0, 145) + '...'
                    : item?.data?.description
                }}</span
              >
            </div>
          </PrismicLink>
        </div>
      </div>
      <div class="flex">
        <div class="w-6 h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div>
          <span
            v-for="(item, i) in getPaginationPages"
            :key="`pageNumber-item-${i}`"
            class=""
            >{{ item }}</span
          >
        </div>
        <div class="w-6 h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
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
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';
import tailwindMatcher from '~/assets/js/util/hexToName';

export default {
  name: 'PostListing',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  data() {
    let getContainerClasses = function () {
      let classes = '';

      return classes;
    };

    let textColor = this.slice.primary.text_color
      ? this.slice.primary.text_color
      : '#353C47';
    let secondaryTextColor = this.slice.primary.secondary_text_color
      ? this.slice.primary.secondary_text_color
      : '#777E85';

    let backgroundColor = this.slice.primary.background_color
      ? this.slice.primary.background_color
      : 'transparent';

    return {
      getContainerClasses,
      posts: [],
      error: false,
      loading: true,
      textColor,
      secondaryTextColor,
      backgroundColor,
      page: 0,
      numberOfItemPerPage: 6,
    };
  },
  async fetch() {
    try {
      let request = await this.$prismic.api.query(
        this.$prismic.predicates.at('document.type', 'blog_post'),
        {
          pageSize: 100,
          orderings: '[document.first_publication_date desc]',
        }
      );
      let posts = request?.results ?? [];
      this.posts = posts;
      console.log('this.posts ', this.posts);
    } catch (error) {
      console.log('error ', error);
      this.error = true;
    } finally {
      this.loading = false;
    }
  },
  computed: {
    getPaginationPages: function () {
      let pageNumbers = [];
      let p = 1;
      for (let i = 0; i < this.posts?.length; i = i + 6) {
        pageNumbers.push(p);
        p = p + 1;
      }

      return pageNumbers;
    },
  },
};
</script>

<style scoped></style>

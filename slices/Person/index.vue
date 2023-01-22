<template>
  <section
    class="w-full flex my-2.5"
    :style="`background-color: ${sliceBg}; margin:${marginTop} ${marginRight} ${marginBottom} ${marginLeft};`"
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
        :style="{ borderTopColor: nameColor }"
      ></div>
    </div>
    <div
      v-if="!loading && error"
      class="w-full h-fit py-10 flex justify-center items-center"
    >
      <p :style="{ color: nameColor }">
        There was an error gettting The Person from prismic...
      </p>
    </div>
    <div
      v-if="!loading && !error && persons.length == 0"
      class="w-full h-fit py-10 flex justify-center items-center"
    >
      <p :style="{ color: textColor }">We found no person...</p>
    </div>
    <div
      v-if="!loading && !error && persons.length > 0"
      class="
        w-full
        flex flex-wrap
        gap-[36px]
        justify-start
        items-stretch
        h-full
        py-2.5

      "
    >
      <div
        :class="`flex-[0_0_100%]
           ${
             persons.length > 1
               ? 'max-w-[643px]  max-[1530px]:max-w-none	 '
               : 'w-full'
           }
          p-6
          flex
          flex-col
          sm:flex-row
          gap-6
          rounded-[10px]`"
        v-for="(person, i) in persons"
        :key="`persons-item-${i}`"
        :style="{
          backgroundColor: cardBg,
          filter:
            'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
        }"
      >
        <div class="w-[160px] h-full flex items-start">
          <PrismicImage
            class="w-[160px] h-fit rounded"
            :field="person.data.picture"
          />
        </div>
        <div class="flex-1 h-full flex flex-col">
          <p
            class="font-medium text-[23px] mb-0.5"
            :style="{
              color: nameColor,
            }"
          >
            {{ person.data.full_name }}
          </p>
          <p
            class="text-[13px]"
            :style="{
              color: jobColor,
            }"
          >
            {{ person.data.job }}
          </p>
          <PrismicRichText
            class="mt-4 flex-1"
            :style="{ color: descriptionColor }"
            :field="person.data.description"
          />
          <div class="mt-4 flex items-center gap-[13px]">
            <PrismicLink
              class="hover:cursor-pointer active:scale-105"
              :field="person.data.facebook_url"
            >
              <svg
                width="37"
                height="37"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_872_629)">
                  <path
                    d="M7.0625 9.875V13.625H9.875V20.1875H13.625V13.625H16.4375L17.375 9.875H13.625V8C13.625 7.75136 13.7238 7.5129 13.8996 7.33709C14.0754 7.16127 14.3139 7.0625 14.5625 7.0625H17.375V3.3125H14.5625C13.3193 3.3125 12.127 3.80636 11.2479 4.68544C10.3689 5.56451 9.875 6.7568 9.875 8V9.875H7.0625Z"
                    :stroke="socialIconColor"
                    stroke-width="1.875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </PrismicLink>
            <PrismicLink
              class="hover:cursor-pointer active:scale-105"
              :field="person.data.instagram_url"
            >
              <svg
                width="37"
                height="37"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_872_633)">
                  <path
                    d="M15.5 4.25H8C5.92893 4.25 4.25 5.92893 4.25 8V15.5C4.25 17.5711 5.92893 19.25 8 19.25H15.5C17.5711 19.25 19.25 17.5711 19.25 15.5V8C19.25 5.92893 17.5711 4.25 15.5 4.25Z"
                    :stroke="socialIconColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.75 14.5625C13.3033 14.5625 14.5625 13.3033 14.5625 11.75C14.5625 10.1967 13.3033 8.9375 11.75 8.9375C10.1967 8.9375 8.9375 10.1967 8.9375 11.75C8.9375 13.3033 10.1967 14.5625 11.75 14.5625Z"
                    :stroke="socialIconColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.9688 7.53125V7.53225"
                    :stroke="socialIconColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </PrismicLink>
            <PrismicLink
              class="hover:cursor-pointer active:scale-105"
              :field="person.data.twitter_url"
            >
              <svg
                width="37"
                height="37"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_872_639)">
                  <path
                    d="M21.125 4.25945C20.1875 4.71882 19.2687 4.90539 18.3125 5.18757C17.2616 4.00164 15.7034 3.93601 14.2062 4.49664C12.7091 5.05726 11.7284 6.42789 11.75 8.00007V8.93757C8.70781 9.01539 5.99844 7.62976 4.25 5.18757C4.25 5.18757 0.329375 12.156 8 15.5001C6.245 16.6691 4.49469 17.4576 2.375 17.3751C5.47625 19.0654 8.85594 19.6466 11.7819 18.7973C15.1381 17.8223 17.8962 15.3069 18.9547 11.5391C19.2704 10.3932 19.4272 9.20932 19.4206 8.0207C19.4187 7.78726 20.8363 5.42195 21.125 4.25851V4.25945Z"
                    :stroke="socialIconColor"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </PrismicLink>
            <PrismicLink
              class="hover:cursor-pointer active:scale-105"
              :field="person.data.linkedin_url"
            >
              <svg
                width="37"
                height="37"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_872_643)">
                  <path
                    d="M17.375 4.25H6.125C5.08947 4.25 4.25 5.08947 4.25 6.125V17.375C4.25 18.4105 5.08947 19.25 6.125 19.25H17.375C18.4105 19.25 19.25 18.4105 19.25 17.375V6.125C19.25 5.08947 18.4105 4.25 17.375 4.25Z"
                    :stroke="socialIconColor"
                    stroke-width="1.875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 10.8125V15.5"
                    :stroke="socialIconColor"
                    stroke-width="1.875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 8V8.00938"
                    :stroke="socialIconColor"
                    stroke-width="1.875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.75 15.5V10.8125"
                    :stroke="socialIconColor"
                    stroke-width="1.875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.5 15.5V12.6875C15.5 12.1902 15.3025 11.7133 14.9508 11.3617C14.5992 11.01 14.1223 10.8125 13.625 10.8125C13.1277 10.8125 12.6508 11.01 12.2992 11.3617C11.9475 11.7133 11.75 12.1902 11.75 12.6875"
                    :stroke="socialIconColor"
                    stroke-width="1.875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </PrismicLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components';

export default {
  name: 'Person',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  data() {
    let marginTop =
      this.slice.primary.margin_top && this.slice.primary.margin_top >= 0
        ? this.slice.primary.margin_top + 'px'
        : '0px';

    let marginBottom =
      this.slice.primary.margin_bottom && this.slice.primary.margin_bottom >= 0
        ? this.slice.primary.margin_bottom + 'px'
        : '0px';

    let marginLeft =
      this.slice.primary.margin_left && this.slice.primary.margin_left >= 0
        ? this.slice.primary.margin_left + 'px'
        : '0px';

    let marginRight =
      this.slice.primary.margin_right && this.slice.primary.margin_right >= 0
        ? this.slice.primary.margin_right + 'px'
        : '0px';

    let socialIconColor = this.slice.primary.social_icons_color
      ? this.slice.primary.social_icons_color
      : '#48525F';

    let descriptionColor = this.slice.primary.description_text_color
      ? this.slice.primary.description_text_color
      : '#3C3C43';

    let jobColor = this.slice.primary.job_text_color
      ? this.slice.primary.job_text_color
      : '#666666';

    let nameColor = this.slice.primary.name_text_color
      ? this.slice.primary.name_text_color
      : '#000000';

    let cardBg = this.slice.primary.card_backgroundcolor
      ? this.slice.primary.card_backgroundcolor
      : '#FFFFFF';

    let sliceBg = this.slice.primary.background_color
      ? this.slice.primary.background_color
      : 'transparent';

    let uids =
      this.slice.items?.length > 0
        ? this.slice.items.map((item) => item?.person?.uid)
        : [];

    return {
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      socialIconColor,
      descriptionColor,
      jobColor,
      nameColor,
      cardBg,
      sliceBg,
      uids,
      error: false,
      loading: true,
      persons: [],
    };
  },
  async fetch() {
    try {
      //console.log('uids ', this.persons);
      if (this.uids?.length > 0) {
        //console.log('got in ', this.persons);
        let prismic = this.$prismic.api;
        let promises = this.uids?.map((uid) => prismic.getByUID('author', uid));
        let persons = await Promise.all(promises);
        this.persons = persons;

        console.log('personsDoc ', persons);
      }
    } catch (error) {
      console.log('error ', error);
      this.error = true;
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped></style>

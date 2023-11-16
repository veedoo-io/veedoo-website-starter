<template>
  <section
    class="w-full flex"
    :style="`background-color: ${sliceBg}; padding:${marginTop} 24px ${marginBottom};`"
  >
    <div
      v-if="loading && !error"
      class="w-full h-fit py-10 flex justify-center items-center"
    >
      <div
        class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"
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
      class="w-full flex flex-wrap flex-col lg:flex-row gap-[36px] justify-center h-full py-2.5 px-6 items-center"
    >
      <div
        :class="`lg:flex-[0_0_50%] flex-[0_0_100%]     
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
        <div
          class="w-[160px] h-full flex items-start self-center sm:self-start"
        >
          <PrismicImage
            class="w-[160px] h-[160px] object-cover"
            :field="person.data.picture"
            v-if="Object.keys(person.data.picture).length"
          />
        </div>
        <div class="flex-1 h-full flex flex-col">
          <p
            class="font-medium text-[23px] mb-0.5 self-center sm:self-start"
            :style="{
              color: nameColor,
            }"
          >
            {{ person.data.full_name }}
          </p>
          <p
            class="text-[13px] self-center sm:self-start"
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
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_872_639)">
                  <rect
                    x="0.572266"
                    width="38.5714"
                    height="40"
                    rx="5"
                    fill="none"
                  />
                  <path
                    d="M20.4752 18.4577L20.5435 18.4099L20.4752 18.4577L21.2494 19.5649L27.4359 28.4139C27.5131 28.5244 27.4341 28.6761 27.2993 28.6761H25.2576C25.2031 28.6761 25.1521 28.6495 25.121 28.6049L19.9228 21.1696L19.8574 21.2153L19.9228 21.1695L19.1487 20.0623L13.2641 11.6452C13.1869 11.5347 13.2659 11.383 13.4007 11.383H15.4425C15.4969 11.383 15.5479 11.4096 15.5791 11.4542L20.4752 18.4577ZM22.408 18.377L29.2126 10.4674C29.3985 10.2513 29.245 9.91667 28.9599 9.91667H27.893C27.7959 9.91667 27.7037 9.959 27.6403 10.0326L21.6009 17.0528C21.5296 17.1356 21.3991 17.1286 21.3372 17.0384L16.543 10.0612C16.4808 9.97073 16.378 9.91667 16.2682 9.91667H11.0474C10.779 9.91667 10.6207 10.2176 10.7727 10.4388L18.035 21.0078C18.0778 21.0702 18.0733 21.1536 18.024 21.2109L10.8645 29.5326C10.6785 29.7487 10.8321 30.0833 11.1171 30.0833H12.1841C12.2812 30.0833 12.3735 30.041 12.4368 29.9674L18.8307 22.5352C18.902 22.4523 19.0324 22.4594 19.0944 22.5495L24.1719 29.9388C24.2341 30.0293 24.3368 30.0833 24.4466 30.0833H29.6675C29.9358 30.0833 30.0942 29.7824 29.9422 29.5612L22.397 18.5801C22.3541 18.5178 22.3587 18.4344 22.408 18.377Z"
                    :fill="socialIconColor"
                    :stroke="socialIconColor"
                    stroke-width="0.4"
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
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "Person",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  data() {
    let marginTop =
      this.slice.primary.margin_top && this.slice.primary.margin_top >= 0
        ? this.slice.primary.margin_top + "px"
        : "0px";

    let marginBottom =
      this.slice.primary.margin_bottom && this.slice.primary.margin_bottom >= 0
        ? this.slice.primary.margin_bottom + "px"
        : "0px";

    let socialIconColor = this.slice.primary.social_icons_color
      ? this.slice.primary.social_icons_color
      : "#48525F";

    let descriptionColor = this.slice.primary.description_text_color
      ? this.slice.primary.description_text_color
      : "#3C3C43";

    let jobColor = this.slice.primary.job_text_color
      ? this.slice.primary.job_text_color
      : "#666666";

    let nameColor = this.slice.primary.name_text_color
      ? this.slice.primary.name_text_color
      : "#000000";

    let cardBg = this.slice.primary.card_backgroundcolor
      ? this.slice.primary.card_backgroundcolor
      : "#FFFFFF";

    let sliceBg = this.slice.primary.background_color
      ? this.slice.primary.background_color
      : "transparent";

    let uids =
      this.slice.items?.length > 0
        ? this.slice.items.map((item) => item?.person?.uid)
        : [];

    return {
      marginTop,
      marginBottom,
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
      if (this.uids?.length > 0) {
        let prismic = this.$prismic.api;
        let promises = this.uids?.map((uid) => prismic.getByUID("author", uid));
        let persons = await Promise.all(promises);
        this.persons = persons;
      }
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

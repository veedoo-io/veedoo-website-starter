<template>
  <header :class="getContainerClasses()">
    <NuxtLink to="/">
      <PrismicImage class="h-10" :field="slice.primary.logo" />
    </NuxtLink>
    <div :class="getMenuContainerClasses()">
      <PrismicLink
        class="hidden sm:flex"
        :field="slice.primary.main_link_url"
        >{{ slice.primary.main_link_text }}</PrismicLink
      >

      <div
        @click="toggleMobileMenu"
        class="cursor-pointer flex gap-4 items-center"
      >
        <span v-if="slice.primary.menu_label">{{
          slice.primary.menu_label
        }}</span>

        <div v-if="!isMenuOpen">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 20H35"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 10H35"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 30H35"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div v-else>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.39355 28.4264L30.6068 7.21319"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.39355 7L30.6068 28.2132"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 33.6066H35"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
    <div
      v-show="isMenuOpen"
      @click="toggleMobileMenu"
      class="fixed z-50 top-20 left-0 h-full w-full bg-[#353C47]/60 flex justify-end"
    >
      <div :class="getMenuClasses()">
        <div class="flex gap-9 w-full h-fit justify-between">
          <div class="flex-1">
            <p class="text-[#B3B3B3] pb-3 text-sm">Menu</p>
            <div>
              <div
                @click="toggleMobileMenu"
                class="text-[#353C47] text-xl py-3 hover:underline"
                v-for="(item, i) in menuItems"
                :key="`slice-item-${i}`"
              >
                <PrismicLink :field="item.menu_link">{{
                  item.menu_text
                }}</PrismicLink>
              </div>
            </div>
          </div>
          <div class="border-r-2 border-[#DFE4E7] w-px"></div>
          <div class="flex-1">
            <p class="text-[#B3B3B3] pb-2 text-sm">Contacts</p>
            <div class="pb-[42px]">
              <div
                @click="toggleMobileMenu"
                class="text-[#353C47] text-sm py-3 hover:underline"
                v-for="(item, i) in contactsItems"
                :key="`slice-item-${i}`"
              >
                <PrismicLink :field="item.menu_link">{{
                  item.menu_text
                }}</PrismicLink>
              </div>
            </div>
            <p class="text-[#B3B3B3] pb-2 text-sm">Get in touch!</p>
            <div class="">
              <div
                @click="toggleMobileMenu"
                class="text-[#353C47] text-sm py-3 hover:underline"
                v-for="(item, i) in getInTouchItems"
                :key="`slice-item-${i}`"
              >
                <PrismicLink :field="item.menu_link">{{
                  item.menu_text
                }}</PrismicLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";
import tailwindMatcher from "hex2tailwind";

export default {
  name: "HeaderVeedoo",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  data() {
    //console.log('header ', this.slice);
    let getContainerClasses = function () {
      let classes =
        "fixed left-0 z-50 top-0 h-20 w-full flex justify-between items-center px-1 lg:px-8 ";
      if (this?.slice?.primary?.background_color) {
        let colorName = tailwindMatcher(this?.slice?.primary?.background_color);
        //console.log('colorName ', colorName);
        classes = classes + ` bg-${colorName} `;
      } else {
        classes = classes + ` bg-[#FFFFFF] `;
      }
      return classes;
    };

    let getMenuContainerClasses = function () {
      let classes = "flex gap-10 items-center ";
      if (this?.slice?.primary?.text_color) {
        let colorName = tailwindMatcher(this?.slice?.primary?.text_color);
        //console.log('colorName ', colorName);
        classes = classes + ` text-${colorName} `;
      } else {
        classes = classes + ` text-[#353C47] `;
      }
      return classes;
    };

    let getMenuClasses = function () {
      let classes = "max-w-[530px] w-screen h-full p-5 ";

      if (this?.slice?.primary?.background_color) {
        let colorName = tailwindMatcher(this?.slice?.primary?.background_color);
        //console.log('colorName ', colorName);
        classes = classes + ` bg-${colorName} `;
      } else {
        classes = classes + ` bg-[#FFFFFF] `;
      }

      return classes;
    };

    // console.log(this.slice.items);

    let menuItems = this?.slice?.items.filter(
      (item) => item.menu_item_type === "Menu"
    );
    let contactsItems = this?.slice?.items.filter(
      (item) => item.menu_item_type === "Contacts"
    );
    let getInTouchItems = this?.slice?.items.filter(
      (item) => item.menu_item_type === "Get in touch!"
    );

    return {
      getContainerClasses,
      getMenuContainerClasses,
      getMenuClasses,
      isMenuOpen: false,
      menuItems,
      contactsItems,
      getInTouchItems,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped></style>

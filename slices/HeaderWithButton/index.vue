<template>
  <section
    class="section p-6 flex items-center fixed left-0 right-0 md:relative z-20 md:z-0"
    :style="`background: ${slice.primary.background_color}`"
  >
    <NuxtLink to="/">
      <PrismicImage class="h-10" :field="slice.primary.logo" />
    </NuxtLink>
    <!--desktop menu-->
    <div class="md:flex items-center ml-auto hidden">
      <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
        <PrismicLink
          :field="item.menu_link"
          class="px-3 text-[16px]"
          :style="`color: ${slice.primary.text_color}`"
          >{{ item.menu_item }}</PrismicLink
        >
      </div>
      <PrismicLink
        :style="[
          { color: `${slice.primary.button_text_color || '#FFFFFF'}` },
          { background: `${slice.primary.button_color || '#F2776B'}` },
        ]"
        :field="slice.primary.button_link"
        class="ml-7 py-3 px-8 rounded-[5px]"
      >
        {{ slice.primary.button_text }}
      </PrismicLink>
    </div>
    <!--mobile menu-->
    <div
      @click.prevent="toggleMobileMenu"
      class="cursor-pointer md:hidden block ml-auto"
    >
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
        <div
          @click.prevent="toggleMobileMenu"
          class="fixed z-50 top-20 left-0 h-full w-full"
          :style="`background: ${slice.primary.background_color}`"
        >
          <div class="my-7">
            <div
              class="text-xl py-3 ml-7 flex"
              v-for="(item, i) in slice.items"
              :key="`slice-item-m-${i}`"
            >
              <PrismicImage
                :field="item.icon"
                class="w-6 h-6 mr-4"
                v-if="Object.keys(item.icon).length"
              />
              <PrismicLink
                class="text-[16px] font-semibold"
                :field="item.menu_link"
                :style="`color: ${slice.primary.text_color}`"
                >{{ item.menu_item }}</PrismicLink
              >
            </div>
          </div>
          <PrismicLink
            :style="[
              { color: `${slice.primary.button_text_color || '#FFFFFF'}` },
              { background: `${slice.primary.button_color || '#F2776B'}` },
            ]"
            :field="slice.primary.button_link"
            class="ml-7 py-3 px-6 rounded-[5px]"
          >
            {{ slice.primary.button_text }}
          </PrismicLink>
        </div>
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
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "HeaderWithContactButton",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
</style>

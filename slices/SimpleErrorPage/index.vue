<template>
  <section
    class="w-full min-h-screen flex flex-col items-center justify-center"
    :style="{
      backgroundColor: backgroundColor,
    }"
  >
    <p
      :style="{
        color: errorCodeColor,
      }"
      class="text-5xl lg:text-[96px] mb-6 font-bold"
    >
      500
    </p>
    <PrismicRichText
      :style="{
        color: errorTitleColor,
      }"
      class="text-3xl lg:text-[36px] mb-6 font-medium flex items-center"
      :field="slice.primary.error_title"
    />
    <PrismicRichText
      :style="{
        color: messageColor,
      }"
      class="max-w-[500px] text-center"
      :field="slice.primary.message"
    />
    <NuxtLink
      class="mt-12 py-2.5 px-4 text-center rounded-[5px]"
      :style="{
        color: buttonTextColor,
        backgroundColor: buttonBackgroundColor,
      }"
      to="/"
    >
      <span v-if="hasGoHomeText">{{ slice.primary.go_home_button_text }}</span>
      <span v-else>Go Home</span>
    </NuxtLink>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SimpleErrorPage",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  data() {
    //console.log('this ', this);
    // console.log('errorCode ', errorCode);

    let errorCodeColor = this.slice.primary.error_code_color
      ? this.slice.primary.error_code_color
      : "#000000";

    let errorTitleColor = this.slice.primary.title_color
      ? this.slice.primary.title_color
      : "rgba(0, 0, 0, 0.5)";

    let messageColor = this.slice.primary.message_text_color
      ? this.slice.primary.message_text_color
      : "rgba(0, 0, 0, 0.8)";

    let backgroundColor = this.slice.primary.background_color
      ? this.slice.primary.background_color
      : "transparent";

    let hasGoHomeText =
      this.slice.primary.go_home_button_text &&
      this.slice.primary.go_home_button_text != "";

    let buttonTextColor = this.slice.primary.go_home_button_text_color
      ? this.slice.primary.go_home_button_text_color
      : "#FFFFFF";

    let buttonBackgroundColor = this.slice.primary
      .go_home_button_background_color
      ? this.slice.primary.go_home_button_background_color
      : "#2F80ED";

    return {
      errorCodeColor,
      errorTitleColor,
      messageColor,
      backgroundColor,
      hasGoHomeText,
      buttonTextColor,
      buttonBackgroundColor,
    };
  },
};
</script>

<style scoped></style>

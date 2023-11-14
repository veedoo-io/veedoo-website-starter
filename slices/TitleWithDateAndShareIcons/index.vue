<template>
  <section
    class="w-full h-fit flex flex-col"
    :style="`padding:${marginTop} 24px ${marginBottom}; background-color:${backgroundColor}`"
  >
    <div class="w-full h-fit font-medium">
      <PrismicRichText
        :style="`color:${textColor}`"
        :field="slice.primary.title"
        :class="` flex items-center gap-2 ${aligment}`"
      />
      <div
        class="w-full h-fit mt-5 flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-2"
      >
        <p
          class="text-[16px]"
          :style="`color:${textColor}; `"
          v-if="slice.primary.date"
        >
          {{
            new Date(slice.primary.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }}
        </p>
        <div class="flex items-center gap-2.5">
          <div
            @click="onFacebookShare()"
            class="hover:cursor-pointer active:scale-105"
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="25"
                height="25"
                rx="12.5"
                :fill="shareIconBackgroundColor"
              />
              <g clip-path="url(#clip0_842_55)">
                <path
                  d="M9.375 11.25V13.75H11.25V18.125H13.75V13.75H15.625L16.25 11.25H13.75V10C13.75 9.83424 13.8158 9.67527 13.9331 9.55806C14.0503 9.44085 14.2092 9.375 14.375 9.375H16.25V6.875H14.375C13.5462 6.875 12.7513 7.20424 12.1653 7.79029C11.5792 8.37634 11.25 9.1712 11.25 10V11.25H9.375Z"
                  :stroke="shareIconColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_842_55">
                  <rect
                    x="5"
                    y="5"
                    width="15"
                    height="15"
                    rx="1.25"
                    :fill="shareIconColor"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div
            @click="onTwitterShare()"
            class="hover:cursor-pointer active:scale-105"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="40"
                height="40"
                rx="25"
                :fill="shareIconBackgroundColor"
              />
              <path
                d="M20.4752 18.4577L20.5435 18.4099L20.4752 18.4577L21.2494 19.5649L27.4359 28.4139C27.5131 28.5244 27.4341 28.6761 27.2993 28.6761H25.2576C25.2031 28.6761 25.1521 28.6495 25.121 28.6049L19.9228 21.1696L19.8574 21.2153L19.9228 21.1695L19.1487 20.0623L13.2641 11.6452C13.1869 11.5347 13.2659 11.383 13.4007 11.383H15.4425C15.4969 11.383 15.5479 11.4096 15.5791 11.4542L20.4752 18.4577ZM22.408 18.377L29.2126 10.4674C29.3985 10.2513 29.245 9.91667 28.9599 9.91667H27.893C27.7959 9.91667 27.7037 9.959 27.6403 10.0326L21.6009 17.0528C21.5296 17.1356 21.3991 17.1286 21.3372 17.0384L16.543 10.0612C16.4808 9.97073 16.378 9.91667 16.2682 9.91667H11.0474C10.779 9.91667 10.6207 10.2176 10.7727 10.4388L18.035 21.0078C18.0778 21.0702 18.0733 21.1536 18.024 21.2109L10.8645 29.5326C10.6785 29.7487 10.8321 30.0833 11.1171 30.0833H12.1841C12.2812 30.0833 12.3735 30.041 12.4368 29.9674L18.8307 22.5352C18.902 22.4523 19.0324 22.4594 19.0944 22.5495L24.1719 29.9388C24.2341 30.0293 24.3368 30.0833 24.4466 30.0833H29.6675C29.9358 30.0833 30.0942 29.7824 29.9422 29.5612L22.397 18.5801C22.3541 18.5178 22.3587 18.4344 22.408 18.377Z"
                :stroke="shareIconColor"
                stroke-width="0.166668"
                :fill="shareIconColor"
              />

              <defs>
                <clipPath id="clip0_842_65">
                  <rect
                    x="5"
                    y="5"
                    width="15"
                    height="15"
                    rx="1.16667"
                    :fill="shareIconColor"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div
            @click="onLinkdinShare()"
            class="hover:cursor-pointer active:scale-105"
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="25"
                height="25"
                rx="12.5"
                :fill="shareIconBackgroundColor"
              />
              <g clip-path="url(#clip0_842_69)">
                <path
                  d="M16.25 7.5H8.75C8.05964 7.5 7.5 8.05964 7.5 8.75V16.25C7.5 16.9404 8.05964 17.5 8.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V8.75C17.5 8.05964 16.9404 7.5 16.25 7.5Z"
                  :stroke="shareIconColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 11.875V15"
                  :stroke="shareIconColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 10V10.0063"
                  :stroke="shareIconColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 15V11.875"
                  :stroke="shareIconColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 15V13.125C15 12.7935 14.8683 12.4755 14.6339 12.2411C14.3995 12.0067 14.0815 11.875 13.75 11.875C13.4185 11.875 13.1005 12.0067 12.8661 12.2411C12.6317 12.4755 12.5 12.7935 12.5 13.125"
                  :stroke="shareIconColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_842_69">
                  <rect
                    x="5"
                    y="5"
                    width="15"
                    height="15"
                    rx="1.25"
                    :fill="shareIconColor"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "TitleWithDateAndShareIcons",
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

    let textColor = this.slice.primary.text_color
      ? this.slice.primary.text_color
      : "#353C47";

    let backgroundColor = this.slice.primary.background_color
      ? this.slice.primary.background_color
      : "transparent";

    let shareIconBackgroundColor = this.slice?.primary
      ?.share_icons_background_color
      ? this.slice.primary.share_icons_background_color
      : "#3DC5CC";

    let shareIconColor = this.slice?.primary?.share_icon_color
      ? this.slice.primary.share_icon_color
      : "#FFFFFF";

    let aligment = "justify-start";
    switch (this.slice.primary.title_alignment) {
      case "center":
        aligment = "justify-center";
        break;
      case "right":
        aligment = "justify-end";
        break;
    }

    return {
      marginTop,
      marginBottom,
      textColor,
      backgroundColor,
      shareIconBackgroundColor,
      shareIconColor,
      aligment,
    };
  },
  methods: {
    onFacebookShare() {
      //console.log('onFacebookShare');
      let url =
        "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href;

      //console.log('url ', url);
      //options = 'toolbar=0,status=0,resizable=1,width=626,height=436';
      //window.open(url, 'sharer', options);
      window.open(url, "_blank").focus();
    },
    onTwitterShare() {
      let url = "https://twitter.com/intent/tweet?text=" + window.location.href;

      window.open(url, "_blank").focus();
    },
    onLinkdinShare() {
      let url =
        "https://www.linkedin.com/sharing/share-offsite/?url=" +
        window.location.href;

      window.open(url, "_blank").focus();
    },
  },
};
</script>

<style scoped>
svg {
  width: 50px;
  height: 50px;
}
</style>

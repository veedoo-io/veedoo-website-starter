<template>
  <section
    class="w-full h-fit flex flex-col"
    :style="`padding-top:${marginTop}; padding-bottom: ${marginBottom}; background-color:${backgroundColor}`"
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
              <g clip-path="url(#clip0_842_65)">
                <path
                  d="M18.75 7.50626C18.125 7.81251 17.5125 7.93688 16.875 8.12501C16.1744 7.33438 15.1356 7.29063 14.1375 7.66438C13.1394 8.03813 12.4856 8.95188 12.5 10V10.625C10.4719 10.6769 8.66563 9.75313 7.5 8.12501C7.5 8.12501 4.88625 12.7706 10 15C8.83 15.7794 7.66312 16.305 6.25 16.25C8.3175 17.3769 10.5706 17.7644 12.5213 17.1981C14.7588 16.5481 16.5975 14.8713 17.3031 12.3594C17.5136 11.5954 17.6181 10.8062 17.6137 10.0138C17.6125 9.85813 18.5575 8.28126 18.75 7.50563V7.50626Z"
                  :stroke="shareIconColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
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

<style scoped></style>

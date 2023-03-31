import MyComponent from '../../../../slices/ImageSlice';
import SliceZone from 'vue-slicezone';

export default {
  title: 'slices/Image',
};

export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone,
  },
  methods: {
    resolve() {
      return MyComponent;
    },
  },
  data() {
    return {
      mock: {
        "variation": "default",
        "version": "sktwi1xtmkfgx8626",
        "items": [
          {}
        ],
        "primary": {
          "image": {
            "dimensions": {
              "width": 900,
              "height": 500
            },
            "alt": null,
            "copyright": null,
            "url": "https://images.unsplash.com/photo-1600861194802-a2b11076bc51"
          },
          "rounded": "radius 0",
          "margin_top": 100,
          "margin_right": 0,
          "margin_bottom": 100,
          "margin_left": 0,
          "background_color": "#ffffff",
          "wdith": 600,
          "height": 600,
          "alignment": "center"
        },
        "slice_type": "image"
      },
    };
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />',
});
_Default.storyName = '';

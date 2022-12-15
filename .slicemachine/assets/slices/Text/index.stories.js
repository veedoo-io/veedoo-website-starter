import MyComponent from '../../../../slices/Text';
import SliceZone from 'vue-slicezone';

export default {
  title: 'slices/Text',
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
        variation: 'default',
        version: 'sktwi1xtmkfgx8626',
        items: [{}],
        primary: {
          htmltag: 'p',
          text: 'Bring your ideas to life ',
          startimage: {
            dimensions: { width: 900, height: 500 },
            alt: null,
            copyright: null,
            url: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6',
          },
          end_image: {
            dimensions: { width: 900, height: 500 },
            alt: null,
            copyright: null,
            url: 'https://images.unsplash.com/photo-1600804931749-2da4ce26c869',
          },
          url: { link_type: 'Web', url: 'http://twitter.com' },
          background_color: null,
          text_color: '#0917ef',
          text_size: 65,
          margin_top: 49,
          margin_bottom: 66,
          margin_left: 52,
          margin_right: 65,
        },
        slice_type: 'text',
        id: '_Default',
      },
    };
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />',
});
_Default.storyName = '';

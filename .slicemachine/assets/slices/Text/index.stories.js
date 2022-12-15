import MyComponent from '../../../../slices/Text';
import SliceZone from 'vue-slicezone';

export default {
  title: 'slices/ATOMS/Text',
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
          htmltag: 'h2',
          text: 'particularly',
          startimage: {
            dimensions: { width: 900, height: 500 },
            alt: null,
            copyright: null,
            url: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2',
          },
          end_image: {
            dimensions: { width: 900, height: 500 },
            alt: null,
            copyright: null,
            url: 'https://images.unsplash.com/photo-1587614295999-6c1c13675117',
          },
          url: { link_type: 'Web', url: 'https://slicemachine.dev' },
          background_color: '#6a4a3c',
          text_color: '#22010c',
          text_size: 93,
          margin_top: 52,
          margin_bottom: 31,
          margin_left: 98,
          margin_right: 90,
        },
        slice_type: 'text',
        id: '_Default',
      },
    };
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />',
});
_Default.storyName = '';

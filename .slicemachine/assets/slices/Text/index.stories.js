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
          text: 'Bring your ideas to life',
          startimage: {
            dimensions: { width: 900, height: 500 },
            alt: null,
            copyright: null,
            url: 'https://images.unsplash.com/photo-1593642633279-1796119d5482',
          },
          end_image: {
            dimensions: { width: 900, height: 500 },
            alt: null,
            copyright: null,
            url: 'https://images.unsplash.com/photo-1587840171670-8b850147754e',
          },
          url: { link_type: 'Web', url: 'https://slicemachine.dev' },
          background_color: null,
          text_color: '#06316e',
          text_size: 42,
        },
        slice_type: 'text',
        id: '_Default',
      },
    };
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />',
});
_Default.storyName = '';

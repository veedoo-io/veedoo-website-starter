import MyComponent from '../../../../slices/CallToActionWithImage';
import SliceZone from 'vue-slicezone';

export default {
  title: 'slices/CallToActionWithImage',
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
          title: [
            { type: 'heading1', text: 'Alternate like a star 2', spans: [] },
          ],
          description: [
            {
              type: 'paragraph',
              text: 'A predesigned AlternateGrid component, that you can use to list your skills or features of a product.',
              spans: [],
            },
          ],
          backgroundcolor: '#E2EEFF',
          image: {
            dimensions: { width: 900, height: 500 },
            alt: null,
            copyright: null,
            url: 'https://images.unsplash.com/photo-1531771686035-25f47595c87a',
          },
          button_text: 'Click here',
          button_url: { link_type: 'Web', url: 'https://slicemachine.dev' },
          button_color: '#2F80ED',
        },
        slice_type: 'call_to_action_with_image',
        id: '_Default',
      },
    };
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />',
});
_Default.storyName = '';

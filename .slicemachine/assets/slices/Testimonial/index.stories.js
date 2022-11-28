import MyComponent from '../../../../slices/Testimonial';
import SliceZone from 'vue-slicezone';

export default {
  title: 'slices/Testimonial/Testimonial 1',
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
        items: [
          {
            full_name: 'design',
            job_position: 'kill',
            testimonial: [
              {
                type: 'paragraph',
                text: 'Deserunt consequat reprehenderit nisi fugiat reprehenderit proident proident anim minim ea aliqua veniam pariatur enim. Deserunt magna incididunt dolor consectetur ut. Eiusmod amet excepteur veniam.',
                spans: [],
              },
            ],
          },
        ],
        primary: {},
        slice_type: 'testimonial',
        id: '_Default',
      },
    };
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />',
});
_Default.storyName = '';

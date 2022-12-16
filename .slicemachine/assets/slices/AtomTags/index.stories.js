import MyComponent from '../../../../slices/AtomTags';
import SliceZone from 'vue-slicezone';

export default {
  title: 'slices/ATOMS/AtomTags',
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
            tag_label: 'Simplicity',
            tag_image: null,
          },
          {
            tag_label: 'Creativity',
            tag_image: {
              dimensions: {
                width: 900,
                height: 500,
              },
              alt: null,
              copyright: null,
              url: 'https://images.unsplash.com/photo-1606248897732-2c5ffe759c04',
            },
          },
          {
            tag_label: 'Responsibility',
            tag_image: null,
          },
          {
            tag_label: 'Impact',
            tag_image: null,
          },
          {
            tag_label: 'Curiosity',
            tag_image: null,
          },
          {
            tag_label: 'Open-minded',
            tag_image: null,
          },
        ],
        primary: {
          margin_top: 40,
          margin_right: 40,
          margin_bottom: 40,
          margin_left: 40,
        },
        slice_type: 'atom_tags',
      },
    };
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />',
});
_Default.storyName = '';

import MyComponent from '../../../../slices/AlternateGrid';
import SliceZone from 'vue-slicezone';

export default {
  title: 'slices/AlternateGrid',
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
            feature_image: {
              dimensions: {
                width: 900,
                height: 500,
              },
              alt: null,
              copyright: null,
              url: 'https://veedoo-website-starter.cdn.prismic.io/veedoo-website-starter/bca69568-e415-4eea-b892-5bc1cef7ab0d_monitor+icon.svg',
            },
            feature_title: 'Feature 1',
            feature_description: [
              {
                type: 'paragraph',
                text: 'This component has been matched by the SliceZone. Its model has been fetched from vue-essential-slices.',
                spans: [],
              },
            ],
          },
          {
            feature_image: {
              dimensions: {
                width: 900,
                height: 500,
              },
              alt: null,
              copyright: null,
              url: 'https://veedoo-website-starter.cdn.prismic.io/veedoo-website-starter/bca69568-e415-4eea-b892-5bc1cef7ab0d_monitor+icon.svg',
            },
            feature_title: 'Feature 2',
            feature_description: [
              {
                type: 'paragraph',
                text: 'This component has been matched by the SliceZone. Its model has been fetched from vue-essential-slices.',
                spans: [],
              },
            ],
          },
          {
            feature_image: {
              dimensions: {
                width: 900,
                height: 500,
              },
              alt: null,
              copyright: null,
              url: 'https://veedoo-website-starter.cdn.prismic.io/veedoo-website-starter/bca69568-e415-4eea-b892-5bc1cef7ab0d_monitor+icon.svg',
            },
            feature_title: 'Feature 3',
            feature_description: [
              {
                type: 'paragraph',
                text: 'This component has been matched by the SliceZone. Its model has been fetched from vue-essential-slices.',
                spans: [],
              },
            ],
          },
          {
            feature_image: {
              dimensions: {
                width: 900,
                height: 500,
              },
              alt: null,
              copyright: null,
              url: 'https://veedoo-website-starter.cdn.prismic.io/veedoo-website-starter/bca69568-e415-4eea-b892-5bc1cef7ab0d_monitor+icon.svg',
            },
            feature_title: 'Feature 4',
            feature_description: [
              {
                type: 'paragraph',
                text: 'This component has been matched by the SliceZone. Its model has been fetched from vue-essential-slices.',
                spans: [],
              },
            ],
          },
        ],
        primary: {
          title: 'Why we',
          description: [
            {
              type: 'paragraph',
              text: 'A predesigned AlternateGrid component, that you can use tolist your skills or features of a product.',
              spans: [],
            },
          ],
          background_color: null,
          text_color: null,
          secondary_text_color: null,
        },
        slice_type: 'alternate_grid',
      },
    };
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />',
});
_Default.storyName = '';

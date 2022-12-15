import MyComponent from '../../../../slices/Tags';
import SliceZone from 'vue-slicezone';

export default {
  title: 'slices/TAGS/Tags 1',
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
            tag_label: 'Web Development',
            tag_image: {
              dimensions: {
                width: 900,
                height: 500,
              },
              alt: null,
              copyright: null,
              url: 'https://veedoo-web.cdn.prismic.io/veedoo-web/38455de2-6cba-4630-9b4c-e5334c7f5051_clarity_code-line.svg',
            },
          },
          {
            tag_label: 'Mobile App Development',
            tag_image: {
              dimensions: {
                width: 900,
                height: 500,
              },
              alt: null,
              copyright: null,
              url: 'https://veedoo-web.cdn.prismic.io/veedoo-web/38455de2-6cba-4630-9b4c-e5334c7f5051_clarity_code-line.svg',
            },
          },
          {
            tag_label: 'Custom Software Development',
            tag_image: {
              dimensions: {
                width: 900,
                height: 500,
              },
              alt: null,
              copyright: null,
              url: 'https://veedoo-web.cdn.prismic.io/veedoo-web/38455de2-6cba-4630-9b4c-e5334c7f5051_clarity_code-line.svg',
            },
          },
          {
            tag_label: 'Agile Development',
            tag_image: {
              dimensions: {
                width: 900,
                height: 500,
              },
              alt: null,
              copyright: null,
              url: 'https://veedoo-web.cdn.prismic.io/veedoo-web/38455de2-6cba-4630-9b4c-e5334c7f5051_clarity_code-line.svg',
            },
          },
          {
            tag_label: 'UX Design',
            tag_image: {
              dimensions: {
                width: 900,
                height: 500,
              },
              alt: null,
              copyright: null,
              url: 'https://veedoo-web.cdn.prismic.io/veedoo-web/af4330bc-99ff-40a7-9c0f-be112948cee5_fluent_star-emphasis-32-regular.svg',
            },
          },
          {
            tag_label: 'Prismic',
            tag_image: {
              dimensions: {
                width: 900,
                height: 500,
              },
              alt: null,
              copyright: null,
              url: 'https://veedoo-web.cdn.prismic.io/veedoo-web/af4330bc-99ff-40a7-9c0f-be112948cee5_fluent_star-emphasis-32-regular.svg',
            },
          },
          {
            tag_label: 'Animation',
            tag_image: {
              dimensions: {
                width: 900,
                height: 500,
              },
              alt: null,
              copyright: null,
              url: 'https://veedoo-web.cdn.prismic.io/veedoo-web/af4330bc-99ff-40a7-9c0f-be112948cee5_fluent_star-emphasis-32-regular.svg',
            },
          },
          {
            tag_label: 'Software Support',
            tag_image: {
              dimensions: {
                width: 900,
                height: 500,
              },
              alt: null,
              copyright: null,
              url: 'https://veedoo-web.cdn.prismic.io/veedoo-web/81dc37ae-cda8-43d3-a927-a21671ee6904_monitor+icon.svg',
            },
          },
          {
            tag_label: 'Fibery',
            tag_image: {
              dimensions: {
                width: 900,
                height: 500,
              },
              alt: null,
              copyright: null,
              url: 'https://veedoo-web.cdn.prismic.io/veedoo-web/81dc37ae-cda8-43d3-a927-a21671ee6904_monitor+icon.svg',
            },
          },
          {
            tag_label: 'Software Project Management',
            tag_image: {
              dimensions: {
                width: 900,
                height: 500,
              },
              alt: null,
              copyright: null,
              url: 'https://veedoo-web.cdn.prismic.io/veedoo-web/81dc37ae-cda8-43d3-a927-a21671ee6904_monitor+icon.svg',
            },
          },
          {
            tag_label: 'Outsourcing',
            tag_image: {
              dimensions: {
                width: 900,
                height: 500,
              },
              alt: null,
              copyright: null,
              url: 'https://veedoo-web.cdn.prismic.io/veedoo-web/975ad220-a9d1-4a8f-b1bb-1fe0958dfd7f_user+icon.svg',
            },
          },
          {
            tag_label: 'Consultancy',
            tag_image: {
              dimensions: {
                width: 900,
                height: 500,
              },
              alt: null,
              copyright: null,
              url: 'https://veedoo-web.cdn.prismic.io/veedoo-web/975ad220-a9d1-4a8f-b1bb-1fe0958dfd7f_user+icon.svg',
            },
          },
        ],
        primary: {
          title:
            'As a full-service agency we offer software design, development, hosting and support services',
        },
        slice_type: 'tags',
      },
    };
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />',
});
_Default.storyName = '';

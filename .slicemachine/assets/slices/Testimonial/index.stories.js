import MyComponent from '../../../../slices/Testimonial';
import SliceZone from 'vue-slicezone';

export default {
  title: 'slices/SLIDERS/Testimonial',
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
            full_name: 'Jasmine Smith 1',
            job_position: 'CEO at ABCD',
            testimonial: [
              {
                type: 'paragraph',
                text: 'Ac faucibus orci id quis consectetur laoreet sed. Enim congue molestie nam odio pulvinar ac ultricies. Elementum ut pellentesque volutpat mi. ',
                spans: [],
              },
            ],
            picture: {
              dimensions: {
                width: 34,
                height: 33,
              },
              alt: null,
              copyright: null,
              url: 'https://veedoo-website-starter.cdn.prismic.io/veedoo-website-starter/795e220f-6a3b-4883-8c07-1fe68bd0f7f2_ukraine.svg',
            },
          },
          {
            full_name: 'Jasmine Smith 2',
            job_position: 'Product owner at ABCD',
            testimonial: [
              {
                type: 'paragraph',
                text: 'Ac faucibus orci id quis consectetur laoreet sed. Enim congue molestie nam odio pulvinar ac ultricies. Elementum ut pellentesque volutpat mi. Faucibus sit posuere nisi aenean ultrices. Suscipit malesuada aenean nullam et sit dapibus eget a eu. Nisl tortor arcu et. ',
                spans: [],
              },
            ],
            picture: {
              dimensions: {
                width: 183,
                height: 275,
              },
              alt: null,
              copyright: null,
              url: 'https://images.prismic.io/veedoo-website-starter/da2135ff-877d-434f-ab37-c2f66249aa38_download.jpeg?auto=compress,format',
            },
          },
          {
            full_name: 'Jasmine Smith 3',
            job_position: 'PM at ABCD',
            testimonial: [
              {
                type: 'paragraph',
                text: 'Ac faucibus orci id quis consectetur laoreet sed. Enim congue molestie nam odio pulvinar ac ultricies. Elementum ut pellentesque volutpat mi. Faucibus sit posuere nisi aenean ultrices. Suscipit malesuada aenean nullam et sit dapibus eget a eu. Nisl tortor arcu et. ',
                spans: [],
              },
            ],
            picture: {
              dimensions: {
                width: 183,
                height: 275,
              },
              alt: null,
              copyright: null,
              url: 'https://images.prismic.io/veedoo-website-starter/e14056cb-2c9a-41df-8c15-9f47965279a8_images.jpeg?auto=compress,format',
            },
          },
          {
            full_name: 'Jasmine Smith 4',
            job_position: 'Product owner at ABCD',
            testimonial: [
              {
                type: 'paragraph',
                text: 'Ac faucibus orci id quis consectetur laoreet sed. Enim congue molestie nam odio pulvinar ac ultricies. Elementum ut pellentesque volutpat mi. ',
                spans: [],
              },
            ],
            picture: {
              dimensions: {
                width: 56,
                height: 56,
              },
              alt: null,
              copyright: null,
              url: 'https://veedoo-website-starter.cdn.prismic.io/veedoo-website-starter/2039555a-f153-49f6-9ed3-2e59e34af5dd_Vision+Icon.svg',
            },
          },
        ],
        primary: {
          title: [
            {
              type: 'paragraph',
              text: 'What they say',
              spans: [],
            },
          ],
          title_color: null,
          slice_background_color: null,
        },
        slice_type: 'testimonial',
      },
    };
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />',
});
_Default.storyName = '';

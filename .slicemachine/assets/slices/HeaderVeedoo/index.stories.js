import MyComponent from '../../../../slices/HeaderVeedoo';
import SliceZone from 'vue-slicezone';

export default {
  title: 'Headers/Header Veedoo',
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
            menu_item_type: 'Get in touch!',
            menu_text: 'hello@veedoo.io',
            menu_link: {
              link_type: 'Web',
              url: 'mailto:hello@veedoo.io',
            },
          },
          {
            menu_item_type: 'Contacts',
            menu_text: 'LinkedIn',
            menu_link: {
              link_type: 'Web',
              url: 'https://www.linkedin.com/company/veedoo/',
            },
          },
          {
            menu_item_type: 'Menu',
            menu_text: 'Home',
            menu_link: {
              link_type: 'Web',
              url: 'https://slicemachine.dev',
            },
          },
          {
            menu_item_type: 'Menu',
            menu_text: 'Portals & Project Sites',
            menu_link: {
              link_type: 'Web',
              url: 'https://slicemachine.dev',
            },
          },
        ],
        primary: {
          logo: {
            dimensions: {
              width: 900,
              height: 500,
            },
            alt: 'Veedoo logo',
            copyright: null,
            url: 'https://images.prismic.io/veedoo-website-starter/703b1700-ecab-4f2e-aa23-5be8df20a7de_f4b8bf33-ee64-4e52-b077-6d69d033e415_veedoo-logo+%282%29.png?auto=compress,format',
          },
          main_link_text: 'Contacts',
          main_link_url: {
            link_type: 'Web',
            url: 'https://prismic.io',
          },
          background_color: null,
          text_color: null,
          menu_label: 'Menu',
        },
        slice_type: 'header_veedoo',
      },
    };
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />',
});
_Default.storyName = '';

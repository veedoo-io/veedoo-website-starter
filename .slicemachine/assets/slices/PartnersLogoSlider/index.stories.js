import MyComponent from '../../../../slices/PartnersLogoSlider';
import SliceZone from 'vue-slicezone';

export default {
  title: 'slices/PartnersLogoSlider',
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
            partner_logo: {
              dimensions: { width: 900, height: 500 },
              alt: null,
              copyright: null,
              url: 'https://images.prismic.io/veedoo-web/c34094d9-009a-4099-be70-31098c6b8240_Stripe+svg.png',
            },
          },
          {
            partner_logo: {
              dimensions: { width: 900, height: 500 },
              alt: null,
              copyright: null,
              url: 'https://images.prismic.io/veedoo-web/de58bb2a-c4e8-4359-820d-4303928ca9e9_Spotify+svg.png',
            },
            on_click_url: {
              type: 'Link',
              url: 'https://veedoo.io/',
            },
          },
          {
            partner_logo: {
              dimensions: { width: 900, height: 500 },
              alt: null,
              copyright: null,
              url: 'https://images.prismic.io/veedoo-web/8e07faa1-e799-4f75-9233-72a23483d0cf_Facebook+svg.png',
            },
            on_click_url: {
              type: 'Link',
              url: 'https://veedoo.io/',
            },
          },
          {
            partner_logo: {
              dimensions: { width: 900, height: 500 },
              alt: null,
              copyright: null,
              url: 'https://images.prismic.io/veedoo-web/fbafd58e-10f4-40dd-b2b0-bc1e770144ff_Pinterest+svg.png',
            },
            on_click_url: {
              type: 'Link',
              url: 'https://veedoo.io/',
            },
          }, //
          {
            partner_logo: {
              dimensions: { width: 900, height: 500 },
              alt: null,
              copyright: null,
              url: 'https://images.prismic.io/veedoo-web/de58bb2a-c4e8-4359-820d-4303928ca9e9_Spotify+svg.png',
            },
            on_click_url: {
              type: 'Link',
              url: 'https://veedoo.io/',
            },
          },
        ],
        primary: {},
        slice_type: 'partners_logo_slider',
        id: '_Default',
      },
    };
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />',
});
_Default.storyName = '';

export const _PartnersLogoSlider2 = () => ({
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
        variation: 'partnersLogoSlider2',
        version: 'sktwi1xtmkfgx8626',
        items: [
          {
            partner_logo: {
              dimensions: { width: 900, height: 500 },
              alt: null,
              copyright: null,
              url: 'https://images.prismic.io/veedoo-web/c34094d9-009a-4099-be70-31098c6b8240_Stripe+svg.png',
            },
          },
          {
            partner_logo: {
              dimensions: { width: 900, height: 500 },
              alt: null,
              copyright: null,
              url: 'https://images.prismic.io/veedoo-web/de58bb2a-c4e8-4359-820d-4303928ca9e9_Spotify+svg.png',
            },
            on_click_url: {
              type: 'Link',
              url: 'https://veedoo.io/',
            },
          },
          {
            partner_logo: {
              dimensions: { width: 900, height: 500 },
              alt: null,
              copyright: null,
              url: 'https://images.prismic.io/veedoo-web/8e07faa1-e799-4f75-9233-72a23483d0cf_Facebook+svg.png',
            },
            on_click_url: {
              type: 'Link',
              url: 'https://veedoo.io/',
            },
          },
          {
            partner_logo: {
              dimensions: { width: 900, height: 500 },
              alt: null,
              copyright: null,
              url: 'https://images.prismic.io/veedoo-web/fbafd58e-10f4-40dd-b2b0-bc1e770144ff_Pinterest+svg.png',
            },
            on_click_url: {
              type: 'Link',
              url: 'https://veedoo.io/',
            },
          }, //
          {
            partner_logo: {
              dimensions: { width: 900, height: 500 },
              alt: null,
              copyright: null,
              url: 'https://images.prismic.io/veedoo-web/de58bb2a-c4e8-4359-820d-4303928ca9e9_Spotify+svg.png',
            },
            on_click_url: {
              type: 'Link',
              url: 'https://veedoo.io/',
            },
          },
        ],
        primary: {},
        slice_type: 'partners_logo_slider',
        id: '_PartnersLogoSlider2',
      },
    };
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />',
});
_PartnersLogoSlider2.storyName = '';

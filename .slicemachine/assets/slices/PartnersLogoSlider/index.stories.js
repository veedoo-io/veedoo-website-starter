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
              url: 'https://images.unsplash.com/photo-1586952518485-11b180e92764',
            },
          },
          {
            partner_logo: {
              dimensions: { width: 900, height: 500 },
              alt: null,
              copyright: null,
              url: 'https://images.unsplash.com/photo-1600861194802-a2b11076bc51',
            },
          },
          {
            partner_logo: {
              dimensions: { width: 900, height: 500 },
              alt: null,
              copyright: null,
              url: 'https://images.unsplash.com/photo-1586952518485-11b180e92764',
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
              url: 'https://images.unsplash.com/photo-1600861194802-a2b11076bc51',
            },
          },
          {
            partner_logo: {
              dimensions: { width: 900, height: 500 },
              alt: null,
              copyright: null,
              url: 'https://images.unsplash.com/photo-1586952518485-11b180e92764',
            },
          },
          {
            partner_logo: {
              dimensions: { width: 900, height: 500 },
              alt: null,
              copyright: null,
              url: 'https://images.unsplash.com/photo-1600861194802-a2b11076bc51',
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

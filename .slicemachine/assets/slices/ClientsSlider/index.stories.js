import MyComponent from '../../../../slices/ClientsSlider';
import SliceZone from 'vue-slicezone';

export default {
  title: 'slices/SLIDERS/ClientsSlider',
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
            logo: {
              dimensions: {
                width: 269,
                height: 49,
              },
              alt: null,
              copyright: null,
              url: 'https://images.prismic.io/veedoo-website-starter/fe3ecf9d-6ada-4732-b823-d91eba3f50c1_3ff5e7c2-f30f-44e8-a2a7-d4ba1dd77346_logo-34d1160d.png?auto=compress,format',
            },
            url: {
              link_type: 'Web',
              url: 'https://euneighbourseast.eu/',
              target: '_blank',
            },
          },
          {
            logo: {
              dimensions: {
                width: 270,
                height: 101,
              },
              alt: null,
              copyright: null,
              url: 'https://images.prismic.io/veedoo-website-starter/ce30cb4d-e44f-432b-bbfe-9e738d7fef69_6a1c9da9-96b4-49cd-acda-02d3d782447b_eeas-logo-10th-aniversary_en_0.avif?auto=compress,format',
            },
            url: {
              link_type: 'Web',
              url: 'https://www.eeas.europa.eu/_en',
              target: '_blank',
            },
          },
          {
            logo: {
              dimensions: {
                width: 269,
                height: 105,
              },
              alt: null,
              copyright: null,
              url: 'https://images.prismic.io/veedoo-website-starter/3edcf0b9-129e-4f70-95ea-8b378c7fccd1_ed4b0088-80c3-4737-8831-d862545c7f30_image%2B3.avif?auto=compress,format',
            },
            url: {
              link_type: 'Web',
              url: 'https://www.ajiunit.com/',
              target: '_blank',
            },
          },
          {
            logo: {
              dimensions: {
                width: 269,
                height: 63,
              },
              alt: null,
              copyright: null,
              url: 'https://images.prismic.io/veedoo-website-starter/a22acbb1-5fcb-4a63-abad-dc584b4ac303_ba56508c-d36a-47b7-be22-8e02ad9b2374_Everyrun%2Blogo%2Bright%2Bonly%2Blines%2BGreen.avif?auto=compress,format',
            },
            url: {
              link_type: 'Web',
              url: 'https://everyrun.world/',
              target: '_blank',
            },
          },
          {
            logo: {
              dimensions: {
                width: 954,
                height: 320,
              },
              alt: null,
              copyright: null,
              url: 'https://images.prismic.io/veedoo-website-starter/db1c717c-1fdc-4c55-884a-0b0465a71445_c9c2da28-aa4e-47ef-84ee-9acdd5f53117_ACC.avif?auto=compress,format',
            },
            url: {
              link_type: 'Web',
              url: 'https://chamber.ua/',
              target: '_blank',
            },
          },
          {
            logo: {
              dimensions: {
                width: 266,
                height: 47,
              },
              alt: null,
              copyright: null,
              url: 'https://images.prismic.io/veedoo-website-starter/a431859d-4482-45f7-9112-988510c8ed39_0dc54ef3-fc14-460f-ae5f-d77ae0a6c933_lifelineukraine.avif?auto=compress,format',
            },
            url: {
              link_type: 'Web',
              url: 'https://lifelineukraine.com/',
              target: '_blank',
            },
          },
          {
            logo: {
              dimensions: {
                width: 394,
                height: 128,
              },
              alt: null,
              copyright: null,
              url: 'https://images.prismic.io/veedoo-website-starter/73c3a98f-3de5-485f-a100-42aa65d878ed_c9890e4d-a7ae-4858-9027-09110065774a_NDI.avif?auto=compress,format',
            },
            url: {
              link_type: 'Web',
              url: 'https://www.ndi.org/eurasia/ukraine',
              target: '_blank',
            },
          },
          {
            logo: {
              dimensions: {
                width: 232,
                height: 120,
              },
              alt: null,
              copyright: null,
              url: 'https://images.prismic.io/veedoo-website-starter/7e964d88-4830-4b71-8a2e-01003f46a758_6b58cc90-0da1-4563-9659-c4ee53b43ece_ERTICO.avif?auto=compress,format',
            },
            url: {
              link_type: 'Web',
              url: 'https://ertico.com/',
              target: '_blank',
            },
          },
        ],

        primary: {
          title: 'Meet our clienst',
          title_image: {
            dimensions: {
              width: 56,
              height: 56,
            },
            alt: null,
            copyright: null,
            url: 'https://veedoo-website-starter.cdn.prismic.io/veedoo-website-starter/1de582de-2701-46a7-9b79-ad68806315a3_Title+icon.svg',
          },
          description: [
            {
              type: 'paragraph',
              text: 'Typically, we work for business groups, media and membership\norganizations and government funded projects which need to collect,\norganise and display data from multiple sources to large online\naudiences. ',
              spans: [],
            },
          ],
          background_color: null,
          primary_text_color: '#353c47',
          description_text_color: '#48525f',
        },
        slice_type: 'clients_slider',
      },
    };
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />',
});
_Default.storyName = '';
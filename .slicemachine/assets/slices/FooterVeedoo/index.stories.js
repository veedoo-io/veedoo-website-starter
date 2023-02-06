import MyComponent from '../../../../slices/FooterVeedoo';
import SliceZone from 'vue-slicezone';

export default {
  title: 'Footers/FooterVeedoo',
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
        "variation": "default",
        "version": "sktwi1xtmkfgx8626",
        "items": [
          {
            "footer_flag": {
              "dimensions": {
                "width": 34,
                "height": 33
              },
              "alt": "ukraine",
              "copyright": null,
              "url": "https://veedoo-website-starter.cdn.prismic.io/veedoo-website-starter/795e220f-6a3b-4883-8c07-1fe68bd0f7f2_ukraine.svg"
            }
          },
          {
            "footer_flag": {
              "dimensions": {
                "width": 34,
                "height": 33
              },
              "alt": "united kingdom",
              "copyright": null,
              "url": "https://veedoo-website-starter.cdn.prismic.io/veedoo-website-starter/66c258be-7109-4844-9fce-9e2740103f53_united-kingdom.svg"
            }
          },
          {
            "footer_flag": {
              "dimensions": {
                "width": 34,
                "height": 33
              },
              "alt": "european union",
              "copyright": null,
              "url": "https://veedoo-website-starter.cdn.prismic.io/veedoo-website-starter/3b6c48e7-55f2-4977-a1c5-93a8a460d804_european-union.svg"
            }
          },
          {
            "footer_flag": {
              "dimensions": {
                "width": 34,
                "height": 33
              },
              "alt": "estonia",
              "copyright": null,
              "url": "https://veedoo-website-starter.cdn.prismic.io/veedoo-website-starter/bfd85b38-d3b1-4ee8-9fe0-df4a22b84e1b_estonia.svg"
            }
          }
        ],
        "primary": {
          "footer_logo": {
            "dimensions": {
              "width": 192,
              "height": 80
            },
            "alt": "Veedoo logo",
            "copyright": null,
            "url": "https://images.prismic.io/veedoo-website-starter/3abdd01e-d606-4a76-b847-c8c9e367fa1e_541685a5-d448-46ee-8037-88b965a20c20_footer-logo.png?auto=compress,format"
          },
          "footer_text": [
            {
              "type": "paragraph",
              "text": "@2022 Veedoo. All Rights Reserved",
              "spans": []
            }
          ],
          "background_color": null,
          "text_color":null
        },
        "slice_type": "footer_veedoo"
      }
    };
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />',
});
_Default.storyName = '';

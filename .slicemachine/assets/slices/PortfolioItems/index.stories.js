import MyComponent from '../../../../slices/PortfolioItems';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/PortfolioItems'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {
        "variation": "default",
        "version": "sktwi1xtmkfgx8626",
        "items": [
          {
            "image": {
              "dimensions": {
                "width": 647,
                "height": 400
              },
              "alt": null,
              "copyright": null,
              "url": "https://images.prismic.io/veedoo-website-starter/b53e948f-7c98-4c26-ba58-4e3316e6ff3c_a09d3998-6a7e-4827-8b07-5a08ec80261a_ACC.png?auto=compress,format"
            },
            "description": [
              {
                "type": "paragraph",
                "text": "American Chamber of Commerce The American Chamber of Commerce needed a modern, engaging website that was both visually impressive but also informative, usable and deeply integrated with the Customer Relationship Management software. Click to see the results!",
                "spans": []
              }
            ],
            "url_label": "Visit website",
            "url": {
              "link_type": "Web",
              "url": "https://chamber.ua/"
            },
            "background_color": "#f8e0e0",
            "text_color": null
          },
          {
            "image": {
              "dimensions": {
                "width": 647,
                "height": 400
              },
              "alt": null,
              "copyright": null,
              "url": "https://images.prismic.io/veedoo-website-starter/81218471-ad10-4969-af35-1302e8b68d27_65783e2f-3e0e-4019-be4e-988f7d6e2a53_Lifeline%2BUkraine.jpg?auto=compress,format"
            },
            "description": [
              {
                "type": "paragraph",
                "text": "Lifeline Ukraine As a donor-funded project and Ukraine's only national suicide prevention hotline - Lifeline Ukraine needed a website that engages it's various stakeholders, and a social media campaign that raises the profile of the organisation. Veedoo delivered both and enjoy a long-running relationship to support the work of this excellent and much-needed organisation. Visit website",
                "spans": []
              }
            ],
            "url_label": null,
            "url": {
              "link_type": "Web",
              "url": "https://lifelineukraine.com/"
            },
            "background_color": "#d7e8fc",
            "text_color": null
          },
          {
            "image": {
              "dimensions": {
                "width": 646,
                "height": 400
              },
              "alt": null,
              "copyright": null,
              "url": "https://images.prismic.io/veedoo-website-starter/fafd61d4-f971-4dd2-8296-f1f2cbe7ac8c_3d5c5af8-84d1-4e6a-9102-9b26a95fccf5_Everyrun.jpg?auto=compress,format"
            },
            "description": [
              {
                "type": "paragraph",
                "text": "Lifeline Ukraine needed a website that engages it's various stakeholders, and a social media campaign that raises the profile of the organisation. Veedoo deli",
                "spans": []
              }
            ],
            "url_label": "Contact us",
            "url": {
              "id": "Y5hpXhEAACEAVrIU",
              "type": "page",
              "tags": [],
              "lang": "en-us",
              "slug": "contacts",
              "first_publication_date": "2022-12-13T12:00:33+0000",
              "last_publication_date": "2022-12-13T17:31:21+0000",
              "uid": "contacts",
              "url": "/contacts",
              "link_type": "Document",
              "isBroken": false
            },
            "background_color": "#ffffff",
            "text_color": "#fc0000"
          },
          {
            "image": {
              "dimensions": {
                "width": 647,
                "height": 400
              },
              "alt": null,
              "copyright": null,
              "url": "https://images.prismic.io/veedoo-website-starter/ae4a23f3-8b5f-4c2e-bfb1-cc7d7b976e44_76f04af1-5a54-425a-ba01-e7c919dbe6e7_Ertico.jpg?auto=compress,format"
            },
            "description": [
              {
                "type": "paragraph",
                "text": "American Chamber of Commerce The American Chamber of Commerce needed a modern, engaging website that was both visually impressive but also informative, usable and deeply integrated with the Customer Relationship Management software. Click to see the results!",
                "spans": []
              }
            ],
            "url_label": "Visit",
            "url": {
              "link_type": "Web",
              "url": "https://ertico.com/"
            },
            "background_color": "#ffffff",
            "text_color": null
          }
        ],
        "primary": {
          "background_color": "#ffffff"
        },
        "slice_type": "portfolio_items"
      }
     }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''

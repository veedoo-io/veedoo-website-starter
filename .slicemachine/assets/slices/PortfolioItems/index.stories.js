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
                        "text": "The American Chamber of Commerce needed a modern, engaging website that was both visually impressive but also informative, usable and deeply integrated with the Customer Relationship Management software. Click to see the results!",
                        "spans": []
                    }
                ],
                "url_label": "Visit chamber.ua",
                "url": {
                    "link_type": "Web",
                    "url": "https://chamber.ua/"
                },
                "background_color": null,
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
                        "text": "As a donor-funded project and Ukraine's only national suicide prevention hotline - Lifeline Ukraine needed a website that engages it's various stakeholders, and a social media campaign that raises the profile of the organisation. Veedoo delivered both and enjoy a long-running relationship to support the work of this excellent and much-needed organisation.",
                        "spans": []
                    }
                ],
                "url_label": "Visit lifelineukraine.com",
                "url": {
                    "link_type": "Web",
                    "url": "https://lifelineukraine.com"
                },
                "background_color": null,
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
                        "text": "Everyrun is a large, custom built race management platform to help runners and race organisers. Designed and developed by Veedoo, the platform is packed with features to make running both easy and fun, and comes complete with a custom Android and iOS mobile application.",
                        "spans": []
                    }
                ],
                "url_label": "Visit everyrun.world",
                "url": {
                    "link_type": "Web",
                    "url": "https://everyrun.world"
                },
                "background_color": null,
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
                    "url": "https://images.prismic.io/veedoo-website-starter/ae4a23f3-8b5f-4c2e-bfb1-cc7d7b976e44_76f04af1-5a54-425a-ba01-e7c919dbe6e7_Ertico.jpg?auto=compress,format"
                },
                "description": [
                    {
                        "type": "paragraph",
                        "text": "Veedoo Project: ERTICO",
                        "spans": []
                    },
                    {
                        "type": "paragraph",
                        "text": "Veedoo has supported ERTICO - ITS Europe for many years, delivering everything from large corporate sites, to smaller project sites in support of their EU funded research work. ERTICO projects are often a collaboration between teams and countries, so delivering high quality results requires a good understanding of these dynamics. ",
                        "spans": []
                    }
                ],
                "url_label": "Visit ERTICO.com",
                "url": {
                    "link_type": "Web",
                    "url": "https://ertico.com"
                },
                "background_color": null,
                "text_color": null,

            }
        ],
        "primary": {
            "background_color": null,
            "margin_top":56,
            "margin_bottom":53

        },
        "id": "portfolio_items$9674b851-7b95-49ec-aa2d-4ba4ce89afaf",
        "slice_type": "portfolio_items",
        "slice_label": null
    }}
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''

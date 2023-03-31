import MyComponent from '../../../../slices/ContactUsGrid';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ContactUsGrid'
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
                "social_media_image": {
                    "dimensions": {
                        "width": 24,
                        "height": 24
                    },
                    "alt": null,
                    "copyright": null,
                    "url": "https://veedoo-website-starter.cdn.prismic.io/veedoo-website-starter/5ed259f7-5b2b-4afb-94c2-bdfb5aee4564_facebook.svg"
                },
                "social_media_url": {
                    "link_type": "Web",
                    "url": "https://www.linkedin.com/",
                    "target": "_blank"
                }
            },
            {
                "social_media_image": {
                    "dimensions": {
                        "width": 24,
                        "height": 24
                    },
                    "alt": null,
                    "copyright": null,
                    "url": "https://veedoo-website-starter.cdn.prismic.io/veedoo-website-starter/0bdae0f7-f9bc-4ec3-8429-bea35afe7fcd_linkedin.svg"
                },
                "social_media_url": {
                    "link_type": "Web",
                    "url": "https://www.etsy.com/listing/858844567/pet-portrait-custom-and-personalized-pet?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=Custom&ref=sr_gallery-1-30&frs=1&pop=1&sts=1&organic_search_click=1",
                    "target": "_blank"
                }
            }
        ],
        "primary": {
            "center": false,
            "title": [
                {
                    "type": "heading1",
                    "text": "Let's talk :)",
                    "spans": [
                        {
                            "start": 0,
                            "end": 13,
                            "type": "strong"
                        }
                    ]
                }
            ],
            "title_image": {},
            "description": [
                {
                    "type": "heading2",
                    "text": "Contact Us ",
                    "spans": []
                }
            ],
            "email_title": [
                {
                    "type": "heading4",
                    "text": "Oxford, UK ",
                    "spans": [
                        {
                            "start": 0,
                            "end": 11,
                            "type": "strong"
                        }
                    ]
                }
            ],
            "email_title_image": {
                "dimensions": {
                    "width": 34,
                    "height": 33
                },
                "alt": null,
                "copyright": null,
                "url": "https://veedoo-website-starter.cdn.prismic.io/veedoo-website-starter/66c258be-7109-4844-9fce-9e2740103f53_united-kingdom.svg"
            },
            "email_content": [
                {
                    "type": "paragraph",
                    "text": "2A Stanley Road\nOxford\nOX4 1QZ\n+44 7887351718",
                    "spans": []
                }
            ],
            "second_section_title": "Kyiv, Ukraine",
            "second_section_title_image": {
                "dimensions": {
                    "width": 34,
                    "height": 33
                },
                "alt": null,
                "copyright": null,
                "url": "https://veedoo-website-starter.cdn.prismic.io/veedoo-website-starter/795e220f-6a3b-4883-8c07-1fe68bd0f7f2_ukraine.svg"
            },
            "second_section_content": [
                {
                    "type": "paragraph",
                    "text": "40v Verkhnii Val\nPodil\nKyiv\n+380 63 6195164",
                    "spans": []
                }
            ],
            "third_section_title": "Email Address",
            "third_section_title_image": {
                "dimensions": {
                    "width": 60,
                    "height": 60
                },
                "alt": null,
                "copyright": null,
                "url": "https://veedoo-website-starter.cdn.prismic.io/veedoo-website-starter/0574031c-1fa6-4e6a-8110-4c51f4f0c74d_Contact+us+form+mail+icon.svg"
            },
            "third_section_content": [
                {
                    "type": "paragraph",
                    "text": "hello@veedoo.io",
                    "spans": [
                        {
                            "start": 0,
                            "end": 15,
                            "type": "hyperlink",
                            "data": {
                                "link_type": "Web",
                                "url": "mailto:hello@veedoo.io",
                                "target": "_blank"
                            }
                        }
                    ]
                }
            ],
            "social_media_title": [
                {
                    "type": "paragraph",
                    "text": "Social Media ",
                    "spans": [
                        {
                            "start": 0,
                            "end": 13,
                            "type": "strong"
                        }
                    ]
                }
            ],
            "social_media_title_image": {
                "dimensions": {
                    "width": 48,
                    "height": 48
                },
                "alt": null,
                "copyright": null,
                "url": "https://veedoo-website-starter.cdn.prismic.io/veedoo-website-starter/4d89ddc6-ce32-4499-be49-c6c93aff370b_Homepage+Call+to+action+text+Call+to+action+icon.svg"
            },
            "background_color": null,
            "text_color": "#353c47"
        },
        "id": "contact_info$8f35226e-ccdd-47fc-bbe6-a3207fac4e3f",
        "slice_type": "contact_info",
        "slice_label": null
    }}
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''

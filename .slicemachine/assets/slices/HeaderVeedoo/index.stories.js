import MyComponent from '../../../../slices/HeaderVeedoo';
import SliceZone from 'vue-slicezone'

export default {
  title: 'Headers/HeaderVeedoo'
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
                "menu_item_type": "Menu",
                "menu_text": "Home",
                "menu_link": {
                    "link_type": "Any"
                }
            },
            {
                "menu_item_type": "Menu",
                "menu_text": "Portals & Project Sites",
                "menu_link": {
                    "id": "ZAcbThAAACkAUQ5n",
                    "type": "page",
                    "tags": [],
                    "lang": "en-us",
                    "slug": "portals--project-sites",
                    "first_publication_date": "2023-03-07T11:17:29+0000",
                    "last_publication_date": "2023-03-31T00:40:01+0000",
                    "uid": "projects-portals",
                    "url": "/projects-portals",
                    "link_type": "Document",
                    "isBroken": false
                }
            },
            {
                "menu_item_type": "Contacts",
                "menu_text": "LinkedIn",
                "menu_link": {
                    "link_type": "Any"
                }
            },
            {
                "menu_item_type": "Contacts",
                "menu_text": "Facebook",
                "menu_link": {
                    "link_type": "Any"
                }
            },
            {
                "menu_item_type": "Get in touch!",
                "menu_text": "hello@veedoo.io",
                "menu_link": {
                    "link_type": "Any"
                }
            }
        ],
        "primary": {
            "logo": {
                "dimensions": {
                    "width": 192,
                    "height": 80
                },
                "alt": null,
                "copyright": null,
                "url": "https://images.prismic.io/veedoo-website-starter/703b1700-ecab-4f2e-aa23-5be8df20a7de_f4b8bf33-ee64-4e52-b077-6d69d033e415_veedoo-logo+%282%29.png?auto=compress,format"
            },
            "main_link_text": "Contacts",
            "main_link_url": {
                "link_type": "Any"
            },
            "background_color": null,
            "text_color": null,
            "menu_label": "Contacts"
        },
        "id": "header_veedoo$1edb5bf0-eb7f-4866-9ab5-bd6c66f4dbb3",
        "slice_type": "header_veedoo",
        "slice_label": null
    } }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''

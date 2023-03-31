import MyComponent from '../../../../slices/PostCarousel';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/PostCarousel'
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
            "tags": {
              "id": "mock_document_id",
              "link_type": "Document",
              "type": "mock",
              "tags": [],
              "lang": "en-us",
              "slug": null,
              "first_publication_date": "1970-01-01T00:00:01+0000",
              "last_publication_date": "1970-01-01T01:00:00+0000"
            },
            "categories": {
              "id": "mock_document_id",
              "link_type": "Document",
              "type": "mock",
              "tags": [],
              "lang": "en-us",
              "slug": null,
              "first_publication_date": "1970-01-01T00:00:01+0000",
              "last_publication_date": "1970-01-01T01:00:00+0000"
            }
          }
        ],
        "primary": {
          "subtitle": [
            {
              "type": "paragraph",
              "text": "The Carousel",
              "spans": []
            }
          ],
          "title": [
            {
              "type": "paragraph",
              "text": "It’s more than a budget manager.",
              "spans": []
            }
          ],
          "description": [
            {
              "type": "paragraph",
              "text": "This carousel moves by one card at a time when the next and previous arrows are clicked.",
              "spans": []
            }
          ],
          "text_color": "#000000",
          "background_color": "#ffffff"
        },
        "slice_type": "post_carousel"
      }   }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''

import MyComponent from '../../../../slices/CtaWithBackgroundImage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CtaWithBackgroundImage'
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
          {}
        ],
        "primary": {
          "title": [
            {
              "type": "paragraph",
              "text": "Alternate like a star",
              "spans": []
            }
          ],
          "description": [
            {
              "type": "paragraph",
              "text": "A predesigned AlternateGrid component, that you can use to list your skills or features of a product.",
              "spans": []
            }
          ],
          "call_to_action": "Click here",
          "button_url": {
            "link_type": "Web",
            "url": "http://google.com"
          },
          "background_image": {
            "dimensions": {
              "width": 900,
              "height": 500
            },
            "alt": null,
            "copyright": null,
            "url": "https://images.unsplash.com/photo-1571126770897-2d612d1f7b89"
          },
          "text_color": "#19222E",
          "button_text_color": "#FFFFFF",
          "button_background_color": "#2D7DF7"
        },
        "slice_type": "cta_with_background_image"
      }}
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''

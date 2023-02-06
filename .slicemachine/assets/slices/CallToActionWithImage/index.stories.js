import MyComponent from '../../../../slices/CallToActionWithImage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CallToActionWithImage'
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
        "items": [],
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
              },
              {
                  "type": "image",
                  "url": "https://veedoo-website-starter.cdn.prismic.io/veedoo-website-starter/d7a51668-cf62-4d05-bfba-98d7fee974d9_task_alt.svg",
                  "alt": null,
                  "copyright": null,
                  "dimensions": {
                      "width": 100,
                      "height": 100
                  }
              }
          ],
          "backgroundcolor": null,
          "image": {
              "dimensions": {
                  "width": 647,
                  "height": 400
              },
              "alt": null,
              "copyright": null,
              "url": "https://images.prismic.io/veedoo-website-starter/81218471-ad10-4969-af35-1302e8b68d27_65783e2f-3e0e-4019-be4e-988f7d6e2a53_Lifeline%2BUkraine.jpg?auto=compress,format"
          },
          "button_text": "Click here",
          "button_url": {
              "link_type": "Web",
              "url": "https://www.figma.com",
              "target": "_blank"
          },
          "button_color": "#2f80ed",
          "button_text_color": "#ffffff"
      },
        "slice_type": "call_to_action_with_image"
      } }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''

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
        "variation":"default",
        "version":"sktwi1xtmkfgx8626",
        "items":[{}],
        "primary":{
          "image": {
            "dimensions": {
                "width": 647,
                "height": 400
            },
            "alt": null,
            "copyright": null,
            "url": "https://images.prismic.io/veedoo-website-starter/81218471-ad10-4969-af35-1302e8b68d27_65783e2f-3e0e-4019-be4e-988f7d6e2a53_Lifeline%2BUkraine.jpg?auto=compress,format"
        },
        "title": [
          {
              "type": "paragraph",
              "text": "Alternate like a star",
              "spans": []
          }
      ],
          "description":[{"type":"paragraph","text":"Laboris irure occaecat labore dolore ipsum dolore enim cupidatat excepteur culpa. Culpa occaecat voluptate mollit est enim Lorem commodo sint esse. Excepteur adipisicing ad minim.","spans":[]}],
          "backgroundcolor": null,
          "button_text":"Click here",
          "button_url":{"link_type":"Web","url":"https://prismic.io"},
          "button_color":"#2f80ed",
          "button_text_color":"#ffffff",
          "margin_top":91,
          "margin_right":7,
          "margin_bottom":57,
          "margin_left":1
        },
          "id":"_Default",
          "slice_type":"call_to_action_with_image"
        }
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''

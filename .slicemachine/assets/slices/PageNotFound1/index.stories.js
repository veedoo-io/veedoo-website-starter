import MyComponent from '../../../../slices/PageNotFound1';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/PageNotFound1'
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
              "text": "Page not found",
              "spans": []
            }
          ],
          "title_color": "#333",
          "description": [
            {
              "type": "paragraph",
              "text": "Lorem ipsum dolor sit amet consectetur. Dolor eget duis ornare nam. Turpis suspendisse duis pharetra turpis in mattis nisi turpis.",
              "spans": []
            }
          ],
          "message_background_color": "#000000",
          "background_color": "#FFFFFF",
          "go_home_button_text": "Go Home",
          "go_home_button_text_color": "#FFFFFF",
          "go_home_button_background_color": "#2F80ED",
          "error_code_color": "#000000"
        },
        "slice_type": "page_not_found1"
      } }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''

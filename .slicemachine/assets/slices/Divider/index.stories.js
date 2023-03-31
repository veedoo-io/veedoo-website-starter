import MyComponent from '../../../../slices/Divider';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Divider'
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
          "type": "solid",
          "color": "#333",
          "divider_height": 1,
          "margin_top": 46,
          "margin_right": 0,
          "margin_bottom": 46,
          "margin_left": 0,
          "rounded": false
        },
        "slice_type": "divider"
      }, }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''

import MyComponent from '../../../../slices/HeroVeedoo';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HeroVeedoo'
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
        "items": [{}],
        "primary": {
          "title": "WEBSITE & SOFTWARE DEVELOPMENT",
          "intro": "Bring your ideas to life 🚀",
          "background_color": null,
          "intro_text_color": null,
          "title_text_color": null,
          "title_animation_color": null,
          "margin_top":100,
          "margin_bottom":10
        },
        "slice_type": "hero_veedoo"
      } }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''

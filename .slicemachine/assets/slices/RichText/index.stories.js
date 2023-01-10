import MyComponent from '../../../../slices/RichText';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/RichText'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"rich_text":[{"type":"paragraph","text":"Nisi proident proident elit elit sint aute ipsum ipsum amet quis culpa dolore mollit esse. Est esse elit eu aliquip occaecat aliquip ullamco labore ullamco exercitation adipisicing velit excepteur.","spans":[]}],"text_color":"#4f12d6","background_color":"#f2417e","margin_top":84,"margin_right":35,"margin_bottom":9,"margin_left":83},"slice_type":"rich_text","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''

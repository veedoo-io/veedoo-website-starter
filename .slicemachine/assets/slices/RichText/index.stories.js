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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"rich_text":[{"type":"paragraph","text":"Labore quis id aute nostrud reprehenderit ex consectetur cillum sit exercitation commodo adipisicing voluptate voluptate. Est exercitation cupidatat in ipsum laboris sunt ut consequat pariatur mollit magna.","spans":[]}],"text_color":"#701cef","background_color":"#30fec6","margin_top":85,"margin_right":35,"margin_bottom":4,"margin_left":37},"slice_type":"rich_text","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
